"use client";

import { type ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export default function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // The server-rendered state is visible. We only prepare items below the fold,
    // so content stays fully legible when JavaScript is unavailable.
    if (node.getBoundingClientRect().top > window.innerHeight * 0.92) {
      node.style.opacity = "0";
      node.style.transform = "translateY(18px)";
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  );
}
