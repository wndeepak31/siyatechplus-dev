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
  // const [selectedService, setSelectedService] = useState('ecommerce-development')
  const [selectedService, setSelectedService] = useState(services[0].id)

  const [activeVideo, setActiveVideo] = useState<string | null>(null) // For modal

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
            Explore 2–3 highlighted projects from each service category
          </p>
        </div>

        {/* Service Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map(service => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedService === service.id
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-primary shadow-lg shadow-neon-cyan/30'
                  : 'bg-transparent border-2 border-neon-cyan/30 text-text-light hover:border-neon-cyan hover:bg-neon-cyan/10'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {displayedProjects.map(project => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-neon-cyan/20 bg-secondary/60 backdrop-blur-sm hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all"
              onClick={() => project.videoId && setActiveVideo(project.videoId)}
            >

              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                    <div className="w-0 h-0 border-l-[18px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <span className="inline-block px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs font-semibold rounded-full">
                  {service?.name}
                </span>

                <h3 className="text-xl font-bold text-text-light group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-muted text-sm">{project.description}</p>

                {/* Stats */}
                {project.stats && (
                  <div className="flex flex-wrap gap-4 pt-2 text-sm">
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
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link
            href={`/services/${selectedService}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-primary text-lg font-bold rounded-full hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all"
          >
            View All {service?.name} Projects →
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-lg shadow-neon-cyan/20"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              allow="autoplay; encrypted-media"
            ></iframe>

            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 text-white bg-black/50 px-3 py-1 rounded-full hover:bg-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
