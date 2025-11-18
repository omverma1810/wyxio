'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Github, Instagram } from 'lucide-react'
import { fadeInVariants } from '@/components/animations/variants'

const footerLinks = {
  services: [
    { name: 'AI & Machine Learning', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile App Development', href: '#services' },
    { name: 'Cloud & DevOps', href: '#services' },
    { name: 'Consultation', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#team' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Technology', href: '#technology' },
    { name: 'Contact', href: '#contact' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
]

/**
 * Footer component with multiple columns and newsletter signup
 */
export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gradient-secondary border-t border-white/5 relative overflow-hidden">
      {/* Background grid pattern */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Logo and about */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">W</span>
              </div>
              <span className="text-2xl font-bold text-text-primary">Wyxio</span>
            </div>
            <p className="text-text-secondary mb-4 max-w-sm">
              Enterprise software solutions that drive business growth through
              AI-powered technology and strategic innovation.
            </p>
            <p className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">
              Design. Develop. Deploy. Dominate.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-text-primary font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-text-primary font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-text-primary font-bold mb-4">Stay Updated</h3>
            <p className="text-text-secondary text-sm mb-4">
              Subscribe to our newsletter for insights and updates
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary-purple transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5"
        >
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-gradient-primary transition-all group"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-text-secondary">
            <p>© 2024 Wyxio Solutions Pvt Ltd. All rights reserved.</p>
            <p>Hyderabad, India | Delivering Globally</p>
          </div>
        </motion.div>

        {/* Made with love */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-xs text-text-secondary/50">
            Crafted with precision and passion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
