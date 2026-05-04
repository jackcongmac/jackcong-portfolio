import Image from 'next/image'
import SectionReveal from '@/components/SectionReveal'

type Row =
  | { type: 'full'; src: string }
  | { type: 'pair'; srcs: [string, string] }

function buildRows(images: string[]): Row[] {
  const rows: Row[] = []
  let i = 0
  while (i < images.length) {
    if (i % 3 === 0) {
      rows.push({ type: 'full', src: images[i] })
      i++
    } else {
      const srcs: [string, string] = [images[i], images[i + 1] ?? images[i]]
      rows.push({ type: 'pair', srcs })
      i += 2
    }
  }
  return rows
}

export default function CaseGallery({ images }: { images: string[] }) {
  const rows = buildRows(images)
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-4">
        {rows.map((row, i) => (
          <SectionReveal key={i} delay={0.05 * i}>
            {row.type === 'full' ? (
              <div className="relative w-full aspect-video overflow-hidden">
                <Image src={row.src} alt="Case study visual" fill className="object-cover" />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {row.srcs.map((src) => (
                  <div key={src} className="relative aspect-video overflow-hidden">
                    <Image src={src} alt="Case study visual" fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
