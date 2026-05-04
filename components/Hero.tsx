'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay: i * 0.15 },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient overlay covering left side on desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/95 to-canvas/20 z-10 md:w-2/3" />

      {/* Hero image — right side desktop, full background mobile */}
      <div className="absolute inset-0 md:left-1/2">
        <Image
          src="/images/image001.jpg"
          alt="Lucid Gravity Interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-canvas/60 md:bg-transparent" />
      </div>

      {/* Text content — left side */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-12">
        <div className="max-w-xl">
          <motion.p
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-gold font-gt-extended text-xs tracking-[0.3em] uppercase mb-6"
          >
            // Jack Cong
          </motion.p>

          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-gt-extended font-black text-5xl md:text-7xl lg:text-8xl text-primary leading-none tracking-tight mb-6"
          >
            Senior
            <br />
            <span className="text-gold">UX</span>
            <br />
            Design
            <br />
            Leader
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-secondary text-sm md:text-base leading-relaxed mb-8 max-w-sm"
          >
            20+ years crafting luxury automotive experiences.
            iF Design Gold Award 2024. Lucid Motors · BYTON · Telenav.
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="font-gt-extended text-xs tracking-widest uppercase bg-gold text-canvas px-6 py-3 hover:bg-gold/80 transition-colors duration-200"
            >
              View Work
            </a>
            <a
              href="/2026_Jack_resume.pdf"
              target="_blank"
              className="font-gt-extended text-xs tracking-widest uppercase border border-line text-secondary px-6 py-3 hover:border-gold hover:text-gold transition-all duration-200"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-xs tracking-widest uppercase font-gt-extended">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
