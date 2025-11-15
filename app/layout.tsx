import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KASS Ventures - Financial Excellence',
  description: 'Your trusted partner in financial excellence and strategic investment solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

