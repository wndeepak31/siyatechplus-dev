'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/data/projects'
import { services } from '@/data/services'

interface PortfolioPreviewProps {
  projectsByService: Record<string, Project[]>
}

export default function PortfolioPreview({ projectsByService }: PortfolioPreviewProps) {
  const [selectedService, setSelectedService] = useState('ecommerce-development')

  const displayedProjects = projectsByService[selectedService]?.slice(0, 3) || []
  const service = services.find(s => s.id === selectedService)

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold gradient-text mb-4">
            Our Work Portfolio
          </h2>
          <p className="text-text-muted text-lg">
            Browse our successful projects - Click any service to see preview
          </p>
        </div>

        {/* Service Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map(service => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedService === service.id
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-primary'
                  : 'bg-transparent border-2 border-neon-cyan/30 text-text-light hover:border-neon-cyan'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Projects Grid - Only 3 items */}
        <div className="masonry-grid mb-12">
          {displayedProjects.map(project => (
            <div
              key={project.id}
              className="masonry-item group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-neon-cyan/20 bg-secondary/60 backdrop-blur-sm transition-all hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:-translate-y-1">
                {/* Image/Video Thumbnail */}
                <div className="relative h-64 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  {project.videoId ? (
                    <>
                      <Image
                        src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <span className="text-6xl">{service?.icon}</span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="inline-block px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-sm rounded-full">
                    {service?.name}
                  </span>
                  <h3 className="text-xl font-bold text-text-light group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm">
                    {project.description}
                  </p>

                  {/* Stats */}
                  {project.stats && (
                    <div className="flex gap-4 pt-2 text-sm">
                      {project.stats.map((stat, i) => (
                        <div key={i}>
                          <span className="text-text-muted">{stat.label}: </span>
                          <span className="text-neon-cyan font-semibold">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href={`/services/${selectedService}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-primary text-lg font-bold rounded-full hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all"
          >
            View All {service?.name} Projects
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
