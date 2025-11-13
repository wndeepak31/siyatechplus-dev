"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          whileHover={{ scale: 1.1 }}
          className="
            fixed bottom-6 right-6 z-50
            p-4 rounded-full
            bg-white/10 backdrop-blur-md
            border border-white/20
            shadow-lg shadow-black/30
            text-neon-cyan hover:text-white
            hover:bg-neon-cyan/30
            transition
          "
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </>
  );
}
