import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function AnahataTerraPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · MASSIXA Temática | Anahata Terra"
      heroTitle={<>Enraizamento profundo em <span style={{color:'var(--cor-destaque)'}}>Anahata Terra</span></>}
      heroSubtitle="Argila, pedras quentes e ervas para assentar a energia do corpo e desacelerar a mente."
      heroImageWide="/images/anahata-terra.jpg"
      heroCTALabel="Quero minha sessão"

      whatIsTitle={<>O que é <span style={{color:'var(--cor-destaque)'}}>Anahata Terra</span>?</>}
      whatIsTexts={[
        "É uma sessão com argila, pedras quentes e ervas voltada ao enraizamento, ao assentamento da energia corporal e à desaceleração da mente.",
        "Especialmente indicada para favorecer o equilíbrio do dosha Vata, quando a mente está agitada e o corpo precisa de firmeza e calor.",
      ]}
      whatIsQuote="Enraizar não é parar. É encontrar onde pousar."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde a sessão leva."
      transformations={[
        { antes: "Mente que não desacelera", depois: "Mente mais calma" },
        {
          antes: "Dificuldade de se sentir presente e firme",
          depois: "Enraizamento: sensação de estabilidade e presença",
        },
        {
          antes: "Ansiedade constante, corpo em estado de alerta",
          depois: "Redução da ansiedade",
        },
        {
          antes: "Frio interno, sensação de desamparo",
          depois: "Aquecimento que acalma o sistema nervoso",
        },
        { antes: "Dificuldade de relaxar de verdade", depois: "Descanso mais profundo" },
        {
          antes: "Falta de estabilidade emocional",
          depois: "Equilíbrio do dosha Vata: corpo e mente mais estáveis",
        },
      ]}

      includedItems={[
        "Aplicação de argila em pontos específicos do corpo",
        "Uso de pedras quentes para aquecimento e relaxamento",
        "Ervas selecionadas para enraizamento",
        "Ambiente acolhedor no Instituto Canto da Floresta",
      ]}
      includedCTALabel="Quero agendar minha sessão"

      pricingImage="/images/anahata-terra.jpg"
      pricingTitle="Anahata Terra"
      pricingSubtitle="Escolha a duração que combina com o seu momento e agende pelo WhatsApp."
      precos={[
        {
          label: "60 minutos",
          valor: "R$ 270,00",
          descricao: "Argila, pedras quentes e ervas",
        },
        {
          label: "90 minutos",
          valor: "R$ 360,00",
          descricao: "Mais tempo de enraizamento e cuidado",
        },
      ]}
      priceNote="Atendimento no Instituto Canto da Floresta, em Arraial d'Ajuda — Porto Seguro"
      pricingCTALabel="Quero agendar minha sessão"

      faqItems={[
        {
          q: "Onde acontece o atendimento?",
          a: "No Instituto Canto da Floresta, em Arraial d'Ajuda, Bahia.",
        },
        {
          q: "Para quem é indicada essa sessão?",
          a: "Para quem sente a mente acelerada, ansiedade ou dificuldade de se sentir presente e estável.",
        },
        {
          q: "O que é o dosha Vata?",
          a: "Na Ayurveda, é a energia ligada ao movimento; quando em excesso, gera agitação mental e instabilidade — essa sessão ajuda a equilibrá-la.",
        },
        {
          q: "A argila e as pedras quentes machucam?",
          a: "Não, são aplicadas com cuidado e conforto, respeitando sua sensibilidade.",
        },
        {
          q: "Quanto tempo dura?",
          a: "Você escolhe entre 60 ou 90 minutos, conforme sua disponibilidade.",
        },
        {
          q: "Como agendo?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário.",
        },
      ]}

      modalEtiqueta="Agendamento"
      modalTitulo="Sua sessão Anahata Terra"
      modalSubtitulo="Argila, pedras quentes e ervas para enraizar, no Instituto Canto da Floresta."
      modalLocal="no Instituto Canto da Floresta, em Arraial d'Ajuda"
      modalidades={[
        {
          id: '60min',
          titulo: '60 minutos',
          descricao: 'Argila, pedras quentes e ervas',
          nomeNaMensagem: 'sessão Anahata Terra de 60 minutos',
          valor: 'R$ 270,00',
        },
        {
          id: '90min',
          titulo: '90 minutos',
          descricao: 'Mais tempo de enraizamento e cuidado',
          nomeNaMensagem: 'sessão Anahata Terra de 90 minutos',
          valor: 'R$ 360,00',
        },
      ]}

      ambiente="completo"
      somAmbiente={false}
    />
  )
}
