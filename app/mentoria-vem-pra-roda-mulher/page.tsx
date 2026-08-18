import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function MentoriaVemPraRodaMulherPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+me+candidatar+%C3%A0+Mentoria+Vem+Pra+Roda%2C+Mulher!"
      serviceLabel="Ilana Lewinsohn · Mentoria Vem Pra Roda, Mulher!"
      heroTitle={<>Aprenda a conduzir Rodas em <span style={{color:'var(--cor-destaque)'}}>Vem Pra Roda, Mulher!</span></>}
      heroSubtitle="Mentoria para mulheres que desejam criar e conduzir Rodas de Mulheres, com mais de duas décadas de experiência da facilitadora."
      heroImage="/images/mentoria-vem-pra-roda-mulher.jpg"
      heroCTALabel="Quero me candidatar"

      painPoints={[
        {
                "icon": "🌫️",
                "title": "Vontade de criar uma Roda mas sem saber por onde começar",
                "desc": "Falta de referência prática de como estruturar"
        },
        {
                "icon": "😰",
                "title": "Insegurança para facilitar em grupo",
                "desc": "Medo de não conduzir bem o espaço"
        },
        {
                "icon": "🔁",
                "title": "Sensação de estar sozinha no processo",
                "desc": "Falta de mentoria de quem já trilhou esse caminho"
        },
        {
                "icon": "💭",
                "title": "Dúvidas sobre estrutura e ritual",
                "desc": "Não saber como organizar uma Roda com segurança"
        },
        {
                "icon": "🗣️",
                "title": "Dificuldade de reunir outras mulheres",
                "desc": "Não saber como convidar e sustentar um grupo"
        },
        {
                "icon": "🌙",
                "title": "Chamado para facilitar mas sem direção",
                "desc": "Sentir o chamado sem saber como concretizá-lo"
        }
]}

      whatIsTitle={<>O que é a Mentoria <span style={{color:'var(--cor-destaque)'}}>Vem Pra Roda, Mulher!</span>?</>}
      whatIsTexts={[
        "É uma mentoria voltada a mulheres que desejam criar e conduzir Rodas de Mulheres, com base em mais de duas décadas de experiência da facilitadora.",
        "Acontece em turmas pequenas, com processo seletivo por formulário de aplicação, para um acompanhamento próximo e cuidadoso."
]}
      whatIsQuote="Quem já foi tocada por uma Roda, um dia sente o chamado para abrir a sua."
      whatIsImage="/images/mentoria-vem-pra-roda-mulher.jpg"
      whatIsCTALabel="Quero me candidatar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Segurança e ferramentas para facilitar Rodas"
      benefits={[
        {
                "icon": "🔥",
                "title": "Segurança para facilitar",
                "desc": "Ferramentas práticas para conduzir grupos"
        },
        {
                "icon": "📖",
                "title": "Estrutura e ritual",
                "desc": "Aprendizado de como organizar uma Roda"
        },
        {
                "icon": "🤝",
                "title": "Experiência de duas décadas",
                "desc": "Aprendizado direto com quem já trilhou o caminho"
        },
        {
                "icon": "👥",
                "title": "Turma pequena e próxima",
                "desc": "Acompanhamento cuidadoso durante o processo"
        },
        {
                "icon": "🗣️",
                "title": "Habilidade de convocar mulheres",
                "desc": "Mais confiança para reunir e sustentar um grupo"
        },
        {
                "icon": "✨",
                "title": "Chamado concretizado",
                "desc": "Transformar o desejo de facilitar em prática real"
        }
]}

      includedItems={[
        "Encontros em turma pequena, com acompanhamento próximo",
        "Ferramentas práticas para estruturar e facilitar Rodas",
        "Compartilhamento de mais de 20 anos de experiência",
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
                "a": "Para mulheres que sentem o chamado de criar e facilitar suas próprias Rodas de Mulheres."
        },
        {
                "q": "Preciso já ter experiência facilitando grupos?",
                "a": "Não é obrigatório, a mentoria acolhe desde o primeiro chamado até quem já facilita e quer se aprofundar."
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
                "q": "Como me candidato?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para receber o formulário de aplicação."
        }
]}

      pricingTitle="Mentoria Vem Pra Roda, Mulher!"
      pricingSubtitle="Próxima turma em formação"
      priceFinal="A definir"
      priceNote="Processo seletivo por formulário de aplicação"
      pricingCTALabel="Quero me candidatar"
    />
  )
}
