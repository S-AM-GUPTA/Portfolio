"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      animate={{
        background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 202, 120, 0.12), rgba(203, 184, 217, 0.05) 35%, transparent 65%)`,
      }}
    />
  );
}

