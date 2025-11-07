// src/components/PetalsGenerator.jsx
"use client";

import { useEffect } from "react";

export default function PetalsGenerator() {
  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement("div");
      petal.className = "petal";

      // Random horizontal start position
      petal.style.left = Math.random() * 100 + "vw";

      // Random size variation
      const size = 12 + Math.random() * 18;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;

      // Random fall speed
      const fallDuration = 8 + Math.random() * 10; // slower + more visible
      petal.style.animationDuration = `${fallDuration}s, ${4 + Math.random() * 3}s`;

      // Soft depth layering
      const depth = Math.random();
      petal.style.zIndex = depth > 0.66 ? 4 : depth > 0.33 ? 3 : 2;
      petal.style.opacity = depth > 0.66 ? 1 : depth > 0.33 ? 0.8 : 0.6;

      document.body.appendChild(petal);

      // Remove after falling
      setTimeout(() => {
        petal.remove();
      }, fallDuration * 1000);
    };

    // 🌸 Increase amount → lower interval number
    const interval = setInterval(createPetal, 180);

    return () => clearInterval(interval);
  }, []);

  return null;
}

// // src/components/PetalsGenerator.jsx
// "use client";
// import { useEffect } from "react";

// export default function PetalsGenerator() {
//   useEffect(() => {
//     const layer = document.querySelector(".falling-layer");
//     if (!layer) return;

//     const count = 40; // was ~15 — now lush and noticeable

//     for (let i = 0; i < count; i++) {
//       const p = document.createElement("div");
//       p.className = "petal";

//       p.style.left = `${Math.random() * 100}vw`;

//       // Randomize speed range for realism
//       p.style.setProperty("--fall-speed", `${12 + Math.random() * 10}s`);
//       p.style.setProperty("--wobble-speed", `${5 + Math.random() * 4}s`);

//       // small delay for natural stagger
//       p.style.animationDelay = `${Math.random() * 8}s`;

//       layer.appendChild(p);
//     }
//   }, []);

//   return null;
// }
