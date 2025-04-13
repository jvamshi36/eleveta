"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  className,
  children,
}: {
  text: string;
  revealText: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full max-w-md overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-r from-gray-900 to-gray-800 p-8 shadow-xl",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <div className="text-base font-normal text-gray-300">{text}</div>
        <div className="mt-4 text-3xl font-bold text-white">{revealText}</div>
        {children}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </div>
  );
};