// src/components/PetalsGenerator.jsx
"use client";
import { useEffect } from "react";

export default function PetalsGenerator() {
  useEffect(() => {
    const container = document.querySelector(".falling-layer");
    if (!container) return;

    // Clear old petals on re-render
    container.innerHTML = "";

    const count = 24; // increase or decrease density

    for (let i = 0; i < count; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDelay = Math.random() * 12 + "s";
      container.appendChild(petal);
    }
  }, []);

  return null;
}
