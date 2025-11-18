import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wyxio Solutions - AI-Powered Enterprise Software Development',
  description: 'Transform your business with AI-powered software solutions. We design, develop, and deploy enterprise-grade applications that drive measurable ROI. Trusted by Fortune 500 engineers and leading startups.',
  keywords: [
    'AI development',
    'machine learning',
    'enterprise software',
    'full-stack development',
    'mobile app development',
    'SaaS development',
    'software consulting',
    'Hyderabad',
  ],
  authors: [{ name: 'Wyxio Solutions Pvt Ltd' }],
  creator: 'Wyxio Solutions',
  publisher: 'Wyxio Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wyxio.com'),
  openGraph: {
    title: 'Wyxio Solutions - AI-Powered Enterprise Software Development',
    description: 'Transform your business with AI-powered software solutions that drive 3-5x revenue growth.',
    url: 'https://wyxio.com',
    siteName: 'Wyxio Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wyxio Solutions - AI-Powered Enterprise Software Development',
    description: 'Transform your business with AI-powered software solutions that drive 3-5x revenue growth.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
