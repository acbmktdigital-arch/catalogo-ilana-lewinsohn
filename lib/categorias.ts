import { services, type Service } from '@/lib/content'

/* ─── Agrupamento do catálogo ────────────────────────────────────────────
   A home mostra quatro cards em vez de quinze, um por bloco, e cada um leva
   a uma página com os serviços daquele bloco. São os quatro blocos que a
   Ilana propôs no doc 4, aprovados em 04/09/2026.

   Fica separado de lib/content.ts de propósito: content.ts é a lista de
   serviços, e este arquivo é só a maneira de agrupá-los. Mexer no
   agrupamento não deve exigir tocar no catálogo.
   ──────────────────────────────────────────────────────────────────────── */

export type Categoria = {
  slug: string
  titulo: string
  descricao: string
  /* Foto do bloco. Vêm do acervo que ficou sem uso depois das trocas de
     foto — assim nenhuma se repete dentro do próprio bloco, que era o que
     acontecia quando o topo emprestava a imagem de um dos serviços de
     dentro dele. Só trocam se a Ilana pedir alguma específica. */
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
    /* Mãos sobre os pés, na cama de ervas: cuidado um a um, que é do que
       o bloco trata. */
    imagem: '/images/ayurvedica-toque-nos-pes.jpg',
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
    /* Cinco mulheres sob a tenda: é a única foto de grupo do acervo que
       não pertence a nenhum dos dois serviços deste bloco. */
    imagem: '/images/vivencias-imersoes-retiros.jpg',
    servicos: ['rodas-celta-baianas', 'vivencias-imersoes-retiros'],
  },
  {
    slug: 'aprender',
    titulo: 'Aprender',
    descricao: 'Mentorias e materiais de estudo para quem cuida.',
    /* Não usei a antiga da Mentoria Cuidado Autoral, que seria a escolha
       óbvia: o doc 4 diz que ela é a futura foto de capa do catálogo. */
    imagem: '/images/biblioteca-viva.jpg',
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
export function categoriaComoServico(cat: Categoria): Service {
  return {
    id: `categoria-${cat.slug}`,
    slug: cat.slug,
    title: cat.titulo,
    description: cat.descricao,
    image: cat.imagem,
    ctaLabel: 'Saber mais',
    ctaHref: cat.hrefDireto ?? `/${cat.slug}`,
  }
}

export function servicosDaCategoria(cat: Categoria): Service[] {
  /* Percorre a lista da categoria, e não `services`, para a ordem ser a que
     a categoria define. */
  return cat.servicos
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s))
}
