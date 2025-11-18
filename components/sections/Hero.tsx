'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp, Award } from 'lucide-react'
import Button from '@/components/ui/Button'
import GradientText from '@/components/ui/GradientText'
import { containerVariants, itemVariants } from '@/components/animations/variants'

/**
 * Hero section with gradient background, animated particles, and CTAs
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark noise-texture">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-purple/30 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-blue/30 rounded-full blur-[128px] animate-float" style={{ animationDelay: '2s' }} />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 border-2 border-primary-purple/30 rounded-lg"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-16 h-16 border-2 border-primary-blue/30 rounded-full"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Trust badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 glass rounded-full px-6 py-2 mb-8"
          >
            <Award className="w-4 h-4 text-accent-gold" />
            <span className="text-sm text-text-secondary">
              Trusted by T-Hub Startups, Fortune 500 Engineers & Leading Enterprises
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your Business With{' '}
            <br className="hidden sm:block" />
            <GradientText as="span" className="inline-block">
              AI-Powered Software Solutions
            </GradientText>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We design, develop, and deploy enterprise-grade software that drives{' '}
            <span className="text-text-primary font-semibold">measurable ROI</span>.
            Partner with engineers who understand both technology and business growth.
          </motion.p>

          {/* Problem statement */}
          <motion.div
            variants={itemVariants}
            className="glass-strong rounded-2xl p-6 mb-12 max-w-3xl mx-auto border-l-4 border-accent-gold"
          >
            <div className="flex items-start space-x-3">
              <Sparkles className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
              <p className="text-text-primary text-left">
                Most software fails because it's built without understanding your business.
                We don't just code—we strategize, architect, and deliver solutions that{' '}
                <span className="font-bold text-accent-emerald">multiply your revenue</span>.
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              variant="primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Key metrics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="glass rounded-xl p-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-accent-emerald" />
                <span className="text-2xl font-bold text-text-primary">3-5x</span>
              </div>
              <p className="text-sm text-text-secondary">Revenue Growth</p>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Sparkles className="w-5 h-5 text-accent-gold" />
                <span className="text-2xl font-bold text-text-primary">50+</span>
              </div>
              <p className="text-sm text-text-secondary">Projects Delivered</p>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-primary-purple" />
                <span className="text-2xl font-bold text-text-primary">98%</span>
              </div>
              <p className="text-sm text-text-secondary">Client Retention</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-text-secondary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
