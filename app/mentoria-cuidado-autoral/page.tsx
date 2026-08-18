import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function MentoriaCuidadoAutoralPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+me+candidatar+%C3%A0+Mentoria+Cuidado+Autoral"
      serviceLabel="Ilana Lewinsohn · Mentoria Cuidado Autoral"
      heroTitle={<>Fortaleça sua identidade na Mentoria <span style={{color:'var(--cor-destaque)'}}>Cuidado Autoral</span></>}
      heroSubtitle="Para terapeutas que desejam desenvolver uma linguagem própria de cuidado e ampliar presença, confiança e valor percebido."
      heroImage="/images/mentoria-cuidado-autoral.jpg"
      heroCTALabel="Quero me candidatar"

      painPoints={[
        {
                "icon": "🌫️",
                "title": "Sensação de trabalho genérico",
                "desc": "Dificuldade de se diferenciar entre tantos terapeutas"
        },
        {
                "icon": "😶",
                "title": "Falta de identidade profissional clara",
                "desc": "Não saber como comunicar o próprio trabalho"
        },
        {
                "icon": "💸",
                "title": "Dificuldade de precificar",
                "desc": "Sensação de que o trabalho vale mais do que é cobrado"
        },
        {
                "icon": "😰",
                "title": "Insegurança para se posicionar",
                "desc": "Medo de se expor ou ser julgada"
        },
        {
                "icon": "🔁",
                "title": "Sensação de estagnação profissional",
                "desc": "Vontade de evoluir mas sem saber o caminho"
        },
        {
                "icon": "🗣️",
                "title": "Dificuldade de comunicar o próprio método",
                "desc": "Falta de linguagem própria para o trabalho"
        }
]}

      whatIsTitle={<>O que é a Mentoria <span style={{color:'var(--cor-destaque)'}}>Cuidado Autoral</span>?</>}
      whatIsTexts={[
        "É uma mentoria para terapeutas que desejam fortalecer sua identidade profissional e desenvolver uma linguagem própria de cuidado.",
        "O processo amplia presença, confiança e valor percebido do trabalho, em turmas pequenas, com processo seletivo por formulário de aplicação."
]}
      whatIsQuote="Seu jeito de cuidar é único. Esta mentoria ajuda você a nomeá-lo."
      whatIsImage="/images/mentoria-cuidado-autoral.jpg"
      whatIsCTALabel="Quero me candidatar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Identidade, presença e valor reconhecido"
      benefits={[
        {
                "icon": "🪞",
                "title": "Identidade profissional clara",
                "desc": "Linguagem própria para o seu trabalho"
        },
        {
                "icon": "💪",
                "title": "Mais confiança",
                "desc": "Segurança para se posicionar como terapeuta"
        },
        {
                "icon": "💰",
                "title": "Valor percebido ampliado",
                "desc": "Trabalho reconhecido pelo que realmente vale"
        },
        {
                "icon": "🗣️",
                "title": "Comunicação autêntica",
                "desc": "Clareza para falar sobre o próprio método"
        },
        {
                "icon": "👥",
                "title": "Turma pequena e próxima",
                "desc": "Acompanhamento cuidadoso durante o processo"
        },
        {
                "icon": "✨",
                "title": "Presença fortalecida",
                "desc": "Mais autenticidade ao exercer a profissão"
        }
]}

      includedItems={[
        "Encontros em turma pequena, com acompanhamento próximo",
        "Desenvolvimento de linguagem própria de cuidado",
        "Trabalho de posicionamento e presença profissional",
        "Processo seletivo por formulário de aplicação"
]}
      includedCTALabel="Quero me candidatar"

      credentials={[
        "Bióloga pela UNICAMP",
        "Mestre em Conservação da Biodiversidade e Desenvolvimento Sustentável (IPÊ)",
        "Criadora do método MASSIXA — Massagem Integrativa Xamânica",
        "Facilitadora de Rodas de Mulheres desde 2012"
]}
      aboutCTALabel="Falar com Ilana sobre a mentoria"

      faqItems={[
        {
                "q": "Para quem é essa mentoria?",
                "a": "Para terapeutas que já atuam ou estão começando e querem fortalecer sua identidade profissional."
        },
        {
                "q": "Como funciona o processo seletivo?",
                "a": "É feito por formulário de aplicação, enviado após contato pelo WhatsApp."
        },
        {
                "q": "Quando começa a próxima turma?",
                "a": "As turmas são formadas periodicamente; fale com Ilana para saber a próxima data."
        },
        {
                "q": "Qual o valor da mentoria?",
                "a": "O valor é definido conforme o formato da próxima turma; consulte pelo WhatsApp."
        },
        {
                "q": "Como me candidato?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para receber o formulário de aplicação."
        }
]}

      pricingTitle="Mentoria Cuidado Autoral"
      pricingSubtitle="Próxima turma em formação"
      priceFinal="A definir"
      priceNote="Processo seletivo por formulário de aplicação"
      pricingCTALabel="Quero me candidatar"
    />
  )
}
