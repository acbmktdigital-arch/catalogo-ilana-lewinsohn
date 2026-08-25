import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function MadalenaPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · MASSIXA Temática | Madalena"
      heroTitle={<>Cacau, rosas e o coração aberto em <span style={{color:'var(--cor-destaque)'}}>Madalena</span></>}
      heroSubtitle="Sessão que une cacau cerimonial ao toque das rosas vermelhas, para relaxar e reconectar com sua potência feminina."
      heroImageWide="/images/madalena.jpg"
      heroCTALabel="Quero minha sessão"

      whatIsTitle={<>O que é a sessão <span style={{color:'var(--cor-destaque)'}}>Madalena</span>?</>}
      whatIsTexts={[
        "É uma sessão que une cacau cerimonial ao toque das rosas vermelhas, favorecendo relaxamento, abertura do coração e reconexão com a própria potência feminina.",
        "Uma experiência sensível e restauradora, pensada para quem precisa de espaço para sentir, acolher-se e se lembrar da própria beleza, com liberdade e em segurança.",
      ]}
      whatIsQuote="Antes de florescer para o mundo, é preciso florescer para si mesma."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde a sessão leva."
      transformations={[
        { antes: "Coração pedindo cuidado", depois: "Coração mais aberto e harmonioso" },
        {
          antes: "Desconexão da própria energia feminina",
          depois: "Reconexão com a feminilidade: sentir sua potência e beleza",
        },
        {
          antes: "Corpo tenso, especialmente peito e ombros",
          depois: "Relaxamento profundo: descansar em si",
        },
        {
          antes: "Saudade de ser tocada em profundo respeito enquanto mulher",
          depois: "Presença através do cacau: abertura suave e acolhedora",
        },
        { antes: "Autoestima baixa", depois: "Autoestima fortalecida: afeto por si mesma" },
        {
          antes: "Sobrecarga emocional, aperto no peito",
          depois: "Sensação de renovação: sair mais leve e inteira",
        },
        {
          antes: "Sonho de conto-de-fada: vontade de receber carícias mágicas de rosas",
          depois: "Sonho realizado pela bruxa-madrinha: coração tocado pela magia das rosas",
        },
      ]}

      includedItems={[
        "Cacau cerimonial preparado para a sessão",
        "Toque com rosas vermelhas",
        "Escuta antes e depois da sessão",
        "Ambiente acolhedor e sensível no Instituto Canto da Floresta",
      ]}
      includedCTALabel="Quero agendar minha sessão"

      pricingImage="/images/madalena.jpg"
      pricingTitle="Madalena"
      pricingSubtitle="Escolha a duração que combina com o seu momento e agende pelo WhatsApp."
      precos={[
        {
          label: "60 minutos",
          valor: "R$ 300,00",
          descricao: "Cacau cerimonial e toque das rosas",
        },
        {
          label: "90 minutos",
          valor: "R$ 400,00",
          descricao: "Mais tempo de acolhimento e abertura",
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
          q: "Preciso beber o cacau?",
          a: "O cacau cerimonial faz parte da experiência e é oferecido com cuidado, respeitando suas preferências.",
        },
        {
          q: "A sessão é indicada só para mulheres?",
          a: "É especialmente voltada ao feminino sagrado, mas qualquer pessoa que se identifique com essa proposta pode participar.",
        },
        {
          q: "Preciso estar passando por algo específico para fazer essa sessão?",
          a: "Não, ela serve tanto para momentos de dor quanto para celebrar e se reconectar com sua potência.",
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
      modalTitulo="Sua sessão Madalena"
      modalSubtitulo="Cacau cerimonial e toque das rosas vermelhas no Instituto Canto da Floresta."
      modalLocal="no Instituto Canto da Floresta, em Arraial d'Ajuda"
      modalidades={[
        {
          id: '60min',
          titulo: '60 minutos',
          descricao: 'Cacau cerimonial e toque das rosas',
          nomeNaMensagem: 'sessão Madalena de 60 minutos',
          valor: 'R$ 300,00',
        },
        {
          id: '90min',
          titulo: '90 minutos',
          descricao: 'Mais tempo de acolhimento e abertura',
          nomeNaMensagem: 'sessão Madalena de 90 minutos',
          valor: 'R$ 400,00',
        },
      ]}

      ambiente="completo"
      somAmbiente={false}
    />
  )
}
