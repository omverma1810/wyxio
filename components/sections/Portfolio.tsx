'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'
import { fadeInVariants } from '@/components/animations/variants'

const projects = [
  {
    id: 1,
    title: 'ML Medical Application',
    client: 'VNR-VJIET & JP Morgan Chase Engineer',
    challenge:
      'Develop AI-powered medical diagnostic tool with interactive ML models',
    solution:
      'Built sophisticated machine learning application with intuitive interface',
    impact: 'Client received "Best Paper Award" for ML model implementation',
    tech: ['Python', 'TensorFlow', 'React', 'REST APIs'],
    category: 'AI/ML',
    badge: 'Best Paper Award',
  },
  {
    id: 2,
    title: 'GraySwipe - T-Hub Startup',
    client: 'GraySwipe Software Products (T-Hub Graduate)',
    challenge:
      'Build scalable e-commerce platform and mobile app for growing startup',
    solution: 'Full-stack web platform + native mobile application',
    impact: "Enabled company to graduate from T-Hub's Rubrix program",
    tech: ['Next.js', 'React Native', 'Node.js', 'PostgreSQL'],
    category: 'E-commerce',
    link: 'https://buyer.grayswipe.com/',
  },
  {
    id: 3,
    title: 'Field Genie - Piatrika Biosystems',
    client: 'Piatrika Biosystems Pvt Ltd (Bioinformatics)',
    challenge:
      'Scientific phenotypic data recording app for field researchers and breeders',
    solution:
      'Cross-platform mobile app with offline-first architecture and data analytics',
    impact: 'Deployed on both App Store and Play Store, used by researchers globally',
    tech: ['React Native', 'Python Django', 'SQLite', 'Cloud Sync'],
    category: 'Mobile',
    appStore: 'https://apps.apple.com/in/app/field-genie/id6748252880',
    playStore:
      'https://play.google.com/store/apps/details?id=com.trialapp2',
  },
  {
    id: 4,
    title: 'Ichhadhari Premium Dairy',
    client: 'Premium Dairy Company (Jabalpur, MP)',
    challenge:
      'Supply chain and inventory management for B2B dairy operations',
    solution:
      'Comprehensive dairy management system with procurement, production tracking, vendor management',
    impact: 'Streamlined operations for hotels, restaurants, and business clients',
    tech: ['Next.js 14', 'Django 5.0', 'PostgreSQL', 'Google Cloud Run', 'Vercel'],
    category: 'Enterprise',
    frontend: 'https://ichhadhari-dairy.vercel.app/',
    backend:
      'https://ichhadhari-backend-162541991773.asia-south1.run.app/',
  },
]

/**
 * Portfolio section showcasing featured case studies
 */
export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0)

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[activeProject]

  return (
    <section id="portfolio" className="py-20 bg-secondary-midnight/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Transformative Solutions,{' '}
            <GradientText as="span">Measurable Results</GradientText>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Real businesses, real growth, real partnerships
          </p>
        </motion.div>

        {/* Project showcase */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8">
                {/* Project header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-3xl font-bold text-text-primary">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className="flex items-center space-x-1 px-3 py-1 bg-accent-gold/20 border border-accent-gold/30 rounded-full text-xs font-semibold text-accent-gold">
                          <Award className="w-3 h-3" />
                          <span>{project.badge}</span>
                        </span>
                      )}
                    </div>
                    <p className="text-text-secondary">{project.client}</p>
                  </div>
                  <span className="px-4 py-2 bg-gradient-primary rounded-full text-sm font-semibold text-white">
                    {project.category}
                  </span>
                </div>

                {/* Project details */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-accent-gold mb-2">
                      CHALLENGE
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-accent-emerald mb-2">
                      SOLUTION
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-purple mb-2">
                      IMPACT
                    </h4>
                    <p className="text-text-secondary text-sm">{project.impact}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-text-primary mb-3">
                    TECH STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 glass rounded-full text-sm text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.link ||
                  project.appStore ||
                  project.playStore ||
                  project.frontend ||
                  project.backend) && (
                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-primary rounded-lg text-white font-semibold hover:scale-105 transition-transform"
                      >
                        <span>View Live Site</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.appStore && (
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-lg text-text-primary font-semibold hover:glass-strong transition-all"
                      >
                        <span>App Store</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-lg text-text-primary font-semibold hover:glass-strong transition-all"
                      >
                        <span>Play Store</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.frontend && (
                      <a
                        href={project.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-lg text-text-primary font-semibold hover:glass-strong transition-all"
                      >
                        <span>Frontend</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.backend && (
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-lg text-text-primary font-semibold hover:glass-strong transition-all"
                      >
                        <span>Backend</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              onClick={prevProject}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </Button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeProject
                      ? 'bg-accent-gold w-8'
                      : 'bg-text-secondary/30'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              onClick={nextProject}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Additional projects mention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-4">
            Plus many more: FUSO Textiles, Iclean Hollow Metal Systems, BeSquare
            Solutions, PlantEd, AgriProVision, Alveary Herbals, PinkSurfing, A Space
            Interiors
          </p>
          <Button
            variant="secondary"
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
