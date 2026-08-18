import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function LeituraDeAuraPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+Leitura+de+Aura"
      serviceLabel="Ilana Lewinsohn · Leitura de Aura"
      heroTitle={<>Enxergue seu momento com a <span style={{color:'var(--cor-destaque)'}}>Leitura de Aura</span></>}
      heroSubtitle="Avaliação energética à distância dos seus padrões emocionais, mentais e espirituais, com devolutiva em áudio."
      heroImage="/images/leitura-de-aura.jpg"
      heroCTALabel="Quero minha leitura"

      painPoints={[
        {
                "icon": "❓",
                "title": "Sensação de não entender o que sente",
                "desc": "Dificuldade de nomear o que está acontecendo"
        },
        {
                "icon": "🌫️",
                "title": "Energia confusa ou pesada",
                "desc": "Sensação de estar carregando algo indefinido"
        },
        {
                "icon": "🔁",
                "title": "Padrões emocionais repetitivos",
                "desc": "Vontade de entender de onde vêm"
        },
        {
                "icon": "😮‍💨",
                "title": "Momento de transição",
                "desc": "Precisando de clareza sobre onde está"
        },
        {
                "icon": "🌙",
                "title": "Desconexão espiritual",
                "desc": "Distância da própria intuição"
        },
        {
                "icon": "💭",
                "title": "Curiosidade sobre o próprio momento energético",
                "desc": "Vontade de um olhar externo e cuidadoso"
        }
]}

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>Leitura de Aura</span>?</>}
      whatIsTexts={[
        "É um atendimento à distância que avalia padrões energéticos, emocionais, mentais e espirituais do seu momento de vida.",
        "A devolutiva é entregue em áudio, para você ouvir no seu próprio tempo, quantas vezes precisar."
]}
      whatIsQuote="Olhar para a própria energia é um jeito de se conhecer melhor."
      whatIsImage="/images/leitura-de-aura.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Clareza sobre seu momento energético"
      benefits={[
        {
                "icon": "👁️",
                "title": "Clareza energética",
                "desc": "Compreensão do seu momento atual"
        },
        {
                "icon": "🎧",
                "title": "Devolutiva em áudio",
                "desc": "Para ouvir no seu próprio tempo"
        },
        {
                "icon": "🧠",
                "title": "Autoconhecimento",
                "desc": "Compreensão de padrões emocionais e mentais"
        },
        {
                "icon": "🌙",
                "title": "Reconexão espiritual",
                "desc": "Mais proximidade com a própria intuição"
        },
        {
                "icon": "💗",
                "title": "Acolhimento à distância",
                "desc": "Cuidado mesmo sem sessão presencial"
        },
        {
                "icon": "✨",
                "title": "Sensação de ser vista",
                "desc": "Um olhar cuidadoso sobre o seu momento"
        }
]}

      includedItems={[
        "Leitura energética assíncrona de 45 minutos",
        "Avaliação de padrões emocionais, mentais e espirituais",
        "Devolutiva completa em áudio",
        "Atendimento 100% à distância"
]}
      includedCTALabel="Quero agendar minha leitura"

      credentials={[
        "Bióloga pela UNICAMP",
        "Mestre em Conservação da Biodiversidade e Desenvolvimento Sustentável (IPÊ)",
        "Criadora do método MASSIXA — Massagem Integrativa Xamânica",
        "Facilitadora de Rodas de Mulheres desde 2012"
]}
      aboutCTALabel="Agendar com Ilana"

      faqItems={[
        {
                "q": "Como funciona esse atendimento à distância?",
                "a": "Você combina com Ilana pelo WhatsApp e recebe a leitura em formato de áudio, sem necessidade de chamada ao vivo."
        },
        {
                "q": "Preciso estar presente em algum horário específico?",
                "a": "Não, é assíncrono — você ouve a devolutiva no momento que for melhor para você."
        },
        {
                "q": "Posso ouvir o áudio mais de uma vez?",
                "a": "Sim, você pode guardar e ouvir quantas vezes quiser."
        },
        {
                "q": "A leitura substitui acompanhamento terapêutico?",
                "a": "Não, é um retrato pontual do seu momento energético, complementar a outros cuidados."
        },
        {
                "q": "Como agendo?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário."
        }
]}

      pricingTitle="Leitura de Aura"
      pricingSubtitle="Um retrato do seu momento energético"
      priceFinal="R$ 135,00"
      priceNote="Sessão assíncrona de 45 minutos, com devolutiva em áudio"
      pricingCTALabel="Quero agendar minha leitura"
    />
  )
}
