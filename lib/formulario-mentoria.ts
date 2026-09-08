/**
 * Formulário de Aplicação da Travessia da Semente (Mentoria Cuidado Autoral).
 *
 * A Ilana montou o questionário no Google Forms; as respostas caem numa planilha
 * dela. Em vez de mandar a pessoa para fora do site, a página `/mentoria-cuidado
 * -autoral/aplicacao` desenha as mesmas perguntas com a cara do site e envia
 * para o mesmo endereço do Google — a planilha continua sendo a de sempre.
 *
 * ⚠️ Os `entry.XXXX` são os identificadores que o Google deu a cada pergunta.
 * Eles não mudam quando ela edita o texto de uma pergunta, mas **toda pergunta
 * nova ganha um identificador novo**. Se ela mexer no formulário, é preciso
 * atualizar esta lista — senão a pergunta nova simplesmente não chega na
 * planilha, e sem erro nenhum na tela.
 *
 * Como pegar os identificadores de novo: abrir o formulário publicado, ver o
 * código-fonte e procurar por `FB_PUBLIC_LOAD_DATA_`.
 *
 * Lido do formulário em 08/09/2026.
 */

export const FORM_ID =
  '1FAIpQLSeU-T9FWL0inTxbKw32eN67HcqBd-Clw1Ds6qXaQxCr__D_lQ'

export const FORM_ACTION = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`

/** Endereço original, para quando for preciso conferir contra a fonte. */
export const FORM_URL_ORIGINAL = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform`

export type TipoCampo =
  /* uma linha */
  | 'texto'
  /* várias linhas */
  | 'paragrafo'
  /* escolhe uma */
  | 'escolha'
  /* escolhe quantas quiser */
  | 'multipla'

export type CampoFormulario = {
  /* Nome do campo quando o destino é a nossa planilha. É o que amarra esta
     pergunta à coluna, e o mesmo nome está em scripts/planilha-aplicacao.gs. */
  chave: string
  /* Nome do campo quando o destino é o Google Forms da Ilana. */
  entry: string
  pergunta: string
  tipo: TipoCampo
  obrigatorio: boolean
  opcoes?: string[]
  /* Fecha a lista com "Outro" e um campo aberto, como no formulário dela. */
  aceitaOutro?: boolean
  /* Título que abre um novo trecho do formulário, antes desta pergunta. */
  secao?: string
  /* Sugestão dentro do campo, quando ajuda a pessoa a entender o que responder. */
  exemplo?: string
}

export const tituloFormulario = 'Formulário de Aplicação'

export const aberturaFormulario = [
  'Olá, querido ser que gosta de servir cuidando. Que ótimo você ter interesse pela Travessia da Semente — Mentoria Cuidado Autoral, de MASSIXA: Um Universo de Cuidado!',
  'Aqui trago umas perguntas iniciais, para saber se e como evoluímos nossa conversa, honrando nosso precioso tempo. Depois desta etapa, caso seu perfil seja aquele que pode ser ajudado pelo que este programa oferece, podemos agendar a apresentação do programa.',
  'Não estamos firmando compromisso algum, só quero te conhecer. Leva cerca de 3 minutos.',
]

export const campos: CampoFormulario[] = [
  {
    chave: 'nome',
    entry: 'entry.2005620554',
    pergunta: 'Nome',
    tipo: 'texto',
    obrigatorio: true,
  },
  {
    chave: 'email',
    entry: 'entry.1045781291',
    pergunta: 'E-mail',
    tipo: 'texto',
    obrigatorio: true,
    exemplo: 'seunome@email.com',
  },
  {
    chave: 'cidade',
    entry: 'entry.1065046570',
    pergunta: 'Cidade / Estado / País',
    tipo: 'texto',
    obrigatorio: true,
  },
  {
    chave: 'telefone',
    entry: 'entry.1166974658',
    pergunta: 'Número de telefone',
    tipo: 'texto',
    obrigatorio: true,
    exemplo: '(DDD) 99999-9999',
  },
  {
    chave: 'como_soube',
    entry: 'entry.839337160',
    pergunta: 'Como soube do programa Travessia Cuidado Autoral?',
    tipo: 'escolha',
    obrigatorio: false,
    opcoes: [
      'Em conversa com Ilana',
      'Pelo perfil MASSIXA, no Instagram',
      'Por indicação',
      'Outro - qual?',
    ],
  },

  {
    chave: 'ja_atua',
    entry: 'entry.817638281',
    secao: 'Sobre sua atuação terapêutica',
    pergunta: 'Você já atua como terapeuta?',
    tipo: 'escolha',
    obrigatorio: false,
    opcoes: [
      'Sim, há menos de 6 meses',
      'Sim, de 6 meses a 2 anos para cá',
      'Sim, há mais de 2 anos e menos de 5',
      'Sim, há mais de 5 anos',
      'Não atuo ainda, mas tenho estudado e estou me preparando para começar em breve',
    ],
  },
  {
    chave: 'linha_atuacao',
    entry: 'entry.1525384387',
    pergunta: 'Qual sua linha de atuação terapêutica? Sua profissão?',
    tipo: 'texto',
    obrigatorio: true,
  },
  {
    chave: 'individual_ou_grupo',
    entry: 'entry.65533938',
    pergunta: 'Atende individualmente ou em grupos?',
    tipo: 'multipla',
    obrigatorio: true,
    opcoes: ['Individualmente', 'Pequenos grupos', 'Grupos grandes'],
  },
  {
    chave: 'protocolos',
    entry: 'entry.595421949',
    pergunta:
      'Você sente que seus atendimentos atuais estão baseados em técnicas e protocolos?',
    tipo: 'escolha',
    obrigatorio: true,
    opcoes: [
      'Sim, um pouco',
      'Sim, muito, mas gosto dos protocolos e me sinto segura com eles',
      'Sim, e gostaria de atuar sem estar necessariamente presa a eles',
      'Não. Já atuo de modo que considero livre, não presa a protocolos',
    ],
  },
  {
    chave: 'elementos_natureza',
    entry: 'entry.229604598',
    pergunta:
      'Com que frequência você utiliza elementos da natureza (ervas, argila, pedras etc.) para cuidar de você e/ou das pessoas que atende?',
    tipo: 'escolha',
    obrigatorio: true,
    opcoes: [
      'Nunca',
      'Raramente',
      'Às vezes',
      'Sempre',
      'Nunca fiz, mas tenho vontade de fazer',
    ],
  },
  {
    chave: 'como_se_sente',
    entry: 'entry.1496155206',
    pergunta:
      'Como você se sente em relação ao seu servir como terapeuta hoje? O que poderia melhorar?',
    tipo: 'paragrafo',
    obrigatorio: true,
  },
  {
    chave: 'o_quanto_incomoda',
    entry: 'entry.2136440475',
    pergunta:
      'Sobre esse aspecto que poderia melhorar (ou aspectos): o quanto isso incomoda você, a ponto de ser uma prioridade olhar para isso agora?',
    tipo: 'escolha',
    obrigatorio: true,
    opcoes: [
      'Me incomoda só um pouco, estou de boa, vou levando',
      'Me incomoda mais ou menos, não sei se quero transformar algo agora',
      'Me incomoda o bastante para eu saber que preciso olhar para isso e promover mudanças',
      'Me incomoda muito. Estou pronta a olhar e fazer meu melhor para sair desse lugar',
    ],
  },
  {
    chave: 'o_que_cuidar',
    entry: 'entry.1704251948',
    pergunta:
      'Se você pudesse escolher algo na sua prática para cuidar de perto, com apoio, pelos próximos 3 meses, o que seria?',
    tipo: 'multipla',
    obrigatorio: true,
    aceitaOutro: true,
    opcoes: [
      'Ganhar mais confiança no meu sentir',
      'Aprender a entrelaçar técnicas diferentes',
      'Aprender a usar melhor elementos naturais, com bases científicas e ancestrais',
      'Criar atendimentos mais autênticos',
      'Ser cuidada enquanto cuido e sair vitalizada dos atendimentos',
      'Estar mais feliz em cada atender, sustentando a alegria',
      'Conseguir aumentar a percepção de valor do que ofereço, e ser melhor remunerada',
      'Conseguir comunicar sem medo o meu caminho de cuidar',
    ],
  },
  {
    chave: 'investe_em_si',
    entry: 'entry.677055095',
    pergunta:
      'Você costuma investir tempo e recursos financeiros para cuidar de si? Retiros, cursos, práticas especiais?',
    tipo: 'escolha',
    obrigatorio: true,
    opcoes: [
      'Faz tempo que não faço isso',
      'Tenho feito algo, uma vez ao ano',
      'Sim, em média a cada 6 meses',
      'Estou sempre fazendo alguma coisa para cuidar de mim nesses termos',
      'Não fazia, mas estou pronta para começar agora',
    ],
  },
  {
    chave: 'algo_mais',
    entry: 'entry.1871025548',
    pergunta:
      'O quanto você sente que há algo mais para trazer ao seu servir, para que ele ganhe em força, sentido, profundidade, beleza, clareza?',
    tipo: 'escolha',
    obrigatorio: true,
    opcoes: [
      'Muito, sinto que posso evoluir bastante',
      'Um pouco, mas já estou no caminho',
      'Não muito, estou satisfeita com minha prática atual',
    ],
  },
  {
    chave: 'quer_programa',
    entry: 'entry.1540126530',
    pergunta:
      'Você gostaria de atravessar um programa online que te apoie no desenvolvimento de um cuidado mais autoral, nutritivo e libertador da sua expressão plena como terapeuta? Com alguém que passou por isso te levando pela mão?',
    tipo: 'escolha',
    obrigatorio: true,
    opcoes: ['Sim, quero!', 'Não, estou de boa', 'Ainda tenho dúvidas'],
  },
  {
    chave: 'quer_retiro',
    entry: 'entry.2051088130',
    pergunta:
      'Você gostaria de participar de um retiro presencial de 3 dias no Extremo Sul da Bahia (Arraial, Caraíva ou Santo André), ao final do programa online, para vivenciar uma imersão sensorial e viva de cuidado?',
    tipo: 'escolha',
    obrigatorio: true,
    opcoes: [
      'Adoraria!',
      'Seria incrível! Eu poderia levar mais alguém comigo?',
      'Não, me interesso somente pela etapa online',
    ],
  },
  {
    chave: 'indicacao',
    entry: 'entry.2119404360',
    pergunta:
      'Mesmo sem (ainda) saber dos detalhes da Travessia Cuidado Autoral, você sente que pode caber a alguém? Gostaria de indicar algum contato?',
    tipo: 'paragrafo',
    obrigatorio: true,
  },
]

/* O Google espera este valor no lugar do texto quando a pessoa marca "Outro",
   e manda o que ela escreveu num campo à parte. */
export const VALOR_OUTRO = '__other_option__'
export const sufixoOutro = (entry: string) => `${entry}.other_option_response`

/**
 * O formulário dela tem uma quebra de seção ("Sobre sua atuação terapêutica"),
 * e no Google Forms isso são duas páginas. Como aqui tudo aparece de uma vez,
 * o envio precisa declarar que passou pelas duas — senão o Google entende que a
 * pessoa parou no meio e guarda a resposta como incompleta.
 *
 * `pageHistory` é a trilha das páginas visitadas; `fvv=1` diz que veio do
 * formulário publicado. **Ao acrescentar ou remover uma seção, ajustar aqui.**
 */
export const camposOcultos: Record<string, string> = {
  fvv: '1',
  pageHistory: '0,1',
}

/**
 * Para onde as respostas vão.
 *
 * Com `NEXT_PUBLIC_APLICACAO_ENDPOINT` definido, o formulário manda para a
 * nossa planilha, pelo Apps Script de `scripts/planilha-aplicacao.gs`, e os
 * campos viajam com nome legível (`nome`, `email`…).
 *
 * Sem a variável, cai no Google Forms da Ilana, com os `entry.XXXX`. É o que
 * vale enquanto a planilha nova não estiver de pé, e a rede de segurança se
 * alguém publicar sem configurar a variável.
 *
 * Trocar de planilha depois — a dela, em vez da nossa — é mudar só o valor
 * dessa variável na Vercel.
 */
/**
 * ⚠️ O envio direto para o Google Forms NÃO FUNCIONA mais para este formulário.
 *
 * Testado em 08/09/2026: o `formResponse` responde **401** a qualquer POST de
 * fora, com ou sem cookies de sessão, com ou sem o token `fbzx`, e com qualquer
 * `Origin`. O endereço está certo — é o mesmo que o próprio formulário usa —
 * mas o Google recusa submissões que não venham da página dele.
 *
 * Por isso o padrão passou a ser a nossa planilha, que é o caminho testado e
 * funcionando. Os `entry.XXXX` seguem aqui porque são a tradução das perguntas
 * para o formulário dela, útil se um dia esse caminho reabrir.
 */
const ENDPOINT_PADRAO =
  'https://script.google.com/macros/s/AKfycbywjiau5fSUmAh7eUVZg8fMDpdhow-PbNOj55kdB6DgpGokHV1WL70UN1BAB1e3UqXDzQ/exec'

const endpointProprio =
  process.env.NEXT_PUBLIC_APLICACAO_ENDPOINT?.trim() || ENDPOINT_PADRAO

export const destino = { url: endpointProprio, usaChave: true }

/** O nome com que cada pergunta viaja, conforme o destino. */
export const nomeDoCampo = (campo: CampoFormulario) =>
  destino.usaChave ? campo.chave : campo.entry
