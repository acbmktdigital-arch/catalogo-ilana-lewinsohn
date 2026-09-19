/**
 * A planilha do Google que guarda os formulários do catálogo.
 *
 * É um "app da Web" do Apps Script instalado nela; o código está em
 * `scripts/planilha-recebedor.gs`, versionado junto. Um endereço só atende
 * todos os formulários — o que separa um do outro é a marca enviada em `tipo`,
 * e cada marca tem a sua aba.
 *
 * O endereço fica aqui, e não só numa variável de ambiente, para o site
 * publicado funcionar sem depender de alguém lembrar de cadastrá-la na Vercel —
 * foi assim que uma configuração ficou valendo só na máquina e o site no ar
 * seguiu mandando para outro lugar. Não é segredo: por ser `NEXT_PUBLIC_`, o
 * valor apareceria no código da página de qualquer jeito. É um endereço de
 * recebimento, não uma senha.
 *
 * ⚠️ Ao editar o Apps Script, é preciso Implantar → Gerenciar implantações →
 *    editar → Nova versão. Só salvar não publica.
 *
 * ⚠️ Este endereço é o do projeto instalado na planilha da Ilana, criado em
 *    18/09/2026. Havia um anterior, de um projeto solto na conta da Vera, que
 *    **continua no ar servindo código velho** — ele recusa avisos de pagamento
 *    sem dar erro visível. Para conferir qual é qual, abra o endereço no
 *    navegador: o certo diz "versão 10" ou mais.
 */
const PADRAO =
  'https://script.google.com/macros/s/AKfycbz8m-ARjAznphLS9geHUkD7xQhvczI93ejZzZ0nvCIiW1c7tNy9kJmAxmYXvKVWESvUKg/exec'

export const planilhaEndpoint =
  process.env.NEXT_PUBLIC_APLICACAO_ENDPOINT?.trim() ||
  process.env.NEXT_PUBLIC_LISTA_ESPERA_ENDPOINT?.trim() ||
  PADRAO

/**
 * As marcas que o site manda e espera de volta. Sem a marca na resposta, o
 * envio é dado como falho — é o que impede um registro de sumir num script
 * antigo que continue no ar, mostrando "recebido" para quem preencheu.
 *
 * Cada uma precisa existir em `TIPOS`, no arquivo .gs.
 */
export const tipos = {
  /* Quem quer ser avisada quando o formulário da mentoria abrir. A planilha é
     o destino: não há WhatsApp neste caminho. */
  listaEsperaVemPraRoda: 'lista-espera-vem-pra-roda',

  /* Quem consulta disponibilidade dos preparados. Aqui a planilha é só cópia —
     o WhatsApp continua sendo o canal. */
  consultaBotica: 'consulta-botica',

  /* Quem preencheu o formulário da Bússola antes de ir para o checkout.
     O pagamento chega depois, por outro caminho, e não traz quem pagou: o
     aviso da InfinitePay manda valor e códigos, nunca o comprador. Esta aba é
     a outra ponta — nome, telefone e urgência, com a hora. Cruzando as duas
     pela hora, a Ilana sabe de quem é a venda. */
  pedidoBussola: 'pedido-bussola',
} as const
