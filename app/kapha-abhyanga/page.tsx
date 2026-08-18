import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function KaphaAbhyangaPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+Kapha+Abhyanga"
      serviceLabel="Ilana Lewinsohn · Kapha Abhyanga"
      heroTitle={<>Desperte sua vitalidade com <span style={{color:'var(--cor-destaque)'}}>Kapha Abhyanga</span></>}
      heroSubtitle="Massagem ayurvédica com manobras vigorosas, para ativar a circulação e despertar a energia."
      heroImage="/images/kapha-abhyanga.jpg"
      heroCTALabel="Quero minha sessão"

      painPoints={[
        {
                "icon": "🐌",
                "title": "Sensação de lentidão",
                "desc": "Corpo pesado e sem energia"
        },
        {
                "icon": "😪",
                "title": "Falta de disposição",
                "desc": "Dificuldade de sair da inércia"
        },
        {
                "icon": "💧",
                "title": "Retenção de líquidos",
                "desc": "Sensação de inchaço ou estagnação"
        },
        {
                "icon": "😶",
                "title": "Apatia",
                "desc": "Falta de vontade de se movimentar"
        },
        {
                "icon": "🌫️",
                "title": "Mente nebulosa",
                "desc": "Dificuldade de clareza e foco"
        },
        {
                "icon": "🥱",
                "title": "Cansaço mesmo descansando",
                "desc": "Sensação de estagnação física"
        }
]}

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Kapha Abhyanga</span>?</>}
      whatIsTexts={[
        "É uma massagem ayurvédica com manobras mais vigorosas, voltada à circulação, drenagem e despertar da vitalidade.",
        "Indicada para sensação de peso, lentidão ou estagnação, auxiliando no equilíbrio do dosha Kapha."
]}
      whatIsQuote="O movimento desperta o que estava adormecido."
      whatIsImage="/images/kapha-abhyanga.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Vitalidade, circulação e leveza de volta"
      benefits={[
        {
                "icon": "⚡",
                "title": "Vitalidade desperta",
                "desc": "Mais energia e disposição"
        },
        {
                "icon": "🩸",
                "title": "Circulação ativada",
                "desc": "Melhora na drenagem corporal"
        },
        {
                "icon": "🌬️",
                "title": "Menos estagnação",
                "desc": "Sensação de leveza física"
        },
        {
                "icon": "🧠",
                "title": "Mente mais clara",
                "desc": "Redução da sensação de neblina mental"
        },
        {
                "icon": "🔥",
                "title": "Equilíbrio do dosha Kapha",
                "desc": "Mais movimento e menos inércia"
        },
        {
                "icon": "✨",
                "title": "Sensação de renovação",
                "desc": "Corpo mais leve e ativo"
        }
]}

      includedItems={[
        "Massagem ayurvédica com manobras vigorosas",
        "Estímulo à circulação e drenagem corporal",
        "Óleos selecionados para equilíbrio do dosha Kapha",
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
                "q": "O que é o dosha Kapha?",
                "a": "Na Ayurveda, é a energia ligada à estrutura e estabilidade; em excesso, gera lentidão e estagnação — essa massagem ajuda a equilibrá-la."
        },
        {
                "q": "As manobras são desconfortáveis?",
                "a": "São mais vigorosas que uma massagem relaxante comum, mas sempre respeitando seu limite."
        },
        {
                "q": "É indicada para retenção de líquidos?",
                "a": "Sim, o estímulo à circulação e drenagem ajuda nessa sensação de peso e inchaço."
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

      pricingTitle="Kapha Abhyanga"
      pricingSubtitle="Escolha a duração da sua sessão"
      pricingOptions={[
        {
                "label": "60 minutos",
                "price": "R$ 270,00",
                "description": "Massagem ayurvédica vigorosa"
        },
        {
                "label": "90 minutos",
                "price": "R$ 360,00",
                "description": "Mais tempo de ativação e cuidado"
        }
]}
      priceNote="Valores válidos para atendimento no Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha sessão"
    />
  )
}
