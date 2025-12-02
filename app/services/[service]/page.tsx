import { notFound } from "next/navigation";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { getProjectsByService } from "@/data/projects";
import { services, getServiceById } from "@/data/services";
import type { Metadata } from "next";

interface PageProps {
  params: {
    service: string;
  };
}

// Generate static params for all services
export function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

// Generate metadata for SEO
export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceById(params.service);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const baseUrl = "https://www.siyatechplus.com";
  const canonicalUrl = `${baseUrl}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: `${service.name}, ${service.title}, SiyaTechPlus`,
    openGraph: {
      title: service.ogTitle,
      description: service.ogDescription,
      url: canonicalUrl,
      siteName: "SiyaTechPlus",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.ogTitle,
      description: service.ogDescription,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceById(params.service);

  if (!service) {
    notFound();
  }

  const HeroIcon = service.heroEmoji;
  const projects = getProjectsByService(params.service);

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-primary to-secondary overflow-hidden">
        {/* Icon Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <HeroIcon className="w-[14rem] h-[14rem]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold gradient-text mb-6">
            {service.h1}
          </h1>
          <p className="text-xl text-text-muted">{service.description}</p>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {service.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold text-neon-cyan mb-4">
                  {section.h2}
                </h2>

                {section.h3 && section.h3.length > 0 && (
                  <div className="space-y-3 pl-4 border-l-2 border-neon-cyan/30">
                    {section.h3.map((sub, i) => (
                      <h3
                        key={i}
                        className="text-lg font-semibold text-text-light"
                      >
                        {sub}
                      </h3>
                    ))}
                  </div>
                )}

                <p className="text-text-muted">
                  {index === 0 &&
                    "We deliver exceptional solutions tailored to your business needs."}
                  {index === 1 &&
                    "Our expertise ensures seamless implementation and integration."}
                  {index === 2 &&
                    "Ongoing support and optimization for long-term success."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-light mb-4">
              Our {service.name} Portfolio
            </h2>
            <p className="text-text-muted text-lg">
              Click on any project to view demos and details
            </p>
          </div>

          <Gallery projects={projects} categories={service.categories} />
        </div>
      </section>

      {/* BACK TO PORTFOLIO */}
      <section className="py-12 px-6 text-center">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neon-cyan text-neon-cyan text-lg font-bold rounded-full hover:bg-neon-cyan/10 transition-all"
        >
          ← Back to Portfolio
        </Link>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold gradient-text">
            Ready to Start Your Project?
          </h2>

          <p className="text-text-muted text-lg">
            Let's create a stunning {service.name.toLowerCase()} solution that
            drives results.
          </p>

          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-primary text-lg font-bold rounded-full hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
