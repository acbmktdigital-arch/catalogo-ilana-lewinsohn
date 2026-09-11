/**
 * Recebe os formulários do catálogo e guarda cada um numa aba da planilha.
 *
 * Não é código do site — é para colar no Apps Script da planilha do Google.
 * Está versionado aqui para não se perder e para ficar claro o que ele faz.
 *
 * Hoje atende dois formulários, e é fácil somar outros: basta uma entrada nova
 * em TIPOS, logo abaixo, e a mesma marca do lado do site.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * COMO ATUALIZAR
 *
 *  1. Abrir a planilha → Extensões → Apps Script.
 *  2. Apagar o que estiver no editor e colar este arquivo inteiro.
 *     (Ele substitui o antigo `lista-de-espera.gs`, que atendia um formulário
 *      só. A aba da Vem Pra Roda continua a mesma, nada se perde.)
 *  3. Salvar.
 *  4. Implantar → Gerenciar implantações → ✏️ editar → Versão: Nova versão →
 *     Implantar.
 *
 * ⚠️ Só "Salvar" não publica. Sem a Nova versão, o endereço continua servindo o
 *    código antigo — e aí o formulário da Botica é recusado, com a marca que
 *    este script ainda não conhece.
 *
 * Para conferir sem passar pelo site: rodar a função  testar,  no fim do
 * arquivo, pelo botão ▷ Executar.
 */

/**
 * Um formulário por entrada. A chave é a marca que o site manda em `tipo`, e
 * que este script devolve para o site confirmar que chegou no lugar certo.
 *
 * As colunas: a primeira parte é o nome do campo que o site envia; a segunda é
 * o cabeçalho que aparece na planilha. `recebido_em` é preenchido aqui.
 */
var TIPOS = {
  'lista-espera-vem-pra-roda': {
    aba: 'Interessadas — Vem Pra Roda',
    colunas: [
      ['recebido_em', 'Recebido em'],
      ['nome', 'Nome'],
      ['telefone', 'WhatsApp'],
      ['email', 'E-mail'],
      ['mensagem', 'Mensagem'],
      ['origem', 'Origem'],
    ],
  },

  'consulta-botica': {
    aba: 'Consultas — Botica da Bruxa',
    colunas: [
      ['recebido_em', 'Recebido em'],
      ['modalidade', 'Preparado'],
      ['nome', 'Nome'],
      ['telefone', 'WhatsApp'],
      ['mensagem', 'O que está buscando'],
      ['origem', 'Origem'],
    ],
  },
}

function doPost(e) {
  try {
    var recebido = (e && e.parameter) || {}
    var tipo = recebido.tipo
    var config = TIPOS[tipo]

    if (!config) {
      return responder({ ok: false, erro: 'tipo desconhecido: ' + (tipo || '(vazio)') })
    }

    var planilha = SpreadsheetApp.getActiveSpreadsheet()
    var aba = planilha.getSheetByName(config.aba)

    if (!aba) {
      aba = planilha.insertSheet(config.aba)
    }

    if (aba.getLastRow() === 0) {
      var titulos = config.colunas.map(function (c) {
        return c[1]
      })
      aba.appendRow(titulos)
      aba.getRange(1, 1, 1, titulos.length).setFontWeight('bold')
      aba.setFrozenRows(1)
    }

    var linha = config.colunas.map(function (coluna) {
      var chave = coluna[0]
      if (chave === 'recebido_em') return new Date()
      return recebido[chave] !== undefined ? recebido[chave] : ''
    })

    aba.appendRow(linha)

    return responder({ ok: true, tipo: tipo })
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
  var marcas = Object.keys(TIPOS).join(', ')
  return ContentService.createTextOutput(
    'Recebedor do catálogo MASSIXA. Ativo — atende: ' + marcas
  )
}

/** Teste de bancada: deixa uma linha em cada aba, para conferir e apagar. */
function testar() {
  var saida = []

  saida.push(
    doPost({
      parameter: {
        tipo: 'lista-espera-vem-pra-roda',
        nome: 'TESTE — pode apagar',
        telefone: '(73) 99999-9999',
        email: 'teste@exemplo.com',
        mensagem: 'Teste com acentuação: coração.',
        origem: 'teste de bancada',
      },
    }).getContent()
  )

  saida.push(
    doPost({
      parameter: {
        tipo: 'consulta-botica',
        modalidade: 'Linha Maria Preta',
        nome: 'TESTE — pode apagar',
        telefone: '(73) 99999-9999',
        mensagem: 'Teste com acentuação: coração.',
        origem: 'teste de bancada',
      },
    }).getContent()
  )

  console.log(saida.join('\n'))
  return saida
}
