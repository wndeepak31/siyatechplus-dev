'use client'

import { useEffect } from 'react'
import { Project } from '@/data/projects'

interface LightboxProps {
  project: Project
  onClose: () => void
}

export default function Lightbox({ project, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white text-3xl flex items-center justify-center transition-colors z-10"
      >
        ×
      </button>

      {/* Content */}
      <div
        className="relative max-w-5xl max-h-[90vh] overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Video or Image */}
        {project.videoId ? (
          <div className="aspect-video w-full max-w-4xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-[80vh] rounded-lg"
          />
        ) : (
          <div className="w-full h-96 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-8xl">
            {getServiceEmoji(project.service)}
          </div>
        )}

        {/* Project Info */}
        <div className="mt-6 text-center text-white space-y-2">
          <h3 className="text-3xl font-bold gradient-text">{project.title}</h3>
          <p className="text-text-muted">{project.description}</p>
          
          {project.stats && (
            <div className="flex justify-center gap-6 pt-4">
              {project.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-sm text-text-muted">{stat.label}</div>
                  <div className="text-xl font-bold text-neon-cyan">{stat.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
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
