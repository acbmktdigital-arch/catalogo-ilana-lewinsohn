import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'

export default function BibliotecaVivaPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Biblioteca Viva"
      heroTitle={<>Materiais para estudar em casa na <span style={{color:'var(--cor-destaque)'}}>Biblioteca Viva</span></>}
      heroSubtitle="E-books e materiais de estudo para se aprofundar na MASSIXA, nas Rodas Celta-Baianas e na cozinha vegana ancestral."
      /* A original é vertical (4000x6000). Numa moldura horizontal ela perderia
         metade da pilha de livros, então aqui a moldura vai para 'alto', que é
         quadrada em qualquer largura — a prop existe exatamente para isso.
         O recorte é quadrado também, então nada é cortado em tela nenhuma. */
      heroImageWide="/images/biblioteca-viva-livros.jpg"
      heroAspecto="alto"
      heroCTALabel="Quero ser avisada em 1ª mão"

      whatIsTitle={<>O que é a <span style={{color:'var(--cor-destaque)'}}>Biblioteca Viva</span>?</>}
      whatIsTexts={[
        /* Nome alinhado ao que a Ilana escreveu no doc 4: era "Caderno de
           Receitas", nome que eu tinha inventado, e vira "eBook Segredos da
           Cozinha" — senão o texto e a lista logo abaixo se contradizem. */
        "É uma linha de e-books e materiais educativos em desenvolvimento, incluindo o eBook Bases da MASSIXA, o eBook Rodas Celta-Baianas e o eBook Segredos da Cozinha da Bruxa Branca da Floresta (vegana, é claro).",
        "Um oráculo autoral também está em produção, ampliando ainda mais esse universo de estudo e conexão com o trabalho de Ilana.",
      ]}
      whatIsQuote="Conhecimento que se planta, cresce e se compartilha."

      /* Sem dores e transformações: pedido explícito da Ilana no doc 4,
         "ELIMINAR DORES E TRANSFORMAÇÕES, POR COMPLETO". */

      /* O quadro deixa de listar o que está incluído e passa a listar o que
         está sendo preparado — nada aqui existe ainda, então "incluído" seria
         uma promessa falsa. */
      includedTitle="O que está em desenvolvimento"
      includedItems={[
        "eBook Bases da MASSIXA",
        "eBook Rodas Celta-Baianas",
        "eBook Segredos da Cozinha da Bruxa Branca da Floresta",
        "Oráculo autoral em produção",
      ]}
      includedCTALabel="Quero ser avisada em 1ª mão"

      pricingImage="/images/biblioteca-viva-livros.jpg"
      pricingTitle="Biblioteca Viva"
      pricingSubtitle="Materiais de estudo em desenvolvimento."
      precoAviso="Os materiais ainda estão sendo preparados. Entre na lista de espera e você é avisada em primeira mão quando forem lançados — em condições especiais de lançamento."
      priceNote="Sem compromisso: só o aviso de lançamento"
      pricingCTALabel="Quero ser avisada em 1ª mão"

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
          a: "Sim! Detalhes sobre condições especiais serão compartilhados com quem já estiver cadastrado.",
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
      modalMostrarAgenda={false}
      /* Aqui o cadastro é lista de espera, não agendamento: o e-mail é o canal
         para avisar do lançamento. É a única página que pede o campo. */
      modalMostrarEmail
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
