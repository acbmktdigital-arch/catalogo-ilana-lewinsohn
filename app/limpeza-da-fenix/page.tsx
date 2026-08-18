import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function LimpezaDaFenixPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+Limpeza+da+F%C3%AAnix"
      serviceLabel="Ilana Lewinsohn · MASSIXA Temática | Limpeza da Fênix"
      heroTitle={<>Renove-se com a <span style={{color:'var(--cor-destaque)'}}>Limpeza da Fênix</span></>}
      heroSubtitle="Prática taoísta com ventosas e sangria terapêutica para liberar excessos e reequilibrar sua energia."
      heroImage="/images/limpeza-da-fenix.jpg"
      heroCTALabel="Quero minha sessão"

      painPoints={[
        {
                "icon": "🔥",
                "title": "Sensação de excesso",
                "desc": "Irritabilidade, calor interno ou tensão acumulada"
        },
        {
                "icon": "😤",
                "title": "Circulação travada",
                "desc": "Corpo pesado, com pontos de estagnação"
        },
        {
                "icon": "💢",
                "title": "Impaciência e agitação",
                "desc": "Dificuldade de manter a calma"
        },
        {
                "icon": "🌡️",
                "title": "Sinais de desequilíbrio Pitta",
                "desc": "Excesso de intensidade no corpo e nas emoções"
        },
        {
                "icon": "🦵",
                "title": "Dores localizadas",
                "desc": "Pontos específicos de tensão muscular"
        },
        {
                "icon": "🌫️",
                "title": "Sensação de estagnação",
                "desc": "Vontade de recomeçar e se renovar"
        }
]}

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>Limpeza da Fênix</span>?</>}
      whatIsTexts={[
        "É uma sessão inspirada em práticas taoístas que estimula a circulação sanguínea, linfática e energética, com uso de ventosas e sangria terapêutica.",
        "Indicada para liberação de excessos e equilíbrio do dosha Pitta, quando o corpo pede uma renovação mais intensa."
]}
      whatIsQuote="Assim como a fênix, o corpo também sabe se renovar quando encontra espaço."
      whatIsImage="/images/limpeza-da-fenix.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Circulação renovada e excessos liberados"
      benefits={[
        {
                "icon": "🩸",
                "title": "Circulação estimulada",
                "desc": "Sangue e linfa fluindo melhor"
        },
        {
                "icon": "🔥",
                "title": "Liberação de excessos",
                "desc": "Sensação de leveza após a sessão"
        },
        {
                "icon": "🌊",
                "title": "Equilíbrio do dosha Pitta",
                "desc": "Menos intensidade e irritabilidade"
        },
        {
                "icon": "💪",
                "title": "Alívio de pontos tensos",
                "desc": "Menos dor localizada"
        },
        {
                "icon": "🕊️",
                "title": "Renovação energética",
                "desc": "Sensação de recomeço"
        },
        {
                "icon": "😌",
                "title": "Mais calma",
                "desc": "Sistema nervoso mais equilibrado"
        }
]}

      includedItems={[
        "Aplicação de ventosas em pontos específicos",
        "Sangria terapêutica conforme necessidade",
        "Estímulo à circulação sanguínea, linfática e energética",
        "Ambiente acolhedor no Instituto Canto da Floresta"
]}
      includedCTALabel="Quero agendar minha sessão"

      credentials={[
        "Bióloga pela UNICAMP",
        "Mestre em Conservação da Biodiversidade e Desenvolvimento Sustentável (IPÊ)",
        "Criadora do método MASSIXA — Massagem Integrativa Xamânica",
        "Facilitadora de Rodas de Mulheres desde 2012"
]}
      aboutCTALabel="Agendar com Ilana"

      faqItems={[
        {
                "q": "Onde acontece o atendimento?",
                "a": "No Instituto Canto da Floresta, em Arraial d'Ajuda, Bahia."
        },
        {
                "q": "A sangria terapêutica dói?",
                "a": "É uma técnica pontual e cuidadosa, feita apenas onde é indicada, com desconforto mínimo."
        },
        {
                "q": "As ventosas deixam marcas?",
                "a": "Podem deixar marcas temporárias na pele, que costumam desaparecer em poucos dias — Ilana explica tudo antes da sessão."
        },
        {
                "q": "Para quem é indicada?",
                "a": "Para quem sente excesso de intensidade, irritabilidade ou estagnação circulatória e energética."
        },
        {
                "q": "Quanto tempo dura?",
                "a": "Você escolhe entre 60 ou 90 minutos, conforme sua disponibilidade."
        },
        {
                "q": "Como agendo?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário."
        }
]}

      pricingTitle="Limpeza da Fênix"
      pricingSubtitle="Escolha a duração da sua sessão"
      pricingOptions={[
        {
                "label": "60 minutos",
                "price": "R$ 270,00",
                "description": "Ventosas e sangria terapêutica"
        },
        {
                "label": "90 minutos",
                "price": "R$ 360,00",
                "description": "Mais tempo de liberação e cuidado"
        }
]}
      priceNote="Valores válidos para atendimento no Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha sessão"
    />
  )
}
