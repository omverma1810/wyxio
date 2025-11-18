'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Target, Clock, Users, CheckCircle, Headphones } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { containerVariants, itemVariants } from '@/components/animations/variants'

const stats = [
  {
    icon: TrendingUp,
    value: 10,
    prefix: '₹',
    suffix: '+ Crore',
    label: 'Revenue Impact Generated',
    color: 'text-accent-emerald',
  },
  {
    icon: Target,
    value: 5,
    prefix: '3-',
    suffix: 'x',
    label: 'Average Revenue Growth',
    description: 'Within 12 Months',
    color: 'text-accent-gold',
  },
  {
    icon: Users,
    value: 50,
    suffix: '+',
    label: 'Enterprise Projects',
    description: 'Successfully Delivered',
    color: 'text-primary-purple',
  },
  {
    icon: CheckCircle,
    value: 98,
    suffix: '%',
    label: 'Client Retention Rate',
    description: 'Long-term Partnerships',
    color: 'text-accent-rose',
  },
  {
    icon: Clock,
    value: 100,
    suffix: '%',
    label: 'On-Time Delivery',
    description: 'Every Project, Every Time',
    color: 'text-primary-blue',
  },
  {
    icon: Headphones,
    value: 24,
    suffix: '/7',
    label: 'Support Availability',
    description: 'Continuous Assistance',
    color: 'text-accent-emerald',
  },
]

/**
 * ROI and impact section with animated statistics
 */
export default function ROI() {
  return (
    <section className="py-20 bg-secondary-midnight/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-purple/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-[128px]" />

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
            Delivering{' '}
            <GradientText as="span">Measurable Business Impact</GradientText>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Our software doesn't just work—it drives exponential growth
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="bg-gradient-primary bg-clip-text text-transparent"
                  />
                </div>
                <p className="text-text-primary font-semibold mb-1">{stat.label}</p>
                {stat.description && (
                  <p className="text-sm text-text-secondary">{stat.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value propositions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 border-l-4 border-accent-emerald"
          >
            <p className="text-text-primary text-lg">
              <span className="font-bold text-accent-emerald">ROI within the first quarter:</span>{' '}
              Our clients see measurable returns from their software investment in just 3 months
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 border-l-4 border-accent-gold"
          >
            <p className="text-text-primary text-lg">
              <span className="font-bold text-accent-gold">Self-paying software:</span>{' '}
              Systems that generate revenue through savings and new business opportunities
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 border-l-4 border-primary-purple"
          >
            <p className="text-text-primary text-lg">
              <span className="font-bold text-primary-purple">From ₹5L to ₹20L+:</span>{' '}
              Real results—average clients see 4x revenue increase within the first year
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
