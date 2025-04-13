"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animationSpeed = speed === "fast" ? 0.15 : 0.05;
  const defaultColors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const waves: {
      color: string;
      length: number;
      amplitude: number;
      frequency: number;
      offset: number;
      speed: number;
      y: number;
    }[] = [];
    const colorsToUse = colors || defaultColors;
    const waveWidthToUse = waveWidth || 50;

    for (let i = 0; i < colorsToUse.length; i++) {
      waves.push({
        color: colorsToUse[i],
        length: canvas.width / waveWidthToUse,
        amplitude: Math.random() * 10 + 10,
        frequency: Math.random() * 0.01 + 0.01,
        offset: Math.random() * canvas.width,
        speed: animationSpeed,
        y: canvas.height / 2 + (i - colorsToUse.length / 2) * 15,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (backgroundFill) {
        ctx.fillStyle = backgroundFill;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      waves.forEach((wave) => {
        ctx.fillStyle = wave.color;
        ctx.globalAlpha = waveOpacity;
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x++) {
          const y =
            wave.y +
            Math.sin(x * wave.frequency + wave.offset + time * wave.speed) *
              wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      });

      time++;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, waveWidth, backgroundFill, waveOpacity, speed]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ filter: `blur(${blur}px)` }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}