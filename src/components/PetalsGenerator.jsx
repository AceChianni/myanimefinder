// src/components/PetalsGenerator.jsx
"use client";
import { useEffect } from "react";

export default function PetalGenerator() {
  useEffect(() => {
    const container = document.querySelector(".falling-layer");
    if (!container) return;

    container.innerHTML = ""; // reset on navigation

    const petalCount = 50; // increase density slightly for aesthetic fullness

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";

      // Random start X
      petal.style.left = Math.random() * 100 + "vw";

      // Slow & varying speeds (Ghibli softness)
      petal.style.setProperty("--fall-duration", `${14 + Math.random() * 9}s`);
      petal.style.setProperty("--sway-duration", `${5 + Math.random() * 4}s`);
      petal.style.animationDelay = Math.random() * 8 + "s";

      container.appendChild(petal);
    }
  }, []);

  return null;
}
