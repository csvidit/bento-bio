import './globals.css'
import type { Metadata } from 'next'
import { Outfit, Plus_Jakarta_Sans, Manrope} from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })
const pjs = Plus_Jakarta_Sans({ subsets: ['latin'] })
const manrope = Manrope({subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
