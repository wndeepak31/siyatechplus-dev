import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050A0F] border-t border-neon-cyan/20 py-16 text-text-muted overflow-hidden">

      {/* Neon Glow Top Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* About */}
        <div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent mb-4">
            SiyaTechPlus
          </h3>

          <p className="leading-relaxed text-sm opacity-85">
            Your trusted partner for cutting-edge digital solutions. We transform businesses with
            innovative technology and exceptional service.
          </p>

          {/* PREMIUM Social Buttons */}
          <div className="flex space-x-4 mt-6">
            <a className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/40 transition-all shadow-lg shadow-black/40 hover:shadow-neon-cyan/30">
              <Facebook className="w-5 h-5 text-white group-hover:text-neon-cyan transition" />
            </a>

            <a className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/40 transition-all shadow-lg shadow-black/40 hover:shadow-neon-cyan/30">
              <Instagram className="w-5 h-5 text-white group-hover:text-neon-cyan transition" />
            </a>

            <a className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/40 transition-all shadow-lg shadow-black/40 hover:shadow-neon-cyan/30">
              <Linkedin className="w-5 h-5 text-white group-hover:text-neon-cyan transition" />
            </a>

            <a className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/40 transition-all shadow-lg shadow-black/40 hover:shadow-neon-cyan/30">
              <Youtube className="w-5 h-5 text-white group-hover:text-neon-cyan transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "Services", "Testimonials", "Contact", "About Us"].map((item, index) => (
              <li key={index}>
                <a className="hover:text-neon-cyan transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              "eCommerce Development",
              "RFID Solutions",
              "3D Rendering",
              "Manufacturing",
              "Digital Marketing",
              "CRM Systems",
            ].map((item, index) => (
              <li key={index}>
                <a className="hover:text-neon-cyan transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Contact Info</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li>📧 contact@siyatechplus.com</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>📍 123 Tech Street, Innovation City</li>
            <li>🕐 Mon–Fri: 9AM - 6PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 text-center pt-6 border-t border-white/10 text-xs opacity-70">
        © 2025 SiyaTechPlus. All rights reserved. | Privacy Policy | Terms of Service
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-t from-neon-cyan/10 to-transparent pointer-events-none"></div>
    </footer>
  );
}
