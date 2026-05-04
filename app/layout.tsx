import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Jack Cong — Senior UX Design Leader',
  description: 'Portfolio of Jack Cong, Senior Product Design & UX Leader. iF Design Gold Award 2024. 20+ years in automotive UX — Lucid Motors, BYTON, Telenav.',
  openGraph: {
    title: 'Jack Cong — Senior UX Design Leader',
    description: 'Automotive UX leader with 20+ years experience. iF Design Gold Award 2024.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-canvas text-primary font-gt-standard antialiased">
        <Nav />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
