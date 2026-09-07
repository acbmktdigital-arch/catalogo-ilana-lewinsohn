import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function ShirodharaPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Shirodhara"
      heroTitle={<>Silencie a mente com <span style={{color:'var(--cor-destaque)'}}>Shirodhara</span></>}
      heroSubtitle="Fluxo contínuo de óleo sobre o terceiro olho, para conduzir corpo e mente a um relaxamento profundo."
      /* Moldura quadrada e recorte deslocado para a direita, para o vasilhame
         nas mãos da Ilana ficar em evidência. Na moldura padrão o desktop
         aparava 44px do topo — justamente onde ele está. Quadrada, a altura
         é preservada inteira e aparece o gesto todo: vasilhame, fio de óleo
         e a testa de quem recebe. */
      heroImageWide="/images/shirodhara-fio-de-oleo-v2.jpg"
      heroAspecto="alto"
      heroCTALabel="Quero minha sessão"

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Shirodhara</span>?</>}
      whatIsTexts={[
        "É um fluxo contínuo de óleo medicado derramado sobre a região do terceiro olho, conduzindo corpo e mente a um estado profundo de relaxamento.",
        "Auxilia na redução de ansiedade, estresse e agitação mental, favorecendo o equilíbrio dos doshas Vata e Pitta.",
      ]}
      whatIsQuote="Quando a mente silencia, o corpo finalmente descansa."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde a sessão leva."
      transformations={[
        { antes: "Mente que não para", depois: "Mente mais silenciosa" },
        { antes: "Ansiedade constante", depois: "Menos ansiedade" },
        { antes: "Insônia ou sono agitado", depois: "Sono mais profundo" },
        { antes: "Dificuldade de concentração", depois: "Mais concentração" },
        { antes: "Tensão na cabeça e no rosto", depois: "Alívio de tensão facial" },
        { antes: "Sobrecarga mental", depois: "Sensação de paz profunda" },
      ]}

      includedItems={[
        "Fluxo contínuo de óleo medicado sobre o terceiro olho",
        "Óleo escolhido conforme seu equilíbrio dos doshas",
        "Ambiente silencioso e propício ao relaxamento",
        "Espaço acolhedor no Instituto Canto da Floresta",
      ]}
      includedCTALabel="Quero agendar minha sessão"

      pricingImage="/images/shirodhara-fio-de-oleo.jpg"
      pricingTitle="Shirodhara"
      pricingSubtitle="Silêncio profundo para a mente. Agende pelo WhatsApp."
      precos={[
        {
          label: "Sessão de 60 minutos",
          valor: "R$ 350,00",
          descricao: "Fluxo contínuo de óleo sobre o terceiro olho",
        },
      ]}
      priceNote="Sessão de 60 minutos · Instituto Canto da Floresta, em Arraial d'Ajuda — Porto Seguro"
      pricingCTALabel="Quero agendar minha sessão"

      faqItems={[
        {
          q: "Onde acontece o atendimento?",
          a: "No Instituto Canto da Floresta, em Arraial d'Ajuda, Bahia.",
        },
        {
          q: "O óleo suja o cabelo?",
          a: "Sim, é recomendável lavar o cabelo após a sessão; traga uma touca ou lenço se preferir.",
        },
        {
          q: "É indicado para quem tem enxaqueca?",
          a: "Pode ajudar no relaxamento, mas converse com Ilana antes se você tiver condições específicas.",
        },
        {
          q: "A sessão é feita deitada?",
          a: "Sim, você permanece deitada e confortável durante todo o fluxo do óleo.",
        },
        {
          q: "Quanto tempo dura?",
          a: "A sessão tem duração de 60 minutos.",
        },
        {
          q: "Como agendo?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário.",
        },
      ]}

      modalEtiqueta="Agendamento"
      modalTitulo="Seu Shirodhara"
      modalSubtitulo="60 minutos de fluxo contínuo de óleo e silêncio, no Instituto Canto da Floresta."
      modalLocal="no Instituto Canto da Floresta, em Arraial d'Ajuda"
      modalidades={[
        {
          id: 'sessao',
          titulo: 'Sessão de 60 minutos',
          descricao: 'Fluxo contínuo de óleo sobre o terceiro olho',
          nomeNaMensagem: 'sessão de Shirodhara',
          valor: 'R$ 350,00',
        },
      ]}

      ambiente="completo"
      somAmbiente={false}
    />
  )
}
