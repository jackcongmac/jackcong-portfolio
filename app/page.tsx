import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import CaseStudies from '@/components/CaseStudies'
import Awards from '@/components/Awards'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <CaseStudies />
      <Awards />
      <Contact />
    </main>
  )
}
