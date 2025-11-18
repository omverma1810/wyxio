'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Brain,
  TrendingUp,
  Layers,
  Handshake,
  Shield,
  Rocket,
} from 'lucide-react'
import Card from '@/components/ui/Card'
import GradientText from '@/components/ui/GradientText'
import { containerVariants, itemVariants } from '@/components/animations/variants'

const benefits = [
  {
    icon: Brain,
    title: 'AI-First Engineering',
    description:
      'Leverage cutting-edge machine learning models that adapt and improve, delivering intelligent automation that scales with your growth',
    color: 'text-primary-purple',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI Delivery',
    description:
      'Our clients see 3-5x revenue growth within 12 months. We build systems that directly impact your bottom line, not just digital presence',
    color: 'text-accent-emerald',
  },
  {
    icon: Layers,
    title: 'Full-Stack Mastery',
    description:
      'From React/Next.js frontends to robust Django/Node.js backends, cloud deployment to mobile apps—we handle every layer of your tech stack',
    color: 'text-primary-blue',
  },
  {
    icon: Handshake,
    title: 'Partnership, Not Just Development',
    description:
      "We maintain and evolve your software long-term. Your success is our metric—we're invested in your continuous growth",
    color: 'text-accent-gold',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description:
      "Bank-level encryption, secure authentication, and compliance-ready architecture. Your data and your clients' trust are protected",
    color: 'text-accent-rose',
  },
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description:
      'From concept to production in weeks, not months. Agile methodology ensures you start seeing ROI faster',
    color: 'text-accent-gold',
  },
]

/**
 * Benefits section with 6 glassmorphism cards
 */
export default function Benefits() {
  return (
    <section className="py-20 bg-bg-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-purple/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-4"
          >
            Why Elite Enterprises Choose{' '}
            <GradientText as="span">Wyxio</GradientText>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            We don't just build software—we engineer business transformation
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={benefit.title} variants={itemVariants}>
              <Card className="h-full">
                <div className="flex flex-col h-full">
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4`}
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
