import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'
import { planilhaEndpoint, tipos } from '@/lib/planilha'

export default function BussolaOrientacaoXamanicaPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Bússola: Orientação Integrativa Xamânica"
      heroTitle={<>Reencontre seu rumo com a <span style={{color:'var(--cor-destaque)'}}>Bússola</span></>}
      heroSubtitle="Escuta e orientação integrativa xamânica, no formato online, para reencontrar o rumo em questões físicas, energéticas ou emocionais."
      heroImageWide="/images/bussola-orientacao-xamanica.jpg"
      heroCTALabel="Quero agendar a minha sessão"

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>Bússola</span>?</>}
      /* Texto novo da Ilana, bem mais longo que o anterior. Vai tudo num item
         só do array de propósito: assim o espaçamento entre os parágrafos é
         controlado aqui (10px) em vez dos 16px que o template aplica entre
         itens, e a seção encolhe sem que nenhuma frase dela se perca. */
      whatIsTexts={[
        <>
          <span className="block mb-2.5">
            Uma conversa para ajudar você a reencontrar o rumo ou dar atenção a algo
            em seu corpo físico, energético ou emocional que esteja pedindo mais cuidado.
            Juntas, construímos um roteiro possível de ações e práticas para apoiar
            esse momento da sua vida.
          </span>

          <span className="block mb-2.5">
            É um atendimento online de escuta, acolhimento e orientação para quem deseja
            reorganizar a vida com mais clareza, presença e simplicidade.
          </span>

          <span className="block mb-2.5">
            A partir de referências do Ayurveda, do Xamanismo, da Alquimia, do Yoga e da
            Ervaria, Ilana constrói um roteiro personalizado, entregue por escrito, com
            orientações e sugestões práticas para favorecer o equilíbrio da saúde física,
            mental, emocional e energética.
          </span>

          <span className="block mb-2.5">
            O cuidado precisa ser possível para que possa ser vivido, e não provocar mais
            frustração ou cobrança. Por isso, seguimos por caminhos simples, com pequenas
            etapas. Pequenos ajustes podem gerar grandes transformações.
          </span>

          <span className="block mb-3.5">
            Para quem desejar aprofundar esse caminho, a Bússola pode se transformar em um
            processo de Acompanhamento Contínuo.
          </span>

          {/* As cinco palavras viram uma fileira de etiquetas. Soltas, ocupariam
              cinco alturas de linha; assim cabem em uma ou duas. Dourado como
              texto é seguro aqui: o fundo desta seção é o #232112. */}
          <span className="flex flex-wrap gap-x-2 gap-y-2">
            {['Alimentação', 'Rotina', 'Autocuidado', 'Movimento', 'Presença'].map((palavra) => (
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
          </span>
        </>,
      ]}
      /* A frase de fechamento dela ocupa o destaque dourado que a seção já
         tinha. É a última do texto, então o lugar coincide — ganha peso sem
         custar altura nenhuma e sem sair da ordem em que ela escreveu. */
      whatIsQuote="Um convite para reencontrar seu centro e seguir com mais consciência e leveza."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde a orientação leva."
      /* Listas novas da Ilana: 7 dores e 10 transformações. Os pares seguem a
         ordem das dores dela. Sobraram duas transformações sem dor
         correspondente — "Sensação de reorientação" e "Sair com mais leveza e
         direção" —, as duas mais genéricas e já ditas por outros pares. */
      transformations={[
        { antes: "Busca de ajuda integrativa que não tem conseguido encontrar", depois: "Ganho de sabedoria integrativa" },
        { antes: "Sensação de estar sem rumo", depois: "Mais clareza de rumo" },
        { antes: "Confusão emocional", depois: "Acolhimento emocional e escuta genuína" },
        { antes: "Corpo e energia desequilibrados, questões físicas se apresentando", depois: "Possibilidade de reequilíbrio energético e físico" },
        { antes: "Padrões que se repetem", depois: "Mais confiança nas próprias decisões" },
        { antes: "Precisando de clareza para seguir em frente", depois: "Roteiro personalizado por escrito" },
        { antes: "Desconexão espiritual, distância da própria intuição", depois: "Reconexão com a intuição" },
      ]}

      includedItems={[
        "Sessão online de 90 minutos de escuta e orientação",
        "Construção de roteiro personalizado",
        "Plano de reorientação entregue por escrito",
        "Referências de Ayurveda, Xamanismo, Alquimia, Yoga e Ervaria",
      ]}
      includedCTALabel="Quero agendar a minha sessão"

      pricingImage="/images/bussola-orientacao-xamanica.jpg"
      pricingTitle="Bússola"
      /* O agendamento deixou de ser pelo WhatsApp em 20/09/2026, quando o
         checkout entrou: agora a pessoa reserva e paga pelo site, e o WhatsApp
         passa a ser o canal do contato seguinte, para combinar a data. */
      pricingSubtitle="Orientação Integrativa Xamânica, no formato online. Reserve a sua sessão pelo site."
      precos={[
        {
          label: "Sessão online de 90 minutos",
          valor: "R$ 296,00",
          descricao: "Escuta, orientação e plano por escrito",
        },
      ]}
      priceNote="Sessão online de 90 minutos + plano de reorientação entregue por escrito"
      pricingCTALabel="Quero agendar a minha sessão"

      faqItems={[
        {
          q: "Como acontece o atendimento?",
          a: "É feito online, então você participa de onde estiver, no seu próprio espaço.",
        },
        {
          q: "Recebo algo por escrito depois da sessão?",
          a: "Sim, um roteiro de reorientação personalizado é entregue por escrito após o atendimento.",
        },
        {
          q: "Preciso trazer uma pergunta específica?",
          a: "Não é obrigatório, mas ajuda se você já tiver uma questão em mente — Ilana também pode te ajudar a encontrá-la durante a sessão.",
        },
        {
          q: "É necessário algum preparo antes?",
          a: "Ilana solicitará que você prepare o ambiente e reserve alguns itens, como um copo d'água e possivelmente uma vela. Fora isso, não é necessário nenhum preparo especial, apenas disponibilidade para se conectar com o momento.",
        },
        {
          q: "Como agendo?",
          a: "Clique no botão, preencha seus dados e faça o pagamento pelo site. Em até 4 dias úteis Ilana entra em contato pelo WhatsApp para combinar a data e o horário, dentro das próximas 4 semanas.",
        },
      ]}

      /* Checkout Integrado da InfinitePay, na conta da Ilana. Link fixo: preço,
         descrição e webhook_url ficam gravados dentro dele, então ele vale para
         todas as compras e não é preciso gerar link por pessoa.

         Conferido no próprio link em 20/09/2026: amount 29600 centavos,
         redirect_url null, webhook_url apontando para o /exec da planilha dela.

         redirect_url vazio de propósito: quem paga fica na página de
         comprovante da InfinitePay, que é o único lugar onde aparece o nome de
         quem comprou — o aviso do webhook manda valor e códigos, nunca o
         comprador.

         ⚠️ O preço vive em DOIS lugares: em `precos` e `modalidades`, aqui em
         cima, e lá dentro do checkout. Mexer num sem mexer no outro faz o site
         anunciar um valor e a cobrança vir outro. O link não é editável nessa
         parte: mudar de preço é criar link novo e trocar esta linha. */
      modalUrlAoEnviar="https://checkout.infinitepay.io/ilana-daniella-lhx/PR8Ymaucs0"
      modalLabelEnviar="Ir para o pagamento"

      /* Grava o formulário na planilha antes de mandar a pessoa para o
         checkout. Sem isto, nome, telefone e urgência se perdem: o checkout
         não carrega nada do que foi escrito, e o aviso de pagamento não diz
         quem pagou. As duas linhas, cruzadas pela hora, fecham a
         identificação. */
      modalEndpoint={planilhaEndpoint}
      modalEndpointModo="planilha-e-saida"
      modalTipoRegistro={tipos.pedidoBussola}
      modalEtiqueta="Agendamento"
      /* A Bússola é online e a Ilana atende também à noite, então ela não pode
         herdar o aviso padrão, que diz "exclusivamente no período da tarde". */
      modalAvisoAgenda="⚠️ ATENÇÃO: Os atendimentos são realizados nos períodos da tarde e da noite. O seu atendimento será agendado para as próximas 4 semanas e, em até 4 dias úteis, entraremos em contato para confirmar a data e o horário definitivos."
      modalTitulo="Sua Bússola"
      modalSubtitulo="90 minutos online de escuta e orientação, com plano de reorientação por escrito."
      modalLocal="no formato online"
      modalidades={[
        {
          id: 'online',
          titulo: 'Sessão online de 90 minutos',
          descricao: 'Escuta, orientação e plano por escrito',
          nomeNaMensagem: 'Bússola: Orientação Integrativa Xamânica',
          valor: 'R$ 296,00',
        },
      ]}

      somAmbiente={false}
    />
  )
}
