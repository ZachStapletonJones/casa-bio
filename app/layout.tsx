import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Casa Bio',
  description: 'Designed by Knowinnovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="tailslim.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <main className="flex grow min-h-screen justify-center items-start">
          <div className='max-w-5xl flex flex-col justify-start items-start'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
