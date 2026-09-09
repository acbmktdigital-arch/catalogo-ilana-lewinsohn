/**
 * Para onde vai a lista de espera da Mentoria Vem Pra Roda, Mulher!
 *
 * É o "app da Web" do Apps Script instalado na planilha que recebe os contatos.
 * O código dele está em `scripts/lista-de-espera.gs`, versionado junto.
 *
 * O endereço fica aqui, e não só numa variável de ambiente, para o site
 * publicado funcionar sem depender de alguém lembrar de cadastrá-la na Vercel —
 * foi assim que uma configuração ficou valendo só na máquina e o site no ar
 * seguiu mandando para outro lugar. Não é segredo: por ser `NEXT_PUBLIC_`, o
 * valor apareceria no código da página de qualquer jeito. É um endereço de
 * recebimento, não uma senha.
 *
 * A variável continua valendo quando existe, para apontar a outra planilha sem
 * mexer no código.
 *
 * ⚠️ Ao editar o Apps Script, é preciso Implantar → Gerenciar implantações →
 *    editar → Nova versão. Só salvar não publica.
 */
const PADRAO =
  'https://script.google.com/macros/s/AKfycbywjiau5fSUmAh7eUVZg8fMDpdhow-PbNOj55kdB6DgpGokHV1WL70UN1BAB1e3UqXDzQ/exec'

export const listaEsperaEndpoint =
  process.env.NEXT_PUBLIC_LISTA_ESPERA_ENDPOINT?.trim() || PADRAO

/**
 * A marca que o site manda e espera de volta. Sem ela na resposta, o envio é
 * dado como falho — é o que impede um contato de sumir num script antigo que
 * continue no ar, mostrando "recebido" para quem preencheu.
 *
 * Precisa ser igual ao `TIPO` do arquivo .gs.
 */
export const listaEsperaTipo = 'lista-espera-vem-pra-roda'
