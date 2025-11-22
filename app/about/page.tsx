import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SiyaTechPlus | RFID, Ecommerce & Digital Business Solutions",
  description:
    "Learn more about SiyaTechPlus, a digital technology studio focused on RFID automation, ecommerce platforms, and custom digital solutions that help businesses scale smarter.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* HERO / INTRO */}
        <section className="space-y-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-neon-cyan/40 bg-white/5 text-xs uppercase tracking-[0.2em] text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
            About SiyaTechPlus
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight bg-gradient-to-r from-neon-cyan via-white to-neon-purple bg-clip-text text-transparent">
            Building Smarter Businesses with RFID, Ecommerce & Digital Solutions
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-text-muted">
            SiyaTechPlus is a technology studio focused on turning complex
            operations into simple, scalable digital systems. From RFID-enabled
            tracking to high-converting ecommerce platforms and automation, we
            help brands move faster, operate smarter, and grow with confidence.
          </p>
        </section>

        {/* WHO WE ARE */}
        <section className="grid gap-10 md:grid-cols-[1.2fr,0.9fr] items-start">
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Who We Are
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              We’re a team of engineers, designers, and problem-solvers who love
              combining hardware, software, and UX to create real business
              impact. Whether it’s an RFID rollout for a warehouse, a custom
              ecommerce experience for a jewelry brand, or a digital workflow
              for manufacturing, we approach every project with the same mindset:
              <span className="text-white font-medium"> clarity, reliability, and scale.</span>
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Rather than offering “just a website” or “just an app”, we focus
              on complete digital journeys—how data flows, how teams work, and
              how customers experience your brand end-to-end.
            </p>
          </div>

          {/* SIDE CARD */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4 shadow-xl shadow-black/40">
            <h3 className="text-lg font-semibold text-white">
              What we focus on
            </h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>• RFID-driven inventory & asset tracking</li>
              <li>• High-performing ecommerce platforms</li>
              <li>• Digital automation & process optimization</li>
              <li>• 3D visualization & product experiences</li>
              <li>• CRM & custom business applications</li>
            </ul>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-neon-cyan/30 bg-white/5 p-6 md:p-7">
            <h3 className="text-lg font-semibold text-white mb-3">Our Mission</h3>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              To help businesses unlock efficiency and growth using practical,
              modern technology—without unnecessary complexity. Every solution
              we ship should be measurable, maintainable, and meaningful for the
              teams who use it daily.
            </p>
          </div>

          <div className="rounded-2xl border border-neon-purple/30 bg-white/5 p-6 md:p-7">
            <h3 className="text-lg font-semibold text-white mb-3">Our Vision</h3>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              To become a trusted long-term technology partner for brands that
              want to blend physical and digital operations—across retail,
              jewelry, manufacturing, and beyond—using RFID, automation, and
              experience-first digital products.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Why Teams Like Working With Us
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "End-to-End Thinking",
                text: "We don’t just build screens. We think about operations, people, data, and long-term scalability.",
              },
              {
                title: "Tech + Business Alignment",
                text: "Solutions are designed around your KPIs—faster dispatches, better conversions, lower manual work.",
              },
              {
                title: "Hands-on Collaboration",
                text: "We work as an extension of your team: clear communication, transparent progress, and real ownership.",
              },
              {
                title: "Future-Ready Stack",
                text: "Modern tools, cloud-native architecture, and modular systems that can grow with your business.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-text-muted hover:border-neon-cyan/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.35)] transition-all"
              >
                <h3 className="text-white font-semibold mb-2 text-base">
                  {item.title}
                </h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { label: "Projects Delivered", value: "150+" },
              { label: "Industries Served", value: "6+" },
              { label: "Avg. Client Retention", value: "90%" },
              { label: "Support", value: "24/7" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERTISE GRID */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Core Areas of Expertise
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "RFID & Real-Time Tracking",
                text: "Item-level tracking for warehouses, retail, and manufacturing with live dashboards and alerts.",
              },
              {
                title: "Ecommerce & Digital Stores",
                text: "Fast, conversion-focused storefronts for jewelry, fashion, and niche brands with custom workflows.",
              },
              {
                title: "Automation & Custom Systems",
                text: "CRMs, internal portals, and integrations that unify your data and reduce manual work.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 text-sm text-text-muted"
              >
                <h3 className="text-white font-semibold mb-2 text-base">
                  {item.title}
                </h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-5 pt-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Ready to explore what we can build together?
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm md:text-base">
            Whether you’re starting with a rough idea or a detailed requirement
            document, we’ll help you validate, design, and ship the right
            solution—without overcomplicating the process.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full text-sm md:text-base font-semibold bg-gradient-to-r from-neon-cyan to-neon-purple text-primary hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] transition-all"
            >
              Talk to Our Team
            </a>
            <a
              href="#services"
              className="px-8 py-3 rounded-full text-sm md:text-base font-semibold border border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan/10 transition-all"
            >
              View Services
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
