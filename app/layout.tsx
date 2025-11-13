import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SiyaTechPlus | Ultimate Digital Solutions',
  description: 'Professional ecommerce development, RFID solutions, 3D rendering, manufacturing, digital marketing, and CRM systems',
  keywords: 'ecommerce, RFID, 3D rendering, manufacturing, digital marketing, CRM, web development, SiyaTechPlus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
