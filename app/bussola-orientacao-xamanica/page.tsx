import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function BussolaOrientacaoXamanicaPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+B%C3%BAssola%3A+Orienta%C3%A7%C3%A3o+Integrativa+Xam%C3%A2nica"
      serviceLabel="Ilana Lewinsohn · Bússola: Orientação Integrativa Xamânica"
      heroTitle={<>Reencontre seu rumo com a <span style={{color:'var(--cor-destaque)'}}>Bússola</span></>}
      heroSubtitle="Escuta e orientação xamânica para reencontrar o rumo em questões físicas, energéticas ou emocionais."
      heroImage="/images/bussola-orientacao-xamanica.jpg"
      heroCTALabel="Quero minha orientação"

      painPoints={[
        {
                "icon": "🧭",
                "title": "Sensação de estar sem rumo",
                "desc": "Dificuldade de saber qual caminho seguir"
        },
        {
                "icon": "🌫️",
                "title": "Confusão emocional",
                "desc": "Muitas questões acontecendo ao mesmo tempo"
        },
        {
                "icon": "😮‍💨",
                "title": "Corpo e energia desequilibrados",
                "desc": "Sinais físicos sem explicação clara"
        },
        {
                "icon": "🔁",
                "title": "Padrões que se repetem",
                "desc": "Sensação de estar sempre no mesmo lugar"
        },
        {
                "icon": "💭",
                "title": "Dúvidas sobre decisões importantes",
                "desc": "Precisando de clareza para seguir em frente"
        },
        {
                "icon": "🌙",
                "title": "Desconexão espiritual",
                "desc": "Distância da própria intuição"
        }
]}

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>Bússola</span>?</>}
      whatIsTexts={[
        "É um atendimento online de escuta e orientação para reencontrar o rumo em questões físicas, energéticas ou emocionais.",
        "A partir de referências do Ayurveda, Xamanismo, Alquimia, Yoga e Ervaria, é construído um roteiro personalizado, entregue por escrito."
]}
      whatIsQuote="Às vezes, tudo que precisamos é de uma bússola para lembrar o caminho."
      whatIsImage="/images/bussola-orientacao-xamanica.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Clareza e um roteiro para seguir em frente"
      benefits={[
        {
                "icon": "🧭",
                "title": "Mais clareza de rumo",
                "desc": "Direção para as próximas etapas"
        },
        {
                "icon": "📝",
                "title": "Roteiro personalizado por escrito",
                "desc": "Um guia para consultar sempre que precisar"
        },
        {
                "icon": "🌿",
                "title": "Sabedoria integrativa",
                "desc": "Referências de Ayurveda, Xamanismo, Alquimia, Yoga e Ervaria"
        },
        {
                "icon": "💗",
                "title": "Acolhimento emocional",
                "desc": "Escuta genuína das suas questões"
        },
        {
                "icon": "🔮",
                "title": "Reconexão com a intuição",
                "desc": "Mais confiança nas próprias decisões"
        },
        {
                "icon": "✨",
                "title": "Sensação de reorientação",
                "desc": "Sair com mais leveza e direção"
        }
]}

      includedItems={[
        "Sessão online de 90 minutos de escuta e orientação",
        "Construção de roteiro personalizado",
        "Plano de reorientação entregue por escrito",
        "Referências de Ayurveda, Xamanismo, Alquimia, Yoga e Ervaria"
]}
      includedCTALabel="Quero agendar minha orientação"

      credentials={[
        "Bióloga pela UNICAMP",
        "Mestre em Conservação da Biodiversidade e Desenvolvimento Sustentável (IPÊ)",
        "Criadora do método MASSIXA — Massagem Integrativa Xamânica",
        "Facilitadora de Rodas de Mulheres desde 2012"
]}
      aboutCTALabel="Agendar com Ilana"

      faqItems={[
        {
                "q": "Como acontece o atendimento?",
                "a": "É feito online, então você participa de onde estiver, no seu próprio espaço."
        },
        {
                "q": "Recebo algo por escrito depois da sessão?",
                "a": "Sim, um roteiro de reorientação personalizado é entregue por escrito após o atendimento."
        },
        {
                "q": "Preciso trazer uma pergunta específica?",
                "a": "Não é obrigatório, mas ajuda se você já tiver uma questão em mente — Ilana também pode te ajudar a encontrá-la durante a sessão."
        },
        {
                "q": "É necessário algum preparo antes?",
                "a": "Não é necessário nenhum preparo especial, apenas disponibilidade para se conectar com o momento."
        },
        {
                "q": "Como agendo?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário."
        }
]}

      pricingTitle="Bússola"
      pricingSubtitle="Orientação Integrativa Xamânica"
      priceFinal="R$ 296,00"
      priceNote="Sessão de 90 minutos + plano de reorientação por escrito"
      pricingCTALabel="Quero agendar minha orientação"
    />
  )
}
