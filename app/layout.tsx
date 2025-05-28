import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hammad Yaqub | Portfolio',
  description: 'Created with l0ve',
  generator: 'h-yaqub',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
