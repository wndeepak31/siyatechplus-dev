import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SiyaTechPlus – RFID Technology, Ecommerce Platforms & Digital Business Solutions',
  description:
    'SiyaTechPlus delivers advanced RFID systems, ecommerce solutions, digital automation, and real-time tracking technologies to help businesses optimize operations and scale efficiently.',
  keywords:
    'RFID technology, ecommerce development, business automation, digital transformation, real-time tracking, inventory management, warehouse automation, CRM systems, branding solutions, SiyaTechPlus',
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://www.siyatechplus.com'
  },
  openGraph: {
    title: 'SiyaTechPlus – RFID Technology, Ecommerce Platforms & Digital Business Solutions',
    description:
      'Transform your business with RFID automation, ecommerce platforms, and digital growth solutions by SiyaTechPlus.',
    url: 'https://www.siyatechplus.com',
    siteName: 'SiyaTechPlus',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiyaTechPlus – RFID Technology, Ecommerce Platforms & Digital Business Solutions',
    description:
      'RFID automation, ecommerce development, technology solutions to scale modern businesses.',
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5FCKSLH5');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FCKSLH5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
