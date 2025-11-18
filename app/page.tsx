import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import TrustLogos from '@/components/sections/TrustLogos'
import Benefits from '@/components/sections/Benefits'
import HowItWorks from '@/components/sections/HowItWorks'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import TechStack from '@/components/sections/TechStack'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import ROI from '@/components/sections/ROI'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/ui/Footer'

/**
 * Wyxio Solutions Landing Page
 * Premium AI-powered software development company
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust & Partners */}
      <TrustLogos />

      {/* Benefits */}
      <Benefits />

      {/* How It Works */}
      <HowItWorks />

      {/* Services */}
      <Services />

      {/* Portfolio */}
      <Portfolio />

      {/* Technology Stack */}
      <TechStack />

      {/* Team */}
      <Team />

      {/* Testimonials */}
      <Testimonials />

      {/* ROI & Impact */}
      <ROI />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Wyxio Solutions Pvt Ltd',
            alternateName: 'Wyxio',
            url: 'https://wyxio.com',
            logo: 'https://wyxio.com/logo.png',
            description:
              'Enterprise software development company specializing in AI/ML solutions, full-stack web development, and mobile app development',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Hyderabad',
              addressCountry: 'IN',
            },
            sameAs: [
              'https://www.linkedin.com/company/wyxio',
              'https://twitter.com/wyxio',
              'https://github.com/wyxio',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'contact@wyxio.com',
              contactType: 'Customer Service',
              availableLanguage: ['English', 'Hindi'],
            },
            offers: {
              '@type': 'AggregateOffer',
              offerCount: '6',
              offers: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI & Machine Learning Development',
                    description:
                      'Custom ML model development, NLP, computer vision, and AI integration',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Enterprise Web Application Development',
                    description:
                      'Full-stack development using Next.js, React, Django, and Node.js',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Mobile App Development',
                    description:
                      'iOS, Android, and cross-platform mobile applications',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Cloud & DevOps Services',
                    description:
                      'Cloud architecture, CI/CD, and scalable infrastructure',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'UI/UX Design',
                    description: 'Product design, branding, and user experience',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Technology Consultation',
                    description:
                      'Strategic planning and digital transformation consulting',
                  },
                },
              ],
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '50',
            },
          }),
        }}
      />
    </main>
  )
}
