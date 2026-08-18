import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function ImersaoReconectaPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+Imers%C3%A3o+Reconecta"
      serviceLabel="Ilana Lewinsohn · Imersão Reconecta"
      heroTitle={<>Três horas só suas na Imersão <span style={{color:'var(--cor-destaque)'}}>Reconecta</span></>}
      heroSubtitle="Um convite a reconectar corpo, coração e propósito, no tempo que o seu momento pedir."
      heroImage="/images/imersao-reconecta.jpg"
      heroCTALabel="Quero minha imersão"

      painPoints={[
        {
                "icon": "🌫️",
                "title": "Sensação de estar perdida",
                "desc": "Distância do próprio propósito"
        },
        {
                "icon": "😮‍💨",
                "title": "Sobrecarga acumulada",
                "desc": "Muito tempo sem uma pausa de verdade"
        },
        {
                "icon": "💔",
                "title": "Coração pedindo espaço",
                "desc": "Emoções que precisam ser ouvidas"
        },
        {
                "icon": "😣",
                "title": "Corpo tenso e cansado",
                "desc": "Tensão física acumulada"
        },
        {
                "icon": "🌪️",
                "title": "Mente dispersa",
                "desc": "Dificuldade de encontrar clareza"
        },
        {
                "icon": "🕯️",
                "title": "Falta de ritual no dia a dia",
                "desc": "Rotina sem momentos de presença"
        }
]}

      whatIsTitle={<>O que é a Imersão <span style={{color:'var(--cor-destaque)'}}>Reconecta</span>?</>}
      whatIsTexts={[
        "São três horas dedicadas exclusivamente a você, podendo incluir escuta, ritual, toque, ervas, defumação, banho de ervas e sons curadores.",
        "Tudo é construído de acordo com o que o seu momento pede — um convite a reconectar corpo, coração e propósito."
]}
      whatIsQuote="Às vezes, reconectar é só parar tempo suficiente para se ouvir."
      whatIsImage="/images/imersao-reconecta.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Reconexão com corpo, coração e propósito"
      benefits={[
        {
                "icon": "🧭",
                "title": "Mais clareza",
                "desc": "Reconexão com o próprio propósito"
        },
        {
                "icon": "💗",
                "title": "Coração mais leve",
                "desc": "Espaço para sentir e se escutar"
        },
        {
                "icon": "🌿",
                "title": "Corpo relaxado",
                "desc": "Alívio profundo de tensões"
        },
        {
                "icon": "🕯️",
                "title": "Experiência ritualística",
                "desc": "Presença através de práticas ancestrais"
        },
        {
                "icon": "🎶",
                "title": "Sons curadores",
                "desc": "Relaxamento através da vibração sonora"
        },
        {
                "icon": "✨",
                "title": "Sensação de renovação",
                "desc": "Sair mais inteira do que entrou"
        }
]}

      includedItems={[
        "Imersão de 3 horas construída para o seu momento",
        "Escuta, ritual e toque conforme sua necessidade",
        "Possibilidade de defumação, banho de ervas e sons curadores",
        "Ambiente acolhedor no Instituto Canto da Floresta"
]}
      includedCTALabel="Quero agendar minha imersão"

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
                "q": "O que vai acontecer na minha imersão?",
                "a": "Não há um roteiro fixo — Ilana constrói a experiência com você, de acordo com o que seu momento pede."
        },
        {
                "q": "Preciso saber o que quero trabalhar antes de agendar?",
                "a": "Não é obrigatório. Você pode chegar apenas com a intenção de se cuidar e reconectar."
        },
        {
                "q": "A imersão inclui conversa?",
                "a": "Sim, a escuta faz parte do processo, antes, durante ou depois, conforme o que for necessário."
        },
        {
                "q": "É indicada para momentos de crise ou também para celebrar?",
                "a": "Serve para os dois: tanto para atravessar um momento difícil quanto para celebrar uma conquista ou transição."
        },
        {
                "q": "Como agendo?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário."
        }
]}

      pricingTitle="Imersão Reconecta"
      pricingSubtitle="Um tempo só seu, sem pressa"
      priceFinal="R$ 605,00"
      priceNote="Imersão de 3 horas · Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha imersão"
    />
  )
}
