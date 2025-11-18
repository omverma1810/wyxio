'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Code, Briefcase, Palette, Cloud, Target } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { containerVariants, itemVariants } from '@/components/animations/variants'

const teamComposition = [
  {
    role: 'Software Engineers',
    icon: Code,
    description: 'Full-Stack, Mobile, AI/ML',
  },
  {
    role: 'Business Strategists',
    icon: Briefcase,
    description: 'Growth, Marketing, Strategy',
  },
  {
    role: 'UI/UX Designers',
    icon: Palette,
    description: 'Product Design, Branding',
  },
  {
    role: 'DevOps Specialists',
    icon: Cloud,
    description: 'Infrastructure, Security',
  },
  {
    role: 'Project Managers',
    icon: Target,
    description: 'Agile, Delivery Excellence',
  },
  {
    role: 'Domain Experts',
    icon: Users,
    description: 'Industry-Specific Knowledge',
  },
]

/**
 * Team section showcasing expertise and composition
 */
export default function Team() {
  return (
    <section id="team" className="py-20 bg-secondary-midnight/50 relative overflow-hidden">
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
            <GradientText as="span">Engineering Excellence</GradientText> Meets
            Business Acumen
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8"
          >
            A multidisciplinary team of engineers and business strategists
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-text-secondary max-w-3xl mx-auto"
          >
            Our team combines deep technical expertise with business strategy. We're
            engineers who understand P&L, and business minds who code.
          </motion.p>
        </motion.div>

        {/* Team stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 text-center">
            <AnimatedCounter
              end={25}
              suffix="+"
              className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent block mb-2"
            />
            <p className="text-text-secondary">Engineers</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 text-center">
            <AnimatedCounter
              end={10}
              suffix="+"
              className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent block mb-2"
            />
            <p className="text-text-secondary">Business Strategists</p>
          </motion.div>
          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 text-center">
            <AnimatedCounter
              end={15}
              suffix="+"
              className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent block mb-2"
            />
            <p className="text-text-secondary">Years Combined Experience</p>
          </motion.div>
        </motion.div>

        {/* Team composition */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamComposition.map((member, index) => (
            <motion.div
              key={member.role}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <member.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                {member.role}
              </h3>
              <p className="text-sm text-text-secondary">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
