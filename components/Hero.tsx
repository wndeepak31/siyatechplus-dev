"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const prefersReduced = useReducedMotion();

  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 40 });

  // Mouse tilt & spotlight
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const ry = (px - 0.5) * 10;
      const rx = -(py - 0.5) * 8;

      setTilt({ rx, ry });
      setSpotlight({ x: px * 100, y: py * 100 });
    };

    if (!prefersReduced) {
      window.addEventListener("mousemove", onMove);
    }
    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [prefersReduced]);

  const headingWords = ["Ultimate", "Digital"];

  const wordVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
    }),
  };

  return (
    <section
      ref={containerRef}
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#03060A]"
    >
      {/* Spotlight following cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />

      {/* Neon gradient noise overlay */}
      <div className="absolute inset-0 mix-blend-soft-light opacity-[0.08] pointer-events-none bg-[url('/noise.png')]"></div>

      {/* GLASS GRID LAYER */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          background:
            "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
          backgroundSize: "75px 75px",
        }}
      ></div>

      {/* Glow blobs behind content */}
      <div
        className="absolute -top-24 -left-20 w-[600px] h-[600px] bg-neon-cyan/25 blur-[150px] rounded-full"
        style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry * -1}deg)` }}
      />
      <div
        className="absolute -bottom-32 -right-20 w-[700px] h-[700px] bg-neon-purple/25 blur-[180px] rounded-full"
        style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[6px] h-[6px] bg-white/30 rounded-full backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-6xl"
        style={{
          perspective: 1200,
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        }}
      >
        {/* HEADING */}
        <h1 className="text-4xl md:text-6xl lg:text-[90px] font-extrabold leading-[1.12] tracking-tight">
          <div>
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block mr-4 md:mr-6 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent relative animate-shine"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="block text-white mt-2 md:mt-4 drop-shadow-[0_8px_35px_rgba(0,0,0,0.4)]"
          >
            Solutions for Modern Brands
          </motion.span>
        </h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-text-muted mt-6"
        >
          Scale your business with innovative, future-ready digital solutions.
          We build premium experiences for eCommerce, manufacturing, and enterprise brands.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap gap-6 justify-center mt-12"
        >
          <Link
            href="#portfolio"
            className="px-12 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-black shadow-[0_0_45px_rgba(0,240,255,0.35)] hover:scale-[1.05] transition-all duration-300"
          >
            View Our Work
          </Link>

          <Link
            href="#contact"
            className="px-12 py-4 text-lg font-semibold rounded-full border border-neon-cyan/40 text-neon-cyan bg-white/5 backdrop-blur-xl hover:bg-neon-cyan/10 transition-all duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
