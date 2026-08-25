import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function MentoriaVemPraRodaMulherPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Mentoria Vem Pra Roda, Mulher!"
      heroTitle={<>Aprenda a conduzir Rodas em <span style={{color:'var(--cor-destaque)'}}>Vem Pra Roda, Mulher!</span></>}
      heroSubtitle="Mentoria para mulheres que desejam criar e conduzir Rodas de Mulheres, com mais de duas décadas de experiência da facilitadora."
      heroImageWide="/images/mentoria-vem-pra-roda-mulher.jpg"
      heroCTALabel="Quero me candidatar"

      whatIsTitle={<>O que é a Mentoria <span style={{color:'var(--cor-destaque)'}}>Vem Pra Roda, Mulher!</span>?</>}
      whatIsTexts={[
        "É uma mentoria voltada a mulheres que desejam criar e conduzir Rodas de Mulheres, com base em mais de duas décadas de experiência da facilitadora.",
        "Acontece em turmas pequenas, com processo seletivo por formulário de aplicação, para um acompanhamento próximo e cuidadoso.",
      ]}
      whatIsQuote="Quem já foi tocada por uma Roda, um dia sente o chamado para abrir a sua."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde a mentoria leva."
      transformations={[
        { antes: "Insegurança para facilitar em grupo", depois: "Segurança para facilitar" },
        { antes: "Dúvidas sobre estrutura e ritual", depois: "Estrutura e ritual" },
        { antes: "Vontade de criar uma Roda sem saber por onde começar", depois: "Experiência de duas décadas" },
        { antes: "Sensação de estar sozinha no processo", depois: "Turma pequena e próxima" },
        { antes: "Dificuldade de reunir outras mulheres", depois: "Habilidade de convocar mulheres" },
        { antes: "Chamado para facilitar mas sem direção", depois: "Chamado concretizado" },
      ]}

      includedItems={[
        "Encontros em turma pequena, com acompanhamento próximo",
        "Ferramentas práticas para estruturar e facilitar Rodas",
        "Compartilhamento de mais de 20 anos de experiência",
        "Processo seletivo por formulário de aplicação",
      ]}
      includedCTALabel="Quero me candidatar"

      pricingImage="/images/mentoria-vem-pra-roda-mulher.jpg"
      pricingTitle="Mentoria Vem Pra Roda, Mulher!"
      pricingSubtitle="Próxima turma em formação."
      precoAviso="As turmas são pequenas e a entrada é por processo seletivo. Fale com Ilana para receber o formulário de aplicação e saber o valor da próxima turma."
      priceNote="Processo seletivo por formulário de aplicação"
      pricingCTALabel="Quero me candidatar"

      faqItems={[
        {
          q: "Para quem é essa mentoria?",
          a: "Para mulheres que sentem o chamado de criar e facilitar suas próprias Rodas de Mulheres.",
        },
        {
          q: "Preciso já ter experiência facilitando grupos?",
          a: "Não é obrigatório, a mentoria acolhe desde o primeiro chamado até quem já facilita e quer se aprofundar.",
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
      modalLabelMensagem="Sobre o seu chamado"
      modalPlaceholderMensagem="Já facilita Rodas? O que te trouxe até aqui?"
      modalLabelEnviar="Enviar candidatura no WhatsApp"
      modalidades={[
        {
          id: 'mentoria',
          titulo: 'Vem Pra Roda, Mulher!',
          descricao: 'Turma pequena, com processo seletivo',
          nomeNaMensagem: 'Mentoria Vem Pra Roda, Mulher!',
        },
      ]}

      somAmbiente={false}
    />
  )
}
