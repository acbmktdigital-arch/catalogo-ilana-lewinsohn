import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function ToqueDaJuremaPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · MASSIXA Temática | Toque da Jurema"
      heroTitle={<>A força da floresta no <span style={{color:'var(--cor-destaque)'}}>Toque da Jurema</span></>}
      heroSubtitle="Massagem sobre uma cama de ervas aromáticas, com toque vigoroso e limpeza energética profunda."
      /* Original vertical (4000x6000). Moldura quadrada em qualquer largura,
         para não perder as mãos que colocam a folha na testa — que é o toque
         que dá nome à terapia. Recorte também quadrado, então nada é cortado. */
      heroImageWide="/images/toque-da-jurema-cama-de-ervas.jpg"
      heroAspecto="alto"
      heroCTALabel="Quero agendar a minha sessão"

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Toque da Jurema</span>?</>}
      whatIsTexts={[
        "É uma sessão realizada sobre uma cama de ervas aromáticas e medicinais, com toque mais vigoroso e possibilidade de limpeza energética profunda.",
        "Inspirada na força cabocla e na medicina da floresta, é indicada para equilíbrio energético e alívio corporal mais intenso.",
      ]}
      whatIsQuote="Há força que cura. A Jurema toca onde é preciso limpar."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde a sessão leva."
      transformations={[
        {
          antes: "Saudade do mato! Saudade da Terra!",
          depois: "Alegria por se sentir voltando pra casa, para si — com cheiro do mato",
        },
        {
          antes: "Desejo de cuidado generoso em ervaria — aquela coisa boa de bruxa!",
          depois: "Alívio por encontrar um acolhimento que faz sentido para o seu jeito de ser",
        },
        {
          antes: "Sente que precisa de uma limpeza mais profunda",
          depois: "Limpeza energética profunda",
        },
        { antes: "Corpo pedindo um toque mais forte", depois: "Alívio corporal intenso" },
        { antes: "Energia estagnada", depois: "Energia desbloqueada: sensação de fluir interno" },
        {
          antes: "Falta de enraizamento ou de eixo",
          depois: "Enraizamento: mais presença no corpo e eixo firmado",
        },
        {
          antes: "Sensação de desequilíbrio multidimensional: físico, mental, energético, espiritual",
          depois: "Equilíbrio energético: sensação de reorganização interna",
        },
      ]}

      includedItems={[
        "Sessão sobre cama de ervas aromáticas e medicinais",
        "Toque vigoroso conduzido conforme sua necessidade",
        "Possibilidade de limpeza energética profunda",
        "Ambiente ritualístico no Instituto Canto da Floresta",
      ]}
      includedCTALabel="Quero agendar a minha sessão"

      pricingImage="/images/toque-da-jurema-cama-de-ervas.jpg"
      pricingTitle="Toque da Jurema"
      pricingSubtitle="Escolha a duração que combina com o seu momento e agende pelo WhatsApp."
      precos={[
        {
          label: "60 minutos",
          valor: "R$ 270,00",
          descricao: "Sessão com toque vigoroso e limpeza energética",
        },
        {
          label: "90 minutos",
          valor: "R$ 360,00",
          descricao: "Mais tempo de imersão e cuidado",
        },
      ]}
      priceNote="Atendimento no Instituto Canto da Floresta, em Arraial d'Ajuda — Porto Seguro"
      pricingCTALabel="Quero agendar a minha sessão"

      faqItems={[
        {
          q: "Onde acontece o atendimento?",
          a: "No Instituto Canto da Floresta, em Arraial d'Ajuda, Bahia.",
        },
        {
          q: "O toque é muito forte?",
          a: "É mais vigoroso que uma massagem convencional, sempre respeitando o limite do seu corpo.",
        },
        {
          q: "Preciso ter alguma vivência espiritual prévia?",
          a: "Não. A sessão é aberta a qualquer pessoa que sinta o chamado para esse trabalho.",
        },
        {
          q: "O que é a cama de ervas?",
          a: "Uma base de ervas aromáticas e medicinais sobre a qual a sessão é realizada, parte da experiência sensorial do Toque da Jurema.",
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
      modalTitulo="Seu Toque da Jurema"
      modalSubtitulo="Cama de ervas, toque vigoroso e limpeza energética no Instituto Canto da Floresta."
      modalLocal="no Instituto Canto da Floresta, em Arraial d'Ajuda"
      modalidades={[
        {
          id: '60min',
          titulo: '60 minutos',
          descricao: 'Toque vigoroso e limpeza energética',
          nomeNaMensagem: 'sessão Toque da Jurema de 60 minutos',
          valor: 'R$ 270,00',
        },
        {
          id: '90min',
          titulo: '90 minutos',
          descricao: 'Mais tempo de imersão e cuidado',
          nomeNaMensagem: 'sessão Toque da Jurema de 90 minutos',
          valor: 'R$ 360,00',
        },
      ]}

      ambiente="completo"
      somAmbiente={false}
    />
  )
}
