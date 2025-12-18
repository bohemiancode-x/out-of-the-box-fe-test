import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hall of Zero Limits',
  description: 'Discover your legacy in the Hall of Zero Limits',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />
      </head>
      <body className="bg-dark text-white antialiased font-gilroy">
        {children}
      </body>
    </html>
  )
}
