import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function VataPittaAbhyangaPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+Vata-Pitta+Abhyanga"
      serviceLabel="Ilana Lewinsohn · Vata-Pitta Abhyanga"
      heroTitle={<>Nutrição e calma com <span style={{color:'var(--cor-destaque)'}}>Vata-Pitta Abhyanga</span></>}
      heroSubtitle="Massagem ayurvédica com óleos vegetais aquecidos, para nutrir os tecidos e acalmar a ansiedade."
      heroImage="/images/vata-pitta-abhyanga.jpg"
      heroCTALabel="Quero minha sessão"

      painPoints={[
        {
                "icon": "😰",
                "title": "Ansiedade constante",
                "desc": "Mente acelerada e corpo em alerta"
        },
        {
                "icon": "😣",
                "title": "Agitação física",
                "desc": "Dificuldade de relaxar de verdade"
        },
        {
                "icon": "😮‍💨",
                "title": "Desgaste mental",
                "desc": "Sensação de esgotamento pelo excesso de estímulos"
        },
        {
                "icon": "🥶",
                "title": "Pele e corpo ressecados",
                "desc": "Falta de nutrição e cuidado"
        },
        {
                "icon": "😴",
                "title": "Sono difícil",
                "desc": "Dificuldade de desacelerar à noite"
        },
        {
                "icon": "🔥",
                "title": "Sensação de sobrecarga",
                "desc": "Corpo e mente pedindo pausa"
        }
]}

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Vata-Pitta Abhyanga</span>?</>}
      whatIsTexts={[
        "É uma massagem ayurvédica com óleos vegetais aquecidos e movimentos contínuos, voltada à nutrição dos tecidos e ao relaxamento.",
        "Indicada para agitação, ansiedade e desgaste físico ou mental, auxiliando no equilíbrio dos doshas Vata e Pitta."
]}
      whatIsQuote="O óleo aquecido nutre o corpo. A presença acalma a mente."
      whatIsImage="/images/vata-pitta-abhyanga.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Nutrição, calma e equilíbrio dos doshas"
      benefits={[
        {
                "icon": "🫒",
                "title": "Tecidos nutridos",
                "desc": "Pele e corpo mais hidratados"
        },
        {
                "icon": "😌",
                "title": "Redução da ansiedade",
                "desc": "Sistema nervoso mais tranquilo"
        },
        {
                "icon": "🌊",
                "title": "Equilíbrio Vata e Pitta",
                "desc": "Mais estabilidade emocional"
        },
        {
                "icon": "💆",
                "title": "Relaxamento muscular",
                "desc": "Menos tensão no corpo"
        },
        {
                "icon": "😴",
                "title": "Sono mais tranquilo",
                "desc": "Facilidade de desacelerar"
        },
        {
                "icon": "✨",
                "title": "Sensação de acolhimento",
                "desc": "Corpo e mente mais em paz"
        }
]}

      includedItems={[
        "Massagem com óleos vegetais aquecidos",
        "Movimentos contínuos característicos do Abhyanga",
        "Escolha de óleo conforme seu desequilíbrio (Vata ou Pitta)",
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
                "q": "O que são os doshas Vata e Pitta?",
                "a": "Na Ayurveda, são energias que regem movimento (Vata) e transformação (Pitta); em excesso, geram ansiedade e agitação — esta massagem ajuda a equilibrá-las."
        },
        {
                "q": "Os óleos podem manchar a roupa?",
                "a": "Recomenda-se usar roupas confortáveis e escuras no dia da sessão."
        },
        {
                "q": "É indicada para quem tem pele sensível?",
                "a": "Sim, os óleos utilizados são vegetais; se você tem alergias específicas, avise antes da sessão."
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

      pricingTitle="Vata-Pitta Abhyanga"
      pricingSubtitle="Escolha a duração da sua sessão"
      pricingOptions={[
        {
                "label": "60 minutos",
                "price": "R$ 270,00",
                "description": "Massagem ayurvédica com óleos aquecidos"
        },
        {
                "label": "90 minutos",
                "price": "R$ 360,00",
                "description": "Mais tempo de nutrição e cuidado"
        }
]}
      priceNote="Valores válidos para atendimento no Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha sessão"
    />
  )
}
