import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function VivenciasImersoesRetirosPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+Viv%C3%AAncias%2C+Imers%C3%B5es+e+Retiros+para+o+meu+grupo"
      serviceLabel="Ilana Lewinsohn · Vivências, Imersões e Retiros"
      heroTitle={<>Experiências sob medida em <span style={{color:'var(--cor-destaque)'}}>Vivências, Imersões e Retiros</span></>}
      heroSubtitle="Experiências construídas de forma personalizada para grupos, comunidades, equipes e instituições."
      heroImage="/images/vivencias-imersoes-retiros.jpg"
      heroCTALabel="Quero construir minha vivência"

      painPoints={[
        {
                "icon": "🏢",
                "title": "Equipes sobrecarregadas",
                "desc": "Falta de momentos de reconexão coletiva"
        },
        {
                "icon": "😮‍💨",
                "title": "Grupos desgastados",
                "desc": "Necessidade de renovação e vínculo"
        },
        {
                "icon": "🌫️",
                "title": "Falta de propósito compartilhado",
                "desc": "Comunidades buscando reconexão"
        },
        {
                "icon": "🔥",
                "title": "Ausência de rituais coletivos",
                "desc": "Vontade de experiências mais profundas em grupo"
        },
        {
                "icon": "🍽️",
                "title": "Rotina sem alimentação consciente",
                "desc": "Grupos buscando experiências mais integradas"
        },
        {
                "icon": "🌳",
                "title": "Desconexão com a natureza",
                "desc": "Necessidade de experiências ao ar livre"
        }
]}

      whatIsTitle={<>O que são as <span style={{color:'var(--cor-destaque)'}}>Vivências, Imersões e Retiros</span>?</>}
      whatIsTexts={[
        "São experiências construídas de forma personalizada para grupos, comunidades, equipes e instituições.",
        "Podem incluir ervas, práticas corporais, rodas de conversa, rituais, fogueira e alimentação consciente — sempre desenhadas sob medida para o seu grupo."
]}
      whatIsQuote="Cada grupo pede uma experiência única. É isso que construímos juntas."
      whatIsImage="/images/vivencias-imersoes-retiros.jpg"
      whatIsCTALabel="Quero conversar sobre minha vivência"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Experiências sob medida para o seu grupo"
      benefits={[
        {
                "icon": "🤝",
                "title": "Fortalecimento de vínculos",
                "desc": "Grupos mais conectados e coesos"
        },
        {
                "icon": "🔥",
                "title": "Rituais coletivos",
                "desc": "Experiências profundas em comunidade"
        },
        {
                "icon": "🌿",
                "title": "Práticas corporais integradas",
                "desc": "Corpo e presença trabalhados em grupo"
        },
        {
                "icon": "🗣️",
                "title": "Rodas de conversa",
                "desc": "Espaço de escuta e partilha coletiva"
        },
        {
                "icon": "🍽️",
                "title": "Alimentação consciente",
                "desc": "Nutrição integrada à experiência"
        },
        {
                "icon": "✨",
                "title": "Renovação de propósito",
                "desc": "Grupos mais alinhados e revitalizados"
        }
]}

      includedItems={[
        "Programação construída sob medida para o seu grupo",
        "Práticas corporais, rituais e rodas de conversa",
        "Possibilidade de fogueira e alimentação consciente",
        "Realização no Instituto Canto da Floresta ou em local combinado"
]}
      includedCTALabel="Quero construir minha vivência"

      credentials={[
        "Bióloga pela UNICAMP",
        "Mestre em Conservação da Biodiversidade e Desenvolvimento Sustentável (IPÊ)",
        "Criadora do método MASSIXA — Massagem Integrativa Xamânica",
        "Facilitadora de Rodas de Mulheres desde 2012"
]}
      aboutCTALabel="Falar com Ilana sobre grupos"

      faqItems={[
        {
                "q": "Para que tipos de grupo é indicado?",
                "a": "Para comunidades, equipes de empresas, coletivos e grupos de amigas ou familiares que buscam uma experiência coletiva."
        },
        {
                "q": "Como é definida a programação?",
                "a": "Em conversa com Ilana, entendendo o objetivo e o perfil do grupo antes de desenhar a vivência."
        },
        {
                "q": "Pode ser realizado fora do Instituto Canto da Floresta?",
                "a": "Sim, é possível combinar a realização em outro local, conforme a necessidade do grupo."
        },
        {
                "q": "Qual o valor?",
                "a": "É calculado sob medida, conforme o tamanho do grupo, duração e programação escolhida."
        },
        {
                "q": "Como faço um orçamento?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp contando um pouco sobre o seu grupo."
        }
]}

      pricingTitle="Vivências, Imersões e Retiros"
      pricingSubtitle="Para grupos, comunidades e empresas"
      priceFinal="A consultar"
      priceNote="Construído sob medida para cada grupo"
      pricingCTALabel="Quero construir minha vivência"
    />
  )
}
