import Image from 'next/image'
import { siteConfig } from '@/lib/content'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main hero image */}
      <div className="relative w-full h-[240px]">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(35,33,18,0) 40%, rgba(35,33,18,1) 100%)',
          }}
        />
        <Image src={siteConfig.heroImage} alt={siteConfig.name} fill className="object-cover object-top" priority />

        {/* Profile badge */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
            <Image src={siteConfig.heroImage} alt={siteConfig.name} fill className="object-cover object-top" />
          </div>
          <div>
            <p className="font-heading text-sm font-semibold leading-tight" style={{ color: '#FFFFFF' }}>
              {siteConfig.name}
            </p>
            <p className="font-sans text-xs mt-0.5 opacity-70" style={{ color: '#FFFFFF' }}>
              {siteConfig.handle}
            </p>
          </div>
        </div>
      </div>

      {/* A descrição vem imediatamente abaixo do nome (que fecha a foto), sem
          o "Seja bem-vinda!" cortando no meio — ele desce e passa a convidar
          para o catálogo logo abaixo. */}
      <div className="relative z-10 px-6 pt-5 pb-6 text-center">
        <p className="font-body text-sm leading-relaxed max-w-sm mx-auto opacity-80" style={{ color: '#FFFFFF' }}>
          {siteConfig.description}
        </p>
        <h1 className="font-heading text-3xl mt-7 tracking-wide italic" style={{ color: '#FFFFFF' }}>
          {siteConfig.tagline}
        </h1>
      </div>
    </section>
  )
}
