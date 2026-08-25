import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function AcompanhamentoTerapeuticoPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Acompanhamento Terapêutico Integrativo"
      heroTitle={<>Cuidado contínuo no <span style={{color:'var(--cor-destaque)'}}>Acompanhamento Terapêutico</span></>}
      heroSubtitle="Processo continuado de escuta, orientação e práticas integrativas ao longo do tempo, principalmente online."
      heroImageWide="/images/acompanhamento-terapeutico.jpg"
      heroCTALabel="Quero começar meu acompanhamento"

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Acompanhamento Terapêutico Integrativo</span>?</>}
      whatIsTexts={[
        "É um processo continuado, realizado principalmente online — podendo incluir encontros presenciais —, com sessões semanais, quinzenais ou mensais de 60 minutos.",
        "Inclui escuta, orientação e sugestão de práticas integrativas ao longo do tempo, construindo junto com você um caminho de transformação sustentável.",
      ]}
      whatIsQuote="Transformação real acontece no tempo, não numa sessão só."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde o processo leva."
      transformations={[
        { antes: "Questões que se repetem", depois: "Mais autoconhecimento" },
        { antes: "Sensação de estar sozinha no processo", depois: "Escuta constante" },
        { antes: "Falta de constância no autocuidado", depois: "Apoio contínuo" },
        { antes: "Muitas questões ao mesmo tempo", depois: "Orientação personalizada" },
        { antes: "Momentos de instabilidade emocional", depois: "Flexibilidade de frequência" },
        { antes: "Desejo de transformação real", depois: "Transformação sustentável" },
      ]}

      includedItems={[
        "Sessões de 60 minutos, na frequência que você escolher",
        "Escuta e orientação contínuas",
        "Sugestão de práticas integrativas entre as sessões",
        "Atendimento online, com possibilidade de encontros presenciais",
      ]}
      includedCTALabel="Quero começar meu acompanhamento"

      pricingImage="/images/acompanhamento-terapeutico.jpg"
      pricingTitle="Acompanhamento Terapêutico Integrativo"
      pricingSubtitle="Escolha a frequência que combina com o seu momento e fale com Ilana pelo WhatsApp."
      precos={[
        {
          label: "Semanal",
          valor: "R$ 134,00",
          descricao: "Por sessão de 60 minutos",
        },
        {
          label: "Quinzenal",
          valor: "R$ 161,00",
          descricao: "Por sessão de 60 minutos",
        },
        {
          label: "Mensal",
          valor: "R$ 197,00",
          descricao: "Por sessão de 60 minutos",
        },
      ]}
      priceNote="Valores por sessão, conforme a frequência escolhida · Atendimento online"
      pricingCTALabel="Quero começar meu acompanhamento"

      faqItems={[
        {
          q: "Como acontece o atendimento?",
          a: "É feito online, então você participa de onde estiver, no seu próprio espaço.",
        },
        {
          q: "Qual a diferença entre as frequências semanal, quinzenal e mensal?",
          a: "Elas se ajustam à intensidade do seu momento — quanto mais frequente, mais próximo o acompanhamento; a escolha é conversada com Ilana.",
        },
        {
          q: "Posso mudar a frequência ao longo do processo?",
          a: "Sim, a frequência pode ser ajustada conforme sua necessidade em cada fase.",
        },
        {
          q: "É possível ter encontros presenciais também?",
          a: "Sim, o acompanhamento é principalmente online, mas pode incluir encontros presenciais combinados com Ilana.",
        },
        {
          q: "Como agendo?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário.",
        },
      ]}

      modalEtiqueta="Acompanhamento"
      modalTitulo="Seu acompanhamento contínuo"
      modalSubtitulo="Sessões de 60 minutos, online, na frequência que fizer sentido para o seu momento."
      modalLocal="no formato online"
      modalidades={[
        {
          id: 'semanal',
          titulo: 'Semanal',
          descricao: 'Acompanhamento mais próximo',
          nomeNaMensagem: 'Acompanhamento Terapêutico Integrativo semanal',
          valor: 'R$ 134,00',
        },
        {
          id: 'quinzenal',
          titulo: 'Quinzenal',
          descricao: 'Um meio-termo de frequência',
          nomeNaMensagem: 'Acompanhamento Terapêutico Integrativo quinzenal',
          valor: 'R$ 161,00',
        },
        {
          id: 'mensal',
          titulo: 'Mensal',
          descricao: 'Encontros mais espaçados',
          nomeNaMensagem: 'Acompanhamento Terapêutico Integrativo mensal',
          valor: 'R$ 197,00',
        },
      ]}

      somAmbiente={false}
    />
  )
}
