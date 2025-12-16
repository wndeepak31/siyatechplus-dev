'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Project } from '@/data/projects'
import Lightbox from './Lightbox'

interface GalleryProps {
  projects: Project[]
  categories: { id: string; label: string }[]
}

export default function Gallery({ projects, categories }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="space-y-12">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-primary'
              : 'bg-transparent border-2 border-neon-cyan/30 text-text-light hover:border-neon-cyan'
          }`}
        >
          All Projects
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-primary'
                : 'bg-transparent border-2 border-neon-cyan/30 text-text-light hover:border-neon-cyan'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="masonry-item group cursor-pointer"
            onClick={() => setLightboxProject(project)}
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
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </>
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-6xl">{getServiceEmoji(project.service)}</span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <span className="inline-block px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-sm rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-text-light group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm">
                  {project.description}
                </p>

                {/* Stats */}
                {project.stats && (
                  <div className="flex gap-4 pt-2">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-sm">
                        <span className="text-text-muted">{stat.label}: </span>
                        <span className="text-neon-cyan font-semibold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxProject && (
        <Lightbox
          project={lightboxProject}
          onClose={() => setLightboxProject(null)}
        />
      )}
    </div>
  )
}

function getServiceEmoji(service: string): string {
  const emojis: Record<string, string> = {
    'ecommerce-development': '🛍️',
    'rfid-solutions': '📡',
    '3d-rendering-and-visualisation': '🎨',
    'manufacturing-solutions': '⚙️',
    'digital-marketing': '🚀',
    'crm-systems': '💼',
  }
  return emojis[service] || '✨'
}
