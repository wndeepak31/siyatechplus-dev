import Hero from '@/components/Hero'
import Services from '@/components/Services'
import PortfolioPreview from '@/components/PortfolioPreview'
import ContactForm from '@/components/ContactForm'
import { projects } from '@/data/projects'
import type { Metadata } from 'next'
import TestimonialSection from "@/components/TestimonialSection";
import BackToTopButton from "@/components/BackToTopButton";



export const metadata: Metadata = {
  title: 'SiyaTechPlus – RFID Technology, Ecommerce Platforms & Digital Business Solutions',
  description: 'SiyaTechPlus delivers advanced RFID systems, ecommerce solutions, digital automation, and real-time tracking technologies to help businesses optimize operations and scale efficiently.',
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
       <BackToTopButton />
      
      
    </div>
  )
}
