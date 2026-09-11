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
 */
const PADRAO =
  'https://script.google.com/macros/s/AKfycbywjiau5fSUmAh7eUVZg8fMDpdhow-PbNOj55kdB6DgpGokHV1WL70UN1BAB1e3UqXDzQ/exec'

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
} as const
