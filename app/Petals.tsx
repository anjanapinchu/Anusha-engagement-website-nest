 "use client";

import { useEffect } from "react";

export default function Petals() {
  useEffect(() => {
    const container = document.querySelector(".petals");
    if (!container) return;

    const createPetal = () => {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
      petal.style.animationDuration = `${7 + Math.random() * 7}s`;
      petal.style.opacity = `${0.25 + Math.random() * 0.4}`;
      container.appendChild(petal);
      window.setTimeout(() => petal.remove(), 15000);
    };

    const timer = window.setInterval(createPetal, 900);
    return () => window.clearInterval(timer);
  }, []);

  return null;
}
