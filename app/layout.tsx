import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Final Countdown',
  description: 'Countdown to important exams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen pb-8">
          {children}
        </main>
        <div className="fixed bottom-2 right-2 text-white opacity-70 text-xs sm:text-sm">
          github/mafwbh
        </div>
      </body>
    </html>
  )
}

