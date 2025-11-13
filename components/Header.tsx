"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [cursorX, setCursorX] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);

    const onMove = (e: MouseEvent) => {
      setCursorX(e.clientX);
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full z-50 top-0 left-0 pointer-events-auto"
    >
      {/* Spotlight following cursor */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{
          background: `radial-gradient(600px at ${cursorX}px 0px, rgba(0,255,255,0.12), transparent 70%)`,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Header Background */}
      <motion.div
        animate={{
          backgroundColor: scroll > 40 ? "rgba(3,6,10,0.85)" : "rgba(3,6,10,0)",
          backdropFilter: scroll > 40 ? "blur(14px)" : "blur(0px)",
          borderBottomColor: scroll > 40 ? "rgba(255,255,255,0.06)" : "transparent",
          boxShadow:
            scroll > 40
              ? "0 4px 40px rgba(0,255,255,0.08)"
              : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35 }}
        className="w-full border-b"
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250, damping: 12 }}
          >
            <Link href="/" className="text-2xl font-bold gradient-text tracking-tight">
              SiyaTechPlus
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ y: -4, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="relative group cursor-pointer"
              >
                <Link
                  href={item.href}
                  className="text-white/75 hover:text-white transition font-medium"
                >
                  {item.label}
                </Link>

                {/* Underline ONLY on hover */}
                <span
                  className="
                    absolute left-0 -bottom-1 
                    h-[2px] w-0 
                    bg-neon-cyan 
                    rounded-full 
                    transition-all duration-300 
                    group-hover:w-full
                  "
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#03060A]/95 backdrop-blur-xl px-6 py-6 border-b border-white/10"
          >
            {links.map((item) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
              >
                <Link
                  href={item.href}
                  className="block py-3 text-white/75 hover:text-neon-cyan text-lg transition"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
