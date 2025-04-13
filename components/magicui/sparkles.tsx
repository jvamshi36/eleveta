"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SparkleType {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

export function SparklesCore({
  id,
  className,
  background,
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = ["#FFC700"],
  particleDensity = 600,
  particleOpacity = 0.5,
  renderParticle,
  ...props
}: {
  id: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string[];
  particleDensity?: number;
  particleOpacity?: number;
  renderParticle?: (props: { size: number; color: string; id: string }) => React.ReactNode;
  [key: string]: any;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const sparklesArray: SparkleType[] = [];
    const { width, height } = dimensions;
    const sparkleCount = Math.min(Math.max(Math.floor((width * height) / particleDensity), 50), 500);

    for (let i = 0; i < sparkleCount; i++) {
      sparklesArray.push({
        id: `sparkle-${id}-${i}`,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize - minSize) + minSize,
        color: particleColor[Math.floor(Math.random() * particleColor.length)],
      });
    }

    setSparkles(sparklesArray);
  }, [dimensions, id, maxSize, minSize, particleColor, particleDensity]);

  useEffect(() => {
    if (!canvasRef.current || sparkles.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (background) {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      sparkles.forEach((sparkle) => {
        const x = sparkle.x + Math.sin(angle) * 1.5;
        const y = sparkle.y + Math.cos(angle) * 1.5;
        const size = sparkle.size;
        const color = sparkle.color;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.globalAlpha = particleOpacity;
        ctx.fill();
      });

      angle += 0.01 * speed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [sparkles, background, speed, particleOpacity]);

  return (
    <div className={cn("h-full w-full", className)}>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="h-full w-full"
        {...props}
      />
      {renderParticle && (
        <div className="pointer-events-none absolute inset-0 flex h-full w-full flex-wrap">
          {sparkles.map((sparkle) => (
            <span
              key={sparkle.id}
              className="absolute block"
              style={{
                top: sparkle.y,
                left: sparkle.x,
                width: sparkle.size,
                height: sparkle.size,
                transform: "translate(-50%, -50%)",
              }}
            >
              {renderParticle({
                size: sparkle.size,
                color: sparkle.color,
                id: sparkle.id,
              })}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}