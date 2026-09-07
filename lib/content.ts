// ─── Site Configuration ────────────────────────────────────────────────────
export const siteConfig = {
  name: 'Ilana Lewinsohn',
  handle: '@ilana.lewinsohn',
  tagline: 'Seja bem-vinda!',
  description:
    'Mulher medicina (bruja), terapeuta integrativa xamânica, facilitadora de Rodas de Mulheres e criadora do método MASSIXA — Um Universo de Cuidado, unindo Ayurveda, Xamanismo, Alquimia, Yoga e a sabedoria da floresta.',
  /* O hero destaca o nome do método dentro da frase acima: tudo em negrito e,
     dentro dele, só a parte depois do travessão também em itálico. A frase
     segue inteira e em texto puro em `description`, que é o que vai para os
     metadados — o destaque é visual, não faz parte do conteúdo. */
  descriptionDestaque: 'MASSIXA — Um Universo de Cuidado',
  descriptionDestaqueItalico: 'Um Universo de Cuidado',
  about: [
    'Ilana Lewinsohn é a Guardiã da Descida do Instituto Canto da Floresta, em Arraial d\'Ajuda, Bahia. Bióloga, educadora e terapeuta corporal, ela transita há mais de duas décadas entre o estudo da natureza e os caminhos humanos de transformação, sempre a partir de uma certeza simples: somos natureza, sem separação.',
    'Ao longo de sua trajetória se aprofundou em Yoga, Ayurveda, Xamanismo e Alquimia, e é autora do método MASSIXA — Massagem Integrativa Xamânica —, além de facilitar Rodas de Mulheres desde 2012. Seu cuidado une toque, ervas, rituais e escuta, sempre construído a partir do que cada momento pede.',
    'Sua missão é apoiar o retorno de cada pessoa a si mesma, através da reconexão com a Terra, com o corpo e com os próprios ciclos — um convite para descer, enraizar e florescer.',
  ],
  heroImage: '/images/hero-ilana-arvore.jpg',
  /* Última linha do rodapé das páginas de venda.
     A Ilana pediu para manter e acrescentar o nome da empresa depois do "e com". */
  creditoRodape: 'feito com o Catálogo Holístico',
  aboutImage: '/images/bio.jpg',
  social: {
    instagram: 'https://instagram.com/ilana.lewinsohn',
    whatsapp: 'https://wa.me/557399855339',
  },
}

/* ─── Ambiente e materiais ──────────────────────────────────────────────────
   Aparece só nas páginas de atendimento PRESENCIAL (massagens e imersões).
   Editar aqui muda em todas de uma vez.
   ──────────────────────────────────────────────────────────────────────── */
export const ambientePresencial = [
  'Ambiente aconchegante',
  'Materiais 100% naturais',
  'Óleos vegetais e óleos essenciais puros, de primeira qualidade',
  'Óleo sempre aquecido. Manta térmica e cobertores sempre que for necessário, para manter o aconchego e convidar você ao relaxamento profundo.',
]

// ─── Services ──────────────────────────────────────────────────────────────
export type Service = {
  id: string
  slug: string
  title: string
  subtitle?: string
  description: string
  image: string
  ctaLabel: string
  ctaHref: string
  color?: string
}

export const services: Service[] = [
  {
    id: 'massixa-essencial',
    slug: 'massixa-essencial',
    title: 'MASSIXA Essencial',
    description: 'Toque em presença, escuta e elementos naturais para relaxamento profundo e reconexão com o corpo.',
    image: '/images/massixa-essencial.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/massixa-essencial',
  },
  {
    id: 'toque-da-jurema',
    slug: 'toque-da-jurema',
    title: 'MASSIXA Temática | Toque da Jurema',
    description: 'Toque vigoroso sobre cama de ervas, inspirado na força cabocla, para limpeza energética profunda.',
    image: '/images/toque-da-jurema-cama-de-ervas.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/toque-da-jurema',
  },
  {
    id: 'madalena',
    slug: 'madalena',
    title: 'MASSIXA Temática | Madalena',
    description: 'Cacau cerimonial e toque de rosas vermelhas para abrir o coração e reconectar com a potência feminina.',
    image: '/images/madalena.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/madalena',
  },
  {
    id: 'anahata-terra',
    slug: 'anahata-terra',
    title: 'MASSIXA Temática | Anahata Terra',
    description: 'Argila, pedras quentes e ervas para enraizar o corpo e desacelerar a mente.',
    image: '/images/anahata-terra.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/anahata-terra',
  },
  {
    id: 'imersoes-massixa',
    slug: 'imersoes-massixa',
    title: 'Imersões MASSIXA (inclui especial gestantes)',
    description: 'Três horas dedicadas só a você — escuta, ritual, toque e ervas. Com o recorte Colo da Terra para gestantes.',
    /* A mesma foto que abre a página. É quadrada e o card é uma faixa
       horizontal, então ele mostra a parte central: o gongo, o macete e o
       rosto de quem recebe — a cabeça da Ilana fica de fora, que é o corte
       inevitável numa faixa dessa altura. */
    image: '/images/reconecta-gongo-v3.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/imersoes-massixa',
  },
  {
    id: 'cuidados-ayurvedicos',
    slug: 'cuidados-ayurvedicos',
    title: 'Cuidados Plenamente Ayurvédicos',
    description: 'Abhyangas ou Garshana específicos para cada dosha, com óleos aquecidos e toques próprios para cada situação.',
    image: '/images/ayurvedica-oleo-morno.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/cuidados-ayurvedicos',
  },
  {
    id: 'shirodhara',
    slug: 'shirodhara',
    title: 'Shirodhara',
    description: 'Fluxo contínuo de óleo sobre o terceiro olho para acalmar profundamente corpo e mente.',
    /* Recorte em faixa da mesma foto do topo da página: pega do vasilhame
       até o rosto de quem recebe, que é o que cabe numa proporção larga. */
    image: '/images/shirodhara-vasilhame-card.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/shirodhara',
  },
  {
    id: 'bussola-orientacao-xamanica',
    slug: 'bussola-orientacao-xamanica',
    title: 'Bússola: Orientação Integrativa Xamânica',
    description: 'Escuta e orientação xamânica para reencontrar o rumo, com roteiro personalizado por escrito.',
    image: '/images/bussola-maos-no-cajado.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/bussola-orientacao-xamanica',
  },
  {
    id: 'acompanhamento-terapeutico',
    slug: 'acompanhamento-terapeutico',
    title: 'Acompanhamento Contínuo',
    description: 'Processo online continuado de escuta, orientação e práticas integrativas ao longo do tempo.',
    image: '/images/acompanhamento-terapeutico.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/acompanhamento-terapeutico',
  },
  {
    id: 'rodas-celta-baianas',
    slug: 'rodas-celta-baianas',
    title: 'Rodas Celta-Baianas: Feminino Sagrado',
    description: 'Vivências em grupo de mulheres para fortalecimento e desfrute femininos. Aqui a medicina é o círculo e a ritualística.',
    image: '/images/rodas-fogueira-noturna.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/rodas-celta-baianas',
  },
  {
    id: 'vivencias-imersoes-retiros',
    slug: 'vivencias-imersoes-retiros',
    title: 'Vivências, Imersões e Retiros',
    description: 'Experiências construídas de forma personalizada para grupos, comunidades, equipes empresariais e instituições.',
    image: '/images/vivencias-circulo-manto.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/vivencias-imersoes-retiros',
  },
  {
    id: 'mentoria-cuidado-autoral',
    slug: 'mentoria-cuidado-autoral',
    title: 'Travessia da Semente: Mentoria Cuidado Autoral',
    description: 'Mentoria para terapeutas que querem fortalecer sua identidade profissional e linguagem própria de cuidado.',
    image: '/images/mentoria-cuidado-autoral-aula.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/mentoria-cuidado-autoral',
  },
  {
    id: 'mentoria-vem-pra-roda-mulher',
    slug: 'mentoria-vem-pra-roda-mulher',
    title: 'Mentoria Vem Pra Roda, Mulher!',
    description: 'Mentoria para mulheres que desejam criar e conduzir Rodas de Mulheres.',
    image: '/images/mentoria-vem-pra-roda-mulher.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/mentoria-vem-pra-roda-mulher',
  },
  {
    id: 'biblioteca-viva',
    slug: 'biblioteca-viva',
    title: 'Biblioteca Viva',
    description: 'E-books e materiais de estudo sobre MASSIXA, Rodas Celta-Baianas e cozinha vegana ancestral.',
    image: '/images/biblioteca-viva-livros.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/biblioteca-viva',
  },
  {
    id: 'botica-da-bruxa',
    slug: 'botica-da-bruxa',
    title: 'Botica da Bruxa',
    description: 'Preparados artesanais da Ervaria: pomadas, tinturas, óleos autorais e rapé.',
    image: '/images/botica-da-bruxa.jpg',
    ctaLabel: 'Saber mais',
    ctaHref: '/botica-da-bruxa',
  },
]
