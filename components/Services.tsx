'use client'

import Link from 'next/link'
import { services } from '@/data/services'

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">
            Our Services
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl border border-neon-cyan/20 bg-primary/50 backdrop-blur-sm transition-all hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:-translate-y-2">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-text-light group-hover:text-neon-cyan transition-colors mb-4">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-text-muted mb-6">
                  {service.description}
                </p>

                {/* View Projects Link */}
                <div className="flex items-center gap-2 text-neon-cyan font-semibold group-hover:gap-4 transition-all">
                  View Projects
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
