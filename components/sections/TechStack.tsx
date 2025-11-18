'use client'

import React from 'react'
import { motion } from 'framer-motion'
import GradientText from '@/components/ui/GradientText'
import { containerVariants, itemVariants } from '@/components/animations/variants'

const techCategories = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    technologies: ['Django', 'Node.js', 'Python', 'FastAPI', 'Express'],
  },
  {
    category: 'Mobile',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    category: 'AI/ML',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn'],
  },
  {
    category: 'Database',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase'],
  },
  {
    category: 'Cloud',
    technologies: ['Google Cloud', 'AWS', 'Vercel', 'Azure', 'DigitalOcean'],
  },
  {
    category: 'DevOps',
    technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Terraform'],
  },
]

/**
 * Technology stack section with animated grid
 */
export default function TechStack() {
  return (
    <section id="technology" className="py-20 bg-bg-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-purple/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-[128px]" />

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
            Built With{' '}
            <GradientText as="span">Industry-Leading Technologies</GradientText>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            We don't compromise—only premium, proven tech stacks
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-text-primary mb-4 bg-gradient-primary bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.technologies.map((tech) => (
                  <motion.div
                    key={tech}
                    className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                    <span className="text-sm">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary">
            And many more technologies tailored to your specific needs
          </p>
        </motion.div>
      </div>
    </section>
  )
}
