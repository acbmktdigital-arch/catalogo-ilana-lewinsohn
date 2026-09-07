import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function ImersoesMassixaPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Imersões MASSIXA"
      heroTitle={<>Força selvagem. <span style={{color:'var(--cor-destaque)'}}>Beleza livre.</span></>}
      heroSubtitle="Três horas de cuidados personalizados especialmente para você, nas Imersões MASSIXA. Para atender às suas necessidades do momento e abrir caminho para reconectar corpo, coração e propósito — com o recorte especial Colo da Terra para quem está gestando."
      heroImageA="/images/imersoes-ninho-terra.jpg"
      heroImageB="/images/imersao-colo-da-terra.jpg"
      heroImageWide="/images/reconecta-gongo-v3.jpg"
      heroAspecto="alto"
      heroCTALabel="Quero agendar a minha imersão"

      whatIsTitle={<>O que é a Imersão <span style={{color:'var(--cor-destaque)'}}>Reconecta</span>?</>}
      whatIsTexts={[
        "Tempo para você se reconectar com o chão, a mata, o coração da Terra. Tempo para lembrar de si naquele lugar mais livre e profundo do seu ser. Acessar seu saber selvagem. Abrir espaço para a liberdade de ser quem é.",
        "São três horas dedicadas exclusivamente a você, podendo incluir escuta, oráculos, rituais personalizados, massagem, ervas, defumação, banho de ervas e sons curadores.",
        "Tudo é construído de acordo com o que o seu momento pede — um convite a reconectar corpo, coração e propósito.",
      ]}
      whatIsQuote="Receber cuidado para se reconectar é abrir espaço para si, permitir-se fluir em amor."
      subSecao={{
        titulo: (
          <>Cuidando da mulher gestante em <span style={{color:'var(--cor-destaque)'}}>Colo da Terra</span></>
        ),
        subtitulo:
          'Uma imersão de cuidado criada para mulheres gestantes, focada em olhar para suas necessidades mais profundas e respeitando cada fase da gravidez. Ativar La Loba, força selvagem feminina.',
        textos: [
          'Uma travessia de cuidado para quem também está gerando uma nova vida.',
          'Enquanto todos olham para o bebê, este é um convite para cuidar de quem o acolhe.',
          'Criada especialmente para mulheres gestantes, esta imersão oferece um tempo de pausa, acolhimento e fortalecimento, respeitando cada fase da gestação e as necessidades de cada mulher.',
          'Um cuidado para nutrir o corpo, acolher o coração e viver essa travessia com mais presença, confiança, força e delicadeza.',
        ],
      }}

      /* Dois painéis: a Ilana escreveu dores e transformações separadas para
         cada recorte. Este é só da Reconecta — os pares da gestante saíram
         daqui e ganharam painel próprio logo abaixo. */
      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="Na Imersão Reconecta — de onde você está para onde a imersão leva."
      transformations={[
        { antes: "Desejo forte por um intenso cuidado de bruxa (amiga, amorosa e forte)", depois: "Você terá" },
        { antes: "Sensação de estar perdida", depois: "Mais clareza" },
        { antes: "Distância do próprio propósito", depois: "Reconexão com o próprio propósito" },
        { antes: "Coração pedindo espaço", depois: "Coração mais leve" },
        { antes: "Corpo tenso e cansado", depois: "Corpo relaxado" },
        { antes: "Falta de ritual no dia a dia", depois: "Experiência ritualística" },
        { antes: "Sobrecarga acumulada", depois: "Sensação de renovação" },
      ]}
      transformacaoSecundaria={{
        titulo: "A Transformação no Colo da Terra",
        subtitulo: "Para quem também está gerando uma nova vida.",
        itens: [
          { antes: "Desejo de um cuidado de bruxa (amiga, amorosa e forte)", depois: "Você terá" },
          { antes: "Falta de espaço só para si", depois: "Pausa, acolhimento e fortalecimento na gestação" },
          { antes: "Sentimento de invisibilidade enquanto mulher", depois: "Cuidado profundo para você, a mulher gestando" },
          { antes: "Falta de fôlego para a grande mudança pela frente", depois: "Fortalecimento para o parto" },
          { antes: "Corpo em transformação", depois: "Cuidado adaptado a cada fase da gestação" },
          { antes: "Cansaço acumulado", depois: "Relaxamento profundo" },
          { antes: "Ansiedade sobre o parto e a criança", depois: "Conexão com o bebê" },
          { antes: "Sensação de sobrecarga emocional", depois: "Acolhimento emocional" },
          { antes: "Dores lombares e nas pernas", depois: "Alívio de desconfortos físicos" },
        ],
      }}

      includedItems={[
        "Imersão de 3 horas construída para o seu momento",
        "Escuta, ritual e toque conforme sua necessidade",
        "Possibilidade de defumação, banho de ervas e sons curadores",
        "Recorte Colo da Terra: toque seguro e adaptado à sua fase gestacional",
        "Ambiente acolhedor no Instituto Canto da Floresta",
      ]}
      includedCTALabel="Quero agendar a minha imersão"

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
      pricingCTALabel="Quero agendar a minha imersão"

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
      modalSubtitulo="3 horas dedicadas a cuidar de você, com rituais específicos e sessão de massagem. No Instituto Canto da Floresta, em Arraial d'Ajuda."
      modalLocal="no Instituto Canto da Floresta, em Arraial d'Ajuda"
      modalidades={[
        {
          id: 'reconecta',
          titulo: 'Reconecta',
          descricao: 'Escuta, rituais personalizados e massagem',
          nomeNaMensagem: 'Imersão Reconecta',
        },
        {
          id: 'colo-da-terra',
          titulo: 'Colo da Terra',
          descricao: 'Tudo adaptado para gestantes',
          nomeNaMensagem: 'Imersão Colo da Terra (gestantes)',
        },
      ]}

      ambiente="completo"
      somAmbiente
    />
  )
}
