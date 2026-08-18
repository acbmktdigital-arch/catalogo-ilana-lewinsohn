import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function AnahataTerraPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+sess%C3%A3o+Anahata+Terra"
      serviceLabel="Ilana Lewinsohn · MASSIXA Temática | Anahata Terra"
      heroTitle={<>Enraizamento profundo em <span style={{color:'var(--cor-destaque)'}}>Anahata Terra</span></>}
      heroSubtitle="Argila, pedras quentes e ervas para assentar a energia do corpo e desacelerar a mente."
      heroImage="/images/anahata-terra.jpg"
      heroCTALabel="Quero minha sessão"

      painPoints={[
        {
                "icon": "🌪️",
                "title": "Mente que não desacelera",
                "desc": "Pensamentos acelerados o dia inteiro"
        },
        {
                "icon": "🎈",
                "title": "Sensação de estar no ar",
                "desc": "Dificuldade de se sentir presente e firme"
        },
        {
                "icon": "😰",
                "title": "Ansiedade constante",
                "desc": "Corpo em estado de alerta"
        },
        {
                "icon": "🥶",
                "title": "Frio interno",
                "desc": "Sensação de desamparo ou desequilíbrio"
        },
        {
                "icon": "😴",
                "title": "Sono agitado",
                "desc": "Dificuldade de relaxar de verdade"
        },
        {
                "icon": "🌫️",
                "title": "Falta de estabilidade",
                "desc": "Sensação de instabilidade emocional"
        }
]}

      whatIsTitle={<>O que é <span style={{color:'var(--cor-destaque)'}}>Anahata Terra</span>?</>}
      whatIsTexts={[
        "É uma sessão com argila, pedras quentes e ervas voltada ao enraizamento, ao assentamento da energia corporal e à desaceleração da mente.",
        "Especialmente indicada para favorecer o equilíbrio do dosha Vata, quando a mente está agitada e o corpo precisa de firmeza e calor."
]}
      whatIsQuote="Enraizar não é parar. É encontrar onde pousar."
      whatIsImage="/images/anahata-terra.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Enraizamento, calor e mente mais calma"
      benefits={[
        {
                "icon": "🌍",
                "title": "Enraizamento",
                "desc": "Sensação de firmeza e presença"
        },
        {
                "icon": "🔥",
                "title": "Aquecimento com pedras quentes",
                "desc": "Calor que acalma o sistema nervoso"
        },
        {
                "icon": "🧘",
                "title": "Mente mais calma",
                "desc": "Menos agitação e pensamento acelerado"
        },
        {
                "icon": "🌾",
                "title": "Equilíbrio do dosha Vata",
                "desc": "Corpo e mente mais estáveis"
        },
        {
                "icon": "😌",
                "title": "Redução da ansiedade",
                "desc": "Sensação de segurança interna"
        },
        {
                "icon": "😴",
                "title": "Sono mais tranquilo",
                "desc": "Descanso mais profundo"
        }
]}

      includedItems={[
        "Aplicação de argila em pontos específicos do corpo",
        "Uso de pedras quentes para aquecimento e relaxamento",
        "Ervas selecionadas para enraizamento",
        "Ambiente acolhedor no Instituto Canto da Floresta"
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
                "q": "Para quem é indicada essa sessão?",
                "a": "Para quem sente a mente acelerada, ansiedade ou dificuldade de se sentir presente e estável."
        },
        {
                "q": "O que é o dosha Vata?",
                "a": "Na Ayurveda, é a energia ligada ao movimento; quando em excesso, gera agitação mental e instabilidade — essa sessão ajuda a equilibrá-la."
        },
        {
                "q": "A argila e as pedras quentes machucam?",
                "a": "Não, são aplicadas com cuidado e conforto, respeitando sua sensibilidade."
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

      pricingTitle="Anahata Terra"
      pricingSubtitle="Escolha a duração da sua sessão"
      pricingOptions={[
        {
                "label": "60 minutos",
                "price": "R$ 270,00",
                "description": "Argila, pedras quentes e ervas"
        },
        {
                "label": "90 minutos",
                "price": "R$ 360,00",
                "description": "Mais tempo de enraizamento e cuidado"
        }
]}
      priceNote="Valores válidos para atendimento no Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha sessão"
    />
  )
}
