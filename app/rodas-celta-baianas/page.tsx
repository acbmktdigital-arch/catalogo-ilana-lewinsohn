import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function RodasCeltaBaianasPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+as+Rodas+Celta-Baianas%3A+Feminino+Sagrado"
      serviceLabel="Ilana Lewinsohn · Rodas Celta-Baianas: Feminino Sagrado"
      heroTitle={<>Fortalecimento coletivo nas <span style={{color:'var(--cor-destaque)'}}>Rodas Celta-Baianas</span></>}
      heroSubtitle="Jornadas coletivas de fortalecimento feminino, com ritual, cacau cerimonial e partilha em círculo."
      heroImage="/images/rodas-celta-baianas.jpg"
      heroCTALabel="Quero saber a próxima data"

      painPoints={[
        {
                "icon": "😔",
                "title": "Sensação de solidão feminina",
                "desc": "Falta de espaços de partilha genuína"
        },
        {
                "icon": "🌫️",
                "title": "Desconexão com o próprio ciclo",
                "desc": "Distância dos próprios ritmos internos"
        },
        {
                "icon": "💔",
                "title": "Emoções sem espaço para serem ouvidas",
                "desc": "Vontade de ser acolhida em comunidade"
        },
        {
                "icon": "🥀",
                "title": "Sensação de estar sozinha nos desafios",
                "desc": "Falta de rede de apoio entre mulheres"
        },
        {
                "icon": "🌙",
                "title": "Desconexão espiritual",
                "desc": "Vontade de ritual e ancestralidade"
        },
        {
                "icon": "🍂",
                "title": "Falta de celebração coletiva",
                "desc": "Rotina sem momentos sagrados em grupo"
        }
]}

      whatIsTitle={<>O que são as <span style={{color:'var(--cor-destaque)'}}>Rodas Celta-Baianas</span>?</>}
      whatIsTexts={[
        "São jornadas coletivas de fortalecimento feminino inspiradas nos Sabbaths celtas e em tradições xamânicas afro-brasileiras e indígenas.",
        "Unem ritual, cacau cerimonial, mesa vegana e partilha em círculo, realizadas no Instituto Canto da Floresta, em Arraial d'Ajuda, e mediante convite em outras cidades."
]}
      whatIsQuote="Em roda, a força de uma se soma à força de todas."
      whatIsImage="/images/rodas-celta-baianas.jpg"
      whatIsCTALabel="Quero saber mais"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Fortalecimento, partilha e ancestralidade"
      benefits={[
        {
                "icon": "🔥",
                "title": "Fortalecimento feminino",
                "desc": "Conexão com sua força coletiva"
        },
        {
                "icon": "🍫",
                "title": "Cacau cerimonial",
                "desc": "Abertura de coração em comunidade"
        },
        {
                "icon": "🗣️",
                "title": "Partilha em círculo",
                "desc": "Espaço seguro para ser ouvida"
        },
        {
                "icon": "🌙",
                "title": "Ritual e ancestralidade",
                "desc": "Conexão com tradições celtas e afro-indígenas"
        },
        {
                "icon": "🥗",
                "title": "Mesa vegana compartilhada",
                "desc": "Nutrição consciente em comunidade"
        },
        {
                "icon": "✨",
                "title": "Sensação de pertencimento",
                "desc": "Rede de apoio entre mulheres"
        }
]}

      includedItems={[
        "Ritual inspirado nos Sabbaths celtas e tradições afro-baianas",
        "Cacau cerimonial",
        "Mesa vegana compartilhada",
        "Partilha em círculo entre as participantes"
]}
      includedCTALabel="Quero saber a próxima data"

      credentials={[
        "Bióloga pela UNICAMP",
        "Mestre em Conservação da Biodiversidade e Desenvolvimento Sustentável (IPÊ)",
        "Criadora do método MASSIXA — Massagem Integrativa Xamânica",
        "Facilitadora de Rodas de Mulheres desde 2012"
]}
      aboutCTALabel="Falar com Ilana sobre as Rodas"

      faqItems={[
        {
                "q": "Onde acontecem as Rodas?",
                "a": "No Instituto Canto da Floresta, em Arraial d'Ajuda, e também em outras cidades mediante convite."
        },
        {
                "q": "Com que frequência acontecem?",
                "a": "Seguem uma programação própria; fale com Ilana pelo WhatsApp para saber a próxima data."
        },
        {
                "q": "Preciso ter experiência com rituais para participar?",
                "a": "Não, as Rodas são abertas a qualquer mulher que sinta o chamado para esse espaço."
        },
        {
                "q": "Qual o valor?",
                "a": "Varia conforme a programação de cada Roda; consulte os valores atuais pelo WhatsApp."
        },
        {
                "q": "Como faço para participar?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para saber a próxima data e como se inscrever."
        }
]}

      pricingTitle="Rodas Celta-Baianas"
      pricingSubtitle="Feminino Sagrado"
      priceFinal="A consultar"
      priceNote="Valor conforme a programação de cada Roda"
      pricingCTALabel="Quero saber a próxima data"
    />
  )
}
