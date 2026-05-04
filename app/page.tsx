import Hero from '@/components/Hero'
import About from '@/components/About'
import CaseStudies from '@/components/CaseStudies'
import Awards from '@/components/Awards'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CaseStudies />
      <Awards />
      <Contact />
    </main>
  )
}
