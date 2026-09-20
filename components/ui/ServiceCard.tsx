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
      {/* CELULAR (até 639px): altura MÍNIMA de 78px, não altura livre.

          78px é a altura natural de um card de título com duas linhas:
          12+12 de py-3, 2×18,75 do título a 15px/leading-tight, 6 do gap e 11
          do "SABER MAIS" com leading-none. Assim o card de duas linhas não
          muda, e os de uma linha sobem até ele. O resultado é a lista com uma
          altura só.

          Antes a altura era livre, para o texto ficar justo sem ar sobrando —
          e os cards de duas linhas ficavam 20px mais altos que os de uma. A
          Vera preferiu a lista uniforme, em 20/09/2026. A folga que sobra nos
          títulos curtos é distribuída em cima e embaixo pelo justify-center,
          então o "SABER MAIS" não se descola do título.

          É mínima, e não fixa, de propósito: se um dia um título passar a três
          linhas, o card cresce em vez de cortar o texto.

          DESKTOP (640px+): altura fixa de 108px, como sempre foi. */}
      <article className="flex items-stretch min-h-[78px] sm:h-[108px]">
        {/* justify-center nos dois tamanhos: com a altura mínima, os títulos de
            uma linha passam a ter folga, e centralizar joga essa folga metade
            em cima e metade embaixo. Sem isso o texto encostaria no topo e o
            "SABER MAIS" ficaria solto no meio do card. */}
        <div className="flex-1 px-4 py-3 sm:py-4 flex flex-col gap-1.5 sm:gap-2 justify-center">
          {/* 15px no celular: medido com a própria Lora Italic, é o tamanho em
              que todos os títulos cabem em no máximo 2 linhas num aparelho de
              360px. A 16px, "Acompanhamento Terapêutico Integrativo" ia a 3 e
              ficava sendo o único card destoando em altura.
              No desktop segue 20px e a quebra normal, como sempre foi — lá a
              coluna é larga e nada disso era problema. */}
          <h2
            className="font-heading text-[15px] sm:text-xl leading-tight italic text-balance sm:text-wrap"
            style={{ color: '#FFFFFF' }}
          >
            {service.title}
          </h2>
          <span
            /* leading-none: o "SABER MAIS" tem 11px, mas a entrelinha padrão
               reservava ~16px. Os 5px que sobravam eram justamente o que fazia
               um título de 3 linhas não caber nos 104px. */
            /* leading-none no celular: a 11px a entrelinha padrão reservava
               ~16px, e essa sobra invisível entrava na conta do respiro de
               baixo. No desktop não atrapalha, então fica como era. */
            className="font-sans text-[11px] leading-none sm:leading-normal uppercase tracking-[0.12em] font-semibold inline-flex items-center gap-1.5 transition-opacity group-hover:opacity-80"
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
