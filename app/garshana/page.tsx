import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function GarshanaPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+Garshana"
      serviceLabel="Ilana Lewinsohn · Garshana"
      heroTitle={<>Limpeza profunda com <span style={{color:'var(--cor-destaque)'}}>Garshana</span></>}
      heroSubtitle="Esfoliação com óleo medicado, ervas e sal, para ativar a circulação e limpar corpo e energia."
      heroImage="/images/garshana.jpg"
      heroCTALabel="Quero minha sessão"

      painPoints={[
        {
                "icon": "🐌",
                "title": "Circulação estagnada",
                "desc": "Sensação de peso e lentidão"
        },
        {
                "icon": "🥀",
                "title": "Pele sem viço",
                "desc": "Textura opaca ou ressecada"
        },
        {
                "icon": "🌫️",
                "title": "Sensação de estagnação energética",
                "desc": "Corpo pedindo uma limpeza mais profunda"
        },
        {
                "icon": "😮‍💨",
                "title": "Toxinas acumuladas",
                "desc": "Sensação de peso interno"
        },
        {
                "icon": "😴",
                "title": "Cansaço persistente",
                "desc": "Falta de vitalidade no dia a dia"
        },
        {
                "icon": "🕸️",
                "title": "Bloqueios físicos e energéticos",
                "desc": "Sensação de estar \"presa\" no corpo"
        }
]}

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Garshana</span>?</>}
      whatIsTexts={[
        "É uma prática realizada com óleo medicado, ervas e sal, promovendo esfoliação, ativação da circulação e limpeza física e energética profunda.",
        "Indicada para reduzir estagnações e preparar o corpo para outros cuidados, deixando a pele e a energia renovadas."
]}
      whatIsQuote="Limpar por fora também é abrir espaço por dentro."
      whatIsImage="/images/garshana.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Limpeza física e energética profunda"
      benefits={[
        {
                "icon": "🧴",
                "title": "Pele esfoliada e renovada",
                "desc": "Textura mais macia e viva"
        },
        {
                "icon": "🩸",
                "title": "Circulação ativada",
                "desc": "Mais disposição e leveza"
        },
        {
                "icon": "🌿",
                "title": "Limpeza energética",
                "desc": "Sensação de espaço interno renovado"
        },
        {
                "icon": "🔥",
                "title": "Redução de estagnações",
                "desc": "Corpo mais fluido e ativo"
        },
        {
                "icon": "💧",
                "title": "Preparo para outros cuidados",
                "desc": "Corpo mais receptivo a novas sessões"
        },
        {
                "icon": "✨",
                "title": "Sensação de renovação",
                "desc": "Leveza física e energética"
        }
]}

      includedItems={[
        "Esfoliação com óleo medicado, ervas e sal",
        "Estímulo à circulação sanguínea e linfática",
        "Limpeza energética conforme sua necessidade",
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
                "q": "A esfoliação é muito intensa?",
                "a": "É firme, mas sempre adaptada à sensibilidade da sua pele."
        },
        {
                "q": "Posso fazer se tiver pele sensível?",
                "a": "Sim, avise antes da sessão para que Ilana ajuste a intensidade e os produtos utilizados."
        },
        {
                "q": "O Garshana pode ser combinado com outras sessões?",
                "a": "Sim, é frequentemente usado como preparo para outros cuidados, mas também funciona muito bem sozinho."
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

      pricingTitle="Garshana"
      pricingSubtitle="Escolha a duração da sua sessão"
      pricingOptions={[
        {
                "label": "60 minutos",
                "price": "R$ 270,00",
                "description": "Esfoliação e limpeza energética"
        },
        {
                "label": "90 minutos",
                "price": "R$ 360,00",
                "description": "Mais tempo de limpeza e cuidado"
        }
]}
      priceNote="Valores válidos para atendimento no Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha sessão"
    />
  )
}
