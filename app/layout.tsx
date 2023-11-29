import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
        <Footer />
      </body>
    </html>
  )
}
