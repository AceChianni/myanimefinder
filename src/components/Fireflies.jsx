// src/components/Fireflies.jsx
"use client";
import { useEffect } from "react";

export default function Fireflies() {
  useEffect(() => {
    const count = 14; // number of fireflies
    const container = document.querySelector(".firefly-layer");
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const f = document.createElement("div");
      f.className = "firefly";
      f.style.top = Math.random() * 100 + "vh";
      f.style.left = Math.random() * 100 + "vw";
      f.style.animationDelay = Math.random() * 12 + "s";
      container.appendChild(f);
    }
  }, []);

  return null;
}
