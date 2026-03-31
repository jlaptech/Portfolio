"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            entry.target.classList.remove("animate-hidden");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-hidden").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
