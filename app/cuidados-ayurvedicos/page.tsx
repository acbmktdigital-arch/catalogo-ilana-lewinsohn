import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function CuidadosAyurvedicosPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Cuidados Plenamente Ayurvédicos"
      heroTitle={<>Cuidados plenamente <span style={{color:'var(--cor-destaque)'}}>Ayurvédicos</span></>}
      heroSubtitle="Abhyangas ou Garshana específicos para cada dosha — o biótipo ayurvédico de cada pessoa."
      /* Quadrada na origem, recortada em 4:3 a partir de y=150 para que o
         frasco e a mão que recebe o óleo sobrevivam também ao 16/10 que a
         moldura assume no desktop. */
      heroImageWide="/images/ayurvedica-oleo-morno.jpg"
      heroCTALabel="Quero minha sessão"

      whatIsTitle={<>O que são os Cuidados <span style={{color:'var(--cor-destaque)'}}>Ayurvédicos</span>?</>}
      whatIsTexts={[
        "Abhyangas ou Garshana específicos para cada dosha (biótipo ayurvédico).",
        "Com óleos aquecidos e toques próprios para cada situação, a terapia ayurvédica busca nutrir, equilibrar e promover a eliminação de estagnações e toxinas. O cuidado é individualizado, respeitando o momento, as características e as necessidades de cada pessoa.",
        "De acordo com cada necessidade, a terapia ayurvédica proporciona benefícios como:",
        "Abranda. Assenta. Acalma.",
        "Ativa. Movimenta. Revitaliza.",
        "Limpa. Ativa. Renova.",
      ]}
      whatIsQuote="Ao agendar, especifique sua maior necessidade / desejo."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde o cuidado leva."
      transformations={[
        { antes: "Ansiedade constante", depois: "Redução da ansiedade" },
        { antes: "Pele e corpo ressecados", depois: "Tecidos nutridos" },
        { antes: "Sensação de lentidão", depois: "Vitalidade desperta" },
        { antes: "Retenção de líquidos", depois: "Circulação ativada" },
        { antes: "Toxinas acumuladas", depois: "Limpeza energética" },
        { antes: "Cansaço mesmo descansando", depois: "Sensação de renovação" },
      ]}

      includedItems={[
        "Massagem com óleos vegetais aquecidos e movimentos contínuos",
        "Manobras vigorosas para estímulo da circulação e drenagem",
        "Esfoliação com óleo medicado, ervas e sal",
        "Óleos e toques selecionados conforme seu dosha e seu momento",
        "Ambiente acolhedor no Instituto Canto da Floresta",
      ]}
      includedCTALabel="Quero agendar minha sessão"

      pricingImage="/images/garshana.jpg"
      pricingTitle="Cuidados Plenamente Ayurvédicos"
      pricingSubtitle="Escolha a duração que combina com o seu momento e agende pelo WhatsApp."
      precos={[
        {
          label: "60 minutos",
          valor: "R$ 270,00",
          descricao: "Cuidado ayurvédico conforme sua necessidade",
        },
        {
          label: "90 minutos",
          valor: "R$ 360,00",
          descricao: "Mais tempo de cuidado e profundidade",
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
          q: "Como sei qual é o cuidado certo para mim?",
          a: "Você não precisa saber o nome da terapia. Ao agendar, diga qual é a sua maior necessidade ou desejo do momento — Ilana escolhe o óleo, o toque e a técnica a partir disso.",
        },
        {
          q: "O que são os doshas?",
          a: "Na Ayurveda, são as energias que regem o corpo: movimento (Vata), transformação (Pitta) e estrutura (Kapha). Em excesso, geram respectivamente ansiedade, agitação e estagnação — o cuidado ayurvédico ajuda a reequilibrá-las.",
        },
        {
          q: "Os óleos podem manchar a roupa?",
          a: "Recomenda-se usar roupas confortáveis e escuras no dia da sessão.",
        },
        {
          q: "Posso fazer se tiver pele sensível?",
          a: "Sim. Os óleos utilizados são vegetais e a intensidade é adaptada à sua pele; se você tem alergias específicas, avise antes da sessão.",
        },
        {
          q: "As manobras são desconfortáveis?",
          a: "Algumas são mais vigorosas que uma massagem relaxante comum, mas sempre respeitando seu limite.",
        },
        {
          q: "É indicada para retenção de líquidos?",
          a: "Sim, o estímulo à circulação e drenagem ajuda nessa sensação de peso e inchaço.",
        },
        {
          q: "Pode ser combinado com outras sessões?",
          a: "Sim. A esfoliação, em especial, é frequentemente usada como preparo para outros cuidados, mas também funciona muito bem sozinha.",
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
      modalTitulo="Seu cuidado ayurvédico"
      modalSubtitulo="Conte sua maior necessidade do momento — Ilana escolhe o óleo, o toque e a técnica a partir disso."
      modalLocal="no Instituto Canto da Floresta, em Arraial d'Ajuda"
      modalidades={[
        {
          id: '60min',
          titulo: '60 minutos',
          descricao: 'Cuidado conforme sua necessidade',
          nomeNaMensagem: 'sessão de Cuidados Ayurvédicos de 60 minutos',
          valor: 'R$ 270,00',
        },
        {
          id: '90min',
          titulo: '90 minutos',
          descricao: 'Mais tempo de cuidado e profundidade',
          nomeNaMensagem: 'sessão de Cuidados Ayurvédicos de 90 minutos',
          valor: 'R$ 360,00',
        },
      ]}

      ambiente="completo"
      somAmbiente={false}
    />
  )
}
