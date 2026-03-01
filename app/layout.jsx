import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'Syed Muhammad Muhtasham — MERN Stack Developer',
  description:
    'MERN Stack Developer based in Faisalabad, Pakistan. Building full-stack web applications with React, Next.js, Node.js, and MongoDB at Coderacle.',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
