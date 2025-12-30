import Hero from '@/components/Hero'
import Services from '@/components/Services'
import PortfolioPreview from '@/components/PortfolioPreview'
import ContactForm from '@/components/ContactForm'
import { projects } from '@/data/projects'
import type { Metadata } from 'next'
import TestimonialSection from "@/components/TestimonialSection"
import BackToTopButton from "@/components/BackToTopButton"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'SiyaTechPlus – RFID Technology, Ecommerce Platforms & Digital Business Solutions',
  description:
    'SiyaTechPlus delivers advanced RFID systems, ecommerce solutions, digital automation, and real-time tracking technologies to help businesses optimize operations and scale efficiently.',
}

export default function Home() {
  const projectsByService = projects.reduce((acc, project) => {
    if (!acc[project.service]) {
      acc[project.service] = []
    }
    acc[project.service].push(project)
    return acc
  }, {} as Record<string, typeof projects>)

  return (
    <>
      {/* ✅ Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SiyaTechPlus",
            url: "https://www.siyatechplus.com",
            logo: "https://www.siyatechplus.com/_next/image?url=%2Fassets%2Flogo%2Fsiyatechplus-logo-1.png&w=384&q=75",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8652429808",
              contactType: "customer service",
              areaServed: "IN"
            },
            sameAs: [
              "https://www.instagram.com/siyatechplus/",
              "https://www.linkedin.com/in/siyatech-plus-76770a397/",
              "https://www.youtube.com/@Siyatechplus"
            ]
          })
        }}
      />

      {/* ✅ Homepage Content */}
      <div className="pt-20">
        <Hero />
        <Services />
        <PortfolioPreview projectsByService={projectsByService} />
        <TestimonialSection />
        <ContactForm />
        <BackToTopButton />
      </div>
    </>
  )
}
