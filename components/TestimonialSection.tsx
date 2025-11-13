"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "Founder, LuxeGold",
    message:
      "SiyaTechPlus completely transformed our ecommerce experience. Sales increased dramatically and customers love the new UI.",
    avatar: "/assets/profile/man.png",
  },
  {
    name: "Sophia Williams",
    role: "CEO, NexusWare",
    message:
      "Their RFID solution helped us track inventory with incredible accuracy. Productivity increased by 60%. Highly recommended!",
    avatar: "/assets/profile/man.png",
  },
  {
    name: "Rahul Verma",
    role: "Director, VisionCraft",
    message:
      "The 3D rendering quality is stunning. Our product presentations look absolutely premium.",
    avatar: "/assets/profile/man.png",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-24 px-6 bg-secondary/40 backdrop-blur-xl relative overflow-hidden" id="testimonials">
      {/* Glow backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15),transparent_70%)]"></div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">
          What Our Clients Say
        </h2>
        <p className="text-text-muted mt-3">Trusted by brands worldwide.</p>

        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.4)]"
            >
              <Quote className="w-10 h-10 mx-auto text-neon-cyan mb-6" />

              <p className="text-xl text-white leading-relaxed">
                “{current.message}”
              </p>

              <div className="mt-8 flex flex-col items-center">
                {current.avatar && (
                  <img
                    src={current.avatar}
                    className="w-14 h-14 rounded-full border border-neon-cyan/40"
                  />
                )}
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {current.name}
                </h3>
                <p className="text-text-muted text-sm">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-neon-cyan w-6" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
