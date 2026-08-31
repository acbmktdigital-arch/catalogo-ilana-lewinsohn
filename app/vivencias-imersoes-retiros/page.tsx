import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function VivenciasImersoesRetirosPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Vivências, Imersões e Retiros"
      heroTitle={<>Experiências sob medida em <span style={{color:'var(--cor-destaque)'}}>Vivências, Imersões e Retiros</span></>}
      heroSubtitle="Experiências construídas de forma personalizada para grupos, comunidades, equipes empresariais e instituições."
      heroImageWide="/images/vivencias-imersoes-retiros.jpg"
      heroCTALabel="Quero construir minha vivência"

      whatIsTitle={<>O que são as <span style={{color:'var(--cor-destaque)'}}>Vivências, Imersões e Retiros</span>?</>}
      whatIsTexts={[
        /* Acrescentei a vírgula depois de "comunidades", que faltava no
           documento, e o "e" antes de "instituições". */
        "Experiências construídas de forma personalizada para grupos, comunidades, equipes empresariais e instituições.",
        "Ervas, argilas, elementos da Natureza, cantos, práticas corporais, rodas de conversa, rituais, fogueira, alimentação consciente e diferentes recursos podem compor cada experiência de modo sensorial, profundo e prazerosamente terapêutico.",
        "Favorecem reconexão, pertencimento, regeneração e fortalecimento dos vínculos humanos.",
        "As atividades podem acontecer no Instituto Canto da Floresta, em Arraial d'Ajuda, ou em outros locais, mediante convite.",
      ]}
      whatIsQuote="Cada grupo pede uma experiência única. É isso que construímos juntas."

      /* As duas primeiras linhas da lista dela não são dores: abrem o bloco.
         Viraram o título e o subtítulo. */
      transformationTitle="Você se reconhece nisso?"
      transformationSubtitle="Frequentemente os bloqueios não são físicos — são energéticos."
      /* 6 dores (em pares de título + explicação) contra 8 transformações.
         Ficaram de fora "Práticas corporais integradas" e "Espaço de escuta e
         partilha coletiva": as duas descrevem o que acontece na vivência, não
         o que muda em quem participa — já estão no texto de abertura e na
         lista do que está incluído. */
      transformations={[
        { antes: "Desconexão com a natureza e com consigo", depois: "Reconexão consigo e com a força da Terra" },
        { antes: "Quero uma vivência integrativa com cheiro de mato, porque onde moro não tenho isso.", depois: "Renovação de propósito individual" },
        { antes: "Ausência de rituais coletivos", depois: "Rituais coletivos, experiências profundas em comunidade" },
        { antes: "Equipes sobrecarregadas", depois: "Renovação de senso de grupo: alinhamento e revitalização" },
        { antes: "Grupos desgastados", depois: "Fortalecimento de vínculos" },
        { antes: "Rotina sem alimentação consciente", depois: "Alimentação consciente" },
      ]}

      includedItems={[
        "Programação construída sob medida para o seu grupo",
        "Práticas corporais, rituais e rodas de conversa",
        "Possibilidade de fogueira e alimentação consciente",
        "Realização no Instituto Canto da Floresta ou em local combinado",
      ]}
      includedCTALabel="Quero construir minha vivência"

      pricingImage="/images/vivencias-imersoes-retiros.jpg"
      pricingTitle="Vivências, Imersões e Retiros"
      pricingSubtitle="Para grupos, comunidades e empresas."
      precoAviso="Cada vivência é orçada sob medida, conforme o tamanho do grupo, a duração e a programação escolhida."
      priceNote="Conte sobre o seu grupo e Ilana monta uma proposta"
      pricingCTALabel="Quero construir minha vivência"

      faqItems={[
        {
          q: "Para que tipos de grupo é indicado?",
          a: "Para comunidades, equipes de empresas, coletivos e grupos de amigas ou familiares que buscam uma experiência coletiva.",
        },
        {
          q: "Como é definida a programação?",
          a: "Em conversa com Ilana, entendendo o objetivo e o perfil do grupo antes de desenhar a vivência.",
        },
        {
          q: "Pode ser realizado fora do Instituto Canto da Floresta?",
          a: "Sim, é possível combinar a realização em outro local, conforme a necessidade do grupo.",
        },
        {
          q: "Qual o valor?",
          a: "É calculado sob medida, conforme o tamanho do grupo, duração e programação escolhida.",
        },
        {
          q: "Como faço um orçamento?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp contando um pouco sobre o seu grupo.",
        },
      ]}

      modalEtiqueta="Orçamento"
      modalTitulo="Vivência para o seu grupo"
      modalSubtitulo="Conte sobre o grupo e Ilana desenha uma proposta sob medida."
      modalFraseInicial="Gostaria de um orçamento para"
      modalMostrarValor={false}
      modalMostrarPeriodo={false}
      modalLabelMensagem="Sobre o seu grupo"
      modalPlaceholderMensagem="Quantas pessoas, que tipo de grupo, quando e onde seria?"
      modalMensagemObrigatoria
      modalLabelEnviar="Pedir orçamento no WhatsApp"
      modalidades={[
        {
          id: 'vivencia',
          titulo: 'Vivência sob medida',
          descricao: 'Para grupos, comunidades e empresas',
          nomeNaMensagem: 'uma Vivência, Imersão ou Retiro para o meu grupo',
        },
      ]}

      ambiente="curto"
      somAmbiente={false}
    />
  )
}
