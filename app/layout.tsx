import type { Metadata, Viewport } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const robotoMono = Roboto_Mono({ 
  subsets: ["latin"],
  variable: '--font-roboto-mono'
});

export const metadata: Metadata = {
  title: 'Advance Safety Features for Automotive | Digital Portfolio',
  description: 'Academic project portfolio showcasing advanced automotive safety features using sensors, GPS, GSM, and microcontroller-based monitoring for accident prevention and real-time vehicle health monitoring.',
  keywords: 'automotive safety, ADAS, advanced driver assistance systems, accident prevention, GPS tracking, GSM alerts, ultrasonic sensors, vehicle safety, road safety, microcontroller, ATmega328P, tire pressure monitoring, brake monitoring',
  authors: [
    { name: 'Disha Rakesh Shinde' },
    { name: 'Mayuri Satish Pardeshi' },
    { name: 'Vaishnavi Bhagwan Mahajan' }
  ],
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Advance Safety Features for Automotive',
    description: 'Proactive automotive safety system using sensors and microcontroller technology',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

import { GoogleAnalytics } from '@next/third-parties/google'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <GoogleAnalytics gaId="G-48N5MRYKM6" />
      </body>
    </html>
  )
}
