import { services, type Service } from '@/lib/content'

/* ─── Agrupamento do catálogo ────────────────────────────────────────────
   A home mostra um card por bloco, em vez da lista inteira de serviços, e
   cada um leva a uma página com os serviços daquele bloco. São os seis
   blocos que a Ilana definiu no doc 5.

   Fica separado de lib/content.ts de propósito: content.ts é a lista de
   serviços, e este arquivo é só a maneira de agrupá-los. Mexer no
   agrupamento não deve exigir tocar no catálogo.
   ──────────────────────────────────────────────────────────────────────── */

export type Categoria = {
  slug: string
  titulo: string
  descricao: string
  /* Foto do card na home. Nenhuma se repete dentro do próprio bloco: quando
     o card emprestava a imagem de um serviço de dentro dele, a mesma foto
     aparecia duas vezes na mesma tela. */
  imagem: string
  /* Foto do topo da página do bloco, quando ela deve ser diferente da do
     card. Sem isso, a página usa a mesma. São contextos distintos: o card é
     uma miniatura que precisa chamar, e o topo é uma faixa larga. */
  imagemCapa?: string
  /* Slugs dos serviços que aparecem na página do bloco */
  servicos: string[]
  /* Quando o bloco tem um serviço só, o card vai direto para a página dele
     em vez de passar por uma lista de um item. */
  hrefDireto?: string
}

export const categorias: Categoria[] = [
  {
    slug: 'mentorias',
    titulo: 'Mentorias',
    descricao: 'Formação online para quem cuida e para quem conduz círculos.',
    imagem: '/images/biblioteca-viva.jpg',
    servicos: ['mentoria-cuidado-autoral', 'mentoria-vem-pra-roda-mulher'],
  },
  {
    slug: 'atendimentos-online',
    titulo: 'Atendimentos Individuais Online',
    descricao: 'Escuta e orientação de onde você estiver.',
    /* Retrato da Ilana: online é conversar com ela, e nenhuma foto de
       ambiente diria isso. A original é vertical e, na faixa de 200px do
       topo, o corte central pegaria o tronco e cortaria o rosto — por isso
       está recortada na proporção da própria faixa. */
    imagem: '/images/ilana-retrato-faixa.jpg',
    servicos: ['bussola-orientacao-xamanica', 'acompanhamento-terapeutico'],
  },
  {
    slug: 'atendimentos-presenciais',
    titulo: 'Atendimentos Individuais Presenciais',
    descricao: 'Massagens, cuidados ayurvédicos e imersões no Instituto Canto da Floresta.',
    imagem: '/images/ayurvedica-toque-nos-pes.jpg',
    /* As massagens ficam listadas direto aqui, sem um card "Massagens" no
       meio: a Ilana levantou as duas possibilidades no doc 5, e a Vera
       escolheu esta, que mantém a navegação em dois níveis. */
    servicos: [
      'massixa-essencial',
      'toque-da-jurema',
      'madalena',
      'anahata-terra',
      'cuidados-ayurvedicos',
      'shirodhara',
      'imersoes-massixa',
    ],
  },
  {
    slug: 'vivencias-em-grupo',
    titulo: 'Vivências em Grupo',
    descricao: 'Encontros coletivos, no Instituto ou onde você chamar.',
    /* Card e capa diferentes por escolha da Ilana: no card, a defumação em
       roda; no topo da página, a que já estava, das mulheres em pé cheirando
       ervas. */
    imagem: '/images/vivencias-em-grupo-defumacao.jpg',
    imagemCapa: '/images/vivencias-imersoes-retiros.jpg',
    servicos: ['rodas-celta-baianas', 'vivencias-imersoes-retiros'],
  },
  {
    /* Biblioteca e Botica têm um serviço cada, então o card vai direto para
       a página — uma lista de um item só seria um clique a mais. */
    slug: 'biblioteca-viva',
    titulo: 'Biblioteca Viva',
    descricao: 'E-books e materiais de estudo, em desenvolvimento.',
    imagem: '/images/biblioteca-viva-livros.jpg',
    servicos: ['biblioteca-viva'],
    hrefDireto: '/biblioteca-viva',
  },
  {
    slug: 'botica-da-bruxa',
    titulo: 'Botica da Bruxa',
    descricao: 'Preparados artesanais de Ervaria, em pequenos lotes.',
    /* Só o card da home usa esta foto — a Botica vai direto para a própria
       página, que segue com a dela. A original é vertical (4000x6000) e o
       card é uma faixa horizontal estreita, então está recortada nessa
       proporção, centrada na cuia. */
    imagem: '/images/botica-cuia-no-fogo.jpg',
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
