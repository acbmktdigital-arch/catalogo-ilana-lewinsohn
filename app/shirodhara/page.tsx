import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function ShirodharaPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+Shirodhara"
      serviceLabel="Ilana Lewinsohn · Shirodhara"
      heroTitle={<>Silencie a mente com <span style={{color:'var(--cor-destaque)'}}>Shirodhara</span></>}
      heroSubtitle="Fluxo contínuo de óleo sobre o terceiro olho, para conduzir corpo e mente a um relaxamento profundo."
      heroImage="/images/shirodhara.jpg"
      heroCTALabel="Quero minha sessão"

      painPoints={[
        {
                "icon": "🌪️",
                "title": "Mente que não para",
                "desc": "Pensamentos acelerados o tempo todo"
        },
        {
                "icon": "😰",
                "title": "Ansiedade constante",
                "desc": "Sensação de alerta permanente"
        },
        {
                "icon": "😴",
                "title": "Insônia ou sono agitado",
                "desc": "Dificuldade de desacelerar à noite"
        },
        {
                "icon": "🤯",
                "title": "Sobrecarga mental",
                "desc": "Excesso de estímulos e decisões"
        },
        {
                "icon": "😵‍💫",
                "title": "Dificuldade de concentração",
                "desc": "Mente dispersa durante o dia"
        },
        {
                "icon": "😣",
                "title": "Tensão na cabeça e no rosto",
                "desc": "Peso acumulado na região da testa"
        }
]}

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Shirodhara</span>?</>}
      whatIsTexts={[
        "É um fluxo contínuo de óleo medicado derramado sobre a região do terceiro olho, conduzindo corpo e mente a um estado profundo de relaxamento.",
        "Auxilia na redução de ansiedade, estresse e agitação mental, favorecendo o equilíbrio dos doshas Vata e Pitta."
]}
      whatIsQuote="Quando a mente silencia, o corpo finalmente descansa."
      whatIsImage="/images/shirodhara.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Mente silenciosa e sistema nervoso em paz"
      benefits={[
        {
                "icon": "🧘",
                "title": "Mente mais silenciosa",
                "desc": "Redução do excesso de pensamentos"
        },
        {
                "icon": "😌",
                "title": "Menos ansiedade",
                "desc": "Sistema nervoso mais equilibrado"
        },
        {
                "icon": "😴",
                "title": "Sono mais profundo",
                "desc": "Facilidade de relaxar à noite"
        },
        {
                "icon": "🎯",
                "title": "Mais concentração",
                "desc": "Clareza mental para o dia a dia"
        },
        {
                "icon": "💆",
                "title": "Alívio de tensão facial",
                "desc": "Relaxamento da testa e do rosto"
        },
        {
                "icon": "✨",
                "title": "Sensação de paz profunda",
                "desc": "Estado meditativo natural"
        }
]}

      includedItems={[
        "Fluxo contínuo de óleo medicado sobre o terceiro olho",
        "Ambiente silencioso e propício ao relaxamento",
        "Óleo escolhido conforme seu equilíbrio dos doshas",
        "Espaço acolhedor no Instituto Canto da Floresta"
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
                "q": "O óleo suja o cabelo?",
                "a": "Sim, é recomendável lavar o cabelo após a sessão; traga uma touca ou lenço se preferir."
        },
        {
                "q": "É indicado para quem tem enxaqueca?",
                "a": "Pode ajudar no relaxamento, mas converse com Ilana antes se você tiver condições específicas."
        },
        {
                "q": "A sessão é feita deitada?",
                "a": "Sim, você permanece deitada e confortável durante todo o fluxo do óleo."
        },
        {
                "q": "Quanto tempo dura?",
                "a": "A sessão tem duração de 60 minutos."
        },
        {
                "q": "Como agendo?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário."
        }
]}

      pricingTitle="Shirodhara"
      pricingSubtitle="Silêncio profundo para a mente"
      priceFinal="R$ 350,00"
      priceNote="Sessão de 60 minutos · Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha sessão"
    />
  )
}
