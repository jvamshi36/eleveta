"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef?: React.RefObject<HTMLElement>;
  fromRef?: React.RefObject<HTMLElement>;
  toRef?: React.RefObject<HTMLElement>;
  duration?: number;
  delay?: number;
  size?: number;
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  duration = 5,
  delay = 0,
  size = 100,
}: AnimatedBeamProps) {
  const [isVisible, setIsVisible] = useState(false);
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef?.current || !fromRef?.current || !toRef?.current) {
      return;
    }

    const container = containerRef.current;
    const from = fromRef.current;
    const to = toRef.current;

    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const fromX = fromRect.left + fromRect.width / 2 - containerRect.left;
    const fromY = fromRect.top + fromRect.height / 2 - containerRect.top;
    const toX = toRect.left + toRect.width / 2 - containerRect.left;
    const toY = toRect.top + toRect.height / 2 - containerRect.top;

    const distance = Math.sqrt(
      Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2)
    );
    const angle = Math.atan2(toY - fromY, toX - fromX);

    if (beamRef.current) {
      beamRef.current.style.width = `${distance}px`;
      beamRef.current.style.left = `${fromX}px`;
      beamRef.current.style.top = `${fromY}px`;
      beamRef.current.style.transform = `rotate(${angle}rad)`;
      beamRef.current.style.transformOrigin = "0 50%";
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [containerRef, fromRef, toRef, delay]);

  return (
    <div
      ref={beamRef}
      className={cn(
        "pointer-events-none absolute h-px bg-gradient-to-r opacity-0 transition-opacity",
        isVisible && "opacity-100",
        className
      )}
      style={{
        height: `${size}px`,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    />
  );
}