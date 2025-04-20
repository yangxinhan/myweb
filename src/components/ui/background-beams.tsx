"use client";
import React from "react";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    return (
      <div
        className={`absolute inset-0 overflow-hidden ${className}`}
        style={{ transform: "translateZ(0)" }}
      >
        <div className="animate-move-forever h-56 w-56 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 blur-[100px]" />
      </div>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";
