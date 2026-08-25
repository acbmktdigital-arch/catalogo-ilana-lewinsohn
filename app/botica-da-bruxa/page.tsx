import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function BoticaDaBruxaPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Botica da Bruxa"
      heroTitle={<>Preparados artesanais da <span style={{color:'var(--cor-destaque)'}}>Botica da Bruxa</span></>}
      heroSubtitle="Linha de preparados artesanais inspirados na Ervaria, produzidos em pequenos lotes."
      heroImageWide="/images/botica-da-bruxa.jpg"
      heroCTALabel="Quero saber a disponibilidade"

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>Botica da Bruxa</span>?</>}
      whatIsTexts={[
        <>
          É uma linha de preparados artesanais inspirados na Ervaria, produzidos em pequenos
          lotes: Pomada e Tintura de Erva-Baleeira (<em>Cordia verbenacea</em>, linha Maria
          Preta), blends autorais de óleos essenciais e Rapé de Juerana Vermelha
          (<em>Parkia pendula</em>).
        </>,
        "Os blends autorais incluem Cabocla Serena, Lilith, Força de Oyá, Força Imune e Você é Linda — cada um criado com uma intenção específica.",
      ]}
      whatIsQuote="Cada preparado carrega a intenção de quem planta, colhe e prepara com as mãos."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para o que os preparados trazem."
      transformations={[
        { antes: "Tensões e desconfortos do dia a dia", depois: "Pomada e Tintura de Erva-Baleeira" },
        { antes: "Vontade de rituais próprios em casa", depois: "Blends autorais de óleos essenciais" },
        { antes: "Interesse por ervaria ancestral", depois: "Rapé de Juerana Vermelha" },
        { antes: "Dificuldade de encontrar produtos naturais autênticos", depois: "Produção em pequenos lotes" },
        { antes: "Desejo de proteção e força energética", depois: "Intenção em cada blend" },
        { antes: "Sistema imunológico pedindo apoio", depois: "Ervaria com raiz ancestral" },
      ]}

      includedItems={[
        "Pomada e Tintura de Erva-Baleeira (linha Maria Preta)",
        "Blends autorais de óleos essenciais",
        "Rapé de Juerana Vermelha",
        "Envios fora de Porto Seguro sob encomenda",
      ]}
      includedCTALabel="Quero saber a disponibilidade"

      pricingImage="/images/botica-da-bruxa.jpg"
      pricingTitle="Botica da Bruxa"
      pricingSubtitle="Preparados artesanais da Ervaria."
      precoAviso="Como a produção é feita em pequenos lotes, a disponibilidade dos preparados pode variar. Diga qual produto te interessa e informaremos o valor e as opções de envio disponíveis."
      priceNote="Retirada em Porto Seguro e região · Envios sob encomenda"
      pricingCTALabel="Quero saber a disponibilidade"

      faqItems={[
        {
          q: "Onde os produtos são retirados ou entregues?",
          a: "Em Porto Seguro e região; para outras localidades, os envios são feitos sob encomenda.",
        },
        {
          q: "Os produtos têm validade?",
          a: "Sim, por serem artesanais, cada produto tem sua validade informada no momento da compra.",
        },
        {
          q: "Como escolho o blend certo para mim?",
          a: "Ilana pode te orientar pelo WhatsApp sobre qual preparado combina com o que você está buscando.",
        },
        {
          q: "Como faço para comprar?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp para consultar disponibilidade e formas de envio.",
        },
      ]}

      modalEtiqueta="Disponibilidade"
      modalTitulo="Preparados da Botica"
      modalSubtitulo="Escolha o que te interessa e Ilana informa valor, disponibilidade e envio."
      modalFraseInicial="Gostaria de consultar a disponibilidade de"
      modalLabelModalidade="Qual preparado te interessa?"
      modalMostrarValor={false}
      modalMostrarPeriodo={false}
      modalLabelMensagem="O que você está buscando"
      modalPlaceholderMensagem="Se estiver em dúvida, conte o que procura e Ilana te orienta."
      modalLabelEnviar="Consultar no WhatsApp"
      modalidades={[
        {
          id: 'maria-preta',
          titulo: 'Linha Maria Preta',
          descricao: 'Pomada e Tintura de Erva-Baleeira',
          nomeNaMensagem: 'Pomada ou Tintura de Erva-Baleeira (linha Maria Preta)',
        },
        {
          id: 'blends',
          titulo: 'Blends de óleos',
          descricao: 'Cabocla Serena, Lilith, Força de Oyá, Força Imune, Você é Linda',
          nomeNaMensagem: 'blends autorais de óleos essenciais',
        },
        {
          id: 'rape',
          titulo: 'Rapé de Juerana',
          descricao: 'Preparado tradicional da Ervaria',
          nomeNaMensagem: 'Rapé de Juerana Vermelha',
        },
        {
          id: 'orientacao',
          titulo: 'Ainda não sei',
          descricao: 'Quero orientação sobre qual escolher',
          nomeNaMensagem: 'preparados da Botica da Bruxa',
        },
      ]}

      somAmbiente={false}
    />
  )
}
