import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'
import { planilhaEndpoint, tipos } from '@/lib/planilha'

/* O ® vem ANTES do nome porque foi assim que a Ilana escreveu no doc 4, e a
   Vera confirmou manter. Em corpo cheio ele pesaria mais que a palavra que
   qualifica, então sai menor e elevado — o tratamento de sempre para símbolo
   de marca. */
function Marca() {
  return (
    <span
      style={{ fontSize: '0.62em', verticalAlign: 'super', opacity: 0.8 }}
      aria-label="marca registrada"
    >
      ®
    </span>
  )
}

export default function BoticaDaBruxaPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Botica da Bruxa"
      heroTitle={<>Preparados artesanais da <span style={{color:'var(--cor-destaque)'}}>Botica da Bruxa</span></>}
      heroSubtitle="Linha de preparados artesanais de Ervaria produzidos em pequenos lotes, com todo zelo e amor."
      heroImageWide="/images/botica-da-bruxa.jpg"
      heroCTALabel="Quero saber a disponibilidade"

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>Botica da Bruxa</span>?</>}
      whatIsTexts={[
        /* Nome científico em itálico, gênero com inicial maiúscula e espécie
           em minúscula — regra que a Ilana pediu por ser bióloga. */
        <>
          É uma linha de preparados artesanais de Ervaria, produzidos em pequenos
          lotes: Pomada e Tintura de Erva-Baleeira (<em>Cordia verbenacea</em>, linha Maria
          Preta), blends autorais de óleos essenciais puríssimos e Rapé de Juerana Vermelha
          (<em>Parkia pendula</em>).
        </>,
        "Os blends autorais incluem Cabocla Serena, Lilith, Força de Oyá, Força Imune e Você é Linda — cada um criado com uma intenção específica, traduzida no nome.",
      ]}
      whatIsQuote="Cada preparado carrega a intenção e o zelo de quem planta, colhe e prepara com as mãos. É o rezo materializado em cuidado."

      /* Sem dores e transformações: aqui não há dor a resolver, e sim produtos
         a apresentar. O quadro vira catálogo — nome e descrição, sem seta. */
      paineisDeLista={[
        {
          titulo: 'O cuidado preciso que você busca',
          subtitulo: 'Natural, feito em pequenos lotes e a depender da oferta de plantas no quintal.',
          itens: [
            {
              nome: 'Pomada e Tintura de Erva-Baleeira',
              descricao: (
                <>
                  <Marca />
                  Linha Maria Preta: anti-inflamatória, para alívio corporal
                </>
              ),
            },
            {
              nome: 'Blends autorais de óleos essenciais',
              descricao: (
                <>
                  <Marca />
                  Cabocla Serena, <Marca />
                  Lilith, <Marca />
                  Força de Oyá, <Marca />
                  Força Imune, <Marca />
                  Você é Linda
                </>
              ),
            },
            {
              nome: 'Rapé de Juerana Vermelha',
              descricao: (
                <>
                  Preparado tradicional de medicina da floresta, com cascas da potente{' '}
                  <em>Parkia pendula</em>.
                </>
              ),
            },
          ],
        },
        {
          titulo: 'Por que esses não são produtos ordinários?',
          subtitulo:
            'Porque são preparados com muito amor, no seio da Mata Atlântica sul-baiana, pelo coração e as mãos de uma bruxa arteira cuidadeira. E além disso:',
          itens: [
            {
              nome: 'Produção em pequenos lotes',
              descricao: 'No tempo da artesania, com cuidado em cada preparado',
            },
            {
              nome: 'Intenção em cada blend',
              descricao: 'Produtos criados com propósito específico',
            },
            {
              nome: 'Ervaria com raiz ancestral',
              descricao: 'Conhecimento passado de geração em geração',
            },
          ],
        },
      ]}

      /* Sem o quadro "O que está incluído": a lista dele repetia os produtos
         que agora estão no catálogo acima. */

      pricingImage="/images/botica-da-bruxa.jpg"
      pricingTitle="Botica da Bruxa"
      pricingSubtitle="Preparados artesanais da Ervaria."
      precoAviso="Como a produção é feita em pequenos lotes, a disponibilidade dos preparados pode variar. Diga qual produto te interessa e informaremos o valor e as opções de envio disponíveis."
      priceNote="Retirada em Porto Seguro e região · Envios fora de Porto Seguro sob encomenda"
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

      /* Além de abrir o WhatsApp, guarda uma cópia da consulta na planilha —
         assim fica o registro de qual preparado é mais procurado, coisa que a
         conversa no zap não acumula.

         A planilha aqui é cópia, não destino: o WhatsApp abre primeiro e uma
         falha na gravação não custa nada a quem preencheu, porque a mensagem
         já foi. */
      modalEndpoint={planilhaEndpoint}
      modalEndpointModo="planilha-e-saida"
      modalTipoRegistro={tipos.consultaBotica}
      modalEtiqueta="Disponibilidade"
      modalTitulo="Preparados da Botica"
      modalSubtitulo="Escolha o que te interessa e Ilana informa valor, disponibilidade e envio."
      modalFraseInicial="Gostaria de consultar a disponibilidade de"
      modalLabelModalidade="Qual preparado te interessa?"
      modalMostrarValor={false}
      modalMostrarAgenda={false}
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
