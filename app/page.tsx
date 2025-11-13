import Hero from '@/components/Hero'
import Services from '@/components/Services'
import PortfolioPreview from '@/components/PortfolioPreview'
import ContactForm from '@/components/ContactForm'
import { projects } from '@/data/projects'
import type { Metadata } from 'next'
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: 'SiyaTechPlus | Ultimate Digital Solutions',
  description: 'Professional ecommerce development, RFID solutions, 3D rendering, manufacturing, digital marketing, and CRM systems',
}

export default function Home() {
  // Group projects by service
  const projectsByService = projects.reduce((acc, project) => {
    if (!acc[project.service]) {
      acc[project.service] = []
    }
    acc[project.service].push(project)
    return acc
  }, {} as Record<string, typeof projects>)

  return (
    <div className="pt-20">
      <Hero />
      <Services />
      <PortfolioPreview projectsByService={projectsByService} />
      <TestimonialSection />
      <ContactForm />
      
      
    </div>
  )
}
