import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function BussolaOrientacaoXamanicaPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Bússola: Orientação Integrativa Xamânica"
      heroTitle={<>Reencontre seu rumo com a <span style={{color:'var(--cor-destaque)'}}>Bússola</span></>}
      heroSubtitle="Escuta e orientação xamânica, no formato online, para reencontrar o rumo em questões físicas, energéticas ou emocionais."
      heroImageWide="/images/bussola-orientacao-xamanica.jpg"
      heroCTALabel="Quero minha orientação"

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>Bússola</span>?</>}
      whatIsTexts={[
        "É um atendimento online de escuta e orientação para reencontrar o rumo em questões físicas, energéticas ou emocionais.",
        "A partir de referências do Ayurveda, Xamanismo, Alquimia, Yoga e Ervaria, é construído um roteiro personalizado, entregue por escrito.",
      ]}
      whatIsQuote="Às vezes, tudo que precisamos é de uma bússola para lembrar o caminho."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde a orientação leva."
      transformations={[
        { antes: "Sensação de estar sem rumo", depois: "Mais clareza de rumo" },
        { antes: "Confusão emocional", depois: "Acolhimento emocional" },
        { antes: "Desconexão espiritual", depois: "Reconexão com a intuição" },
        { antes: "Dúvidas sobre decisões importantes", depois: "Roteiro personalizado por escrito" },
        { antes: "Padrões que se repetem", depois: "Sensação de reorientação" },
        { antes: "Corpo e energia desequilibrados", depois: "Sabedoria integrativa" },
      ]}

      includedItems={[
        "Sessão online de 90 minutos de escuta e orientação",
        "Construção de roteiro personalizado",
        "Plano de reorientação entregue por escrito",
        "Referências de Ayurveda, Xamanismo, Alquimia, Yoga e Ervaria",
      ]}
      includedCTALabel="Quero agendar minha orientação"

      pricingImage="/images/bussola-orientacao-xamanica.jpg"
      pricingTitle="Bússola"
      pricingSubtitle="Orientação Integrativa Xamânica, no formato online. Agende pelo WhatsApp."
      precos={[
        {
          label: "Sessão online de 90 minutos",
          valor: "R$ 296,00",
          descricao: "Escuta, orientação e plano por escrito",
        },
      ]}
      priceNote="Sessão online de 90 minutos + plano de reorientação entregue por escrito"
      pricingCTALabel="Quero agendar minha orientação"

      faqItems={[
        {
          q: "Como acontece o atendimento?",
          a: "É feito online, então você participa de onde estiver, no seu próprio espaço.",
        },
        {
          q: "Recebo algo por escrito depois da sessão?",
          a: "Sim, um roteiro de reorientação personalizado é entregue por escrito após o atendimento.",
        },
        {
          q: "Preciso trazer uma pergunta específica?",
          a: "Não é obrigatório, mas ajuda se você já tiver uma questão em mente — Ilana também pode te ajudar a encontrá-la durante a sessão.",
        },
        {
          q: "É necessário algum preparo antes?",
          a: "Não é necessário nenhum preparo especial, apenas disponibilidade para se conectar com o momento.",
        },
        {
          q: "Como agendo?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário.",
        },
      ]}

      modalEtiqueta="Agendamento"
      modalTitulo="Sua Bússola"
      modalSubtitulo="90 minutos online de escuta e orientação, com plano de reorientação por escrito."
      modalLocal="no formato online"
      modalidades={[
        {
          id: 'online',
          titulo: 'Sessão online de 90 minutos',
          descricao: 'Escuta, orientação e plano por escrito',
          nomeNaMensagem: 'Bússola: Orientação Integrativa Xamânica',
          valor: 'R$ 296,00',
        },
      ]}

      somAmbiente={false}
    />
  )
}
