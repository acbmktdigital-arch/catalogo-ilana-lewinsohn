import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function MentoriaCuidadoAutoralPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Mentoria Cuidado Autoral"
      heroTitle={<>Fortaleça sua identidade na Mentoria <span style={{color:'var(--cor-destaque)'}}>Cuidado Autoral</span></>}
      heroSubtitle="Para terapeutas que desejam desenvolver uma linguagem própria de cuidado e ampliar presença, confiança e valor percebido."
      heroImageWide="/images/mentoria-cuidado-autoral.jpg"
      heroCTALabel="Quero me candidatar"

      whatIsTitle={<>O que é a Mentoria <span style={{color:'var(--cor-destaque)'}}>Cuidado Autoral</span>?</>}
      whatIsTexts={[
        "É uma mentoria para terapeutas que desejam fortalecer sua identidade profissional e desenvolver uma linguagem própria de cuidado.",
        "O processo amplia presença, confiança e valor percebido do trabalho, em turmas pequenas, com processo seletivo por formulário de aplicação.",
      ]}
      whatIsQuote="Seu jeito de cuidar é único. Esta mentoria ajuda você a nomeá-lo."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde a mentoria leva."
      transformations={[
        { antes: "Falta de identidade profissional clara", depois: "Identidade profissional clara" },
        { antes: "Insegurança para se posicionar", depois: "Mais confiança" },
        { antes: "Dificuldade de precificar", depois: "Valor percebido ampliado" },
        { antes: "Dificuldade de comunicar o próprio método", depois: "Comunicação autêntica" },
        { antes: "Sensação de trabalho genérico", depois: "Presença fortalecida" },
        { antes: "Sensação de estagnação profissional", depois: "Turma pequena e próxima" },
      ]}

      includedItems={[
        "Encontros em turma pequena, com acompanhamento próximo",
        "Desenvolvimento de linguagem própria de cuidado",
        "Trabalho de posicionamento e presença profissional",
        "Processo seletivo por formulário de aplicação",
      ]}
      includedCTALabel="Quero me candidatar"

      pricingImage="/images/mentoria-cuidado-autoral.jpg"
      pricingTitle="Mentoria Cuidado Autoral"
      pricingSubtitle="Próxima turma em formação."
      precoAviso="As turmas são pequenas e a entrada é por processo seletivo. Fale com Ilana para receber o formulário de aplicação e saber o valor da próxima turma."
      priceNote="Processo seletivo por formulário de aplicação"
      pricingCTALabel="Quero me candidatar"

      faqItems={[
        {
          q: "Para quem é essa mentoria?",
          a: "Para terapeutas que já atuam ou estão começando e querem fortalecer sua identidade profissional.",
        },
        {
          q: "Como funciona o processo seletivo?",
          a: "É feito por formulário de aplicação, enviado após contato pelo WhatsApp.",
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
          q: "Como me candidato?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp para receber o formulário de aplicação.",
        },
      ]}

      modalEtiqueta="Candidatura"
      modalTitulo="Candidatar-se à mentoria"
      modalSubtitulo="Deixe seu contato para receber o formulário de aplicação da próxima turma."
      modalFraseInicial="Gostaria de me candidatar à"
      modalMostrarValor={false}
      modalMostrarPeriodo={false}
      modalLabelMensagem="Sobre você e seu trabalho"
      modalPlaceholderMensagem="Há quanto tempo atua? O que te trouxe a esta mentoria?"
      modalLabelEnviar="Enviar candidatura no WhatsApp"
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
