// /components/DustParticles.js

"use client";
import { motion } from "framer-motion";

export default function DustParticles({ count = 18 }) {
  const particles = Array.from({ length: count });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0.1, 0.4, 0.2, 0.5, 0.1],
            y: ["0%", "-40%", "-60%", "-80%"],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            scale: [0.6, 1.1, 0.8, 1.2],
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1.5 h-1.5 rounded-full 
            bg-roseBrown/40 dark:bg-starlight/40 blur-[1.5px]"
        />
      ))}
    </div>
  );
}
