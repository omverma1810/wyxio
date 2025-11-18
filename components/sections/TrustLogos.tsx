'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Zap, GraduationCap, Award } from 'lucide-react'
import { fadeInVariants } from '@/components/animations/variants'

const partners = [
  {
    name: 'JP Morgan Chase',
    category: 'Fortune 500',
    icon: Building2,
    description: 'Financial Excellence',
  },
  {
    name: 'T-Hub',
    category: 'Startup Ecosystem',
    icon: Zap,
    description: 'Innovation Hub',
  },
  {
    name: 'VNR-VJIET',
    category: 'Academic Excellence',
    icon: GraduationCap,
    description: 'Educational Partner',
  },
  {
    name: 'Leading Enterprises',
    category: 'Industry Leaders',
    icon: Award,
    description: 'Trusted Partners',
  },
]

/**
 * Trust section showcasing partner categories and trust indicators
 */
export default function TrustLogos() {
  return (
    <section className="py-16 bg-secondary-midnight/50 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-purple/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Trusted by Innovative Companies & Institutions
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From Fortune 500 engineers to cutting-edge startups and academic institutions
          </p>
        </motion.div>

        {/* Partner categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:glass-strong transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <partner.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">
                {partner.name}
              </h3>
              <p className="text-sm text-text-secondary mb-2">{partner.category}</p>
              <p className="text-xs text-text-secondary/70">{partner.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-8 text-center"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent-emerald rounded-full" />
            <span className="text-text-secondary">
              <span className="font-bold text-text-primary">50+</span> Projects Delivered
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent-gold rounded-full" />
            <span className="text-text-secondary">
              <span className="font-bold text-text-primary">98%</span> Client Retention
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary-purple rounded-full" />
            <span className="text-text-secondary">
              <span className="font-bold text-text-primary">₹10Cr+</span> Revenue Impact
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
