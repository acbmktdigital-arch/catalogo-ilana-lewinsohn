import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/content'

export type CardItem = {
  icon: string
  title: string
  desc: string
}

type PricingOption = {
  label: string
  price: string
  description: string
}

type SalesPageTemplateProps = {
  serviceLabel: string
  heroTitle: React.ReactNode
  heroSubtitle: string
  heroImage: string
  heroCTALabel: string

  painPoints: CardItem[]

  whatIsTitle: React.ReactNode
  whatIsTexts: string[]
  whatIsQuote?: string
  whatIsImage: string
  whatIsCTALabel: string

  benefitsTitle: string
  benefitsSubtitle: string
  benefits: CardItem[]

  includedItems: string[]
  includedCTALabel: string

  credentials?: string[]
  aboutCTALabel: string

  faqItems: { q: string; a: string }[]

  pricingTitle: string
  pricingSubtitle: string
  priceOriginal?: string
  priceFinal?: string
  pricingOptions?: PricingOption[]
  priceNote: string
  pricingCTALabel: string

  whatsappUrl: string
  whatsappUrls?: string[]
  checkoutUrl?: string
}

export default function SalesPageTemplate({
  serviceLabel,
  heroTitle,
  heroSubtitle,
  heroImage,
  heroCTALabel,
  painPoints,
  whatIsTitle,
  whatIsTexts,
  whatIsQuote,
  whatIsImage,
  whatIsCTALabel,
  benefitsTitle,
  benefitsSubtitle,
  benefits,
  includedItems,
  includedCTALabel,
  credentials,
  aboutCTALabel,
  faqItems,
  pricingTitle,
  pricingSubtitle,
  priceOriginal,
  priceFinal,
  pricingOptions,
  priceNote,
  pricingCTALabel,
  whatsappUrl,
  whatsappUrls,
  checkoutUrl,
}: SalesPageTemplateProps) {
  const ctaUrl = checkoutUrl ?? whatsappUrl
  return (
    <main className="min-h-screen max-w-md mx-auto relative overflow-hidden">

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="relative w-full h-[260px]">
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to bottom, rgba(35,33,18,0) 40%, rgba(35,33,18,1) 100%)' }}
          />
          <Image src={heroImage} alt="" fill className="object-cover object-center" priority />
        </div>
        <div className="px-6 pb-10 text-center">
          <p className="font-sans text-xs tracking-widest uppercase mb-4 opacity-70" style={{ color: '#FFFFFF' }}>
            {serviceLabel}
          </p>
          <h1 className="font-heading text-4xl leading-tight mb-4" style={{ color: '#FFFFFF' }}>
            {heroTitle}
          </h1>
          <p className="font-body text-sm leading-relaxed mb-8 max-w-xs mx-auto opacity-80" style={{ color: '#FFFFFF' }}>
            {heroSubtitle}
          </p>
          <a href={ctaUrl} className="btn-sales">
            {heroCTALabel}
          </a>
        </div>
      </section>

      {/* ── 2. PAIN POINTS ──────────────────────────────── */}
      <section className="bg-card px-6 py-12">
        <h2 className="font-heading text-2xl text-center mb-2 leading-snug" style={{ color: '#FFFFFF' }}>
          Você se reconhece nisso?
        </h2>
        <p className="font-body text-xs text-center mb-8 opacity-70" style={{ color: '#FFFFFF' }}>
          Frequentemente os bloqueios não são físicos — são energéticos.
        </p>
        <div className="flex flex-col gap-3">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="rounded-xl p-4 flex items-start gap-4"
              style={{ background: '#FFFFFF', color: '#2C2C2C', border: '1px solid rgba(201,162,39,0.25)' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: '#FFFFFF' }}
              >
                <span className="text-brand-accent text-sm leading-none">{p.icon}</span>
              </div>
              <div>
                <p className="font-sans text-brand-black text-sm font-semibold mb-1 leading-tight">
                  {p.title}
                </p>
                <p className="font-body text-brand-black text-sm leading-relaxed opacity-60">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. O QUE É ──────────────────────────────────── */}
      <section className="bg-white px-6 py-12">
        <h2 className="font-heading text-2xl text-brand-black italic mb-5 leading-snug">
          {whatIsTitle}
        </h2>
        {whatIsTexts.map((text, i) => (
          <p key={i} className="font-body text-brand-black text-sm leading-relaxed mb-4 opacity-80">
            {text}
          </p>
        ))}
        {whatIsQuote && (
          <p
            className="font-body text-sm leading-relaxed font-semibold italic mb-6 pl-4 text-brand-black"
            style={{ borderLeft: '2px solid var(--cor-destaque)' }}
          >
            {whatIsQuote}
          </p>
        )}
        <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-8" style={{ border: '1px solid rgba(201,162,39,0.25)' }}>
          <Image src={whatIsImage} alt="" fill className="object-cover" />
        </div>
        <a href={ctaUrl} className="btn-sales">
          {whatIsCTALabel}
        </a>
      </section>

      {/* ── 4. BENEFÍCIOS ───────────────────────────────── */}
      <section className="bg-brand-bg px-6 py-12">
        <h2 className="font-heading text-2xl text-center mb-2 leading-snug" style={{ color: '#FFFFFF' }}>
          {benefitsTitle}
        </h2>
        <p className="font-body text-xs text-center mb-8 opacity-70" style={{ color: '#FFFFFF' }}>
          {benefitsSubtitle}
        </p>
        <div className="flex flex-col gap-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-xl p-4 flex items-center gap-4"
              style={{ border: '1px solid rgba(201,162,39,0.25)', background: '#FFFFFF', color: '#2C2C2C' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'rgba(201,162,39,0.05)' }}
              >
                <span className="text-lg leading-none" style={{ color: 'var(--cor-destaque)' }}>
                  {b.icon}
                </span>
              </div>
              <div>
                <p className="font-sans text-brand-black text-sm font-semibold mb-1 leading-tight">
                  {b.title}
                </p>
                <p className="font-body text-brand-black text-sm leading-relaxed opacity-70">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. INCLUSO ──────────────────────────────────── */}
      <section className="px-6 py-12">
        <div className="bg-white rounded-2xl p-6" style={{ color: '#2C2C2C' }}>
          <h2 className="font-heading text-xl text-brand-black text-center mb-6 leading-snug">
            O que está incluído na sua sessão
          </h2>
          <div className="flex flex-col gap-3 mb-6">
            {includedItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="text-sm mt-0.5 shrink-0 font-bold"
                  style={{ color: 'var(--cor-destaque)' }}
                >
                  ✓
                </span>
                <p className="font-body text-brand-black text-sm leading-relaxed opacity-75">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <a href={ctaUrl} className="btn-sales">
            {includedCTALabel}
          </a>
        </div>
      </section>

      {/* ── 6. PREÇO ────────────────────────────────────── */}
      <section className="relative overflow-hidden py-12 px-6">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="" fill className="object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(35,33,18,0.7) 0%, rgba(35,33,18,0.85) 100%)' }}
          />
        </div>
        <div className="relative z-10">
          {pricingOptions ? (
            <>
              <h2 className="font-heading text-2xl italic mb-8 text-center" style={{ color: '#FFFFFF' }}>
                {pricingTitle}
              </h2>
              <p className="font-body text-sm mb-8 opacity-70 text-center" style={{ color: '#FFFFFF' }}>
                {pricingSubtitle}
              </p>
              <div className="flex flex-col gap-4">
                {pricingOptions.map((option, idx) => {
                  const priceCtaUrl = whatsappUrls?.[idx] || ctaUrl
                  return (
                    <div key={idx} className="rounded-2xl p-6 text-center bg-white" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
                      <p className="font-body text-brand-black text-sm mb-4 opacity-70 font-semibold">
                        {option.label}
                      </p>
                      <p className="font-heading text-4xl text-brand-black italic mb-3">
                        {option.price}
                      </p>
                      <p className="font-body text-brand-black text-xs mb-6 opacity-60">
                        {option.description}
                      </p>
                      <a href={priceCtaUrl} className="btn-sales mb-4">
                        {pricingCTALabel}
                      </a>
                    </div>
                  )
                })}
              </div>
              <div className="flex items-center justify-center gap-6 mt-8">
                <span className="font-sans text-xs opacity-60 flex items-center gap-1" style={{color: '#FFFFFF'}}>
                  🔒 Pagamento Seguro
                </span>
                <span className="font-sans text-xs opacity-60 flex items-center gap-1" style={{color: '#FFFFFF'}}>
                  ✦ Acesso Imediato
                </span>
              </div>
            </>
          ) : (
            <div className="rounded-2xl p-6 text-center bg-white" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.08)' }}>
              <h2 className="font-heading text-2xl italic mb-2" style={{color: '#2C2C2C'}}>
                {pricingTitle}
              </h2>
              <p className="font-body text-sm mb-8 opacity-70" style={{color: '#2C2C2C'}}>
                {pricingSubtitle}
              </p>
              {priceOriginal && (
                <p className="font-body text-brand-black text-sm line-through opacity-40 mb-1">
                  De {priceOriginal}
                </p>
              )}
              <p className="font-heading text-5xl text-brand-black italic mb-2">
                {priceFinal}
              </p>
              <p className="font-body text-brand-black text-xs mb-8 opacity-60">
                {priceNote}
              </p>
              <a href={ctaUrl} className="btn-sales mb-6">
                {pricingCTALabel}
              </a>
              <div className="flex items-center justify-center gap-6 mt-5">
                <span className="font-sans text-xs opacity-60 flex items-center gap-1" style={{color: '#2C2C2C'}}>
                  🔒 Pagamento Seguro
                </span>
                <span className="font-sans text-xs opacity-60 flex items-center gap-1" style={{color: '#2C2C2C'}}>
                  ✦ Acesso Imediato
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 7. SOBRE A TERAPEUTA ────────────────────────── */}
      <section className="bg-white px-6 py-12">
        <p
          className="font-sans text-xs tracking-widest uppercase font-semibold mb-2"
          style={{ color: 'var(--cor-destaque)' }}
        >
          Sua Terapeuta
        </p>
        <h2 className="font-heading text-3xl text-brand-black italic mb-5">
          {siteConfig.name}
        </h2>
        {siteConfig.about.map((p, i) => (
          <p key={i} className="font-body text-brand-black text-sm leading-relaxed mb-3 opacity-80">
            {p}
          </p>
        ))}

        {credentials && credentials.length > 0 && (
          <ul className="space-y-2 mb-6">
            {credentials.map((c, i) => (
              <li key={i} className="flex items-center gap-2 font-body text-brand-black text-sm">
                <span className="text-xs font-bold shrink-0" style={{ color: 'var(--cor-destaque)' }}>✓</span>
                {c}
              </li>
            ))}
          </ul>
        )}
        <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6" style={{ border: '1px solid rgba(201,162,39,0.25)' }}>
          <Image
            src={siteConfig.heroImage}
            alt={siteConfig.name}
            fill
            className="object-cover object-top"
          />
        </div>
        <a href={ctaUrl} className="btn-sales">
          {aboutCTALabel}
        </a>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────── */}
      <section className="bg-card px-6 py-12">
        <h2 className="font-heading text-2xl italic mb-8 leading-snug" style={{ color: '#FFFFFF' }}>
          Perguntas Frequentes
        </h2>
        <div className="flex flex-col gap-4">
          {faqItems.map((item, i) => (
            <details key={i} className="group rounded-xl overflow-hidden" style={{ border: '1px solid rgba(201,162,39,0.25)', background: '#FFFFFF', color: '#2C2C2C' }}>
              <summary
                className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none font-sans text-brand-black text-sm font-semibold"
                style={{ background: 'rgba(201,162,39,0.05)' }}
              >
                {item.q}
                <span
                  className="shrink-0 text-xs transition-transform group-open:rotate-180"
                  style={{ color: 'var(--cor-destaque)' }}
                >
                  ▼
                </span>
              </summary>
              <div className="px-5 py-4">
                <p className="font-body text-brand-black text-sm leading-relaxed opacity-80">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── RODAPÉ ──────────────────────────────────────── */}
      <footer className="px-6 pt-2 pb-10 text-center" style={{ background: 'var(--cor-fundo)' }}>
        <p className="font-body text-xs leading-relaxed opacity-60 mb-5 max-w-xs mx-auto" style={{color: '#FFFFFF'}}>
          Este serviço é terapêutico e holístico. Não substitui tratamentos médicos,
          psicológicos, nutricionais ou farmacológicos.
        </p>
        <Link
          href="/"
          className="font-sans text-xs opacity-60 hover:opacity-100 transition-opacity" style={{color: '#FFFFFF'}}
        >
          ← Volte à página principal
        </Link>
        <p className="font-heading text-sm italic opacity-50 mt-3" style={{color: '#FFFFFF'}}>
          {siteConfig.name} © {new Date().getFullYear()}
        </p>
        <p className="font-sans text-xs opacity-40 mt-1" style={{color: '#FFFFFF'}}>
          feito com o Catálogo Holístico
        </p>
      </footer>

    </main>
  )
}
