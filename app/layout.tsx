import type { Metadata } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ReturnTop from '@/components/ReturnTop'

export const metadata: Metadata = {
  title: 'CASA-Bio',
  description: 'Designed by Knowinnovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col grow min-h-screen justify-start items-center overflow-x-clip flex-wrap">
        <Navbar />
        <main className='max-w-7xl w-full flex flex-col grow justify-start items-start px-4 pt-4 pb-16'>
          
          {children}
        </main>
        <ReturnTop />
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-XHWPXNSF89" />
    </html>
  )
}
