import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/site'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Kairos — Christian Prayer App', template: '%s · Kairos' },
  description: site.description,
  applicationName: 'Kairos',
  keywords: [
    'Kairos',
    'Christian prayer app',
    'prayer timer',
    'prayer reminders',
    'fasting app',
    'Bible meditation',
    'prayer journal',
    'devotional app',
  ],
  authors: [{ name: site.developer }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Kairos',
    title: 'Kairos — Redeem the time',
    description: site.description,
    url: '/',
    images: [{ url: '/kairos-icon.png', width: 512, height: 512, alt: 'Kairos app icon' }],
  },
  twitter: { card: 'summary', title: 'Kairos — Redeem the time', description: site.description },
  icons: { apple: '/apple-icon.png' },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0e0d13' },
    { media: '(prefers-color-scheme: light)', color: '#faf6ec' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Kairos',
  operatingSystem: 'Android',
  applicationCategory: 'LifestyleApplication',
  description: site.description,
  softwareVersion: site.version,
  url: site.url,
  downloadUrl: site.playUrl,
  author: { '@type': 'Person', name: site.developer },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
