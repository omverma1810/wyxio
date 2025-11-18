'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'

const testimonials = [
  {
    id: 1,
    quote:
      "Wyxio didn't just build our app—they architected a system that scaled with our Series A growth. The team's understanding of both tech and business strategy is rare.",
    name: 'Founder',
    position: 'GraySwipe Software Products',
    company: 'T-Hub Graduate Startup',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The ML models Wyxio developed earned our team the Best Paper Award. Their AI expertise is genuinely world-class.',
    name: 'Engineer',
    position: 'JP Morgan Chase & Co',
    company: 'Fortune 500 Financial Services',
    rating: 5,
  },
  {
    id: 3,
    quote:
      "We've worked with multiple dev agencies. Wyxio is the only one that stayed with us post-launch. True partners.",
    name: 'Operations Manager',
    position: 'FUSO Textiles',
    company: 'Textile Manufacturing',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'The dairy management system transformed our operations. Real-time tracking, seamless vendor management, and incredible support.',
    name: 'Business Owner',
    position: 'Ichhadhari Premium Dairy',
    company: 'Food & Beverage',
    rating: 5,
  },
]

/**
 * Testimonials section with carousel
 */
export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const testimonial = testimonials[activeTestimonial]

  return (
    <section className="py-20 bg-bg-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-purple/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Loved by Founders, <GradientText as="span">Trusted by Enterprises</GradientText>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it—see what our partners say
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-12 text-center">
                {/* Quote icon */}
                <Quote className="w-12 h-12 text-accent-gold mx-auto mb-6 opacity-50" />

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent-gold fill-accent-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-text-primary font-medium mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="text-lg font-bold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-text-secondary">{testimonial.position}</p>
                  <p className="text-sm text-text-secondary/70">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              onClick={prevTestimonial}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'bg-accent-gold w-8'
                      : 'bg-text-secondary/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              onClick={nextTestimonial}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
