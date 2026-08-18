import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function ToqueDaJuremaPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+Toque+da+Jurema"
      serviceLabel="Ilana Lewinsohn · MASSIXA Temática | Toque da Jurema"
      heroTitle={<>A força da floresta no <span style={{color:'var(--cor-destaque)'}}>Toque da Jurema</span></>}
      heroSubtitle="Massagem sobre uma cama de ervas aromáticas, com toque vigoroso e limpeza energética profunda."
      heroImage="/images/toque-da-jurema.jpg"
      heroCTALabel="Quero minha sessão"

      painPoints={[
        {
                "icon": "🌀",
                "title": "Sensação de peso energético",
                "desc": "Como se algo estivesse grudado em você"
        },
        {
                "icon": "😣",
                "title": "Corpo pedindo um toque mais forte",
                "desc": "Massagens leves não dão conta"
        },
        {
                "icon": "🥀",
                "title": "Bloqueios que persistem",
                "desc": "Sente que precisa de uma limpeza mais profunda"
        },
        {
                "icon": "⚡",
                "title": "Energia estagnada",
                "desc": "Cansaço que não passa com descanso comum"
        },
        {
                "icon": "🌪️",
                "title": "Excesso de estímulos",
                "desc": "Corpo carregado de tudo que absorveu"
        },
        {
                "icon": "🕯️",
                "title": "Falta de enraizamento",
                "desc": "Sensação de estar dispersa ou fora do eixo"
        }
]}

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Toque da Jurema</span>?</>}
      whatIsTexts={[
        "É uma sessão realizada sobre uma cama de ervas aromáticas e medicinais, com toque mais vigoroso e possibilidade de limpeza energética profunda.",
        "Inspirada na força cabocla e na medicina da floresta, é indicada para equilíbrio energético e alívio corporal mais intenso."
]}
      whatIsQuote="Há força que cura. A Jurema toca onde é preciso limpar."
      whatIsImage="/images/toque-da-jurema.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Limpeza energética e equilíbrio com a força da floresta"
      benefits={[
        {
                "icon": "🌳",
                "title": "Limpeza energética profunda",
                "desc": "Sensação de leveza após a sessão"
        },
        {
                "icon": "💪",
                "title": "Alívio corporal intenso",
                "desc": "Toque mais firme onde o corpo pede"
        },
        {
                "icon": "🔥",
                "title": "Energia desbloqueada",
                "desc": "Menos sensação de estagnação"
        },
        {
                "icon": "🌱",
                "title": "Enraizamento",
                "desc": "Mais presença e firmeza no corpo"
        },
        {
                "icon": "🕊️",
                "title": "Equilíbrio energético",
                "desc": "Sensação de reorganização interna"
        },
        {
                "icon": "✨",
                "title": "Renovação",
                "desc": "Disposição para recomeçar mais leve"
        }
]}

      includedItems={[
        "Sessão sobre cama de ervas aromáticas e medicinais",
        "Toque vigoroso conduzido conforme sua necessidade",
        "Possibilidade de limpeza energética profunda",
        "Ambiente ritualístico no Instituto Canto da Floresta"
]}
      includedCTALabel="Quero agendar minha sessão"

      credentials={[
        "Bióloga pela UNICAMP",
        "Mestre em Conservação da Biodiversidade e Desenvolvimento Sustentável (IPÊ)",
        "Criadora do método MASSIXA — Massagem Integrativa Xamânica",
        "Facilitadora de Rodas de Mulheres desde 2012"
]}
      aboutCTALabel="Agendar com Ilana"

      faqItems={[
        {
                "q": "Onde acontece o atendimento?",
                "a": "No Instituto Canto da Floresta, em Arraial d'Ajuda, Bahia."
        },
        {
                "q": "O toque é muito forte?",
                "a": "É mais vigoroso que uma massagem convencional, sempre respeitando o limite do seu corpo."
        },
        {
                "q": "Preciso ter alguma vivência espiritual prévia?",
                "a": "Não. A sessão é aberta a qualquer pessoa que sinta o chamado para esse trabalho."
        },
        {
                "q": "O que é a cama de ervas?",
                "a": "Uma base de ervas aromáticas e medicinais sobre a qual a sessão é realizada, parte da experiência sensorial do Toque da Jurema."
        },
        {
                "q": "Quanto tempo dura?",
                "a": "Você escolhe entre 60 ou 90 minutos, conforme sua disponibilidade."
        },
        {
                "q": "Como agendo?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário."
        }
]}

      pricingTitle="Toque da Jurema"
      pricingSubtitle="Escolha a duração da sua sessão"
      pricingOptions={[
        {
                "label": "60 minutos",
                "price": "R$ 270,00",
                "description": "Sessão com toque vigoroso e limpeza energética"
        },
        {
                "label": "90 minutos",
                "price": "R$ 360,00",
                "description": "Mais tempo de imersão e cuidado"
        }
]}
      priceNote="Valores válidos para atendimento no Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha sessão"
    />
  )
}
