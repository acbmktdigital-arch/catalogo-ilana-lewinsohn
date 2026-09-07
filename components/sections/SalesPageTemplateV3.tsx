'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig, ambientePresencial } from '@/lib/content'
import { categorias } from '@/lib/categorias'
import BookingModalV3, { ModalidadeAgendamento } from '@/components/ui/BookingModalV3'
import AmbientSoundToggleV3 from '@/components/ui/AmbientSoundToggleV3'

export type Transformacao = {
  antes: string
  depois: string
}

export type PrecoOpcao = {
  /* Aceita JSX para casos com mais de uma linha (ex.: Reconecta / Colo da Terra) */
  label: React.ReactNode
  valor: string
  descricao: string
}

type SalesPageTemplateV3Props = {
  serviceLabel: string
  heroTitle: React.ReactNode
  heroSubtitle: string
  /* Par de fotos em arco no topo — exclusivo da página de Imersões.
     Omitir nas demais: o hero abre direto no rótulo e no título. */
  heroImageA?: string
  heroImageB?: string
  /* Foto que abre a página */
  heroImageWide: string
  /* 'alto' dá mais altura à moldura — para fotos verticais, onde a faixa
     baixa cortaria parte do assunto. Padrão é a faixa panorâmica. */
  heroAspecto?: 'padrao' | 'alto'
  heroCTALabel: string

  whatIsTitle: React.ReactNode
  whatIsTexts: React.ReactNode[]
  whatIsQuote?: string
  /* Bloco com título próprio depois da citação, para quando a página abriga
     um segundo assunto (ex.: Colo da Terra dentro das Imersões) */
  subSecao?: {
    titulo: React.ReactNode
    subtitulo?: string
    textos: React.ReactNode[]
  }

  /* Opcionais: a Ilana pediu que as Rodas Celta-Baianas não tenham o quadro
     de dores e transformações. Sem `transformations`, a seção inteira some. */
  transformationTitle?: string
  transformationSubtitle?: string
  transformations?: Transformacao[]

  /* Painéis de lista, no lugar do quadro de dores e transformações. A Botica
     não tem dor nenhuma a resolver: tem produto e descrição. Mesma moldura do
     painel de transformação, mas sem a seta — aqui não há um "antes". */
  paineisDeLista?: {
    titulo: string
    subtitulo?: string
    itens: { nome: React.ReactNode; descricao: React.ReactNode }[]
  }[]

  /* Bloco curto logo depois do cartão de preço: um parágrafo e um botão
     próprio. Nas Rodas é o convite para levar uma roda a outra cidade — vem
     depois dos valores porque é uma segunda intenção, não o caminho principal
     da página. O botão abre o modal já com essa opção marcada, para a pessoa
     não precisar escolher de novo. */
  convitePosPreco?: {
    texto: string
    label: string
    modalidadeId: string
  }
  /* Segundo painel de transformação, para quando a página abriga dois
     assuntos com dores distintas (ex.: Colo da Terra dentro das Imersões).
     A Ilana escreveu conjuntos separados; misturar num painel só apagaria
     a diferença entre quem vem descansar e quem vem gestando. */
  transformacaoSecundaria?: {
    titulo: string
    subtitulo: string
    itens: Transformacao[]
  }

  /* Opcionais: sem `includedItems` a seção inteira some, com o botão e com o
     grupo de ambiente e materiais junto. Usado onde a lista ainda não tem o
     que dizer — na Mentoria Cuidado Autoral, o detalhamento vai vir com o
     formulário; o doc 4 pede a mesma remoção na Botica. */
  includedItems?: string[]
  includedCTALabel?: string
  /* Título do quadro. O padrão fala em "sessão", que não serve onde a lista
     não é de uma sessão — na Biblioteca Viva ela é do que está sendo
     preparado, e chamar de "incluído" prometeria algo que ainda não existe. */
  includedTitle?: string

  pricingImage: string
  pricingTitle: string
  pricingSubtitle: string
  /* Uma ou mais faixas de preço (ex.: 60 e 90 minutos) */
  precos?: PrecoOpcao[]
  /* Alternativa ao cartão de preço: uma frase explicando a condição.
     Use quando não há valor fechado (orçamento, turma em formação, lista
     de espera) — um "A definir" em Lora 36px fica estranho. */
  precoAviso?: string
  priceNote: string
  pricingCTALabel: string

  faqItems: { q: string; a: string }[]

  /* Modal de agendamento */
  whatsappNumero: string
  modalidades: ModalidadeAgendamento[]
  modalEtiqueta: string
  modalTitulo: string
  modalSubtitulo: string
  modalLocal?: string
  /* Bloco de agenda no modal: o aviso de que a Ilana atende à tarde e a
     pergunta sobre urgência. Some onde agendar sessão não faz sentido. */
  modalMostrarAgenda?: boolean
  modalAvisoAgenda?: string
  modalLabelModalidade?: string
  modalMostrarValor?: boolean
  modalFraseInicial?: string
  modalLabelMensagem?: string
  modalPlaceholderMensagem?: string
  modalMensagemObrigatoria?: boolean
  modalMostrarMensagem?: boolean
  modalLabelEnviar?: string

  /* Faixa com ambiente e materiais, só em atendimento presencial.
     'completo' = as 4 linhas (mesa de massagem, óleo aquecido, manta).
     'curto'    = só ambiente e materiais, para roda e vivência de grupo. */
  ambiente?: 'completo' | 'curto' 

  /* Atmosfera sonora opcional */
  somAmbiente?: boolean
}

/* ── Tokens locais da V3 ────────────────────────────────────────────────
   Layout vindo da versão do AI Studio, mas com a tipografia (Lora +
   Poppins) e a paleta do site. O dourado segue como traço; texto claro
   é branco com opacidade, nunca dourado sobre oliva.
   ──────────────────────────────────────────────────────────────────── */
const FIO_CLARO = 'rgba(201,162,39,0.20)'
const FIO_OLIVA = 'rgba(201,162,39,0.30)'
const PAINEL = 'rgba(255,255,255,0.055)'
const BORDA_FOTO = '1px solid rgba(201,162,39,0.25)'

function Chevron() {
  return (
    <svg
      className="shrink-0 transition-transform duration-300 group-open:rotate-180"
      width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--cor-destaque)"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

/* Descobre para onde o rodapé deve voltar: o nível anterior de uma página de
   serviço é o bloco a que ela pertence, e não a home.

   É calculado a partir do caminho da URL, e não passado como prop, para não
   depender de alguém lembrar de configurar em cada uma das 14 páginas — e
   para não sair errado quando um serviço mudar de bloco.

   Quando o bloco aponta direto para a página (Biblioteca e Botica, que têm um
   serviço só), aí o nível anterior é mesmo a home. */
function destinoDeVolta(pathname: string | null) {
  const slug = (pathname ?? '').split('/').filter(Boolean)[0]
  const bloco = categorias.find((c) => !c.hrefDireto && c.servicos.includes(slug))
  return bloco
    ? { href: `/${bloco.slug}`, label: `← Voltar para ${bloco.titulo}` }
    : { href: '/', label: '← Voltar à página principal' }
}

/* Painel de "antes → depois". Vira componente porque a página das Imersões
   mostra dois deles em sequência, um para cada recorte. */
function PainelTransformacao({
  titulo,
  subtitulo,
  itens,
}: {
  titulo: string
  subtitulo: string
  itens: Transformacao[]
}) {
  return (
    <div
      className="w-full rounded-2xl p-6 sm:p-8"
      style={{
        background: PAINEL,
        border: `1px solid ${FIO_CLARO}`,
        boxShadow: '0 10px 34px rgba(0,0,0,0.28)',
      }}
    >
      <h2 className="font-heading text-xl sm:text-2xl text-center mb-1" style={{ color: '#FFFFFF' }}>
        {titulo}
      </h2>
      <p
        className="font-body text-[11px] sm:text-xs text-center mb-7"
        style={{ color: 'rgba(255,255,255,0.55)' }}
      >
        {subtitulo}
      </p>

      <div className="flex flex-col">
        {itens.map((item, i) => (
          <div
            key={i}
            className="py-3.5 first:pt-0 last:pb-0 text-left"
            style={{ borderBottom: i === itens.length - 1 ? 'none' : `1px solid ${FIO_CLARO}` }}
          >
            <p
              className="font-body text-xs sm:text-[13px] mb-1"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {item.antes}
            </p>
            <p
              className="font-sans text-xs sm:text-[13px] font-medium flex items-center gap-1.5"
              style={{ color: '#FFFFFF' }}
            >
              <span className="text-sm leading-none" style={{ color: 'var(--cor-destaque)' }} aria-hidden="true">
                →
              </span>
              <span>{item.depois}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* Mesma moldura do painel de transformação, para a página não parecer outra,
   mas com a hierarquia invertida: o nome do produto vem em destaque e a
   descrição embaixo, em tom secundário. Sem a seta, que só faz sentido quando
   há um "antes" virando um "depois". */
function PainelLista({
  titulo,
  subtitulo,
  itens,
}: {
  titulo: string
  subtitulo?: string
  itens: { nome: React.ReactNode; descricao: React.ReactNode }[]
}) {
  return (
    <div
      className="w-full rounded-2xl p-6 sm:p-8"
      style={{
        background: PAINEL,
        border: `1px solid ${FIO_CLARO}`,
        boxShadow: '0 10px 34px rgba(0,0,0,0.28)',
      }}
    >
      <h2 className="font-heading text-xl sm:text-2xl text-center mb-1" style={{ color: '#FFFFFF' }}>
        {titulo}
      </h2>
      {subtitulo && (
        <p
          className="font-body text-[11px] sm:text-xs text-center mb-7 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          {subtitulo}
        </p>
      )}

      <div className="flex flex-col">
        {itens.map((item, i) => (
          <div
            key={i}
            className="py-3.5 first:pt-0 last:pb-0 text-left"
            style={{ borderBottom: i === itens.length - 1 ? 'none' : `1px solid ${FIO_CLARO}` }}
          >
            <p
              className="font-sans text-xs sm:text-[13px] font-medium flex items-start gap-1.5 mb-1"
              style={{ color: '#FFFFFF' }}
            >
              <span className="text-xs leading-5 shrink-0" style={{ color: 'var(--cor-destaque)' }} aria-hidden="true">
                ✦
              </span>
              <span>{item.nome}</span>
            </p>
            <p
              className="font-body text-xs sm:text-[13px] leading-relaxed pl-5"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              {item.descricao}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* Pílula dourada de largura automática, como no layout de origem */
function BotaoV3({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
      style={{
        background: '#6E7B47',
        color: '#FFFFFF',
        border: '2px solid rgba(201,162,39,0.75)',
        boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
      }}
    >
      {children}
    </button>
  )
}

export default function SalesPageTemplateV3({
  serviceLabel,
  heroTitle,
  heroSubtitle,
  heroImageA,
  heroImageB,
  heroImageWide,
  heroAspecto = 'padrao',
  heroCTALabel,
  whatIsTitle,
  whatIsTexts,
  whatIsQuote,
  subSecao,
  transformationTitle,
  transformationSubtitle,
  transformations,
  transformacaoSecundaria,
  paineisDeLista,
  convitePosPreco,
  includedItems,
  includedCTALabel,
  includedTitle = 'O que está incluído na sua sessão',
  pricingImage,
  pricingTitle,
  pricingSubtitle,
  precos,
  precoAviso,
  priceNote,
  pricingCTALabel,
  faqItems,
  whatsappNumero,
  modalidades,
  modalEtiqueta,
  modalTitulo,
  modalSubtitulo,
  modalLocal,
  modalMostrarAgenda = true,
  modalAvisoAgenda,
  modalLabelModalidade,
  modalMostrarValor = true,
  modalFraseInicial,
  modalLabelMensagem,
  modalPlaceholderMensagem,
  modalMensagemObrigatoria,
  modalMostrarMensagem = true,
  modalLabelEnviar,
  ambiente,
  somAmbiente = true,
}: SalesPageTemplateV3Props) {
  const volta = destinoDeVolta(usePathname())

  const [agendamentoAberto, setAgendamentoAberto] = useState(false)
  /* Qual intenção o modal deve abrir marcada. Só muda quando a página tem
     mais de um botão levando a modalidades diferentes. */
  const [modalidadeAlvo, setModalidadeAlvo] = useState<string | undefined>(undefined)

  /* Duas funções separadas de propósito. `abrir` vai direto no onClick dos
     botões, e o React chama o handler com o evento do clique — se ela
     recebesse a modalidade por parâmetro, o evento entraria no lugar dela. */
  const abrir = () => {
    setModalidadeAlvo(undefined)
    setAgendamentoAberto(true)
  }
  const abrirCom = (modalidadeId: string) => () => {
    setModalidadeAlvo(modalidadeId)
    setAgendamentoAberto(true)
  }

  const temArcos = Boolean(heroImageA && heroImageB)

  /* A versão curta usa as duas primeiras linhas da mesma lista — assim o
     texto continua tendo uma fonte só em lib/content.ts */
  const itensAmbiente =
    ambiente === 'curto' ? ambientePresencial.slice(0, 2) : ambientePresencial

  /* Abre a página. Mantém a largura dos cards de baixo, para a simetria, mas
     usa o degradê da versão original: a base dissolve no fundo em vez de ter
     borda. Por isso só os cantos de cima são arredondados — uma borda embaixo
     contornaria um trecho que o degradê já apagou. */
  /* Classes escritas por extenso para o Tailwind enxergar as duas variantes.
     'alto' é quadrado em QUALQUER largura de propósito: a imagem também é
     quadrada, então encaixa exata e nada é cortado. Com um `sm:` mais largo,
     o desktop aparava o topo da foto — e cortava a cabeça. */
  const aspectoHero =
    heroAspecto === 'alto' ? 'aspect-square' : 'aspect-[4/3] sm:aspect-[16/10]'

  const fotoPanoramica = (
    <div className={`w-full max-w-[440px] ${aspectoHero} overflow-hidden rounded-t-2xl sm:rounded-t-3xl mb-2 relative`}>
      <Image src={heroImageWide} alt="" fill className="object-cover" priority />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(35,33,18,0) 45%, rgba(35,33,18,1) 100%)',
        }}
      />
    </div>
  )

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start overflow-x-hidden"
      style={{ background: 'var(--cor-fundo)', color: '#FFFFFF' }}
    >
      <main className="w-full max-w-[480px] sm:max-w-[520px] px-3 sm:px-4 flex flex-col items-center">

        {/* ── 1. HERO ─────────────────────────────────────── */}
        <section className="w-full flex flex-col items-center text-center pt-4 pb-12">
          {/* A panorâmica sempre abre a página — é a primeira coisa que prende
              quem chega. O par em arco (hoje só nas Imersões) fica embaixo,
              logo acima do botão. */}
          {fotoPanoramica}

          <p
            className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-4"
            style={{ color: 'var(--cor-destaque)' }}
          >
            {serviceLabel}
          </p>

          <h1
            className="font-heading text-3xl sm:text-4xl leading-[1.15] mb-5 px-2"
            style={{ color: '#FFFFFF' }}
          >
            {heroTitle}
          </h1>

          <p
            className="font-body text-xs sm:text-sm leading-relaxed max-w-[420px] px-4 mb-8"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            {heroSubtitle}
          </p>

          {/* Par em arco, quando houver */}
          {temArcos && (
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 w-full max-w-[360px] sm:max-w-[400px]">
              {[heroImageA, heroImageB].map((src, i) => (
                <div
                  key={i}
                  className="w-1/2 aspect-[4/5] overflow-hidden rounded-t-[70px] rounded-b-[20px] relative"
                  style={{ border: BORDA_FOTO, boxShadow: '0 8px 26px rgba(0,0,0,0.35)' }}
                >
                  <Image src={src as string} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          )}

          <BotaoV3 onClick={abrir}>{heroCTALabel}</BotaoV3>
        </section>

        {/* ── 2. O QUE É ──────────────────────────────────── */}
        <section className="w-full py-10 px-2 sm:px-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-left mb-6" style={{ color: '#FFFFFF' }}>
            {whatIsTitle}
          </h2>

          <div className="space-y-4 text-left">
            {whatIsTexts.map((texto, i) => (
              <p
                key={i}
                className="font-body text-xs sm:text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {texto}
              </p>
            ))}
          </div>

          {whatIsQuote && (
            <blockquote
              className="mt-7 pl-4 py-1 font-heading text-xs sm:text-sm italic tracking-wide leading-relaxed"
              style={{ color: 'var(--cor-destaque)', borderLeft: '2px solid var(--cor-destaque)' }}
            >
              {whatIsQuote}
            </blockquote>
          )}

          {subSecao && (
            <div
              className="mt-11 pt-9 text-left"
              style={{ borderTop: `1px solid ${FIO_CLARO}` }}
            >
              <h3 className="font-heading text-xl sm:text-2xl mb-3" style={{ color: '#FFFFFF' }}>
                {subSecao.titulo}
              </h3>

              {subSecao.subtitulo && (
                <p
                  className="font-body text-xs sm:text-sm leading-relaxed mb-6"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {subSecao.subtitulo}
                </p>
              )}

              <div className="space-y-4">
                {subSecao.textos.map((texto, i) => (
                  <p
                    key={i}
                    className="font-body text-xs sm:text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                  >
                    {texto}
                  </p>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ── 3. A TRANSFORMAÇÃO ──────────────────────────── */}
        {/* Some por inteiro quando a página não passa `transformations` —
            pedido da Ilana para as Rodas Celta-Baianas. */}
        {transformations && transformations.length > 0 && (
          <section className="w-full py-8 px-2 sm:px-4 flex flex-col gap-5">
            <PainelTransformacao
              titulo={transformationTitle ?? 'A Transformação que Você Busca'}
              subtitulo={transformationSubtitle ?? ''}
              itens={transformations}
            />

            {transformacaoSecundaria && (
              <PainelTransformacao
                titulo={transformacaoSecundaria.titulo}
                subtitulo={transformacaoSecundaria.subtitulo}
                itens={transformacaoSecundaria.itens}
              />
            )}
          </section>
        )}

        {/* ── 3b. PAINÉIS DE LISTA ────────────────────────── */}
        {/* Ocupam o mesmo lugar do quadro de transformação, para páginas em que
            não há dor a resolver — só produto e descrição. */}
        {paineisDeLista && paineisDeLista.length > 0 && (
          <section className="w-full py-8 px-2 sm:px-4 flex flex-col gap-5">
            {paineisDeLista.map((painel, i) => (
              <PainelLista
                key={i}
                titulo={painel.titulo}
                subtitulo={painel.subtitulo}
                itens={painel.itens}
              />
            ))}
          </section>
        )}

        {/* ── 4. INCLUSO ──────────────────────────────────── */}
        {/* O grupo de ambiente e materiais mora dentro desta seção, então sai
            junto quando a lista não é passada. É o comportamento certo: ele
            complementa a lista, não vive sozinho. */}
        {includedItems && includedItems.length > 0 && (
        <section className="w-full py-6 px-2 sm:px-4">
          <div
            className="w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center"
            style={{
              background: 'var(--cor-card)',
              border: `1px solid ${FIO_OLIVA}`,
              boxShadow: '0 10px 34px rgba(0,0,0,0.28)',
            }}
          >
            <h2 className="font-heading text-xl sm:text-2xl mb-6" style={{ color: '#FFFFFF' }}>
              {includedTitle}
            </h2>

            <div className="space-y-4 text-left max-w-[380px] mx-auto mb-8">
              {includedItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span
                    className="text-xs mt-1 leading-none shrink-0"
                    style={{ color: 'var(--cor-destaque)' }}
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                  <p
                    className="font-body text-xs sm:text-[13px] leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.88)' }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Ambiente e materiais entram como 2º grupo do mesmo card,
                separados por um fio — evita duas listas iguais em sequência */}
            {ambiente && (
              <>
                <div
                  className="max-w-[380px] mx-auto mb-6"
                  style={{ borderTop: `1px solid ${FIO_OLIVA}` }}
                />
                <p
                  className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold mb-5"
                  style={{ color: 'var(--cor-destaque)' }}
                >
                  Ambiente e materiais
                </p>
                <div className="space-y-4 text-left max-w-[380px] mx-auto mb-8">
                  {itensAmbiente.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span
                        className="text-xs mt-1 leading-none shrink-0"
                        style={{ color: 'var(--cor-destaque)' }}
                        aria-hidden="true"
                      >
                        ✦
                      </span>
                      <p
                        className="font-body text-xs sm:text-[13px] leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.88)' }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <BotaoV3 onClick={abrir}>{includedCTALabel}</BotaoV3>
          </div>
        </section>
        )}

        {/* ── 5. PREÇO ────────────────────────────────────── */}
        <section className="w-full py-10 px-2 sm:px-4">
          <div
            className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{ border: BORDA_FOTO, boxShadow: '0 16px 48px rgba(0,0,0,0.45)' }}
          >
            <div className="absolute inset-0 z-0">
              <Image src={pricingImage} alt="" fill className="object-cover scale-105" />
              <div className="absolute inset-0" style={{ background: 'rgba(35,33,18,0.82)' }} />
            </div>

            <div className="relative z-10 p-6 sm:p-8 text-center flex flex-col items-center">
              <h2 className="font-heading italic text-2xl sm:text-3xl mb-3" style={{ color: '#FFFFFF' }}>
                {pricingTitle}
              </h2>

              <p
                className="font-body text-xs sm:text-[13px] leading-relaxed max-w-[360px] mb-8"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {pricingSubtitle}
              </p>

              {/* Os cartões mostram só os valores. O botão fica sempre FORA
                  deles, logo abaixo, usando o mesmo componente do botão da
                  seção "incluído" — assim tem largura para caber numa linha
                  só e fica idêntico em forma e estética. */}
              {/* Sem valor fechado: uma frase no lugar do cartão de preço */}
              {precoAviso && (
                <p
                  className="font-heading text-xl sm:text-2xl italic leading-relaxed max-w-[340px] mb-7"
                  style={{ color: '#FFFFFF' }}
                >
                  {precoAviso}
                </p>
              )}

              <div className="w-full max-w-[340px] flex flex-col gap-4 mb-7">
                {(precos ?? []).map((preco, i) => (
                  <div
                    key={i}
                    className="w-full rounded-2xl p-6"
                    style={{
                      background: 'rgba(27,25,14,0.82)',
                      border: `1px solid ${FIO_OLIVA}`,
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <p
                      className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold mb-2"
                      style={{ color: 'var(--cor-destaque)' }}
                    >
                      {preco.label}
                    </p>

                    <div className="font-heading text-4xl mb-2" style={{ color: '#FFFFFF' }}>
                      {preco.valor}
                    </div>

                    <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {preco.descricao}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <BotaoV3 onClick={abrir}>{pricingCTALabel}</BotaoV3>
              </div>

              <p
                className="font-body text-[11px] sm:text-xs leading-relaxed max-w-[320px] tracking-wide font-medium"
                style={{ color: 'var(--cor-destaque)' }}
              >
                {priceNote}
              </p>
            </div>
          </div>
        </section>

        {/* ── 5b. CONVITE DEPOIS DO PREÇO ─────────────────── */}
        {/* Segunda intenção da página, separada do caminho principal: quem não
            se encaixa na primeira oferta ainda tem um convite aqui. */}
        {convitePosPreco && (
          <section className="w-full pb-4 px-2 sm:px-4">
            <div
              className="w-full rounded-2xl p-6 sm:p-7 text-center flex flex-col items-center"
              style={{ background: PAINEL, border: `1px solid ${FIO_CLARO}` }}
            >
              <p
                className="font-body text-xs sm:text-sm leading-relaxed max-w-[360px] mb-6"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {convitePosPreco.texto}
              </p>
              <BotaoV3 onClick={abrirCom(convitePosPreco.modalidadeId)}>
                {convitePosPreco.label}
              </BotaoV3>
            </div>
          </section>
        )}

        {/* ── 6. FAQ ──────────────────────────────────────── */}
        <section className="w-full py-6 px-2 sm:px-4">
          <div
            className="w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8"
            style={{
              background: 'var(--cor-card)',
              border: `1px solid ${FIO_OLIVA}`,
              boxShadow: '0 10px 34px rgba(0,0,0,0.28)',
            }}
          >
            <h2 className="font-heading text-xl sm:text-2xl mb-5 text-left" style={{ color: '#FFFFFF' }}>
              Perguntas Frequentes
            </h2>

            <div className="flex flex-col">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  name="faq-v3"
                  className="group py-3.5"
                  style={{ borderBottom: i === faqItems.length - 1 ? 'none' : '1px solid rgba(201,162,39,0.28)' }}
                >
                  <summary className="w-full flex items-center justify-between text-left gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-sans text-xs sm:text-[13px] font-medium" style={{ color: '#FFFFFF' }}>
                      {item.q}
                    </span>
                    <Chevron />
                  </summary>
                  <p
                    className="mt-2.5 pt-1 pr-2 font-body text-xs sm:text-[13px] leading-relaxed text-left fade-in-v3"
                    style={{ color: 'var(--cor-destaque)' }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. RODAPÉ ───────────────────────────────────── */}
        <footer className="w-full pt-8 pb-16 px-4 text-center">
          <p
            className="font-body text-[10px] sm:text-[11px] leading-relaxed max-w-[380px] mx-auto mb-6"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Este serviço é terapêutico e holístico. Não substitui tratamentos médicos,
            psicológicos, nutricionais ou farmacológicos.
          </p>

          {/* Era 11px, menor que o aviso legal logo acima — e é o único caminho
              de volta ao catálogo. Sobe para 14px no celular e 16px no desktop,
              com peso médio e área de toque maior. O contraste já era bom:
              dourado sobre o fundo escuro dá 6,7:1. */}
          <div className="mb-4">
            <Link
              href={volta.href}
              className="font-sans text-sm sm:text-base font-medium py-2 transition-opacity hover:opacity-80 inline-flex items-center gap-1.5"
              style={{ color: 'var(--cor-destaque)' }}
            >
              {volta.label}
            </Link>
          </div>

          <p className="font-heading text-sm italic" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {siteConfig.name} © {new Date().getFullYear()}
          </p>

          <p className="font-sans text-[11px] mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
            {siteConfig.creditoRodape}
          </p>
        </footer>
      </main>

      {/* A key força o modal a remontar quando o botão clicado aponta para
          outra modalidade. Sem isso ele guardaria a escolha do clique
          anterior, já que o estado interno só é inicializado na montagem. */}
      <BookingModalV3
        key={modalidadeAlvo ?? 'padrao'}
        modalidadeInicial={modalidadeAlvo}
        aberto={agendamentoAberto}
        aoFechar={() => setAgendamentoAberto(false)}
        whatsappNumero={whatsappNumero}
        tituloEtiqueta={modalEtiqueta}
        titulo={modalTitulo}
        subtitulo={modalSubtitulo}
        modalidades={modalidades}
        valor={precos?.[0]?.valor}
        local={modalLocal}
        mostrarAgenda={modalMostrarAgenda}
        avisoAgenda={modalAvisoAgenda}
        labelModalidade={modalLabelModalidade}
        mostrarValor={modalMostrarValor}
        fraseInicial={modalFraseInicial}
        labelMensagem={modalLabelMensagem}
        placeholderMensagem={modalPlaceholderMensagem}
        mensagemObrigatoria={modalMensagemObrigatoria}
        mostrarMensagem={modalMostrarMensagem}
        labelEnviar={modalLabelEnviar}
      />

      {somAmbiente && <AmbientSoundToggleV3 />}
    </div>
  )
}
