import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function MadalenaPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+sess%C3%A3o+Madalena"
      serviceLabel="Ilana Lewinsohn · MASSIXA Temática | Madalena"
      heroTitle={<>Cacau, rosas e o coração aberto em <span style={{color:'var(--cor-destaque)'}}>Madalena</span></>}
      heroSubtitle="Sessão que une cacau cerimonial ao toque das rosas vermelhas, para relaxar e reconectar com sua potência feminina."
      heroImage="/images/madalena.jpg"
      heroCTALabel="Quero minha sessão"

      painPoints={[
        {
                "icon": "💔",
                "title": "Coração fechado",
                "desc": "Dificuldade de se abrir ou receber cuidado"
        },
        {
                "icon": "😔",
                "title": "Desconexão da própria feminilidade",
                "desc": "Sensação de distância de si mesma"
        },
        {
                "icon": "😮‍💨",
                "title": "Sobrecarga emocional",
                "desc": "Sentimentos guardados sem espaço"
        },
        {
                "icon": "🥀",
                "title": "Autoestima baixa",
                "desc": "Dificuldade de se sentir potente e bela"
        },
        {
                "icon": "😣",
                "title": "Corpo tenso",
                "desc": "Tensão acumulada, especialmente no peito e ombros"
        },
        {
                "icon": "🌫️",
                "title": "Falta de doçura na rotina",
                "desc": "Dias corridos sem espaço para se cuidar"
        }
]}

      whatIsTitle={<>O que é a sessão <span style={{color:'var(--cor-destaque)'}}>Madalena</span>?</>}
      whatIsTexts={[
        "É uma sessão que une cacau cerimonial ao toque das rosas vermelhas, favorecendo relaxamento, abertura do coração e reconexão com a própria potência feminina.",
        "Uma experiência sensível e restauradora, pensada para quem precisa de espaço para sentir, acolher-se e se lembrar da própria beleza."
]}
      whatIsQuote="Antes de florescer para o mundo, é preciso florescer para si mesma."
      whatIsImage="/images/madalena.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Coração aberto e potência feminina reconectada"
      benefits={[
        {
                "icon": "❤️",
                "title": "Coração mais aberto",
                "desc": "Mais espaço para sentir e receber"
        },
        {
                "icon": "🌹",
                "title": "Reconexão com a feminilidade",
                "desc": "Sensação de potência e beleza próprias"
        },
        {
                "icon": "😌",
                "title": "Relaxamento profundo",
                "desc": "Corpo e emoções mais leves"
        },
        {
                "icon": "🍫",
                "title": "Presença através do cacau",
                "desc": "Abertura suave e acolhedora"
        },
        {
                "icon": "💗",
                "title": "Autoestima fortalecida",
                "desc": "Mais afeto por si mesma"
        },
        {
                "icon": "✨",
                "title": "Sensação de renovação",
                "desc": "Sair mais leve e inteira"
        }
]}

      includedItems={[
        "Cacau cerimonial preparado para a sessão",
        "Toque com rosas vermelhas",
        "Ambiente acolhedor e sensível no Instituto Canto da Floresta",
        "Escuta antes e depois da sessão"
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
                "q": "Preciso beber o cacau?",
                "a": "O cacau cerimonial faz parte da experiência e é oferecido com cuidado, respeitando suas preferências."
        },
        {
                "q": "A sessão é indicada só para mulheres?",
                "a": "É especialmente voltada ao feminino sagrado, mas qualquer pessoa que se identifique com essa proposta pode participar."
        },
        {
                "q": "Preciso estar passando por algo específico para fazer essa sessão?",
                "a": "Não, ela serve tanto para momentos de dor quanto para celebrar e se reconectar com sua potência."
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

      pricingTitle="Madalena"
      pricingSubtitle="Escolha a duração da sua sessão"
      pricingOptions={[
        {
                "label": "60 minutos",
                "price": "R$ 300,00",
                "description": "Cacau cerimonial e toque das rosas"
        },
        {
                "label": "90 minutos",
                "price": "R$ 400,00",
                "description": "Mais tempo de acolhimento e abertura"
        }
]}
      priceNote="Valores válidos para atendimento no Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha sessão"
    />
  )
}
