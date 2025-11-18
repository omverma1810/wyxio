'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'
import { fadeInVariants } from '@/components/animations/variants'

const faqs = [
  {
    question: 'What makes Wyxio different from other development agencies?',
    answer:
      "We're not a dev shop—we're business partners. Our team includes engineers AND business graduates who understand growth, marketing, and ROI. We maintain your software long-term and provide strategic consultation beyond just code.",
  },
  {
    question: 'How long does a typical project take?',
    answer:
      "Most projects launch within 6-12 weeks depending on complexity. We use agile methodology with weekly demos, so you see progress continuously. Enterprise applications may take 3-6 months, but you'll have working prototypes within weeks.",
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      "Absolutely. We believe in long-term partnerships. All our clients receive maintenance packages, feature updates, and strategic consultation. We're invested in your continuous growth—your success is our success.",
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      "We've delivered solutions for healthcare, textile/fashion, real estate, agriculture, dairy/food, fintech, and more. Our AI/ML expertise and full-stack capabilities translate across industries. If it involves software, we can build it.",
  },
  {
    question: "What's the typical investment range for a project?",
    answer:
      'Projects typically range from ₹5L to ₹50L+ depending on scope. We provide detailed proposals with clear deliverables and timelines. Our focus is ROI—most clients see 3-5x returns within the first year.',
  },
  {
    question: 'Can you integrate AI/ML into our existing systems?',
    answer:
      "Yes! We specialize in retrofitting AI capabilities into legacy systems. Whether it's adding predictive analytics, automation, or intelligent features, we architect solutions that enhance rather than replace your current infrastructure.",
  },
  {
    question: 'Do you offer free consultations?',
    answer:
      'Yes, we offer a complimentary 60-minute strategy session where we analyze your business, identify technology opportunities, and outline a potential roadmap. No sales pressure—just strategic insights.',
  },
  {
    question: 'What if we need changes after the project is delivered?',
    answer:
      'All projects include a warranty period for bug fixes. For feature additions and enhancements, we offer flexible maintenance packages. Most clients opt for our ongoing partnership model.',
  },
]

/**
 * FAQ section with accordion
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-bg-dark relative overflow-hidden">
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
            <GradientText as="span">Frequently Asked</GradientText> Questions
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to know about working with Wyxio
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'glass-strong' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-text-primary pr-8">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
