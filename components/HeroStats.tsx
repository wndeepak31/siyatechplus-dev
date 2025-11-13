"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "6", label: "Core Services" },
  { value: "24/7", label: "Support" },
];

// small utility counter hook (no external libs)
function useCountTo(target: number | string, duration = 1500) {
  const [display, setDisplay] = useState<string>(() =>
    typeof target === "number" ? "0" : String(target)
  );

  useEffect(() => {
    if (typeof target !== "number") {
      setDisplay(String(target));
      return;
    }
    let start = 0;
    let rafId: number;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOutQuad-ish
      const current = Math.round(start + (target - start) * ease);
      setDisplay(String(current) + (String(target).includes("%") ? "%" : ""));
      if (t < 1) rafId = requestAnimationFrame(step);
      else setDisplay(String(target));
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return display;
}

export default function HeroStats() {
  // map to numeric where possible for animation (150+, 98%)
  const parsedTargets = stats.map((s) => {
    const digits = s.value.replace(/\D/g, "");
    const num = Number(digits) || 0;
    return isFinite(num) && num > 0 ? num : s.value;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: 0.8, duration: 0.9 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-16 md:pt-20 max-w-4xl mx-auto"
    >
      {stats.map((stat, i) => {
        const target = parsedTargets[i];
        // make a suffix for values like "150+" or "98%"
        const suffix = /[^0-9%+]/.test(stat.value)
          ? stat.value.replace(/[0-9]/g, "")
          : stat.value.replace(/\d/g, "");
        return (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 220 }}
            className="cursor-default text-center md:text-left"
          >
            <div className="text-3xl md:text-4xl font-extrabold gradient-text">
              <AnimatedNumber value={stat.value} />
            </div>
            <div className="text-text-muted text-sm mt-1">{stat.label}</div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* Small component to animate numbers (supports suffixes like + or %),
   uses requestAnimationFrame and is accessibility-conscious. */
function AnimatedNumber({ value }: { value: string }) {
  // extract numeric part and suffix
  const numPart = value.match(/-?\d+/)?.[0];
  const suffix = value.slice((numPart?.length ?? 0));
  const parsed = numPart ? Number(numPart) : null;
  const display = useCountTo(parsed ?? value, 1400);

  return <span aria-hidden="true">{display}{parsed ? suffix : ""}</span>;
}
