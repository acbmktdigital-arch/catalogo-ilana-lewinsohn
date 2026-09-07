import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function RodasCeltaBaianasPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Rodas Celta-Baianas: Feminino Sagrado"
      heroTitle={<>Fortalecimento feminino nas <span style={{color:'var(--cor-destaque)'}}>Rodas Celta-Baianas</span></>}
      heroSubtitle="Vivências em grupo de mulheres para fortalecimento e deleite. Aqui a medicina é o círculo, a ritualística, e pode incluir cacau cerimonial e partilha em ambiente seguro e acolhedor."
      heroImageWide="/images/rodas-celta-baianas.jpg"
      heroCTALabel="Quero participar de uma Roda"

      whatIsTitle={<>O que são as <span style={{color:'var(--cor-destaque)'}}>Rodas Celta-Baianas</span>?</>}
      whatIsTexts={[
        'São vivências ritualísticas coletivas de fortalecimento feminino inspiradas nos Sabbaths celtas e em tradições xamânicas afro-brasileiras e indígenas.',

        'Círculos de cultivar o pertencimento, a reconexão e a celebração dos ciclos de Vida–Morte–Vida.',

        'Nas nossas rodas, o respeito ao que é vivido ali é soberano. Assim, cultivamos um espaço seguro para o encontro com a mulher livre que habita em cada uma de nós: La Loba.',

        'As rodas podem favorecer a liberação de memórias, a ressignificação de traumas e o fortalecimento da natureza original feminina.',

        'O cacau cerimonial — Cacaozito Medicina — muitas vezes faz parte das rodas, assim como as rosas e a mesa de alimentos, que também se torna altar. Uma mesa vegana, preparada como expressão de reverência a todos os reinos da Natureza e da semeadura da paz.',

        'Um espaço de encontro, ritual, pés na terra e coração aquecido pelo fogo e pelo círculo, onde a Natureza é mestra.',

        'As rodas realizadas no Instituto Canto da Floresta, em Arraial d\'Ajuda, nas datas celtas, são formadas por um coven já firmado e não são divulgadas abertamente. Para participar dessa roda é preciso passar por uma entrevista.',

        /* Quatro palavras soltas ocupariam quatro linhas. Como etiquetas, cabem
           em uma ou duas — mesma solução usada na Bússola. Dourado como texto é
           seguro aqui: o fundo desta seção é o #232112, não o oliva. */
        <span key="etiquetas" className="flex flex-wrap gap-x-2 gap-y-2">
          {['Ritual', 'Pertencimento', 'Natureza', 'Mulher Selvagem'].map((palavra) => (
            <span
              key={palavra}
              className="inline-flex items-center rounded-full px-3 py-1 font-sans text-[10px] uppercase tracking-[0.14em] font-semibold"
              style={{
                color: 'var(--cor-destaque)',
                border: '1px solid rgba(201,162,39,0.30)',
              }}
            >
              {palavra}
            </span>
          ))}
        </span>,

        'Uma experiência para mulheres que desejam fortalecer seus vínculos consigo mesmas, com outras mulheres e com os ciclos da vida.',
      ]}
      whatIsQuote="Em roda, a força de uma se soma à força de todas."

      /* Sem dores e transformações: pedido explícito da Ilana no doc 3,
         "NÃO COLOCAR DORES E TRANSFORMAÇÕES NESTE SETOR". */

      includedItems={[
        "Ritual inspirado nos Sabbaths celtas e tradições afro-baianas",
        "Cacau cerimonial",
        "Mesa vegana compartilhada",
        "Partilha em círculo entre as participantes",
      ]}
      includedCTALabel="Quero participar de uma Roda"

      pricingImage="/images/rodas-celta-baianas.jpg"
      pricingTitle="Rodas Celta-Baianas"
      pricingSubtitle="Feminino Sagrado. Fale com Ilana pelo WhatsApp para conhecer as próximas rodas."
      /* Frase no lugar do cartão de preço: não há valor fechado, e um
         "A consultar" em Lora 36px passava a impressão errada. */
      precoAviso="Valores variáveis e sob consulta."
      priceNote="No Instituto Canto da Floresta, em Arraial d'Ajuda — e em outras cidades mediante convite"
      pricingCTALabel="Quero participar de uma Roda"

      /* Levar uma roda para outro lugar é a segunda intenção da página, então
         o convite vem depois dos valores, com botão próprio. */
      convitePosPreco={{
        texto: 'Quer levar a magia e a força das Rodas Celta-Baianas para o seu espaço ou cidade? Entre em contato e faça o convite.',
        label: 'Quero levar uma roda para minha cidade',
        modalidadeId: 'outra-cidade',
      }}

      faqItems={[
        {
          q: "Onde acontecem as Rodas?",
          a: "No Instituto Canto da Floresta, em Arraial d'Ajuda, e também em outras cidades, estados ou países mediante convite.",
        },
        {
          q: "Como faço para participar da roda do Instituto?",
          a: "As rodas do Instituto, nas datas celtas, são formadas por um coven já firmado e não são divulgadas abertamente. Para participar é preciso passar por uma entrevista — registre seu interesse pelo botão e Ilana entra em contato.",
        },
        {
          q: "Posso levar uma Roda para a minha cidade?",
          a: "Sim, os encontros podem acontecer em outros espaços mediante convite, em outras cidades, estados ou países. Fale com Ilana pelo WhatsApp para combinar.",
        },
        {
          q: "Preciso ter experiência com rituais para participar?",
          a: "Não é necessária experiência anterior. O que se pede é disponibilidade para o encontro e respeito ao que é vivido no círculo.",
        },
        {
          q: "Qual o valor?",
          a: "Os valores são variáveis e sob consulta, conforme a roda e o formato. Consulte pelo WhatsApp.",
        },
      ]}

      modalEtiqueta="Rodas Celta-Baianas"
      modalTitulo="Participar de uma Roda"
      modalSubtitulo="Deixe seu contato e conte um pouco de você. Ilana retorna para conversar."
      modalMostrarAgenda={false}
      modalMostrarValor={false}
      modalFraseInicial="Tenho interesse em"
      modalLabelModalidade="Qual é o seu interesse?"
      modalidades={[
        {
          id: 'instituto',
          titulo: 'Roda no Canto da Floresta',
          descricao: "Arraial d'Ajuda · passa por entrevista",
          nomeNaMensagem: 'participar de uma Roda Celta-Baiana no Instituto Canto da Floresta',
        },
        {
          id: 'outra-cidade',
          titulo: 'Roda na minha cidade',
          descricao: 'Levar uma roda para outro lugar',
          nomeNaMensagem: 'levar uma Roda Celta-Baiana para a minha cidade',
        },
      ]}

      ambiente="curto"
      somAmbiente={false}
    />
  )
}
