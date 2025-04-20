"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";

const MOVEMENT_DAMPING = 1400;

export function Globe({
  className,
  config,
}: {
  className?: string;
  config: {
    width: number;
    height: number;
    onRender?: () => void;
    devicePixelRatio?: number;
    phi?: number;
    theta?: number;
    dark?: number;
    diffuse?: number;
    mapSamples?: number;
    mapBrightness?: number;
    baseColor?: [number, number, number];
    markerColor?: [number, number, number];
    glowColor?: [number, number, number];
    markers?: { location: [number, number]; size: number }[];
  };
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  let phi = config?.phi ?? 0;

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    onResize();
    window.addEventListener("resize", onResize);

    const isMobile = window.innerWidth < 768;
    const deviceConfig = {
      ...config,
      width: isMobile ? 400 : width * 2,
      height: isMobile ? 400 : width * 2,
      devicePixelRatio: isMobile ? 1 : 2,
      mapSamples: isMobile ? 8000 : config.mapSamples ?? 16000,
    };

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      try {
        const cleanedConfig = Object.fromEntries(
          Object.entries(deviceConfig).filter(([_, v]) => v !== undefined)
        ) as any;
        
        createGlobe(canvas, {
          ...cleanedConfig,
          onRender: (state: any) => {
            if (!pointerInteracting.current) phi += 0.005;
            state.phi = phi + rs.get();
            state.width = cleanedConfig.width;
            state.height = cleanedConfig.height;
          },
        });
        

        setTimeout(() => {
          canvas.style.opacity = "1";
        }, 0);
      } catch (err) {
        console.error("Globe rendering failed:", err);
      }
    }

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchStart={(e) => {
          if (e.touches[0]) {
            pointerInteracting.current = e.touches[0].clientX;
            updatePointerInteraction(e.touches[0].clientX);
          }
        }}
        onTouchMove={(e) => {
          if (e.touches[0]) updateMovement(e.touches[0].clientX);
        }}
      />
    </div>
  );
}
