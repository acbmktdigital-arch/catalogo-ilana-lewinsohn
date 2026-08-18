import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function ImersaoColoDaTerraPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+Imers%C3%A3o+Colo+da+Terra"
      serviceLabel="Ilana Lewinsohn · Imersão Colo da Terra"
      heroTitle={<>Acolhimento para a gestação em <span style={{color:'var(--cor-destaque)'}}>Colo da Terra</span></>}
      heroSubtitle="Uma imersão de cuidado criada para mulheres gestantes, respeitando cada fase da gravidez."
      heroImage="/images/imersao-colo-da-terra.jpg"
      heroCTALabel="Quero minha imersão"

      painPoints={[
        {
                "icon": "🤰",
                "title": "Corpo em transformação",
                "desc": "Desconfortos próprios da gestação"
        },
        {
                "icon": "😮‍💨",
                "title": "Cansaço acumulado",
                "desc": "Rotina intensa sem pausa de verdade"
        },
        {
                "icon": "😰",
                "title": "Ansiedade sobre o parto",
                "desc": "Medos e expectativas do que vem por aí"
        },
        {
                "icon": "💔",
                "title": "Sensação de sobrecarga emocional",
                "desc": "Muitas mudanças ao mesmo tempo"
        },
        {
                "icon": "🦴",
                "title": "Dores lombares e nas pernas",
                "desc": "Peso extra que pede cuidado"
        },
        {
                "icon": "🌫️",
                "title": "Falta de espaço só para si",
                "desc": "Pouco tempo dedicado ao próprio corpo"
        }
]}

      whatIsTitle={<>O que é a Imersão <span style={{color:'var(--cor-destaque)'}}>Colo da Terra</span>?</>}
      whatIsTexts={[
        "É uma imersão de cuidado criada especialmente para mulheres gestantes, respeitando cada fase da gestação.",
        "Um tempo de pausa e fortalecimento para nutrir o corpo e acolher o coração durante a gravidez, num espaço seguro e acolhedor."
]}
      whatIsQuote="Enquanto você gera vida, também merece ser cuidada."
      whatIsImage="/images/imersao-colo-da-terra.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Pausa, acolhimento e fortalecimento na gestação"
      benefits={[
        {
                "icon": "🤰",
                "title": "Cuidado adaptado à gestação",
                "desc": "Toque seguro para cada fase"
        },
        {
                "icon": "😌",
                "title": "Alívio de desconfortos físicos",
                "desc": "Menos peso e tensão no corpo"
        },
        {
                "icon": "💗",
                "title": "Acolhimento emocional",
                "desc": "Espaço para sentir e se fortalecer"
        },
        {
                "icon": "🌿",
                "title": "Conexão com o bebê",
                "desc": "Presença e cuidado com a gestação"
        },
        {
                "icon": "😴",
                "title": "Relaxamento profundo",
                "desc": "Descanso reparador para mãe e bebê"
        },
        {
                "icon": "✨",
                "title": "Fortalecimento para o parto",
                "desc": "Mais confiança para o que vem"
        }
]}

      includedItems={[
        "Imersão de 3 horas dedicada exclusivamente a você",
        "Toque seguro e adaptado à sua fase gestacional",
        "Escuta acolhedora sobre a gestação e o parto",
        "Ambiente tranquilo no Instituto Canto da Floresta"
]}
      includedCTALabel="Quero agendar minha imersão"

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
                "q": "É seguro em qualquer fase da gestação?",
                "a": "A imersão é adaptada a cada fase da gravidez, sempre com atenção às particularidades do seu momento."
        },
        {
                "q": "Preciso de liberação médica?",
                "a": "Recomenda-se conversar com seu médico antes, especialmente em gestações de risco."
        },
        {
                "q": "O que está incluso na imersão de 3 horas?",
                "a": "Pode incluir toque, escuta, ervas e outros cuidados definidos conforme o que sua gestação pede naquele momento."
        },
        {
                "q": "Posso levar acompanhante?",
                "a": "Combine diretamente com Ilana pelo WhatsApp para alinhar essa possibilidade."
        },
        {
                "q": "Como agendo?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário."
        }
]}

      pricingTitle="Imersão Colo da Terra"
      pricingSubtitle="Um tempo só seu, dedicado à gestação"
      priceFinal="R$ 605,00"
      priceNote="Imersão de 3 horas · Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha imersão"
    />
  )
}
