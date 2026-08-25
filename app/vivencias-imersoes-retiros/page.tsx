import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function VivenciasImersoesRetirosPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Vivências, Imersões e Retiros"
      heroTitle={<>Experiências sob medida em <span style={{color:'var(--cor-destaque)'}}>Vivências, Imersões e Retiros</span></>}
      heroSubtitle="Experiências construídas de forma personalizada para grupos, comunidades, equipes e instituições."
      heroImageWide="/images/vivencias-imersoes-retiros.jpg"
      heroCTALabel="Quero construir minha vivência"

      whatIsTitle={<>O que são as <span style={{color:'var(--cor-destaque)'}}>Vivências, Imersões e Retiros</span>?</>}
      whatIsTexts={[
        "São experiências construídas de forma personalizada para grupos, comunidades, equipes e instituições.",
        "Podem incluir ervas, práticas corporais, rodas de conversa, rituais, fogueira e alimentação consciente — sempre desenhadas sob medida para o seu grupo.",
      ]}
      whatIsQuote="Cada grupo pede uma experiência única. É isso que construímos juntas."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde o seu grupo está para onde a vivência leva."
      transformations={[
        { antes: "Grupos desgastados", depois: "Fortalecimento de vínculos" },
        { antes: "Ausência de rituais coletivos", depois: "Rituais coletivos" },
        { antes: "Equipes sobrecarregadas", depois: "Práticas corporais integradas" },
        { antes: "Falta de propósito compartilhado", depois: "Renovação de propósito" },
        { antes: "Desconexão com a natureza", depois: "Rodas de conversa ao ar livre" },
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
