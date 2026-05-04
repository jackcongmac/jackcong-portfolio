import SectionReveal from './SectionReveal'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <SectionReveal>
          <p className="text-gold font-gt-extended text-xs tracking-[0.3em] uppercase mb-8">
            // Get In Touch
          </p>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h2 className="font-gt-extended font-black text-4xl md:text-6xl text-primary leading-none mb-6">
            Let&apos;s Work
            <br />
            <span className="text-gold">Together</span>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <p className="text-secondary text-sm mb-12 max-w-md mx-auto">
            Open to senior design leadership roles in automotive, mobility, and technology.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="mailto:jackcongus@gmail.com"
              className="font-gt-extended text-xs tracking-widest uppercase bg-gold text-canvas px-8 py-4 hover:bg-gold/80 transition-colors duration-200"
            >
              jackcongus@gmail.com
            </a>
            <a
              href="tel:+14085930338"
              className="font-gt-extended text-xs tracking-widest uppercase border border-line text-secondary px-8 py-4 hover:border-gold hover:text-gold transition-all duration-200"
            >
              +1 (408) 593-0338
            </a>
          </div>
        </SectionReveal>
        <SectionReveal delay={0.4}>
          <div className="border-t border-line pt-8">
            <p className="text-muted text-xs font-gt-extended tracking-widest">
              © 2026 Jack Cong · Livermore, California · Senior UX Design Leader
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
