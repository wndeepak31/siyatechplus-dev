"use client";

import { useState } from "react";
import CustomSelect from "@/components/CustomSelect";

export default function ContactForm() {
  const [service, setService] = useState("");

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-secondary/30 relative overflow-hidden"
    >
      {/* Glow line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan/60 to-transparent"></div>

      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-text-muted text-base mt-3 opacity-80">
          Fill out the form below and we’ll get back to you within 24 hours.
        </p>
      </div>

      {/* FORM CARD */}
      <form
        className="
        max-w-2xl mx-auto space-y-6 
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        p-8 rounded-2xl 
        shadow-xl shadow-black/20
      "
      >
        {/* Full Name */}
        <div>
          <label className="block mb-2 text-white text-sm">Full Name *</label>
          <input
            type="text"
            required
            className="
              w-full p-3 bg-white/5 
              border border-white/10 
              rounded-lg text-white 
              focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40 
              transition
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-white text-sm">Email Address *</label>
          <input
            type="email"
            required
            className="
              w-full p-3 bg-white/5 
              border border-white/10 
              rounded-lg text-white 
              focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40 
              transition
            "
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-white text-sm">Phone Number</label>
          <input
            type="tel"
            className="
              w-full p-3 bg-white/5 
              border border-white/10 
              rounded-lg text-white 
              focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40 
              transition
            "
          />
        </div>

        {/* CUSTOM SELECT DROPDOWN */}
        <div>
          <label className="block mb-2 text-white text-sm">
            Service Interested In *
          </label>
          <CustomSelect value={service} onChange={setService} />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-white text-sm">Message *</label>
          <textarea
            rows={4}
            required
            className="
              w-full p-3 bg-white/5 
              border border-white/10 
              rounded-lg text-white 
              focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40 
              transition
            "
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full py-3 text-base font-semibold 
            bg-gradient-to-r from-neon-cyan to-neon-purple 
            text-primary rounded-full 
            hover:shadow-[0_0_25px_rgba(0,240,255,0.45)] 
            transition-all
          "
        >
          Send Message
        </button>
      </form>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-neon-cyan/10 to-transparent"></div>
    </section>
  );
}
