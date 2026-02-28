"use client";

import React, { useState } from "react";

interface Particle {
  id: number;
  dx: number;
  dy: number;
  delay: number;
}

export function Sparkles() {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 20 }).map(() => ({
      id: Math.random(),
      dx: (Math.random() - 0.5) * 200,
      dy: (Math.random() - 0.5) * 200,
      delay: Math.random() * 0.3,
    }))
  );

  return (
    <>
      <style jsx global>{`
        @keyframes sparkle {
          from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            opacity: 0;
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0);
          }
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="block absolute bg-white rounded-full w-2 h-2"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animationName: "sparkle",
              animationDuration: "0.8s",
              animationFillMode: "forwards",
              animationTimingFunction: "ease-out",
              animationDelay: `${p.delay}s`,
              ["--tx" as any]: `${p.dx}px`,
              ["--ty" as any]: `${p.dy}px`,
            }}
          />
        ))}
      </div>
    </>
  );
}
