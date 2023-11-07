import type { Metadata } from 'next'
import './globals.css'

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
        <link href="./../tailslim.css" rel="stylesheet" />
        <link href="/tailslim.css" rel="stylesheet" />
      </head>
      <body>
        <main className="flex grow min-h-screen justify-center items-start">
          <div className='max-w-5xl flex flex-col justify-start items-start'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
