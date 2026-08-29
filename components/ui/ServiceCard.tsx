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
      {/* Altura igual em todos os cards — é ela que dá o ritmo regular da lista.
          Se cada card cresce conforme o próprio título, a faixa vazia entre um
          e outro (o gap mais a folga interna de cada um) fica desigual.
          O corte do título se resolve pela fonte, não soltando a altura. */}
      <article className="flex items-stretch h-[104px]">
        {/* Text side */}
        <div className="flex-1 px-4 py-3 flex flex-col justify-center gap-1.5">
          {/* No celular a coluna de texto tem ~170px. A 16px os títulos longos
              cabem em 2 ou 3 linhas, e 3 linhas ainda entram nos 104px. A 20px
              a Bússola quebrava em 4 e vazava para fora do card. */}
          <h2
            className="font-heading text-base sm:text-xl leading-tight italic text-balance"
            style={{ color: '#FFFFFF' }}
          >
            {service.title}
          </h2>
          <span
            /* leading-none: o "SABER MAIS" tem 11px, mas a entrelinha padrão
               reservava ~16px. Os 5px que sobravam eram justamente o que fazia
               um título de 3 linhas não caber nos 104px. */
            className="font-sans text-[11px] leading-none uppercase tracking-[0.12em] font-semibold inline-flex items-center gap-1.5 transition-opacity group-hover:opacity-80"
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
