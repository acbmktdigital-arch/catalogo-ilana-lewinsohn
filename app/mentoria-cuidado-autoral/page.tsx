import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function MentoriaCuidadoAutoralPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Travessia da Semente"
      heroTitle={<>Fortaleça sua identidade na <span style={{color:'var(--cor-destaque)'}}>Travessia da Semente</span></>}
      heroSubtitle="Para terapeutas que desejam desenvolver uma linguagem própria de cuidado e ampliar presença, confiança e valor percebido."
      /* Recortada em 4:3 a partir de y=850 da original, para reduzir a lona da
         tenda como a Ilana pediu: no celular sobra uma faixa fina no topo e no
         desktop, onde a moldura vira 16/10 e apara mais, ela some por completo. */
      heroImageWide="/images/mentoria-cuidado-autoral-aula.jpg"
      heroCTALabel="Quero aplicar para a Mentoria"

      whatIsTitle={<>O que é a Mentoria <span style={{color:'var(--cor-destaque)'}}>Cuidado Autoral</span>?</>}
      whatIsTexts={[
        /* As duas frases de abertura vêm em linhas separadas no documento — é
           a batida que ela quis. Uso <br /> em vez de dois parágrafos porque
           com o espaçamento normal duas frases de quatro palavras pareceriam
           erro de diagramação. */
        <>
          Técnicas são importantes.
          <br />
          Mas elas não bastam.
        </>,

        'O diferencial nasce quando você desenvolve sua própria linguagem de cuidado, integrando conhecimento, presença, experiência e intuição.',

        'Esta mentoria é voltada para terapeutas que desejam fortalecer sua identidade profissional e construir um modo de cuidar que seja coerente com quem são.',

        'Mais do que aprender novas técnicas, é um caminho para cultivar presença, ampliar a confiança e transformar o cuidado em uma expressão viva da própria trajetória.',

        'Uma travessia.',

        'Desfrutando do mergulho no universo sensorial, aprendendo a integrar elementos naturais como ervas, pedras, argila, bambu, óleos, sons… Unindo-os ao repertório terapêutico que você já traz e ousando integrar tudo, cultivando liberdade, beleza e alcance terapêutico profundo.',

        'Não se trata de abandonar protocolos, mas de compreender seus fundamentos para utilizá-los com liberdade, responsabilidade e criatividade.',

        /* "Conhecimento.Presença.Autoria." — três palavras soltas viram
           etiquetas, mesma solução da Bússola e das Rodas. */
        <span key="etiquetas" className="flex flex-wrap gap-x-2 gap-y-2">
          {['Conhecimento', 'Presença', 'Autoria'].map((palavra) => (
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
      ]}
      /* A frase de fechamento dela ocupa o destaque dourado. É a última do
         texto, então a posição coincide. */
      whatIsQuote="Um convite para desenvolver um cuidado autoral, ampliar o valor percebido do seu trabalho e oferecer ao mundo uma presença verdadeiramente única."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="Identidade, presença e valor reconhecido."
      /* 10 dores contra 7 transformações, as duas listas em pares de título +
         explicação. Ficaram de fora três dores que não têm transformação
         correspondente na lista dela — ver AJUSTES-DOC4.md. */
      transformations={[
        { antes: "Sentimento de dúvida sobre a própria capacidade enquanto terapeuta e cuidadora", depois: "Acompanhamento cuidadoso durante o processo" },
        { antes: "Sensação de trabalho genérico", depois: "Mais autenticidade ao exercer a profissão" },
        { antes: "Falta de integração de elementos naturais no seu repertório terapêutico", depois: "Aprendizado de ervaria básica, argiloterapia essencial e uso de óleos essenciais e fogo" },
        { antes: "Falta de identidade profissional clara", depois: "Identidade profissional clara" },
        { antes: "Dificuldade de precificar", depois: "Valor percebido ampliado" },
        { antes: "Insegurança para se posicionar", depois: "Mais confiança" },
        { antes: "Dificuldade de comunicar o próprio método", depois: "Comunicação autêntica" },
      ]}

      /* Sem o quadro "O que está incluído": o detalhamento do que a mentoria
         entrega vem com o formulário, e talvez com um site próprio dela. Uma
         lista genérica agora só ocuparia o lugar da informação boa. */

      pricingImage="/images/mentoria-cuidado-autoral-aula.jpg"
      pricingTitle="Mentoria Cuidado Autoral"
      /* As instruções ficam ANTES do botão de propósito: quem clica precisa
         saber o que vai acontecer antes de clicar. */
      pricingSubtitle="Esta travessia é construída para pessoas comprometidas com seu próprio caminho. Os grupos são pequenos, para assegurar a proximidade entre nós e favorecer a profundidade do processo. Se esta mentoria fez sentido para você, preencha o Formulário de Aplicação. Leva cerca de 3 minutos e me permitirá conhecer um pouco da sua trajetória antes da nossa conversa."
      precoAviso="Próxima turma em formação."
      /* ⚠️ PENDENTE ANTES DE DIVULGAR: o texto acima promete um Formulário de
         Aplicação, mas o botão ainda abre o WhatsApp. A Vera confirmou que
         pode ficar assim por ora, porque o site não foi divulgado a ninguém.
         Antes de compartilhar, o botão precisa apontar para o formulário —
         senão a pessoa clica esperando o quest e cai no zap. */
      priceNote="A partir das suas respostas, entrarei em contato pelo WhatsApp para agendarmos uma conversa e avaliarmos, juntas, se este é o momento certo para seguirmos."
      pricingCTALabel="Quero aplicar para a Mentoria"

      faqItems={[
        {
          q: "Para quem é essa mentoria?",
          a: "Para terapeutas que já atuam ou estão começando e querem fortalecer sua identidade profissional.",
        },
        {
          q: "Como funciona o processo seletivo?",
          a: "Começa pelo Formulário de Aplicação, que leva cerca de 3 minutos. A partir das suas respostas, Ilana entra em contato pelo WhatsApp para agendarem uma conversa.",
        },
        {
          q: "Quando começa a próxima turma?",
          a: "As turmas são formadas periodicamente; fale com Ilana para saber a próxima data.",
        },
        {
          q: "Qual o valor da mentoria?",
          a: "O valor é definido conforme o formato da próxima turma; consulte pelo WhatsApp.",
        },
        {
          q: "Como faço para aplicar?",
          a: "Clique no botão e preencha o Formulário de Aplicação, contando um pouco da sua trajetória. Ilana retorna pelo WhatsApp para agendarem uma conversa.",
        },
      ]}

      modalEtiqueta="Aplicação"
      modalTitulo="Aplicar para a mentoria"
      modalSubtitulo="Deixe seu contato e conte um pouco da sua trajetória. Ilana retorna para agendarem uma conversa."
      modalFraseInicial="Gostaria de aplicar para a"
      modalMostrarValor={false}
      modalMostrarPeriodo={false}
      modalLabelMensagem="Sobre você e seu trabalho"
      modalPlaceholderMensagem="Há quanto tempo atua? O que te trouxe a esta mentoria?"
      modalLabelEnviar="Enviar minha aplicação no WhatsApp"
      modalidades={[
        {
          id: 'mentoria',
          titulo: 'Mentoria Cuidado Autoral',
          descricao: 'Turma pequena, com processo seletivo',
          nomeNaMensagem: 'Mentoria Cuidado Autoral',
        },
      ]}

      somAmbiente={false}
    />
  )
}
