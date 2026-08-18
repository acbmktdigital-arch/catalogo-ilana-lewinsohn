import SalesPageTemplate from '@/components/sections/SalesPageTemplate'

export default function BoticaDaBruxaPage() {
  return (
    <SalesPageTemplate
      whatsappUrl="https://wa.me/557399855339?text=Ol%C3%A1%2C+quero+saber+mais+sobre+os+produtos+da+Botica+da+Bruxa"
      serviceLabel="Ilana Lewinsohn · Botica da Bruxa"
      heroTitle={<>Preparados artesanais da <span style={{color:'var(--cor-destaque)'}}>Botica da Bruxa</span></>}
      heroSubtitle="Linha de preparados artesanais inspirados na Ervaria, produzidos em pequenos lotes."
      heroImage="/images/botica-da-bruxa.jpg"
      heroCTALabel="Quero saber a disponibilidade"

      painPoints={[
        {
                "icon": "🌫️",
                "title": "Dificuldade de encontrar produtos naturais autênticos",
                "desc": "Vontade de algo feito com cuidado e presença"
        },
        {
                "icon": "😣",
                "title": "Tensões e desconfortos do dia a dia",
                "desc": "Procurando um aliado natural para o corpo"
        },
        {
                "icon": "🕯️",
                "title": "Vontade de rituais próprios em casa",
                "desc": "Buscando produtos que apoiem sua prática pessoal"
        },
        {
                "icon": "🌙",
                "title": "Desejo de proteção e força energética",
                "desc": "Interesse em blends autorais com esse propósito"
        },
        {
                "icon": "🌬️",
                "title": "Sistema imunológico pedindo apoio",
                "desc": "Buscando cuidado natural preventivo"
        },
        {
                "icon": "🌿",
                "title": "Interesse por ervaria ancestral",
                "desc": "Vontade de produtos com raiz e significado"
        }
]}

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>Botica da Bruxa</span>?</>}
      whatIsTexts={[
        "É uma linha de preparados artesanais inspirados na Ervaria, produzidos em pequenos lotes: Pomada e Tintura de Erva-Baleeira (linha Maria Preta), blends autorais de óleos essenciais e Rapé de Juerana Vermelha.",
        "Os blends autorais incluem Cabocla Serena, Lilith, Força de Oyá, Força Imune e Você é Linda — cada um criado com uma intenção específica."
]}
      whatIsQuote="Cada preparado carrega a intenção de quem planta, colhe e prepara com as mãos."
      whatIsImage="/images/botica-da-bruxa.jpg"
      whatIsCTALabel="Quero saber mais"

      benefitsTitle="A Transformação que Você Busca"
      benefitsSubtitle="Cuidado natural feito em pequenos lotes"
      benefits={[
        {
                "icon": "🌿",
                "title": "Pomada e Tintura de Erva-Baleeira",
                "desc": "Linha Maria Preta, para alívio corporal"
        },
        {
                "icon": "🧴",
                "title": "Blends autorais de óleos essenciais",
                "desc": "Cabocla Serena, Lilith, Força de Oyá, Força Imune, Você é Linda"
        },
        {
                "icon": "🍃",
                "title": "Rapé de Juerana Vermelha",
                "desc": "Preparado tradicional da Ervaria"
        },
        {
                "icon": "✋",
                "title": "Produção em pequenos lotes",
                "desc": "Cuidado artesanal em cada preparado"
        },
        {
                "icon": "🌙",
                "title": "Intenção em cada blend",
                "desc": "Produtos criados com propósito específico"
        },
        {
                "icon": "✨",
                "title": "Ervaria com raiz ancestral",
                "desc": "Conhecimento passado de geração em geração"
        }
]}

      includedItems={[
        "Pomada e Tintura de Erva-Baleeira (linha Maria Preta)",
        "Blends autorais de óleos essenciais",
        "Rapé de Juerana Vermelha",
        "Envios fora de Porto Seguro sob encomenda"
]}
      includedCTALabel="Quero saber a disponibilidade"

      credentials={[
        "Bióloga pela UNICAMP",
        "Mestre em Conservação da Biodiversidade e Desenvolvimento Sustentável (IPÊ)",
        "Criadora do método MASSIXA — Massagem Integrativa Xamânica",
        "Facilitadora de Rodas de Mulheres desde 2012"
]}
      aboutCTALabel="Falar com Ilana sobre os produtos"

      faqItems={[
        {
                "q": "Onde os produtos são retirados ou entregues?",
                "a": "Em Porto Seguro e região; para outras localidades, os envios são feitos sob encomenda."
        },
        {
                "q": "Os produtos têm validade?",
                "a": "Sim, por serem artesanais, cada produto tem sua validade informada no momento da compra."
        },
        {
                "q": "Como escolho o blend certo para mim?",
                "a": "Ilana pode te orientar pelo WhatsApp sobre qual preparado combina com o que você está buscando."
        },
        {
                "q": "Como faço para comprar?",
                "a": "Clique no botão e fale com Ilana pelo WhatsApp para consultar disponibilidade e formas de envio."
        }
]}

      pricingTitle="Botica da Bruxa"
      pricingSubtitle="Preparados artesanais da Ervaria"
      priceFinal="Consultar disponibilidade"
      priceNote="Envios fora de Porto Seguro sob encomenda"
      pricingCTALabel="Quero saber a disponibilidade"
    />
  )
}
