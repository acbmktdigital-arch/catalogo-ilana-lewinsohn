import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function BibliotecaVivaPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Biblioteca Viva"
      heroTitle={<>Materiais para estudar em casa na <span style={{color:'var(--cor-destaque)'}}>Biblioteca Viva</span></>}
      heroSubtitle="E-books e materiais de estudo para se aprofundar na MASSIXA, nas Rodas Celta-Baianas e na cozinha vegana ancestral."
      heroImageWide="/images/biblioteca-viva.jpg"
      heroCTALabel="Entrar na lista de espera"

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>Biblioteca Viva</span>?</>}
      whatIsTexts={[
        "É uma linha de e-books e materiais educativos em desenvolvimento, incluindo o eBook Bases da MASSIXA, o eBook Rodas Celta-Baianas e o Caderno de Receitas da Bruxa Branca da Floresta (vegana, é claro).",
        "Um oráculo autoral também está em produção, ampliando ainda mais esse universo de estudo e conexão com o trabalho de Ilana.",
      ]}
      whatIsQuote="Conhecimento que se planta, cresce e se compartilha."

      transformationTitle="A Transformação que Você Busca"
      transformationSubtitle="De onde você está para onde os materiais levam."
      transformations={[
        { antes: "Curiosidade sobre práticas autorais", depois: "Bases da MASSIXA" },
        { antes: "Vontade de entender a origem das Rodas", depois: "Rodas Celta-Baianas" },
        { antes: "Vontade de aprender receitas veganas ancestrais", depois: "Cozinha vegana ancestral" },
        { antes: "Falta de tempo para uma formação completa", depois: "Estudo no seu próprio ritmo" },
        { antes: "Conhecimento disperso", depois: "Acesso à sabedoria de Ilana" },
        { antes: "Vontade de uma referência para consultar sempre", depois: "Oráculo autoral em produção" },
      ]}

      includedItems={[
        "eBook Bases da MASSIXA",
        "eBook Rodas Celta-Baianas",
        "Caderno de Receitas da Bruxa Branca da Floresta",
        "Aviso em primeira mão sobre o oráculo autoral em produção",
      ]}
      includedCTALabel="Entrar na lista de espera"

      pricingImage="/images/biblioteca-viva.jpg"
      pricingTitle="Biblioteca Viva"
      pricingSubtitle="Materiais de estudo em desenvolvimento."
      precoAviso="Os materiais ainda estão sendo preparados. Entre na lista de espera e você é avisada em primeira mão quando forem lançados — com as condições especiais de quem chegou antes."
      priceNote="Sem compromisso: só o aviso de lançamento"
      pricingCTALabel="Entrar na lista de espera"

      faqItems={[
        {
          q: "Os materiais já estão disponíveis?",
          a: "Estão em desenvolvimento; ao entrar na lista de espera, você é avisada assim que forem lançados.",
        },
        {
          q: "Como recebo os e-books quando estiverem prontos?",
          a: "O acesso será enviado por WhatsApp ou e-mail para quem estiver na lista de espera.",
        },
        {
          q: "Vai ter algum valor promocional para quem entrar na lista?",
          a: "Detalhes sobre condições especiais serão compartilhados com quem já estiver cadastrado.",
        },
        {
          q: "Como entro na lista de espera?",
          a: "Clique no botão e fale com Ilana pelo WhatsApp para garantir seu lugar.",
        },
      ]}

      modalEtiqueta="Lista de espera"
      modalTitulo="Avise-me no lançamento"
      modalSubtitulo="Deixe seu contato e você é avisada em primeira mão quando os materiais saírem."
      modalFraseInicial="Gostaria de entrar na lista de espera da"
      modalMostrarValor={false}
      modalMostrarPeriodo={false}
      modalMostrarMensagem={false}
      modalLabelEnviar="Entrar na lista pelo WhatsApp"
      modalidades={[
        {
          id: 'biblioteca',
          titulo: 'Biblioteca Viva',
          descricao: 'E-books e materiais de estudo',
          nomeNaMensagem: 'Biblioteca Viva',
        },
      ]}

      somAmbiente={false}
    />
  )
}
