// /components/Fireflies.js
"use client";
import { motion } from "framer-motion";

export default function Fireflies({ count = 16 }) {
  const fireflies = Array.from({ length: count });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {fireflies.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: "50%", y: "50%" }}
          animate={{
            opacity: [0, 1, 0.6, 1, 0],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            scale: [0.7, 1.3, 0.8, 1.2],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 rounded-full bg-pink-300 shadow-[0_0_8px_4px_rgba(255,179,216,0.8)]"
        />
      ))}
    </div>
  );
}
