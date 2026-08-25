import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function RodasCeltaBaianasPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Rodas Celta-Baianas: Feminino Sagrado"
      heroTitle={<>Fortalecimento coletivo nas <span style={{color:'var(--cor-destaque)'}}>Rodas Celta-Baianas</span></>}
      heroSubtitle="Jornadas coletivas de fortalecimento feminino, com ritual, cacau cerimonial e partilha em círculo."
      heroImageWide="/images/rodas-celta-baianas.jpg"
      heroCTALabel="Quero saber a próxima data"

      whatIsTitle={<>O que são as <span style={{color:'var(--cor-destaque)'}}>Rodas Celta-Baianas</span>?</>}
      whatIsTexts={[
        "São jornadas coletivas de fortalecimento feminino inspiradas nos Sabbaths celtas e em tradições xamânicas afro-brasileiras e indígenas.",
        "Unem ritual, cacau cerimonial, mesa vegana e partilha em círculo, realizadas no Instituto Canto da Floresta, em Arraial d'Ajuda, e mediante convite em outras cidades.",
      ]}
      whatIsQuote="Em roda, a força de uma se soma à força de todas."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde a roda leva."
      transformations={[
        { antes: "Sensação de solidão feminina", depois: "Sensação de pertencimento" },
        { antes: "Emoções sem espaço para serem ouvidas", depois: "Partilha em círculo" },
        { antes: "Desconexão espiritual", depois: "Ritual e ancestralidade" },
        { antes: "Sensação de estar sozinha nos desafios", depois: "Fortalecimento feminino" },
        { antes: "Desconexão com o próprio ciclo", depois: "Cacau cerimonial" },
        { antes: "Falta de celebração coletiva", depois: "Mesa vegana compartilhada" },
      ]}

      includedItems={[
        "Ritual inspirado nos Sabbaths celtas e tradições afro-baianas",
        "Cacau cerimonial",
        "Mesa vegana compartilhada",
        "Partilha em círculo entre as participantes",
      ]}
      includedCTALabel="Quero saber a próxima data"

      pricingImage="/images/rodas-celta-baianas.jpg"
      pricingTitle="Rodas Celta-Baianas"
      pricingSubtitle="Feminino Sagrado. Fale com Ilana pelo WhatsApp para saber a próxima data."
      precos={[
        {
          label: "Próxima Roda",
          valor: "A consultar",
          descricao: "Valor conforme a programação de cada Roda",
        },
      ]}
      priceNote="No Instituto Canto da Floresta, em Arraial d'Ajuda — e em outras cidades mediante convite"
      pricingCTALabel="Quero saber a próxima data"

      faqItems={[
        {
          q: "Onde acontecem as Rodas?",
          a: "No Instituto Canto da Floresta, em Arraial d'Ajuda, e também em outras cidades mediante convite.",
        },
        {
          q: "Com que frequência acontecem?",
          a: "Seguem uma programação própria; fale com Ilana pelo WhatsApp para saber a próxima data.",
        },
        {
          q: "Preciso ter experiência com rituais para participar?",
          a: "Não, as Rodas são abertas a qualquer mulher que sinta o chamado para esse espaço.",
        },
        {
          q: "Qual o valor?",
          a: "Varia conforme a programação de cada Roda; consulte os valores atuais pelo WhatsApp.",
        },
        {
          q: "Como faço para participar?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp para saber a próxima data e como se inscrever.",
        },
      ]}

      modalEtiqueta="Próxima Roda"
      modalTitulo="Participar de uma Roda"
      modalSubtitulo="Deixe seu contato para saber a próxima data, o local e como se inscrever."
      modalLocal="nas Rodas Celta-Baianas"
      modalMostrarPeriodo={false}
      modalidades={[
        {
          id: 'roda',
          titulo: 'Próxima Roda',
          descricao: 'Feminino Sagrado',
          nomeNaMensagem: 'participação nas Rodas Celta-Baianas',
          valor: 'A consultar',
        },
      ]}

      ambiente="curto"
      somAmbiente={false}
    />
  )
}
