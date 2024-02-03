import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Montserrat } from 'next/font/google'
import FacebookPixel from '@/components/FacebookPixel'

// Vercel Analitycs and Speed
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Copher',
  description: 'Hermanos Copher, repuestos y piezas.',
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GoogleAPIKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY

  return (
    <html lang="es">
      <head>
        {/** <!-- The callback parameter is required, so we use console.debug as a noop --> */}
        <script async src={`https://maps.googleapis.com/maps/api/js?key=${GoogleAPIKey}&callback=console.debug&libraries=maps,marker&v=beta`}>
        </script>
      </head>
      <body className={montserrat.className}>
        <FacebookPixel />
        <NavBar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
