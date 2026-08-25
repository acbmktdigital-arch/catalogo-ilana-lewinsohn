import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function ImersoesMassixaPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Imersões MASSIXA"
      heroTitle={<>Três horas só suas nas Imersões <span style={{color:'var(--cor-destaque)'}}>MASSIXA</span></>}
      heroSubtitle="Um convite a reconectar corpo, coração e propósito — com o recorte Colo da Terra para quem está gestando."
      heroImageA="/images/imersoes-ninho-terra.jpg"
      heroImageB="/images/imersao-colo-da-terra.jpg"
      /* PENDENTE: a foto atual mostrava uma roda em grupo, e a Reconecta é
         individual. A Ilana apontou isso no doc 2. Substituir pela imagem
         certa quando ela for localizada no Drive:
         FOTOS PARA LINK TREE → ATENDIMENTOS → RECONECTA */
      heroImageWide="/images/placeholder-reconecta.jpg"
      heroCTALabel="Quero minha imersão"

      whatIsTitle={<>O que é a Imersão <span style={{color:'var(--cor-destaque)'}}>Reconecta</span>?</>}
      whatIsTexts={[
        "São três horas dedicadas exclusivamente a você, podendo incluir escuta, ritual, massagem, ervas, defumação, banho de ervas e sons curadores.",
        "Tudo é construído de acordo com o que o seu momento pede — um convite a reconectar corpo, coração e propósito.",
      ]}
      whatIsQuote="Às vezes, reconectar é só parar tempo suficiente para se ouvir."
      subSecao={{
        titulo: (
          <>Cuidando da mulher gestante em <span style={{color:'var(--cor-destaque)'}}>Colo da Terra</span></>
        ),
        subtitulo:
          'Uma imersão de cuidado criada para mulheres gestantes, focada em olhar para suas necessidades mais profundas e respeitando cada fase da gravidez.',
        textos: [
          'Uma travessia de cuidado para quem também está gerando uma nova vida.',
          'Enquanto todos olham para o bebê, este é um convite para cuidar de quem o acolhe.',
          'Criada especialmente para mulheres gestantes, esta imersão oferece um tempo de pausa, acolhimento e fortalecimento, respeitando cada fase da gestação e as necessidades de cada mulher.',
          'Um cuidado para nutrir o corpo, acolher o coração e viver essa travessia com mais presença, confiança, força e delicadeza.',
        ],
      }}

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde a imersão leva."
      transformations={[
        { antes: "Sensação de estar perdida", depois: "Mais clareza" },
        { antes: "Sobrecarga acumulada", depois: "Sensação de renovação" },
        { antes: "Coração pedindo espaço", depois: "Coração mais leve" },
        { antes: "Corpo tenso e cansado", depois: "Corpo relaxado" },
        { antes: "Desconfortos da gestação", depois: "Cuidado adaptado a cada fase" },
        { antes: "Ansiedade sobre o parto", depois: "Mais confiança para o que vem" },
      ]}

      includedItems={[
        "Imersão de 3 horas construída para o seu momento",
        "Escuta, ritual e toque conforme sua necessidade",
        "Possibilidade de defumação, banho de ervas e sons curadores",
        "Recorte Colo da Terra: toque seguro e adaptado à sua fase gestacional",
        "Ambiente acolhedor no Instituto Canto da Floresta",
      ]}
      includedCTALabel="Quero agendar minha imersão"

      pricingImage="/images/hero.jpg"
      pricingTitle="Imersões MASSIXA"
      pricingSubtitle="Entre em contato e agende a imersão que fala com o seu momento, conectar ou cuidado adaptado à gestação."
      precos={[
        {
          /* Duas linhas: a 2ª sinaliza que é a versão temática da 1ª, para a
             gestante se reconhecer de imediato. Preço e botão únicos. */
          label: (
            <>
              Reconecta
              <br />
              <span style={{ opacity: 0.7 }}>Colo da Terra · gestantes</span>
            </>
          ),
          valor: "R$ 605,00",
          descricao: "Três horas dedicadas exclusivamente a você",
        },
      ]}
      priceNote="Imersão de 3 horas · Instituto Canto da Floresta, em Arraial d'Ajuda — Porto Seguro"
      pricingCTALabel="Quero agendar minha imersão"

      faqItems={[
        {
          q: "Onde acontece o atendimento?",
          a: "No Instituto Canto da Floresta, em Arraial d'Ajuda, Bahia.",
        },
        {
          q: "Qual a diferença entre Reconecta e Colo da Terra?",
          a: "São a mesma imersão de três horas. Colo da Terra é o recorte voltado a mulheres gestantes, com toque e ritmo adaptados a cada fase da gravidez.",
        },
        {
          q: "O que vai acontecer na minha imersão?",
          a: "Não há um roteiro fixo — Ilana constrói a experiência com você, de acordo com o que seu momento pede.",
        },
        {
          q: "Preciso saber o que quero trabalhar antes de agendar?",
          a: "Não é obrigatório. Você pode chegar apenas com a intenção de se cuidar e reconectar.",
        },
        {
          q: "É seguro em qualquer fase da gestação?",
          a: "A imersão é adaptada a cada fase da gravidez, sempre com atenção às particularidades do seu momento.",
        },
        {
          q: "Preciso de liberação médica?",
          a: "Recomenda-se conversar com seu médico antes, especialmente em gestações de risco.",
        },
        {
          q: "A imersão inclui conversa?",
          a: "Sim, a escuta faz parte do processo, antes, durante ou depois, conforme o que for necessário.",
        },
        {
          q: "É indicada para momentos de crise ou também para celebrar?",
          a: "Serve para os dois: tanto para atravessar um momento difícil quanto para celebrar uma conquista ou transição.",
        },
        {
          q: "Posso levar acompanhante?",
          a: "Combine diretamente com Ilana pelo WhatsApp para alinhar essa possibilidade.",
        },
        {
          q: "Como agendo?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp para combinar data e horário.",
        },
      ]}

      modalEtiqueta="Agendamento exclusivo"
      modalTitulo="Sua Imersão MASSIXA"
      modalSubtitulo="3 horas dedicadas ao seu silêncio, cuidado e reconexão no Instituto Canto da Floresta."
      modalLocal="no Instituto Canto da Floresta, em Arraial d'Ajuda"
      modalidades={[
        {
          id: 'reconecta',
          titulo: 'Reconecta',
          descricao: 'Base para renovação e escuta profunda',
          nomeNaMensagem: 'Imersão Reconecta',
        },
        {
          id: 'colo-da-terra',
          titulo: 'Colo da Terra',
          descricao: 'Toque adaptado para gestantes',
          nomeNaMensagem: 'Imersão Colo da Terra (gestantes)',
        },
      ]}

      ambiente="completo"
      somAmbiente
    />
  )
}
