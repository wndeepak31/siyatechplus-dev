"use client";

import { useState } from "react";
import CustomSelect from "@/components/CustomSelect";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactForm() {
  const [service, setService] = useState("");
  const [result, setResult] = useState<null | { type: string; message: string }>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // ---- HANDLE SUBMIT ----
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent form submit if service is empty
    if (!service) {
      setResult({
        type: "error",
        message: "Please select a service before submitting.",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms Access Key
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_KEY!);

    // Add readable selected service
    formData.append("service", service);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setResult({ type: "success", message: "Message sent successfully!" });
        setShowSuccessModal(true);

        // Auto close after 3 seconds
        setTimeout(() => setShowSuccessModal(false), 3000);

        // Reset fields
        form.reset();
        setService("");
      } else {
        setResult({
          type: "error",
          message: data.message || "Something went wrong",
        });
      }
    } catch (error) {
      setResult({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-secondary/30 relative overflow-hidden"
    >
      {/* Glow Line */}
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

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
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
            name="name"
            type="text"
            required
            className="
              w-full p-3 bg-white/5
              border border-white/10 rounded-lg text-white
              focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40
              transition
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-white text-sm">Email Address *</label>
          <input
            name="email"
            type="email"
            required
            className="
              w-full p-3 bg-white/5
              border border-white/10 rounded-lg text-white
              focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40
              transition
            "
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-white text-sm">Phone Number</label>
          <input
            name="phone"
            type="tel"
            className="
              w-full p-3 bg-white/5
              border border-white/10 rounded-lg text-white
              focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40
              transition
            "
          />
        </div>

        {/* Service Dropdown */}
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
            name="message"
            rows={4}
            required
            className="
              w-full p-3 bg-white/5
              border border-white/10 rounded-lg text-white
              focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40
              transition
            "
          ></textarea>
        </div>

        {/* Result Message */}
        {result && (
          <p
            className={`text-center text-sm font-medium ${
              result.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {result.message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full py-3 text-base font-semibold
            bg-gradient-to-r from-neon-cyan to-neon-purple
            text-primary rounded-full
            hover:shadow-[0_0_25px_rgba(0,240,255,0.45)]
            transition-all disabled:opacity-50
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* SUCCESS POPUP MODAL */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[200]"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="bg-[#111827] p-8 rounded-2xl border border-white/10 shadow-2xl text-center max-w-sm"
            >
              <h3 className="text-2xl font-bold text-neon-cyan mb-2">
                Message Sent!
              </h3>
              <p className="text-text-muted">
                Thank you! We’ll get back to you shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-neon-cyan/10 to-transparent"></div>
    </section>
  );
}
