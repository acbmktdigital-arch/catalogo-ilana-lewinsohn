/**
 * Recebe os contatos de quem quer ser avisado quando o Formulário de Aplicação
 * da Mentoria Vem Pra Roda, Mulher! ficar pronto.
 *
 * Não é código do site — é para colar no Apps Script da planilha do Google.
 * Está versionado aqui para não se perder e para ficar claro o que ele faz.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * COMO INSTALAR
 *
 * Se você já tem o projeto do Apps Script daquela planilha, é só **substituir o
 * conteúdo por este arquivo e reimplantar**: o endereço continua o mesmo e o
 * site não precisa de ajuste nenhum.
 *
 *  1. Abrir a planilha → Extensões → Apps Script.
 *  2. Apagar o que estiver no editor e colar este arquivo inteiro.
 *  3. Salvar.
 *  4. Implantar → Gerenciar implantações → ✏️ editar → Versão: Nova versão →
 *     Implantar.
 *
 * ⚠️ Só "Salvar" não publica. Sem a Nova versão, o endereço continua servindo o
 *    código antigo — e o site vai avisar que o recebedor está desatualizado, em
 *    vez de fingir que deu certo.
 *
 * Se for uma planilha nova, o caminho é Implantar → Nova implantação → App da
 * Web, executando como você e com acesso para "Qualquer pessoa"; depois copiar o
 * URL que termina em /exec e me passar.
 *
 * Para conferir sem passar pelo site: rodar a função  testar,  no fim do
 * arquivo, pelo botão ▷ Executar.
 */

var ABA = 'Interessadas — Vem Pra Roda'

/* O site manda esta marca e confere se ela volta. É o que impede uma resposta
   de cair em silêncio num script antigo, ainda no ar. */
var TIPO = 'lista-espera-vem-pra-roda'

var COLUNAS = [
  ['recebido_em', 'Recebido em'],
  ['nome', 'Nome'],
  ['telefone', 'WhatsApp'],
  ['email', 'E-mail'],
  ['mensagem', 'Mensagem'],
  ['origem', 'Origem'],
]

function doPost(e) {
  try {
    var recebido = (e && e.parameter) || {}

    if (recebido.tipo !== TIPO) {
      return responder({
        ok: false,
        erro: 'tipo desconhecido: ' + (recebido.tipo || '(vazio)'),
      })
    }

    var planilha = SpreadsheetApp.getActiveSpreadsheet()
    var aba = planilha.getSheetByName(ABA)

    if (!aba) {
      aba = planilha.insertSheet(ABA)
    }

    if (aba.getLastRow() === 0) {
      var titulos = COLUNAS.map(function (c) {
        return c[1]
      })
      aba.appendRow(titulos)
      aba.getRange(1, 1, 1, titulos.length).setFontWeight('bold')
      aba.setFrozenRows(1)
    }

    var linha = COLUNAS.map(function (coluna) {
      var chave = coluna[0]
      if (chave === 'recebido_em') return new Date()
      return recebido[chave] !== undefined ? recebido[chave] : ''
    })

    aba.appendRow(linha)

    return responder({ ok: true, tipo: TIPO })
  } catch (erro) {
    console.error(erro)
    return responder({ ok: false, erro: String(erro) })
  }
}

function responder(objeto) {
  return ContentService.createTextOutput(JSON.stringify(objeto)).setMimeType(
    ContentService.MimeType.JSON
  )
}

/** Abrir o URL no navegador confirma que a implantação está de pé. */
function doGet() {
  return ContentService.createTextOutput(
    'Lista de espera da Vem Pra Roda, Mulher! Ativo — ' + TIPO
  )
}

/** Teste de bancada: deixa uma linha na planilha, para conferir e apagar. */
function testar() {
  var resultado = doPost({
    parameter: {
      tipo: TIPO,
      nome: 'TESTE — pode apagar',
      telefone: '(73) 99999-9999',
      email: 'teste@exemplo.com',
      mensagem: 'Teste com acentuação: coração, à noite.',
      origem: 'teste de bancada',
    },
  })
  console.log(resultado.getContent())
  return resultado.getContent()
}
