'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Code, Rocket } from 'lucide-react'
import Card from '@/components/ui/Card'
import GradientText from '@/components/ui/GradientText'
import { containerVariants, itemVariants } from '@/components/animations/variants'

const steps = [
  {
    number: '01',
    title: 'Strategic Discovery',
    description:
      "We deep-dive into your business model, pain points, and growth objectives. This isn't a sales call—it's a strategic session where we identify technology opportunities you might be missing",
    icon: Compass,
    timeline: 'Week 1',
    color: 'from-primary-purple to-primary-blue',
  },
  {
    number: '02',
    title: 'Intelligent Development',
    description:
      'Our engineers design scalable architecture, build with premium tech stacks (React, Next.js, Django, AI/ML frameworks), and conduct rigorous testing. You get weekly demos and full transparency',
    icon: Code,
    timeline: 'Weeks 2-8',
    color: 'from-primary-blue to-accent-emerald',
  },
  {
    number: '03',
    title: 'Deployment & Growth',
    description:
      'We launch your software on robust infrastructure (GCP, AWS, Vercel), train your team, and provide ongoing optimization. Your system evolves as your business scales',
    icon: Rocket,
    timeline: 'Week 9 & Beyond',
    color: 'from-accent-emerald to-accent-gold',
  },
]

/**
 * How It Works section with timeline
 */
export default function HowItWorks() {
  return (
    <section className="py-20 bg-secondary-midnight/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-4"
          >
            Your Journey to{' '}
            <GradientText as="span">Digital Transformation</GradientText>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            A battle-tested process refined across 50+ successful projects
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-8 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Step number and icon */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-bg-dark rounded-full flex items-center justify-center border-2 border-accent-gold">
                    <span className="text-xs font-bold text-accent-gold">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-4">
                        {step.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-purple/20 to-primary-blue/20 rounded-full border border-primary-purple/30">
                        <span className="text-sm font-semibold text-text-primary">
                          {step.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-32 w-0.5 h-24 bg-gradient-to-b from-primary-purple to-primary-blue opacity-30" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
