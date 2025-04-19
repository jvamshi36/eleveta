import React from "react";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const RainbowButton = React.forwardRef<
  HTMLButtonElement,
  RainbowButtonProps
>(({ children, className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`relative inline-flex items-center justify-center px-8 py-2 h-11 rounded-xl font-medium text-white overflow-hidden border-0 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none shadow-md backdrop-blur-sm ${className}`}
      style={{
        backgroundImage: `linear-gradient(270deg, #3B82F6, #6366F1, #EC4899, #FBBF24, #3B82F6)`,
        backgroundSize: "800% 800%",
        animation: "rainbowMove 6s ease infinite",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes rainbowMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </button>
  );
});

RainbowButton.displayName = "RainbowButton";
