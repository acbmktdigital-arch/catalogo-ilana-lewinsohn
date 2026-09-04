import ServiceCard from '@/components/ui/ServiceCard'
import { categorias, categoriaComoServico } from '@/lib/categorias'

/* Piloto: a home mostra quatro cards de bloco em vez dos quinze serviços.
   Usa o mesmo ServiceCard, então estrutura, altura, espaçamento e estética
   são exatamente os dos cards atuais. */

export default function ServicesSectionAgrupada({
  baseHref,
}: {
  /* Prefixo dos links dos blocos. No piloto é "/home-agrupada"; se isso for
     para a home de verdade, passa a ser "" e os links viram "/aprender". */
  baseHref: string
}) {
  return (
    <section className="py-4 flex flex-col gap-2 sm:gap-3">
      {categorias.map((cat) => (
        <ServiceCard key={cat.slug} service={categoriaComoServico(cat, baseHref)} />
      ))}
    </section>
  )
}
