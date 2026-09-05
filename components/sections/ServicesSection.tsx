import ServiceCard from '@/components/ui/ServiceCard'
import { categorias, categoriaComoServico } from '@/lib/categorias'

/* A home mostra os quatro blocos do catálogo, não os quinze serviços. Cada
   bloco leva a uma página com os seus.

   Usa o mesmo ServiceCard dos serviços, e não um card próprio: assim altura,
   espaçamento, tipografia e o degradê da foto são idênticos por construção,
   e não há como divergirem quando um dos dois for ajustado. */

export default function ServicesSection() {
  return (
    <section className="py-4 flex flex-col gap-2 sm:gap-3">
      {categorias.map((cat) => (
        <ServiceCard key={cat.slug} service={categoriaComoServico(cat)} />
      ))}
    </section>
  )
}
