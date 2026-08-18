import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function EscaldaPesRitualPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+Escalda-P%C3%A9s+Ritual"
      serviceLabel="Ilana Lewinsohn · Escalda-Pés Ritual"
      heroTitle={<>Um ritual de pausa no <span style={{color:'var(--cor-destaque)'}}>Escalda-Pés</span></>}
      heroSubtitle="Ervas, flores e óleos vegetais para acolher o corpo, repousar a mente e favorecer o enraizamento."
      heroImage="/images/escalda-pes-ritual.jpg"
      heroCTALabel="Quero meu ritual"

      painPoints={[
        {
                "icon": "🦶",
                "title": "Pés cansados",
                "desc": "Peso acumulado de dias corridos"
        },
        {
                "icon": "😮‍💨",
                "title": "Falta de pausa no dia",
                "desc": "Rotina sem um momento só seu"
        },
        {
                "icon": "🌫️",
                "title": "Sensação de desenraizamento",
                "desc": "Dificuldade de se sentir presente"
        },
        {
                "icon": "😣",
                "title": "Tensão acumulada",
                "desc": "Corpo pedindo um cuidado simples e gostoso"
        },
        {
                "icon": "☕",
                "title": "Falta de ritual no cotidiano",
                "desc": "Vontade de um momento de desaceleração"
        },
        {
                "icon": "🥱",
                "title": "Cansaço leve mas constante",
                "desc": "Precisando de uma pausa rápida e restauradora"
        }
]}

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Escalda-Pés Ritual</span>?</>}
      whatIsTexts={[
        "É um ritual com ervas, flores e óleos vegetais para acolher o corpo, repousar a mente e favorecer o enraizamento.",
        "A experiência é finalizada com massagem nos pés e um chá de ervas do jardim — um momento simples e profundamente restaurador."
]}
      whatIsQuote="Pés cuidados, corpo inteiro agradece."
      whatIsImage="/images/escalda-pes-ritual.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Pausa, aconchego e enraizamento"
      benefits={[
        {
                "icon": "🦶",
                "title": "Pés relaxados",
                "desc": "Alívio imediato de peso e cansaço"
        },
        {
                "icon": "🌸",
                "title": "Ritual com ervas e flores",
                "desc": "Experiência sensorial acolhedora"
        },
        {
                "icon": "🌍",
                "title": "Enraizamento",
                "desc": "Sensação de presença e firmeza"
        },
        {
                "icon": "🍵",
                "title": "Chá de ervas do jardim",
                "desc": "Finalização gostosa e cuidadosa"
        },
        {
                "icon": "😌",
                "title": "Mente mais tranquila",
                "desc": "Pausa real em meio à rotina"
        },
        {
                "icon": "✨",
                "title": "Sensação de leveza",
                "desc": "Recomeço com mais suavidade"
        }
]}

      includedItems={[
        "Ritual com ervas e flores para os pés",
        "Massagem nos pés",
        "Chá de ervas do jardim ao final",
        "Ambiente acolhedor no Instituto Canto da Floresta"
]}
      includedCTALabel="Quero agendar meu ritual"

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
                "q": "Posso fazer esse ritual como complemento de outra sessão?",
                "a": "Sim, funciona bem tanto sozinho quanto como um cuidado adicional."
        },
        {
                "q": "Quanto tempo dura?",
                "a": "A sessão tem duração de 50 minutos."
        },
        {
                "q": "É indicado para quem tem pouco tempo disponível?",
                "a": "Sim, é uma ótima opção de pausa rápida e restauradora."
        },
        {
                "q": "Como agendo?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário."
        }
]}

      pricingTitle="Escalda-Pés Ritual"
      pricingSubtitle="Uma pausa simples e restauradora"
      priceFinal="R$ 180,00"
      priceNote="Sessão de 50 minutos · Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar meu ritual"
    />
  )
}
