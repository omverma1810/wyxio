'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Target,
} from 'lucide-react'
import Card from '@/components/ui/Card'
import GradientText from '@/components/ui/GradientText'
import { fadeInVariants } from '@/components/animations/variants'

const services = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Intelligent systems that learn and adapt',
    features: [
      'Custom ML model development',
      'Natural Language Processing',
      'Computer Vision solutions',
      'Predictive analytics',
      'AI integration into existing systems',
    ],
    tech: ['TensorFlow', 'PyTorch', 'OpenAI APIs', 'Hugging Face'],
  },
  {
    id: 'web',
    title: 'Enterprise Web Applications',
    icon: Globe,
    description: 'Scalable full-stack solutions',
    features: [
      'Full-stack development (Next.js, React, Django, Node.js)',
      'Admin panels and dashboards',
      'E-commerce platforms',
      'SaaS products',
      'CMS and content platforms',
    ],
    tech: ['Next.js 14', 'React 18', 'Django REST', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: Smartphone,
    description: 'Native and cross-platform apps',
    features: [
      'iOS and Android native apps',
      'Cross-platform solutions (React Native, Flutter)',
      'Supply chain & inventory management apps',
      'Field data collection applications',
    ],
    tech: ['React Native', 'Flutter', 'Firebase', 'Native integrations'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Robust infrastructure and deployment',
    features: [
      'Cloud architecture (GCP, AWS, Azure)',
      'CI/CD pipeline setup',
      'Scalable infrastructure',
      'Database optimization',
      'Security hardening',
    ],
    tech: ['Docker', 'Kubernetes', 'Google Cloud Run', 'Vercel', 'GitHub Actions'],
  },
  {
    id: 'design',
    title: 'Design & UX',
    icon: Palette,
    description: 'Beautiful, intuitive interfaces',
    features: [
      'UI/UX design',
      'Brand identity',
      'Design systems',
      'Prototyping and user testing',
    ],
    tech: ['Figma', 'Adobe Suite', 'Framer'],
  },
  {
    id: 'consulting',
    title: 'Consultation & Strategy',
    icon: Target,
    description: 'Technology roadmap planning',
    features: [
      'Technology roadmap planning',
      'Digital transformation strategy',
      'Product market fit analysis',
      'Growth marketing tech stack',
    ],
    tech: ['Strategic Planning', 'Market Analysis', 'Tech Assessment'],
  },
]

/**
 * Services section with interactive tabs
 */
export default function Services() {
  const [activeService, setActiveService] = useState(services[0].id)

  const activeServiceData = services.find((s) => s.id === activeService) || services[0]

  return (
    <section id="services" className="py-20 bg-bg-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-purple/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Comprehensive{' '}
            <GradientText as="span">Software Solutions</GradientText>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            End-to-end technology services for modern enterprises
          </p>
        </motion.div>

        {/* Service tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeService === service.id
                  ? 'bg-gradient-primary text-white'
                  : 'glass text-text-secondary hover:text-text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <service.icon className="w-5 h-5" />
              <span className="font-semibold text-sm md:text-base">
                {service.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Active service content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Icon and description */}
                <div className="md:w-1/3">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <activeServiceData.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {activeServiceData.title}
                  </h3>
                  <p className="text-text-secondary">
                    {activeServiceData.description}
                  </p>
                </div>

                {/* Features and tech */}
                <div className="md:w-2/3">
                  <h4 className="text-lg font-bold text-text-primary mb-4">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {activeServiceData.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-text-secondary"
                      >
                        <span className="text-accent-emerald mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-bold text-text-primary mb-4">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeServiceData.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
