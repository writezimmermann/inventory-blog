import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inventory - Michael Zimmermann',
  description: 'Personal blog by Michael Zimmermann',
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