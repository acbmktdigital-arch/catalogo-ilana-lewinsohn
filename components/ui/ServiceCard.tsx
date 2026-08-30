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
      {/* Duas regras, uma para cada contexto.

          CELULAR (até 639px): sem altura fixa, cada card tem a altura do
          próprio conteúdo. É o que permite ter texto justo E intervalo igual
          entre os cards ao mesmo tempo. Com altura travada sobra ar, e esse ar
          ou desfigura o texto (empurrando o "SABER MAIS" para longe do título)
          ou desiguala o intervalo (se o bloco for centralizado). Sem sobra não
          há o que distribuir. O preço é a altura variar de card para card.

          DESKTOP (640px+): volta a altura fixa de 108px, como sempre foi. Aqui
          o container trava em 448px, a coluna de texto fica bem mais larga e
          nenhum título passa de 2 linhas — então a folga sobrando é pequena e
          o desenho não sofre com ela. */}
      <article className="flex items-stretch sm:h-[108px]">
        {/* Celular: título e "SABER MAIS" colados, sem folga a distribuir — o
            card cresce com eles, e a faixa entre dois cards é sempre 12 + 8
            (o gap da lista) + 12.
            Desktop: volta o respiro de 16px e a centralização de antes, que
            só fazem sentido junto com a altura fixa. */}
        <div className="flex-1 px-4 py-3 sm:py-4 flex flex-col gap-1.5 sm:gap-2 sm:justify-center">
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
