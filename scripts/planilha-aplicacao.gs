/**
 * Recebe as aplicações da Travessia da Semente e escreve numa aba da planilha.
 *
 * Não é código do site — é para colar no Apps Script da planilha do Google.
 * Está versionado aqui para não se perder e para ficar claro o que ele faz.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * COMO INSTALAR (uma vez só)
 *
 *  1. Abrir a planilha que vai receber as respostas.
 *  2. Menu  Extensões → Apps Script.
 *  3. Apagar o conteúdo do editor e colar este arquivo inteiro.
 *  4. Salvar (ícone do disquete).
 *  5. Botão azul  Implantar → Nova implantação.
 *       Tipo:            App da Web
 *       Descrição:       Aplicações da mentoria
 *       Executar como:   Eu
 *       Quem pode ter acesso:  Qualquer pessoa       ← precisa ser este
 *  6. Implantar. O Google vai pedir autorização: seguir em
 *     "Avançado" → "Acessar (não seguro)" → Permitir. É o aviso padrão para
 *     script próprio, não publicado na loja.
 *  7. Copiar o  URL do app da Web  (termina em /exec) e passar para o site,
 *     na variável NEXT_PUBLIC_APLICACAO_ENDPOINT.
 *
 * ⚠️ Ao editar o script depois, é preciso  Implantar → Gerenciar implantações
 *    → editar → Nova versão. Sem isso o endereço continua servindo a versão
 *    antiga.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * TROCAR DE PLANILHA DEPOIS
 *
 * Para as respostas passarem a cair na planilha da Ilana, ela instala este
 * mesmo script na planilha dela e manda o URL novo — só a variável do site
 * muda. Nada mais precisa ser mexido.
 */

/* Nome da aba. Se não existir, é criada no primeiro envio. */
var ABA = 'Aplicações'

/**
 * A ordem das colunas. A chave é o nome do campo que o site manda; o título é
 * o cabeçalho que aparece na planilha.
 *
 * ⚠️ Precisa bater com `campos` em lib/formulario-mentoria.ts, no site. Ao
 * acrescentar uma pergunta lá, acrescentar aqui também — na mesma posição.
 */
var COLUNAS = [
  ['recebido_em', 'Recebido em'],
  ['nome', 'Nome'],
  ['email', 'E-mail'],
  ['cidade', 'Cidade / Estado / País'],
  ['telefone', 'Telefone'],
  ['como_soube', 'Como soube do programa'],
  ['ja_atua', 'Já atua como terapeuta?'],
  ['linha_atuacao', 'Linha de atuação / profissão'],
  ['individual_ou_grupo', 'Atende individualmente ou em grupos?'],
  ['protocolos', 'Atendimentos baseados em protocolos?'],
  ['elementos_natureza', 'Frequência de uso de elementos da natureza'],
  ['como_se_sente', 'Como se sente no seu servir hoje'],
  ['o_quanto_incomoda', 'O quanto isso incomoda'],
  ['o_que_cuidar', 'O que gostaria de cuidar por 3 meses'],
  ['investe_em_si', 'Costuma investir em cuidar de si?'],
  ['algo_mais', 'O quanto sente que há algo mais a trazer'],
  ['quer_programa', 'Gostaria de atravessar o programa online?'],
  ['quer_retiro', 'Gostaria do retiro presencial?'],
  ['indicacao', 'Indicação de contato'],
]

function doPost(e) {
  try {
    var planilha = SpreadsheetApp.getActiveSpreadsheet()
    var aba = planilha.getSheetByName(ABA)

    if (!aba) {
      aba = planilha.insertSheet(ABA)
    }

    /* Cabeçalho, só na primeira vez. */
    if (aba.getLastRow() === 0) {
      var titulos = COLUNAS.map(function (c) {
        return c[1]
      })
      aba.appendRow(titulos)
      aba.getRange(1, 1, 1, titulos.length).setFontWeight('bold')
      aba.setFrozenRows(1)
    }

    var recebido = (e && e.parameter) || {}

    var linha = COLUNAS.map(function (coluna) {
      var chave = coluna[0]

      if (chave === 'recebido_em') {
        return new Date()
      }

      /* Caixas de seleção chegam repetidas; o Apps Script junta em
         `parameters`. Viram uma célula só, separadas por vírgula. */
      if (e && e.parameters && e.parameters[chave] && e.parameters[chave].length > 1) {
        return e.parameters[chave].join(', ')
      }

      return recebido[chave] !== undefined ? recebido[chave] : ''
    })

    aba.appendRow(linha)

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (erro) {
    /* Devolve 200 com ok:false de propósito: o site envia por um iframe e não
       consegue ler a resposta de outro domínio, então um erro aqui só serve
       para ficar registrado no histórico de execuções do Apps Script. */
    console.error(erro)
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, erro: String(erro) })
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

/** Abrir o URL no navegador confirma que a implantação está de pé. */
function doGet() {
  return ContentService.createTextOutput(
    'Recebedor de aplicações da Travessia da Semente. Ativo.'
  )
}
