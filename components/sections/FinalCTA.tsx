'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Shield, Clock, FileText } from 'lucide-react'
import Button from '@/components/ui/Button'
import GradientText from '@/components/ui/GradientText'
import { containerVariants, itemVariants } from '@/components/animations/variants'

/**
 * Final CTA section with dramatic background and contact options
 */
export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 bg-bg-dark relative overflow-hidden">
      {/* Dramatic background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-purple/20 rounded-full blur-[150px]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/20 rounded-full blur-[128px]" />

      {/* Floating particles */}
      <motion.div
        className="absolute top-20 right-40 w-4 h-4 bg-accent-gold/50 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-40 left-40 w-3 h-3 bg-primary-purple/50 rounded-full"
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-text-primary mb-6"
          >
            Ready to <GradientText as="span">Transform Your Business</GradientText>?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-text-secondary mb-12 leading-relaxed"
          >
            Join 50+ enterprises who trust Wyxio to power their digital transformation.
            <br className="hidden sm:block" />
            Let's build software that multiplies your revenue.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              variant="primary"
              className="group w-full sm:w-auto text-lg px-10 py-5"
            >
              Book Your Free Strategy Session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-lg px-10 py-5"
              onClick={() =>
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Our Portfolio
            </Button>
          </motion.div>

          {/* Contact options */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300"
            >
              <Mail className="w-8 h-8 text-accent-gold mx-auto mb-3" />
              <p className="text-sm text-text-secondary mb-2">Email Us</p>
              <a
                href="mailto:contact@wyxio.com"
                className="text-text-primary hover:text-accent-gold transition-colors font-semibold"
              >
                contact@wyxio.com
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300"
            >
              <Phone className="w-8 h-8 text-accent-emerald mx-auto mb-3" />
              <p className="text-sm text-text-secondary mb-2">Call Us</p>
              <a
                href="tel:+91"
                className="text-text-primary hover:text-accent-emerald transition-colors font-semibold"
              >
                +91 [Phone Number]
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300"
            >
              <MapPin className="w-8 h-8 text-primary-purple mx-auto mb-3" />
              <p className="text-sm text-text-secondary mb-2">Visit Us</p>
              <p className="text-text-primary font-semibold">Hyderabad, India</p>
            </motion.div>
          </motion.div>

          {/* Trust reinforcement */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary"
          >
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-accent-gold" />
              <span>Free 60-minute consultation—no obligations</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-accent-emerald" />
              <span>Transparent pricing and timelines</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-primary-purple" />
              <span>NDA protection for your ideas</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
