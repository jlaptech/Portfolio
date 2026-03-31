"use client";

import { useState, useEffect } from "react";

const navItems = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-mono text-cyan-400 font-bold text-lg">JLP</span>
        <div className="flex gap-6 text-sm">
          {navItems.map((item) => {
            const isActive = active === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-gray-400 hover:text-cyan-400"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
