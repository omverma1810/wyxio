# Wyxio Solutions - Premium Landing Page

Enterprise software development company specializing in AI/ML solutions, full-stack web development, and mobile app development.

## Features

- **Premium Design**: Glassmorphism effects, gradient animations, and sophisticated UI
- **Responsive**: Fully responsive across all devices and breakpoints
- **Performance**: Optimized for Core Web Vitals with lazy loading and code splitting
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and ARIA labels
- **SEO**: Structured data, meta tags, and optimized for search engines
- **Animations**: Smooth Framer Motion animations and micro-interactions

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
wyxio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── animations/
│   │   └── variants.ts
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustLogos.tsx
│   │   ├── Benefits.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── TechStack.tsx
│   │   ├── Team.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ROI.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   └── ui/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── GradientText.tsx
│       └── AnimatedCounter.tsx
├── lib/
│   └── utils.ts
└── public/
    └── images/
```

## Sections

1. **Navigation**: Sticky navbar with glassmorphism effect
2. **Hero**: Full-screen hero with animated gradients and CTAs
3. **Trust Logos**: Partner showcase with trust indicators
4. **Benefits**: 6 glassmorphism cards highlighting key value propositions
5. **How It Works**: Timeline showing the 3-step process
6. **Services**: Interactive tabs showcasing all services
7. **Portfolio**: Carousel featuring 4 case studies
8. **Tech Stack**: Animated grid of technologies
9. **Team**: Team composition with animated stats
10. **Testimonials**: Client testimonials carousel
11. **ROI**: Impact metrics with animated counters
12. **FAQ**: Accordion-style frequently asked questions
13. **Final CTA**: Contact section with multiple CTAs
14. **Footer**: Multi-column footer with newsletter signup

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    purple: '#6B46C1',
    blue: '#2563EB',
  },
  // ... more colors
}
```

### Content

Update content in respective component files in `components/sections/`.

### Animations

Modify animation variants in `components/animations/variants.ts`.

## Performance

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: 90+ across all categories

## Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

### Docker

```bash
docker build -t wyxio .
docker run -p 3000:3000 wyxio
```

## License

© 2024 Wyxio Solutions Pvt Ltd. All rights reserved.

## Contact

- **Website**: https://wyxio.com
- **Email**: contact@wyxio.com
- **Location**: Hyderabad, India
