import Image from 'next/image'
import { siteConfig } from '@/lib/content'

export default function AboutSection() {
  return (
    <section className="relative px-6 py-12">
      {/* Decorative top divider */}
      <div className="ornament-divider mb-8">
        <span className="font-heading text-xs tracking-widest text-brand-accent opacity-60">
          ✦
        </span>
      </div>

      <h2 className="font-heading text-3xl mb-8 italic" style={{ color: '#FFFFFF' }}>
        Um pouco sobre mim
      </h2>

      <div className="space-y-5 max-w-sm mx-auto">
        {siteConfig.about.map((paragraph, i) => (
          <p
            key={i}
            className="font-body text-sm leading-relaxed opacity-80"
            style={{ color: '#FFFFFF' }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Bottom portrait placeholder */}
      <div className="mt-12 -mx-6 overflow-hidden relative h-64">
        <Image src={siteConfig.aboutImage} alt={siteConfig.name} fill className="object-cover object-top" />
      </div>

      {/* Bottom ornament */}
      <div className="ornament-divider mt-12">
        <span className="font-heading text-xs tracking-widest text-brand-accent opacity-40">
          ✦ ✦ ✦
        </span>
      </div>
    </section>
  )
}
