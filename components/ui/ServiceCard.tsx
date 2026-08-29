import Link from 'next/link'
import Image from 'next/image'
import type { Service } from '@/lib/content'

type ServiceCardProps = {
  service: Service
}

/* Dourado claro: o dourado da marca (#C9A227) sobre o oliva do card daria
   2,8:1 de contraste. Este tom mantém o dourado e sobe para 4,8:1, acima do
   mínimo de leitura — importante porque é ele que sinaliza "isto é clicável". */
const DOURADO_CLARO = '#EDD9A3'

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={service.ctaHref}
      aria-label={`${service.ctaLabel}: ${service.title}`}
      className="service-card block relative overflow-hidden rounded-xl mx-4 group"
      style={{ background: 'var(--cor-card)' }}
    >
      {/* min-h, não h: 108px é o ritmo que os cards curtos mantêm, mas título
          longo precisa poder crescer. Com altura travada, "Bússola: Orientação
          Integrativa Xamânica" quebrava em 4 linhas e vazava para fora do card
          — o overflow-hidden cortava o topo do título e o "SABER MAIS". */}
      <article className="flex items-stretch min-h-[108px]">
        {/* Text side */}
        <div className="flex-1 p-4 flex flex-col justify-center gap-2">
          {/* Um passo menor no celular, onde a coluna de texto tem ~170px:
              segura o número de linhas sem encolher o título no desktop. */}
          <h2
            className="font-heading text-lg sm:text-xl leading-tight italic text-balance"
            style={{ color: '#FFFFFF' }}
          >
            {service.title}
          </h2>
          <span
            className="font-sans text-[11px] uppercase tracking-[0.12em] font-semibold inline-flex items-center gap-1.5 transition-opacity group-hover:opacity-80"
            style={{ color: DOURADO_CLARO }}
          >
            {service.ctaLabel}
            <span aria-hidden="true">→</span>
          </span>
        </div>

        {/* Image side */}
        <div className="relative w-[38%] shrink-0 overflow-hidden">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover object-center opacity-80"
          />
          {/* Fade edge overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(to right, rgba(84,95,55,1) 0%, rgba(84,95,55,0) 30%)',
            }}
          />
        </div>
      </article>
    </Link>
  )
}
