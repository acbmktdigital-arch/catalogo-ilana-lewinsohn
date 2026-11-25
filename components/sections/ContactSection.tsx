import { contatos, type Contato } from '@/lib/content'

/* "Fale comigo" — lista de botões de contato abaixo dos blocos da home.
   Os links e títulos ficam em `contatos`, no lib/content.ts.

   Cores: o card é o mesmo oliva dos blocos, então o texto vai em branco
   (dourado sobre oliva dá 2,8:1). O ícone fica num quadrado do fundo escuro,
   onde o dourado da marca tem 6,8:1. A seta usa o dourado claro do ServiceCard. */
const DOURADO_CLARO = '#EDD9A3'

function Icone({ tipo }: { tipo: Contato['icone'] }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--cor-destaque)',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  if (tipo === 'whatsapp') {
    return (
      <svg {...props}>
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 20.5l1.6-4.9A8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4z" />
        <path d="M9 8.8c0 3.3 2.9 6.2 6.2 6.2l1-1.3-1.9-1-.9.8a4.6 4.6 0 0 1-2.1-2.1l.8-.9-1-1.9z" />
      </svg>
    )
  }
  if (tipo === 'grupo') {
    return (
      <svg {...props}>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 19.5c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
        <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6" />
        <path d="M18 14.3c1.8.7 3 2.6 3 5.2" />
      </svg>
    )
  }
  return (
    <svg {...props}>
      <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3.2-3.2a4.5 4.5 0 0 0-6.4-6.4L12 5.6" />
      <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3.2 3.2a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2" />
    </svg>
  )
}

function ConteudoCard({ contato }: { contato: Contato }) {
  return (
    <>
      <span
        className="w-11 h-11 rounded-lg shrink-0 flex items-center justify-center"
        style={{ background: 'var(--cor-fundo)' }}
      >
        <Icone tipo={contato.icone} />
      </span>
      <span className="flex-1 font-sans text-[15px] font-semibold" style={{ color: '#FFFFFF' }}>
        {contato.titulo}
      </span>
      <span aria-hidden="true" className="text-lg" style={{ color: DOURADO_CLARO }}>
        ›
      </span>
    </>
  )
}

export default function ContactSection() {
  const classe = 'flex items-center gap-4 rounded-xl mx-4 px-4 py-3.5'

  return (
    <section className="pt-6 pb-2">
      {/* Frase longa: em caixa alta e espaçada como era o "FALE COMIGO" ela
          ocuparia três linhas. Em itálico, no tamanho dos títulos dos cards,
          fica em duas. Dourado sobre o fundo escuro: 6,8:1. */}
      <h2
        className="font-heading italic text-[15px] sm:text-base leading-snug text-center text-balance mx-auto max-w-[300px] mb-4"
        style={{ color: 'var(--cor-destaque)' }}
      >
        Participe do meu grupo para receber informações de eventos e cursos
      </h2>
      <div className="flex flex-col gap-2 sm:gap-3">
        {contatos.map((c) =>
          c.url ? (
            <a
              key={c.titulo}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${classe} transition-opacity hover:opacity-90`}
              style={{ background: 'var(--cor-card)' }}
            >
              <ConteudoCard contato={c} />
            </a>
          ) : (
            /* Sem link ainda: aparece apagado, como espaço reservado. */
            <div
              key={c.titulo}
              className={classe}
              style={{ background: 'var(--cor-card)', opacity: 0.45 }}
              aria-disabled="true"
            >
              <ConteudoCard contato={c} />
            </div>
          ),
        )}
      </div>
    </section>
  )
}
