'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (pathname === '/password') return null

  const isHome = pathname === '/'
  const prefix = isHome ? '' : '/'

  const links = [
    { href: `${prefix}#about`, label: 'About' },
    { href: `${prefix}#experience`, label: 'Career' },
    { href: `${prefix}#work`, label: 'Work' },
    { href: `${prefix}#awards`, label: 'Awards' },
    { href: `${prefix}#contact`, label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-canvas/95 backdrop-blur-sm border-b border-line' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-gt-extended font-black text-sm tracking-widest text-primary uppercase hover:text-gold transition-colors duration-200">
          // Jack Cong
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-secondary hover:text-primary text-xs tracking-widest uppercase transition-colors duration-200 font-gt-extended"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-primary transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-primary transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-primary transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-canvas border-t border-line px-6 py-6 flex flex-col gap-6"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-secondary text-sm tracking-widest uppercase font-gt-extended"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
