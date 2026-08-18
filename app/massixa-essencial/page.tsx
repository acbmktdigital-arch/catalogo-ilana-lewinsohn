import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function MassixaEssencialPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+MASSIXA+Essencial"
      serviceLabel="Ilana Lewinsohn · MASSIXA Essencial"
      heroTitle={<>Relaxamento profundo com <span style={{color:'var(--cor-destaque)'}}>MASSIXA Essencial</span></>}
      heroSubtitle="Toque em presença, escuta e elementos da natureza para o seu corpo respirar e descansar de verdade."
      heroImage="/images/massixa-essencial.jpg"
      heroCTALabel="Quero minha sessão"

      painPoints={[
        {
                "icon": "😣",
                "title": "Corpo tenso e cansado",
                "desc": "Carregando uma tensão que não passa"
        },
        {
                "icon": "😵‍💫",
                "title": "Mente acelerada",
                "desc": "Dificuldade de desligar o automático"
        },
        {
                "icon": "😴",
                "title": "Sono que não descansa",
                "desc": "Acorda tão cansada quanto dormiu"
        },
        {
                "icon": "🌫️",
                "title": "Desconexão com o corpo",
                "desc": "Sensação de estar sempre por fora de si"
        },
        {
                "icon": "💔",
                "title": "Emoções represadas",
                "desc": "Sentimentos que não encontram espaço"
        },
        {
                "icon": "🍂",
                "title": "Falta de tempo pra si",
                "desc": "Rotina sem uma pausa de verdade"
        }
]}

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>MASSIXA Essencial</span>?</>}
      whatIsTexts={[
        "A MASSIXA Essencial é uma sessão de massagem integrativa que une toque em presença, escuta e elementos naturais — aromas, ervas, argilas, óleos, sons, temperaturas e pedras — para promover relaxamento profundo.",
        "Não existe protocolo fixo: cada sessão é construída de acordo com o que o seu momento pede, num espaço de cuidado e escuta genuína."
]}
      whatIsQuote="O corpo sabe o que precisa. A MASSIXA cria espaço para ele se lembrar."
      whatIsImage="/images/massixa-essencial.jpg"
      whatIsCTALabel="Quero agendar"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Relaxamento, presença e reconexão com o corpo"
      benefits={[
        {
                "icon": "🌿",
                "title": "Relaxamento profundo",
                "desc": "Corpo e mente mais leves"
        },
        {
                "icon": "💆",
                "title": "Alívio de tensões",
                "desc": "Menos peso nos ombros e nas costas"
        },
        {
                "icon": "😌",
                "title": "Mais presença",
                "desc": "Sair do automático e voltar pro agora"
        },
        {
                "icon": "💧",
                "title": "Emoções mais fluidas",
                "desc": "Espaço para sentir sem represar"
        },
        {
                "icon": "😴",
                "title": "Sono mais reparador",
                "desc": "Descanso de verdade"
        },
        {
                "icon": "✨",
                "title": "Reconexão com o corpo",
                "desc": "Voltar a habitar a própria pele"
        }
]}

      includedItems={[
        "Sessão individual de toque em presença",
        "Elementos naturais escolhidos para o seu momento (ervas, argilas, óleos, aromas, sons)",
        "Ambiente acolhedor no Instituto Canto da Floresta",
        "Escuta antes e depois da sessão"
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
                "q": "Preciso escolher o que vai ser usado na sessão?",
                "a": "Não. Os elementos são escolhidos por Ilana de acordo com o que o seu momento pede."
        },
        {
                "q": "Quanto tempo dura?",
                "a": "Você escolhe entre 60 ou 90 minutos, conforme sua disponibilidade e necessidade."
        },
        {
                "q": "É indicada para quem nunca fez uma sessão assim?",
                "a": "Sim. A MASSIXA Essencial é um ótimo primeiro contato com o trabalho, sem exigir experiência prévia."
        },
        {
                "q": "Posso fazer se estiver com alguma tensão específica?",
                "a": "Sim, conte antes da sessão e o toque é adaptado a esse ponto de atenção."
        },
        {
                "q": "Como agendo?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário."
        }
]}

      pricingTitle="MASSIXA Essencial"
      pricingSubtitle="Escolha a duração da sua sessão"
      pricingOptions={[
        {
                "label": "60 minutos",
                "price": "R$ 224,00",
                "description": "Sessão de relaxamento profundo"
        },
        {
                "label": "90 minutos",
                "price": "R$ 305,00",
                "description": "Mais tempo de escuta e cuidado"
        }
]}
      priceNote="Valores válidos para atendimento no Instituto Canto da Floresta"
      pricingCTALabel="Quero agendar minha sessão"
    />
  )
}
