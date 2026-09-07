import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function AcompanhamentoTerapeuticoPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Acompanhamento Contínuo"
      heroTitle={<>Cuidado que se sustenta no <span style={{color:'var(--cor-destaque)'}}>Acompanhamento Contínuo</span></>}
      heroSubtitle="Processo continuado de escuta, orientação e práticas integrativas ao longo do tempo, principalmente online."
      heroImageWide="/images/acompanhamento-terapeutico.jpg"
      heroCTALabel="Quero começar meu acompanhamento"

      whatIsTitle={<>O que é o <span style={{color:'var(--cor-destaque)'}}>Acompanhamento Contínuo</span>?</>}
      whatIsTexts={[
        "É um processo continuado, realizado principalmente online — podendo incluir encontros presenciais —, com sessões semanais, quinzenais ou mensais de 60 minutos.",
        "Inclui escuta, orientação e sugestão de práticas integrativas ao longo do tempo, construindo junto com você um caminho de transformação sustentável.",
      ]}
      whatIsQuote="Transformação real acontece no tempo, não numa sessão só."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde o processo leva."
      /* Listas do doc 3. As transformações vêm em pares de título + explicação;
         entra no card a linha que responde melhor à dor. Onde o título é
         abstrato, ganha a explicação (par 1: "voltam" x "se consolidam").
         Onde a explicação repetiria as palavras da dor, ganha o título
         (par 4: a explicação dela também diz "não só pontual"). */
      transformations={[
        { antes: "Padrões que voltam mesmo depois de tentar resolver", depois: "Mudanças que se consolidam com o tempo" },
        { antes: "Sensação de estar sozinha no processo", depois: "Escuta constante" },
        { antes: "Dificuldade de constância no autocuidado", depois: "Práticas sugeridas de acordo com seu processo" },
        { antes: "Precisando de acompanhamento, não só de uma sessão pontual", depois: "Apoio contínuo" },
        { antes: "Necessidade de apoio regular", depois: "Sessões semanais, quinzenais ou mensais" },
        { antes: "Desejo de transformação real", depois: "Mais autoconhecimento" },
      ]}

      includedItems={[
        "Sessões de 60 minutos, na frequência que você escolher",
        "Escuta e orientação contínuas",
        "Sugestão de práticas integrativas entre as sessões",
        "Atendimento online, com possibilidade de encontros presenciais",
      ]}
      includedCTALabel="Quero começar meu acompanhamento"

      pricingImage="/images/acompanhamento-terapeutico.jpg"
      pricingTitle="Acompanhamento Contínuo"
      pricingSubtitle="Escolha a frequência que combina com o seu momento e fale com Ilana pelo WhatsApp."
      precos={[
        {
          label: "Semanal",
          valor: "R$ 134,00",
          descricao: "Por sessão de 60 minutos",
        },
        {
          label: "Quinzenal",
          valor: "R$ 161,00",
          descricao: "Por sessão de 60 minutos",
        },
        {
          label: "Mensal",
          valor: "R$ 197,00",
          descricao: "Por sessão de 60 minutos",
        },
      ]}
      priceNote="Valores por sessão, conforme a frequência escolhida · Atendimento online"
      pricingCTALabel="Quero começar meu acompanhamento"

      faqItems={[
        {
          q: "Como acontece o atendimento?",
          a: "É feito online, então você participa de onde estiver, no seu próprio espaço.",
        },
        {
          q: "Qual a diferença entre as frequências semanal, quinzenal e mensal?",
          a: "Elas se ajustam à intensidade do seu momento — quanto mais frequente, mais próximo o acompanhamento; a escolha é conversada com Ilana.",
        },
        {
          q: "Posso mudar a frequência ao longo do processo?",
          a: "Sim, a frequência pode ser ajustada conforme sua necessidade em cada fase.",
        },
        {
          q: "É possível ter encontros presenciais também?",
          a: "Sim, o acompanhamento é principalmente online, mas pode incluir encontros presenciais combinados com Ilana.",
        },
        {
          q: "Como agendo?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário.",
        },
      ]}

      modalEtiqueta="Acompanhamento"
      /* Online e também à noite: não pode herdar o aviso padrão, que diz
         "exclusivamente no período da tarde". */
      modalAvisoAgenda="⚠️ ATENÇÃO: Os atendimentos são realizados nos períodos da tarde e da noite. O seu atendimento será agendado para as próximas 4 semanas e, em até 4 dias úteis, entraremos em contato para confirmar a data e o horário definitivos."
      /* O "Investimento total" mostrava um valor só, mas o preço depende da
         frequência. A tabela completa fica na seção de preços, acima. */
      modalMostrarValor={false}
      modalTitulo="Seu acompanhamento contínuo"
      modalSubtitulo="Sessões de 60 minutos, online, na frequência que fizer sentido para o seu momento."
      modalLocal="no formato online"
      modalidades={[
        {
          id: 'semanal',
          titulo: 'Semanal',
          descricao: 'Acompanhamento mais próximo',
          nomeNaMensagem: 'Acompanhamento Contínuo semanal',
          valor: 'R$ 134,00',
        },
        {
          id: 'quinzenal',
          titulo: 'Quinzenal',
          descricao: 'Um meio-termo de frequência',
          nomeNaMensagem: 'Acompanhamento Contínuo quinzenal',
          valor: 'R$ 161,00',
        },
        {
          id: 'mensal',
          titulo: 'Mensal',
          descricao: 'Encontros mais espaçados',
          nomeNaMensagem: 'Acompanhamento Contínuo mensal',
          valor: 'R$ 197,00',
        },
      ]}

      somAmbiente={false}
    />
  )
}
