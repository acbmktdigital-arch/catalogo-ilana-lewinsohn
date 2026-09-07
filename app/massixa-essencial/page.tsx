import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function MassixaEssencialPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · MASSIXA Essencial"
      heroTitle={<>Reorganização multidimensional e relaxamento profundo com <span style={{color:'var(--cor-destaque)'}}>MASSIXA Essencial</span></>}
      heroSubtitle="Reorganização em diversas camadas e relaxamento profundo através da combinação intuitiva de elementos naturais."
      heroImageWide="/images/massixa-essencial.jpg"
      heroCTALabel="Quero agendar a minha sessão"

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>MASSIXA Essencial</span>?</>}
      whatIsTexts={[
        "A MASSIXA Essencial é uma sessão de massagem integrativa que une toque em presença, escuta e elementos naturais — aromas, ervas, argilas, óleos, sons, temperaturas e pedras — para promover relaxamento profundo.",
        "Não existe protocolo fixo: cada sessão é construída de acordo com o que o seu momento pede, num espaço de cuidado e escuta genuína.",
      ]}
      whatIsQuote="O corpo sabe o que precisa. A MASSIXA cria espaço para ele se lembrar."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde a sessão leva."
      transformations={[
        {
          antes: "Sentimento de querer um cuidado que não encontrou ainda, algo profundamente integrado com a sabedoria da Terra",
          depois: "Sentir o amor da Terra pulsando em você, harmonizando seu ser",
        },
        {
          antes: "Você deseja ser cuidada por uma bruxa amorosa mas não sabia onde encontrá-la",
          depois: "Sentir a reorganização energética",
        },
        { antes: "Falta de vitalidade", depois: "Revitalização" },
        { antes: "Corpo tenso ou cansado, energia pesada", depois: "Alívio de tensões" },
        { antes: "Mente acelerada", depois: "Mais presença" },
        { antes: "Sono que não descansa", depois: "Sono mais reparador" },
        { antes: "Desconexão com o corpo", depois: "Reconexão com o corpo" },
        { antes: "Emoções represadas ou bagunçadas", depois: "Emoções mais fluidas" },
        { antes: "Necessidade de um tempo de qualidade para si", depois: "Relaxamento profundo" },
      ]}

      includedItems={[
        "Sessão individual de toque em presença",
        "Elementos naturais escolhidos para o seu momento (ervas, argilas, óleos, aromas, sons)",
        "Escuta antes e depois da sessão",
        "Ambiente acolhedor no Instituto Canto da Floresta",
      ]}
      includedCTALabel="Quero agendar a minha sessão"

      pricingImage="/images/massixa-essencial.jpg"
      pricingTitle="MASSIXA Essencial"
      pricingSubtitle="Escolha a duração que combina com o seu momento e agende pelo WhatsApp."
      precos={[
        {
          label: "60 minutos",
          valor: "R$ 224,00",
          descricao: "Sessão de relaxamento profundo",
        },
        {
          label: "90 minutos",
          valor: "R$ 305,00",
          descricao: "Mais tempo de escuta e cuidado",
        },
      ]}
      priceNote="Atendimento no Instituto Canto da Floresta, em Arraial d'Ajuda — Porto Seguro"
      pricingCTALabel="Quero agendar a minha sessão"

      faqItems={[
        {
          q: "Onde acontece o atendimento?",
          a: "No Instituto Canto da Floresta, em Arraial d'Ajuda, Bahia, e em locais distintos quando em viagem.",
        },
        {
          q: "Preciso escolher o que vai ser usado na sessão?",
          a: "Não. Os elementos são escolhidos por Ilana de acordo com o que o seu momento pede.",
        },
        {
          q: "Quanto tempo dura?",
          a: "Você escolhe entre 60 ou 90 minutos, conforme sua disponibilidade e necessidade.",
        },
        {
          q: "É indicada para quem nunca fez uma sessão assim?",
          a: "Sim. A MASSIXA Essencial é um ótimo primeiro contato com o trabalho, sem exigir experiência prévia.",
        },
        {
          q: "Posso fazer se estiver com alguma tensão específica?",
          a: "Sim, conte antes da sessão e o toque é adaptado a esse ponto de atenção.",
        },
        {
          q: "Como agendo?",
          a: "Clique no botão QUERO AGENDAR A MINHA SESSÃO e fale com Ilana pelo WhatsApp para combinar data e horário.",
        },
      ]}

      modalEtiqueta="Agendamento"
      modalTitulo="Sua MASSIXA Essencial"
      modalSubtitulo="Toque em presença, escuta e elementos naturais no Instituto Canto da Floresta."
      modalLocal="no Instituto Canto da Floresta, em Arraial d'Ajuda"
      modalidades={[
        {
          id: '60min',
          titulo: '60 minutos',
          descricao: 'Sessão de relaxamento profundo',
          nomeNaMensagem: 'MASSIXA Essencial de 60 minutos',
          valor: 'R$ 224,00',
        },
        {
          id: '90min',
          titulo: '90 minutos',
          descricao: 'Mais tempo de escuta e cuidado',
          nomeNaMensagem: 'MASSIXA Essencial de 90 minutos',
          valor: 'R$ 305,00',
        },
      ]}

      ambiente="completo"
      somAmbiente={false}
    />
  )
}
