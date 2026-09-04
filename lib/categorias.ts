import { services, type Service } from '@/lib/content'

/* ─── Agrupamento do catálogo (piloto) ───────────────────────────────────
   A home passa a mostrar quatro cards em vez de quinze, um por bloco, e
   cada um leva a uma página com os serviços daquele bloco. Os quatro
   blocos são os que a Ilana propôs no doc 4.

   Vive num arquivo próprio, e não em lib/content.ts, para o piloto não
   tocar em nada que a home atual usa. Se for aprovado, isso migra e o
   arquivo some.
   ──────────────────────────────────────────────────────────────────────── */

export type Categoria = {
  slug: string
  titulo: string
  descricao: string
  /* Foto do bloco. São emprestadas dos serviços, por decisão da Vera em
     04/09/2026 — só se a Ilana pedir alguma específica é que trocam. */
  imagem: string
  /* Slugs dos serviços que aparecem na página do bloco */
  servicos: string[]
  /* Quando o bloco tem um serviço só, o card vai direto para a página dele
     em vez de passar por uma lista de um item. */
  hrefDireto?: string
}

export const categorias: Categoria[] = [
  {
    slug: 'atendimentos-individuais',
    titulo: 'Atendimentos Individuais',
    descricao: 'Sessões um a um, presenciais no Instituto ou online.',
    imagem: '/images/massixa-essencial.jpg',
    servicos: [
      'massixa-essencial',
      'toque-da-jurema',
      'madalena',
      'anahata-terra',
      'imersoes-massixa',
      'cuidados-ayurvedicos',
      'shirodhara',
      'bussola-orientacao-xamanica',
      'acompanhamento-terapeutico',
    ],
  },
  {
    slug: 'vivencias-em-grupo',
    titulo: 'Vivências em Grupo',
    descricao: 'Encontros coletivos, no Instituto ou onde você chamar.',
    imagem: '/images/vivencias-roda-em-circulo.jpg',
    servicos: ['rodas-celta-baianas', 'vivencias-imersoes-retiros'],
  },
  {
    slug: 'aprender',
    titulo: 'Aprender',
    descricao: 'Mentorias e materiais de estudo para quem cuida.',
    imagem: '/images/mentoria-cuidado-autoral-aula.jpg',
    servicos: ['mentoria-cuidado-autoral', 'mentoria-vem-pra-roda-mulher', 'biblioteca-viva'],
  },
  {
    slug: 'botica-da-bruxa',
    titulo: 'Botica da Bruxa',
    descricao: 'Preparados artesanais de Ervaria, em pequenos lotes.',
    imagem: '/images/botica-da-bruxa.jpg',
    servicos: ['botica-da-bruxa'],
    hrefDireto: '/botica-da-bruxa',
  },
]

/* O card do bloco usa o MESMO componente dos cards de serviço, para o
   desenho ser idêntico — por isso a categoria é convertida no formato de
   Service em vez de ganhar um card próprio. */
export function categoriaComoServico(cat: Categoria, baseHref: string): Service {
  return {
    id: `categoria-${cat.slug}`,
    slug: cat.slug,
    title: cat.titulo,
    description: cat.descricao,
    image: cat.imagem,
    ctaLabel: 'Saber mais',
    ctaHref: cat.hrefDireto ?? `${baseHref}/${cat.slug}`,
  }
}

export function servicosDaCategoria(cat: Categoria): Service[] {
  /* Percorre a lista da categoria, e não `services`, para a ordem ser a que
     a categoria define. */
  return cat.servicos
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s))
}
