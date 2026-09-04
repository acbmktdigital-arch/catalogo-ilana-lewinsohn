import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ServiceCard from '@/components/ui/ServiceCard'
import { categorias, servicosDaCategoria } from '@/lib/categorias'
import { siteConfig } from '@/lib/content'

/* Página de um bloco do catálogo: a foto do bloco, o título, a descrição e
   os cards dos serviços que pertencem a ele. Mesmo ServiceCard da home, para
   não haver diferença de desenho entre um nível e outro. */

export function generateStaticParams() {
  return categorias.map((c) => ({ categoria: c.slug }))
}

export const metadata = { robots: { index: false, follow: false } }

export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  const cat = categorias.find((c) => c.slug === params.categoria)
  if (!cat) notFound()

  const lista = servicosDaCategoria(cat)

  return (
    <main
      className="min-h-screen max-w-md mx-auto relative overflow-hidden"
      style={{ background: 'var(--cor-fundo)' }}
    >
      <div
        className="px-4 py-2 text-center font-sans text-[10px] uppercase tracking-[0.18em] font-semibold"
        style={{ background: 'rgba(201,162,39,0.14)', color: 'var(--cor-destaque)' }}
      >
        Página de teste · catálogo agrupado
      </div>

      {/* Topo: mesma faixa com degradê do hero das páginas de venda */}
      <div className="relative w-full h-[200px]">
        <Image src={cat.imagem} alt="" fill className="object-cover" priority />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(35,33,18,0) 35%, rgba(35,33,18,1) 100%)',
          }}
        />
      </div>

      <div className="px-4 -mt-6 relative z-20 text-center mb-6">
        <p
          className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold mb-2"
          style={{ color: 'var(--cor-destaque)' }}
        >
          {siteConfig.name}
        </p>
        <h1 className="font-heading text-2xl sm:text-3xl mb-2" style={{ color: '#FFFFFF' }}>
          {cat.titulo}
        </h1>
        <p
          className="font-body text-xs leading-relaxed max-w-[320px] mx-auto"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          {cat.descricao}
        </p>
      </div>

      <section className="pb-4 flex flex-col gap-2 sm:gap-3">
        {lista.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>

      <footer className="pt-6 pb-10 text-center">
        <Link
          href="/home-agrupada"
          className="font-sans text-sm sm:text-base font-medium py-2 inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
          style={{ color: 'var(--cor-destaque)' }}
        >
          ← Voltar ao catálogo
        </Link>
      </footer>
    </main>
  )
}
