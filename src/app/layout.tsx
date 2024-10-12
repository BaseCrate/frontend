import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "../components/navigation/navbar";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BaseCrate',
  description: 'Your Onchain Portfolio Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
