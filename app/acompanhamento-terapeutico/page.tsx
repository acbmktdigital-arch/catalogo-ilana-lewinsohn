import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function AcompanhamentoTerapeuticoPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+Acompanhamento+Terap%C3%AAutico+Integrativo"
      serviceLabel="Ilana Lewinsohn · Acompanhamento Terapêutico Integrativo"
      heroTitle={<>Cuidado contínuo no <span style={{color:'var(--cor-destaque)'}}>Acompanhamento Terapêutico</span></>}
      heroSubtitle="Processo continuado de escuta, orientação e práticas integrativas ao longo do tempo, principalmente online."
      heroImage="/images/acompanhamento-terapeutico.jpg"
      heroCTALabel="Quero começar meu acompanhamento"

      painPoints={[
        {
                "icon": "🔁",
                "title": "Questões que se repetem",
                "desc": "Padrões que voltam mesmo depois de tentar resolver"
        },
        {
                "icon": "😮‍💨",
                "title": "Sensação de estar sozinha no processo",
                "desc": "Falta de um espaço de apoio contínuo"
        },
        {
                "icon": "🌫️",
                "title": "Falta de constância no autocuidado",
                "desc": "Dificuldade de manter uma prática ao longo do tempo"
        },
        {
                "icon": "💭",
                "title": "Muitas questões ao mesmo tempo",
                "desc": "Precisando de acompanhamento, não só de uma sessão pontual"
        },
        {
                "icon": "😰",
                "title": "Momentos de instabilidade emocional",
                "desc": "Necessidade de apoio regular"
        },
        {
                "icon": "🌱",
                "title": "Desejo de transformação real",
                "desc": "Vontade de mudanças que se sustentem no tempo"
        }
]}

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Acompanhamento Terapêutico Integrativo</span>?</>}
      whatIsTexts={[
        "É um processo continuado, realizado principalmente online — podendo incluir encontros presenciais —, com sessões semanais, quinzenais ou mensais de 60 minutos.",
        "Inclui escuta, orientação e sugestão de práticas integrativas ao longo do tempo, construindo junto com você um caminho de transformação sustentável."
]}
      whatIsQuote="Transformação real acontece no tempo, não numa sessão só."
      whatIsImage="/images/acompanhamento-terapeutico.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Apoio contínuo para uma transformação real"
      benefits={[
        {
                "icon": "🤝",
                "title": "Apoio contínuo",
                "desc": "Acompanhamento ao longo do tempo, não só pontual"
        },
        {
                "icon": "🧭",
                "title": "Orientação personalizada",
                "desc": "Práticas sugeridas de acordo com seu processo"
        },
        {
                "icon": "🌱",
                "title": "Transformação sustentável",
                "desc": "Mudanças que se consolidam com o tempo"
        },
        {
                "icon": "💗",
                "title": "Escuta constante",
                "desc": "Espaço seguro para acompanhar suas questões"
        },
        {
                "icon": "📅",
                "title": "Flexibilidade de frequência",
                "desc": "Sessões semanais, quinzenais ou mensais"
        },
        {
                "icon": "✨",
                "title": "Mais autoconhecimento",
                "desc": "Compreensão mais profunda de si ao longo do processo"
        }
]}

      includedItems={[
        "Sessões de 60 minutos, na frequência que você escolher",
        "Escuta e orientação contínuas",
        "Sugestão de práticas integrativas entre as sessões",
        "Atendimento online, com possibilidade de encontros presenciais"
]}
      includedCTALabel="Quero começar meu acompanhamento"

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
                "q": "Qual a diferença entre as frequências semanal, quinzenal e mensal?",
                "a": "Elas se ajustam à intensidade do seu momento — quanto mais frequente, mais próximo o acompanhamento; a escolha é conversada com Ilana."
        },
        {
                "q": "Posso mudar a frequência ao longo do processo?",
                "a": "Sim, a frequência pode ser ajustada conforme sua necessidade em cada fase."
        },
        {
                "q": "É possível ter encontros presenciais também?",
                "a": "Sim, o acompanhamento é principalmente online, mas pode incluir encontros presenciais combinados com Ilana."
        },
        {
                "q": "Como agendo?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário."
        }
]}

      pricingTitle="Acompanhamento Terapêutico Integrativo"
      pricingSubtitle="Escolha a frequência do seu acompanhamento"
      pricingOptions={[
        {
                "label": "Semanal",
                "price": "R$ 134,00",
                "description": "Por sessão de 60 minutos"
        },
        {
                "label": "Quinzenal",
                "price": "R$ 161,00",
                "description": "Por sessão de 60 minutos"
        },
        {
                "label": "Mensal",
                "price": "R$ 197,00",
                "description": "Por sessão de 60 minutos"
        }
]}
      priceNote="Valores por sessão, conforme a frequência escolhida"
      pricingCTALabel="Quero começar meu acompanhamento"
    />
  )
}
