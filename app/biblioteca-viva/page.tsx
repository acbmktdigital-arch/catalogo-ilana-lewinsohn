import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function BibliotecaVivaPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+entrar+na+lista+de+espera+da+Biblioteca+Viva"
      serviceLabel="Ilana Lewinsohn · Biblioteca Viva"
      heroTitle={<>Materiais para estudar em casa na <span style={{color:'var(--cor-destaque)'}}>Biblioteca Viva</span></>}
      heroSubtitle="E-books e materiais de estudo para se aprofundar na MASSIXA, nas Rodas Celta-Baianas e na cozinha vegana ancestral."
      heroImage="/images/biblioteca-viva.jpg"
      heroCTALabel="Entrar na lista de espera"

      painPoints={[
        {
                "icon": "📚",
                "title": "Vontade de se aprofundar mas sem material de referência",
                "desc": "Faltam fontes confiáveis sobre esses temas"
        },
        {
                "icon": "🌫️",
                "title": "Conhecimento disperso",
                "desc": "Dificuldade de encontrar tudo num só lugar"
        },
        {
                "icon": "🍽️",
                "title": "Vontade de aprender receitas veganas ancestrais",
                "desc": "Falta de um guia prático para começar"
        },
        {
                "icon": "🔮",
                "title": "Curiosidade sobre práticas autorais",
                "desc": "Desejo de entender melhor a MASSIXA e as Rodas"
        },
        {
                "icon": "⏳",
                "title": "Falta de tempo para uma formação completa",
                "desc": "Procurando um jeito de estudar no próprio ritmo"
        },
        {
                "icon": "📖",
                "title": "Vontade de ter uma referência para consultar sempre",
                "desc": "Material que possa acompanhar por mais tempo"
        }
]}

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>Biblioteca Viva</span>?</>}
      whatIsTexts={[
        "É uma linha de e-books e materiais educativos em desenvolvimento, incluindo o eBook Bases da MASSIXA, o eBook Rodas Celta-Baianas e o eBook Segredos da Cozinha da Bruxa Branca da Floresta (receitas veganas).",
        "Um oráculo autoral também está em produção, ampliando ainda mais esse universo de estudo e conexão com o trabalho de Ilana."
]}
      whatIsQuote="Conhecimento que se planta, cresce e se compartilha."
      whatIsImage="/images/biblioteca-viva.jpg"
      whatIsCTALabel="Entrar na lista de espera"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Estudo no seu próprio tempo, com profundidade"
      benefits={[
        {
                "icon": "📘",
                "title": "Bases da MASSIXA",
                "desc": "Aprofundamento no método autoral"
        },
        {
                "icon": "🔥",
                "title": "Rodas Celta-Baianas",
                "desc": "Entenda a origem e estrutura das Rodas"
        },
        {
                "icon": "🥗",
                "title": "Cozinha vegana ancestral",
                "desc": "Receitas da Bruxa Branca da Floresta"
        },
        {
                "icon": "🔮",
                "title": "Oráculo autoral em produção",
                "desc": "Uma ferramenta única a caminho"
        },
        {
                "icon": "⏳",
                "title": "Estudo no seu próprio ritmo",
                "desc": "Sem prazo ou pressa para consumir o conteúdo"
        },
        {
                "icon": "✨",
                "title": "Acesso à sabedoria de Ilana",
                "desc": "Conteúdo direto da fonte"
        }
]}

      includedItems={[
        "eBook Bases da MASSIXA",
        "eBook Rodas Celta-Baianas",
        "eBook Segredos da Cozinha da Bruxa Branca da Floresta",
        "Aviso em primeira mão sobre o oráculo autoral em produção"
]}
      includedCTALabel="Entrar na lista de espera"

      credentials={[
        "Bióloga pela UNICAMP",
        "Mestre em Conservação da Biodiversidade e Desenvolvimento Sustentável (IPÊ)",
        "Criadora do método MASSIXA — Massagem Integrativa Xamânica",
        "Facilitadora de Rodas de Mulheres desde 2012"
]}
      aboutCTALabel="Falar com Ilana sobre os materiais"

      faqItems={[
        {
                "q": "Os materiais já estão disponíveis?",
                "a": "Estão em desenvolvimento; ao entrar na lista de espera, você é avisada assim que forem lançados."
        },
        {
                "q": "Como recebo os e-books quando estiverem prontos?",
                "a": "O acesso será enviado por WhatsApp ou e-mail para quem estiver na lista de espera."
        },
        {
                "q": "Vai ter algum valor promocional para quem entrar na lista?",
                "a": "Detalhes sobre condições especiais serão compartilhados com quem já estiver cadastrado."
        },
        {
                "q": "Como entro na lista de espera?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para garantir seu lugar."
        }
]}

      pricingTitle="Biblioteca Viva"
      pricingSubtitle="Materiais de estudo em desenvolvimento"
      priceFinal="Em breve"
      priceNote="Entre na lista de espera pelo WhatsApp"
      pricingCTALabel="Entrar na lista de espera"
    />
  )
}
