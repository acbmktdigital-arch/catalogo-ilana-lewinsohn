import SalesPageTemplateV3 from '@/components/sections/SalesPageTemplateV3'
import { listaEsperaEndpoint, listaEsperaTipo } from '@/lib/lista-espera'

export default function MentoriaVemPraRodaMulherPage() {
  return (
    <SalesPageTemplateV3
      whatsappNumero="557399855339"
      serviceLabel="Ilana Lewinsohn · Mentoria Vem Pra Roda, Mulher!"
      /* "Celta-Baianas" sem o s em Celta, como no resto do site e no nome da
         própria página das Rodas. No documento ela escreveu das duas formas. */
      heroTitle={<>Aprenda elementos para conduzir Rodas Celta-Baianas em <span style={{color:'var(--cor-destaque)'}}>Vem Pra Roda, Mulher!</span></>}
      heroSubtitle="Mentoria para mulheres que desejam criar e conduzir Rodas de Mulheres, com mais de duas décadas de experiência da facilitadora."
      heroImageWide="/images/mentoria-vem-pra-roda-mulher.jpg"
      heroCTALabel="Quero ser avisada"

      whatIsTitle={<>O que é a Mentoria <span style={{color:'var(--cor-destaque)'}}>Vem Pra Roda, Mulher!</span>?</>}
      whatIsTexts={[
        /* Quatro linhas curtas de abertura, a batida que ela escreveu. Num
           parágrafo só com quebras: como quatro parágrafos separados, frases
           de três palavras pareceriam erro de diagramação. */
        <>
          Alguns caminhos não se ensinam.
          <br />
          São vividos.
          <br />
          Atravessados por dentro.
          <br />
          E depois, compartilhados.
        </>,

        'Esta mentoria nasceu do desejo de compartilhar mais de duas décadas de experiência na criação, facilitação e sustentação de Rodas de Mulheres.',

        'É voltada para mulheres que desejam criar e conduzir círculos de fortalecimento feminino em profunda conexão com a Natureza, a comunidade e o Feminino Sagrado.',

        'Inspirada nas Rodas Celta-Baianas, percorre os Sabbaths celtas em diálogo com saberes afro-brasileiros, indígenas, xamânicos e contemporâneos, sempre respeitando a singularidade de cada território, de cada tempo e de cada facilitadora.',

        'Mais do que ensinar roteiros ou rituais prontos — embora seja, sim, rica em dicas preciosas, dinâmicas e elementos práticos que apoiam esse caminho — esta jornada convida você a compreender princípios, refinar a intuição, fortalecer sua presença e encontrar sua própria forma de conduzir mulheres.',

        /* Sete palavras soltas viram etiquetas. Em linhas separadas ocupariam
           sete alturas de linha; assim cabem em duas ou três. */
        <span key="etiquetas" className="flex flex-wrap gap-x-2 gap-y-2">
          {['Escuta', 'Presença', 'Força da Mulher Selvagem', 'Ousadia', 'Criatividade', 'Coragem', 'Sororidade'].map((palavra) => (
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
      /* As três frases finais dela são uma coisa só: "Um convite para
         facilitar... [para] ampliar... [para] fortalecer...". Separá-las
         deixaria duas frases começando no infinitivo, sem sujeito. */
      whatIsQuote="Um convite para facilitar rodas vivas, autênticas e profundamente conectadas com quem você é. Ampliar seu repertório de ritualísticas do cuidado. Fortalecer sua identidade como guardiã de círculos femininos e ampliar o valor percebido do seu trabalho."

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
      includedCTALabel="Quero ser avisada"

      pricingImage="/images/mentoria-vem-pra-roda-mulher.jpg"
      pricingTitle="Mentoria Vem Pra Roda, Mulher!"
      /* As instruções vêm antes do botão: quem clica precisa saber o que vai
         acontecer antes de clicar. */
      pricingSubtitle="Esta travessia é construída para mulheres comprometidas com seu próprio caminho e com o cuidado de outras mulheres. Os grupos são pequenos, favorecendo proximidade, trocas verdadeiras e acompanhamento atento. Se esta mentoria fez sentido para você, deixe seu contato: o Formulário de Aplicação está sendo preparado, e aviso você em primeira mão quando as inscrições abrirem."
      precoAviso="Próxima turma em formação."
      priceNote="Assim que o formulário abrir, entro em contato para conversarmos e avaliarmos, juntas, se este é o momento certo para seguirmos."
      pricingCTALabel="Quero ser avisada"

      faqItems={[
        {
          q: "Para quem é essa mentoria?",
          a: "Para mulheres que já trabalham com grupo, facilitam círculos ou sentem o chamado para criar e facilitar suas próprias Rodas de Mulheres.",
        },
        {
          q: "Preciso já ter experiência facilitando grupos?",
          a: "Não é obrigatório, a mentoria acolhe desde o primeiro chamado até quem já facilita e quer se aprofundar.",
        },
        {
          q: "Como funciona o processo seletivo?",
          a: "Vai começar pelo Formulário de Aplicação, que está sendo preparado. Deixando seu contato agora, você é avisada assim que ele abrir.",
        },
        {
          q: "Quando começa a próxima turma?",
          a: "As turmas são formadas periodicamente; fale com Ilana para saber a próxima data.",
        },
        {
          q: "Como faço para aplicar?",
          a: "Por enquanto, clique no botão e deixe seu contato. O Formulário de Aplicação abre em breve, e Ilana avisa você em primeira mão.",
        },
      ]}

      /* O Formulário de Aplicação desta mentoria ainda não existe — a Ilana não
         enviou o questionário. Em vez de prometer o que não há, o modal diz
         isso e recolhe o contato de quem quiser ser avisada. Os dados vão para
         a planilha, não para o WhatsApp.

         Quando o formulário dela ficar pronto, é só trocar tudo isto por
         `ctaHref` com o endereço, como está na Travessia da Semente. */
      modalEtiqueta="Lista de espera"
      modalTitulo="Quero ser avisada"
      modalSubtitulo="Deixe seu contato e você é avisada em primeira mão quando as inscrições abrirem."
      modalAviso="O Formulário de Aplicação desta mentoria está sendo preparado e abre em breve. Enquanto isso, deixe seus dados que Ilana entra em contato assim que ele estiver no ar."
      modalEndpoint={listaEsperaEndpoint}
      modalTipoRegistro={listaEsperaTipo}
      modalTituloSucesso="Contato guardado!"
      modalTextoSucesso="Assim que o Formulário de Aplicação abrir, Ilana avisa você em primeira mão."
      modalMostrarValor={false}
      modalMostrarAgenda={false}
      modalMostrarEmail
      modalLabelMensagem="Sobre o seu chamado"
      modalPlaceholderMensagem="Já facilita Rodas? O que te trouxe até aqui?"
      modalLabelEnviar="Quero ser avisada"
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
