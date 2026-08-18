import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function ConeHinduPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+Cone+Hindu+(Hopi+Candle)"
      serviceLabel="Ilana Lewinsohn · Cone Hindu (Hopi Candle)"
      heroTitle={<>Alívio e equilíbrio com o <span style={{color:'var(--cor-destaque)'}}>Cone Hindu</span></>}
      heroSubtitle="Prática tradicional com cone de cera de abelha, algodão e ervas, para cuidar de tensão, insônia e desconfortos nos ouvidos."
      heroImage="/images/cone-hindu.jpg"
      heroCTALabel="Quero minha sessão"

      painPoints={[
        {
                "icon": "😣",
                "title": "Tensão na cabeça",
                "desc": "Pressão ou desconforto persistente"
        },
        {
                "icon": "😴",
                "title": "Insônia",
                "desc": "Dificuldade de relaxar para dormir"
        },
        {
                "icon": "🤧",
                "title": "Rinite ou sinusite",
                "desc": "Desconfortos respiratórios recorrentes"
        },
        {
                "icon": "🔔",
                "title": "Zumbido ou labirintite",
                "desc": "Sensações incômodas nos ouvidos"
        },
        {
                "icon": "😰",
                "title": "Estresse acumulado",
                "desc": "Corpo em estado de tensão constante"
        },
        {
                "icon": "😵‍💫",
                "title": "Sensação de pressão na cabeça",
                "desc": "Desconforto que atrapalha o dia a dia"
        }
]}

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Cone Hindu</span>?</>}
      whatIsTexts={[
        "É uma prática tradicional com cone de cera de abelha, algodão e ervas, aplicado na região das orelhas.",
        "Usada como cuidado complementar em casos de estresse, ansiedade, insônia, rinite, sinusite, zumbidos e labirintite."
]}
      whatIsQuote="Um cuidado simples, com raízes antigas, para desafios muito atuais."
      whatIsImage="/images/cone-hindu.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Alívio e relaxamento para cabeça e ouvidos"
      benefits={[
        {
                "icon": "🕯️",
                "title": "Relaxamento profundo",
                "desc": "Alívio de tensão na cabeça"
        },
        {
                "icon": "😴",
                "title": "Ajuda no sono",
                "desc": "Mais facilidade para relaxar à noite"
        },
        {
                "icon": "👂",
                "title": "Cuidado com os ouvidos",
                "desc": "Suporte complementar para zumbidos e labirintite"
        },
        {
                "icon": "🌬️",
                "title": "Alívio respiratório",
                "desc": "Suporte complementar para rinite e sinusite"
        },
        {
                "icon": "😌",
                "title": "Redução do estresse",
                "desc": "Sistema nervoso mais tranquilo"
        },
        {
                "icon": "✨",
                "title": "Sensação de leveza",
                "desc": "Cabeça e corpo mais aliviados"
        }
]}

      includedItems={[
        "Aplicação do cone de cera de abelha, algodão e ervas",
        "Cuidado complementar para tensão, insônia e desconfortos auriculares",
        "Ambiente tranquilo e acolhedor",
        "Instituto Canto da Floresta, Arraial d'Ajuda"
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
                "q": "O Cone Hindu substitui tratamento médico para labirintite ou sinusite?",
                "a": "Não. É um cuidado complementar e não substitui acompanhamento médico especializado."
        },
        {
                "q": "A prática dói ou incomoda?",
                "a": "Não, é uma técnica suave e tranquila, sem desconforto."
        },
        {
                "q": "Quanto tempo dura?",
                "a": "A sessão tem duração de 50 minutos."
        },
        {
                "q": "Como agendo?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário."
        }
]}

      pricingTitle="Cone Hindu (Hopi Candle)"
      pricingSubtitle="Cuidado tradicional e complementar"
      priceFinal="R$ 135,00"
      priceNote="Sessão de 50 minutos · Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha sessão"
    />
  )
}
