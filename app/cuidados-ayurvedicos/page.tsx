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

      /* Título trocado a pedido do doc 5: as massagens passam a ser um item
         desta página, e o Shirodhara é o outro. O texto abaixo é o mesmo. */
      whatIsTitle={<>Massagens <span style={{color:'var(--cor-destaque)'}}>Ayurvédicas</span></>}
      whatIsTexts={[
        "Abhyangas ou Garshana específicos para cada dosha (biótipo ayurvédico).",
        "Com óleos aquecidos e toques próprios para cada situação, a terapia ayurvédica busca nutrir, equilibrar e promover a eliminação de estagnações e toxinas. O cuidado é individualizado, respeitando o momento, as características e as necessidades de cada pessoa.",
        "De acordo com cada necessidade, a terapia ayurvédica proporciona benefícios como:",
        "Abranda. Assenta. Acalma.",
        "Ativa. Movimenta. Revitaliza.",
        "Limpa. Ativa. Renova.",
      ]}
      /* O Shirodhara veio da página própria para cá, como o doc 5 pediu: é
         terapia ayurvédica, só que não é massagem. Entra como segundo item
         da seção, no mesmo bloco que o Colo da Terra usa nas Imersões. */
      subSecao={{
        titulo: (
          <><span style={{color:'var(--cor-destaque)'}}>Shirodhara</span></>
        ),
        subtitulo:
          'A terapia ayurvédica que não é massagem: um fluxo contínuo de óleo sobre o terceiro olho.',
        textos: [
          'É um fluxo contínuo de óleo medicado derramado sobre a região do terceiro olho, conduzindo corpo e mente a um estado profundo de relaxamento.',
          'Auxilia na redução de ansiedade, estresse e agitação mental, favorecendo o equilíbrio dos doshas Vata e Pitta.',
        ],
      }}
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
      /* As dores e transformações do Shirodhara vieram junto com ele, em
         painel próprio — são as que a Ilana aprovou no doc 3 e não teriam
         onde caber no painel das massagens. */
      transformacaoSecundaria={{
        titulo: 'A Transformação no Shirodhara',
        subtitulo: 'Para a mente que não desliga.',
        itens: [
          { antes: "Mente que não para", depois: "Mente mais silenciosa" },
          { antes: "Ansiedade constante", depois: "Menos ansiedade" },
          { antes: "Insônia ou sono agitado", depois: "Sono mais profundo" },
          { antes: "Dificuldade de concentração", depois: "Mais concentração" },
          { antes: "Tensão na cabeça e no rosto", depois: "Alívio de tensão facial" },
          { antes: "Sobrecarga mental", depois: "Sensação de paz profunda" },
        ],
      }}

      includedItems={[
        "Massagem com óleos vegetais aquecidos e movimentos contínuos",
        "Manobras vigorosas para estímulo da circulação e drenagem",
        "Esfoliação com óleo medicado, ervas e sal",
        "Óleos e toques selecionados conforme seu dosha e seu momento",
        "Shirodhara: fluxo contínuo de óleo medicado sobre o terceiro olho",
        "Ambiente acolhedor no Instituto Canto da Floresta",
      ]}
      includedCTALabel="Quero agendar minha sessão"

      pricingImage="/images/garshana.jpg"
      pricingTitle="Cuidados Plenamente Ayurvédicos"
      pricingSubtitle="Escolha a massagem ou o Shirodhara, na duração que combina com o seu momento, e agende pelo WhatsApp."
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
        {
          /* Preço próprio do Shirodhara, que veio da página dele. */
          label: "Shirodhara · 60 minutos",
          valor: "R$ 350,00",
          descricao: "Fluxo contínuo de óleo sobre o terceiro olho",
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
          q: "Qual a diferença entre as massagens e o Shirodhara?",
          a: "As duas são terapias ayurvédicas. As massagens trabalham o corpo com óleos e manobras; o Shirodhara não é massagem — é um fluxo contínuo de óleo sobre o terceiro olho, voltado a silenciar a mente.",
        },
        {
          q: "No Shirodhara, o óleo suja o cabelo?",
          a: "Sim, é recomendável lavar o cabelo após a sessão; traga uma touca ou lenço se preferir.",
        },
        {
          q: "Quanto tempo dura?",
          a: "As massagens têm 60 ou 90 minutos, conforme sua disponibilidade. O Shirodhara tem 60 minutos.",
        },
        {
          q: "Como agendo?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário.",
        },
      ]}

      modalEtiqueta="Agendamento"
      modalTitulo="Seu cuidado ayurvédico"
      modalSubtitulo="Escolha a modalidade e conte sua maior necessidade do momento — Ilana escolhe o óleo, o toque e a técnica a partir disso."
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
        {
          id: 'shirodhara',
          titulo: 'Shirodhara',
          descricao: 'Fluxo de óleo sobre o terceiro olho',
          nomeNaMensagem: 'sessão de Shirodhara',
          valor: 'R$ 350,00',
        },
      ]}

      ambiente="completo"
      somAmbiente={false}
    />
  )
}
