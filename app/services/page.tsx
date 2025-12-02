// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | SiyaTechPlus – RFID, Ecommerce & Digital Solutions",
  description:
    "Explore SiyaTechPlus services including RFID automation, ecommerce development, 3D visualization, manufacturing systems, CRM platforms and digital marketing solutions designed to help businesses scale efficiently.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-24 px-6 bg-[#030711] overflow-hidden">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] bg-neon-cyan/15 blur-[150px]" />
        <div className="absolute -bottom-40 -right-32 w-[480px] h-[480px] bg-neon-purple/15 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29371a_1px,transparent_1px),linear-gradient(to_bottom,#1f29371a_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-6xl mx-auto space-y-16">

        {/* HEADER */}
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-neon-cyan/50 bg-white/5 backdrop-blur-md text-[11px] uppercase tracking-[0.22em] text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse-slow" />
            Services
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[50px] font-extrabold leading-tight bg-gradient-to-r from-neon-cyan via-white to-neon-purple bg-clip-text text-transparent">
            Smart Digital Solutions for Modern Businesses
          </h1>

          <p className="max-w-3xl mx-auto text-sm md:text-base text-text-muted">
            From RFID-enabled operations to high-converting ecommerce platforms and
            custom automation, SiyaTechPlus helps brands build scalable, future-ready
            digital systems.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;           // Fix 1 – icon component
              const HeroIcon = service.heroEmoji;  // Fix 2 – hero icon component

              return (
                <article
                  key={service.slug}
                  className="
                    group relative h-full
                    rounded-2xl border border-white/10 
                    bg-white/5/60 backdrop-blur-xl 
                    p-6 flex flex-col
                    overflow-hidden
                    transition-all duration-300 ease-out
                    hover:border-neon-cyan/70 
                    hover:shadow-[0_0_40px_rgba(0,240,255,0.32)]
                    hover:-translate-y-2 hover:scale-[1.01]
                  "
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,#00F0FF22,transparent_55%)]" />

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col h-full">

                    {/* ICON */}
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/15 group-hover:border-neon-cyan/70 group-hover:bg-white/15 transition-all duration-300">
                      <HeroIcon className="w-6 h-6 text-neon-cyan group-hover:-translate-y-[2px] transition-transform" />
                    </div>

                    {/* TITLE */}
                    <h2 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                      {service.name}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* CTA BUTTON */}
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="
                          relative inline-flex items-center gap-2 px-4 py-2 
                          rounded-full text-xs md:text-sm font-semibold
                          bg-gradient-to-r from-neon-cyan to-neon-purple
                          text-primary
                          shadow-[0_0_18px_rgba(0,240,255,0.35)]
                          transition-all duration-300
                          overflow-hidden
                          group/button
                        "
                      >
                        <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.7),transparent)] opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-[120%] transition-all duration-500" />
                        <span className="relative">Learn More</span>
                        <span className="relative text-[14px]">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}

          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="text-center pt-8 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Not sure where to start?
          </h2>
          <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto">
            Tell us a bit about your operations, and we’ll help you map the right
            mix of RFID, ecommerce, and automation solutions for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full text-sm md:text-base font-semibold bg-gradient-to-r from-neon-cyan to-neon-purple text-primary hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] transition-all"
            >
              Talk to Our Team
            </a>
            <a
              href="/#portfolio"
              className="px-8 py-3 rounded-full text-sm md:text-base font-semibold border border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan/10 transition-all"
            >
              View Case Studies
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
