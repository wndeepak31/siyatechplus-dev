import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#050A0F] border-t border-neon-cyan/20 py-16 text-text-muted overflow-hidden">

      {/* Neon Glow Top Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* ABOUT */}
        <div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent mb-4">
            SiyaTechPlus
          </h3>

          <p className="leading-relaxed text-sm opacity-85">
            Transform your business with powerful digital solutions. From RFID-enabled automation to premium e-commerce experiences and custom jewelry solutions, we help brands grow smarter and faster.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/40 transition-all shadow-lg shadow-black/40 hover:shadow-neon-cyan/30"
            >
              <Facebook className="w-5 h-5 text-white group-hover:text-neon-cyan transition" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/40 transition-all shadow-lg shadow-black/40 hover:shadow-neon-cyan/30"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-neon-cyan transition" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/40 transition-all shadow-lg shadow-black/40 hover:shadow-neon-cyan/30"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-neon-cyan transition" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/40 transition-all shadow-lg shadow-black/40 hover:shadow-neon-cyan/30"
            >
              <Youtube className="w-5 h-5 text-white group-hover:text-neon-cyan transition" />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm">

            <li>
              <Link href="/" className="hover:text-neon-cyan transition">Home</Link>
            </li>

            <li>
              <a href="/services" className="hover:text-neon-cyan transition">Services</a>
            </li>

            <li>
              <a href="#testimonials" className="hover:text-neon-cyan transition">Testimonials</a>
            </li>

            <li>
              <a href="#contact" className="hover:text-neon-cyan transition">Contact</a>
            </li>

            <li>
              <a href="#portfolio" className="hover:text-neon-cyan transition">Portfolio</a>
            </li>

            <li>
              <Link href="/about" className="hover:text-neon-cyan transition">About Us</Link>
            </li>

          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Services</h3>
          <ul className="space-y-3 text-sm">

            <li><a href="#services" className="hover:text-neon-cyan transition">eCommerce Development</a></li>
            <li><a href="#services" className="hover:text-neon-cyan transition">RFID Solutions</a></li>
            <li><a href="#services" className="hover:text-neon-cyan transition">3D Rendering</a></li>
            <li><a href="#services" className="hover:text-neon-cyan transition">Manufacturing</a></li>
            <li><a href="#services" className="hover:text-neon-cyan transition">Digital Marketing</a></li>
            <li><a href="#services" className="hover:text-neon-cyan transition">CRM Systems</a></li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Contact Info</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li>📧 contact@siyatechplus.com</li>
            <li>📞 +91 86524 29808</li>
            <li>
              📍 Laxmi Estate,Tagore Nagar,
              <br />
              Vikhroli East, Mumbai, Maharashtra 400083
            </li>
            <li>🕐 Mon–Fri: 9AM - 6PM</li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-16 text-center pt-6 border-t border-white/10 text-xs opacity-70">
        © 2025 SiyaTechPlus. All rights reserved. | Privacy Policy | Terms of Service
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-t from-neon-cyan/10 to-transparent pointer-events-none"></div>
    </footer>
  );
}
