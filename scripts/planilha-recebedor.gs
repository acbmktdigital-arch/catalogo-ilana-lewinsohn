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
 *
 * ⚠️ CRIE O PROJETO PELA PLANILHA, não em script.google.com. Um projeto solto
 *    não enxerga "planilha ativa", e o Google reporta isso como falta de
 *    permissão — mensagem que manda procurar no lugar errado.
 *
 * ⚠️ NÃO mexa em oauthScopes no appsscript.json. O Apps Script descobre sozinho
 *    o que o código precisa e pede na hora certa. Nós tentamos declarar a lista
 *    à mão e ela ficou diferente do que o código usava: a autorização era
 *    concedida para um conjunto e o código pedia outro, com o erro sempre
 *    falando de permissão. Deixe o Google decidir.
 *
 *    Se mesmo assim faltar autorização: myaccount.google.com/permissions →
 *    achar o projeto pelo nome → Remover acesso → rodar de novo. Ele pergunta
 *    tudo outra vez, agora conferindo com o código atual.
 */

/**
 * ════════════════════════════════════════════════════════════════════════════
 * VERSÃO DESTE ARQUIVO — aumentar sempre que ele mudar de verdade.
 *
 * Existe porque "Salvar" no editor NÃO publica: sem uma Nova versão em
 * Gerenciar implantações, o endereço /exec continua servindo o código velho, e
 * nada na resposta denunciava isso. Agora o /exec, aberto no navegador, diz o
 * número — então dá para conferir de olho se o que está no ar é o esperado.
 * ════════════════════════════════════════════════════════════════════════════
 */
var VERSAO = 9

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

/**
 * ────────────────────────────────────────────────────────────────────────────
 * PAGAMENTOS DA INFINITEPAY
 *
 * O app da InfinitePay **não avisa ninguém** quando entra uma venda pelo
 * Checkout Integrado — testamos em 12/09/2026 e não chegou nem WhatsApp nem
 * e-mail. Quem vende só descobre abrindo o aplicativo.
 *
 * Por isso o link de checkout é criado com um `webhook_url` apontando para cá.
 * A cada compra a InfinitePay avisa este script, que grava na planilha e manda
 * um e-mail. Como o aviso vai gravado dentro do link, vale para todas as
 * compras dele — não é preciso gerar link por pessoa.
 *
 * O corpo chega em JSON, e não como formulário — daí a separação logo no começo
 * do doPost.
 */
var ABA_PAGAMENTOS = 'Pagamentos — InfinitePay'

/* Para quem vai o aviso de venda. Vazio = o dono do script, que é quem instalou
   — assim, quando a Ilana instalar na planilha dela, o e-mail passa a ser o
   dela sem precisar mexer aqui. */
var AVISAR_EMAIL = ''

/**
 * ════════════════════════════════════════════════════════════════════════════
 * QUAL PLANILHA ESTE SCRIPT USA
 *
 * Deixe vazio se o projeto foi criado **pela planilha**, em Extensões → Apps
 * Script: aí ele já sabe qual é.
 *
 * Preencha se o projeto foi criado solto, direto em script.google.com. Num
 * projeto solto não existe "planilha ativa", e o script falha com uma mensagem
 * enganosa — fala em falta de permissão, quando o problema é não haver planilha
 * nenhuma para abrir.
 *
 * O código está no endereço da planilha, entre /d/ e /edit:
 *
 *   docs.google.com/spreadsheets/d/ ESTE_PEDAÇO_AQUI /edit
 * ════════════════════════════════════════════════════════════════════════════
 */
var PLANILHA_ID = '1_4cbzssmgAXV8rrWG5s81MKudNRt7T3E7cUgYBd74n0'

/** Abre a planilha, venha ela de onde vier. */
function abrirPlanilha() {
  if (PLANILHA_ID) {
    return SpreadsheetApp.openById(PLANILHA_ID)
  }

  var ativa = null
  try {
    ativa = SpreadsheetApp.getActiveSpreadsheet()
  } catch (erro) {
    ativa = null
  }

  if (ativa) return ativa

  throw new Error(
    'Não achei a planilha. Este projeto não está preso a nenhuma — ' +
      'preencha PLANILHA_ID, no topo do arquivo, com o código que aparece no ' +
      'endereço da planilha entre /d/ e /edit.'
  )
}

var COLUNAS_PAGAMENTO = [
  ['recebido_em', 'Recebido em'],
  ['produtos', 'Produto'],
  ['valor', 'Valor'],
  ['valor_pago', 'Valor pago'],
  ['capture_method', 'Meio'],
  ['installments', 'Parcelas'],
  ['order_nsu', 'Pedido'],
  ['transaction_nsu', 'Transação'],
  ['invoice_slug', 'Código'],
  ['receipt_url', 'Comprovante'],
]

/** Centavos viram reais, para a planilha conseguir somar a coluna. */
function emReais(centavos) {
  var n = Number(centavos)
  return isNaN(n) ? '' : n / 100
}

function registrarPagamento(dados) {
  var planilha = abrirPlanilha()
  var aba = planilha.getSheetByName(ABA_PAGAMENTOS)

  if (!aba) {
    aba = planilha.insertSheet(ABA_PAGAMENTOS)
  }

  if (aba.getLastRow() === 0) {
    var titulos = COLUNAS_PAGAMENTO.map(function (c) {
      return c[1]
    })
    aba.appendRow(titulos)
    aba.getRange(1, 1, 1, titulos.length).setFontWeight('bold')
    aba.setFrozenRows(1)
  }

  /* A InfinitePay reenvia o aviso quando a resposta demora, e o Apps Script
     costuma levar mais de um segundo. Sem esta conferência, a mesma venda
     entraria duas vezes na planilha. */
  var colunaTransacao = 0
  for (var i = 0; i < COLUNAS_PAGAMENTO.length; i++) {
    if (COLUNAS_PAGAMENTO[i][0] === 'transaction_nsu') colunaTransacao = i + 1
  }

  if (dados.transaction_nsu && aba.getLastRow() > 1) {
    var jaVistas = aba
      .getRange(2, colunaTransacao, aba.getLastRow() - 1, 1)
      .getValues()
    for (var j = 0; j < jaVistas.length; j++) {
      if (String(jaVistas[j][0]) === String(dados.transaction_nsu)) {
        return { novo: false }
      }
    }
  }

  var produtos = (dados.items || [])
    .map(function (item) {
      return item.description
    })
    .join(', ')

  var linha = COLUNAS_PAGAMENTO.map(function (coluna) {
    var chave = coluna[0]
    if (chave === 'recebido_em') return new Date()
    if (chave === 'produtos') return produtos
    if (chave === 'valor') return emReais(dados.amount)
    if (chave === 'valor_pago') return emReais(dados.paid_amount)
    return dados[chave] !== undefined ? dados[chave] : ''
  })

  aba.appendRow(linha)

  return { novo: true, produtos: produtos, valor: emReais(dados.amount) }
}

/**
 * Descobre para quem mandar o aviso, dizendo em voz alta como chegou lá.
 *
 * `getEffectiveUser().getEmail()` devolve vazio em algumas situações, e antes
 * isso fazia o envio desistir sem dizer nada — ficava igual a "não chegou
 * e-mail" por falta de autorização, que é outro problema. Agora o registro de
 * execução conta qual foi.
 */
function descobrirDestino() {
  if (AVISAR_EMAIL) {
    console.log('Destino do aviso: ' + AVISAR_EMAIL + ' (fixado em AVISAR_EMAIL)')
    return AVISAR_EMAIL
  }

  var doDono = ''
  try {
    doDono = Session.getEffectiveUser().getEmail()
  } catch (erro) {
    console.error('Não consegui descobrir o e-mail de quem instalou: ' + erro)
  }

  if (doDono) {
    console.log('Destino do aviso: ' + doDono + ' (conta que instalou o script)')
  } else {
    console.error(
      'SEM DESTINO: o script não descobriu o e-mail da conta e AVISAR_EMAIL ' +
        'está vazio. Preencha AVISAR_EMAIL, no topo do arquivo, com o endereço ' +
        'que deve receber os avisos.'
    )
  }

  return doDono
}

function avisarPorEmail(dados, resumo) {
  var destino = descobrirDestino()
  if (!destino) return

  var valor = resumo.valor
    ? 'R$ ' + Number(resumo.valor).toFixed(2).replace('.', ',')
    : ''

  /* Quem lê é a Ilana, não um programador: "credit_card" e "1" nao dizem
     nada a ela. */
  var meios = { pix: 'Pix', credit_card: 'Cartão de crédito' }
  var meio = meios[dados.capture_method] || dados.capture_method || ''

  var parcelas = Number(dados.installments)
  var comoPagou = meio
  if (meio && parcelas > 1) comoPagou = meio + ', em ' + parcelas + 'x'
  else if (meio === 'Cartão de crédito') comoPagou = meio + ', à vista'

  var corpo = [
    'Uma pessoa acabou de pagar pelo catálogo.',
    '',
    (resumo.produtos || 'Pagamento') + ' — ' + valor,
    comoPagou ? 'Pago com ' + comoPagou + '.' : '',
    '',
    dados.receipt_url ? 'Comprovante: ' + dados.receipt_url : '',
    '',
    'Para saber quem é: o nome e o telefone de quem pagou aparecem no',
    'aplicativo da InfinitePay — este aviso não os recebe.',
    '',
    'Lembre de entrar em contato para combinar a data do atendimento.',
    '',
    '—',
    'Aviso automático. O histórico fica na planilha, na aba "' + ABA_PAGAMENTOS + '".',
  ].join('\n')

  MailApp.sendEmail(
    destino,
    'Pagamento recebido: ' + (resumo.produtos || '') + ' — ' + valor,
    corpo
  )

  console.log('E-mail enviado para ' + destino + '.')
}

function doPost(e) {
  try {
    /* Webhook da InfinitePay: chega como JSON, sem o campo `tipo` que os
       formulários do site mandam. */
    if (e && e.postData && e.postData.contents) {
      var json = null
      try {
        json = JSON.parse(e.postData.contents)
      } catch (semJson) {
        json = null
      }

      if (json && (json.transaction_nsu || json.invoice_slug)) {
        var resumo = registrarPagamento(json)

        if (resumo.novo) {
          try {
            avisarPorEmail(json, resumo)
          } catch (erroEmail) {
            /* O e-mail é o extra; a linha na planilha é o que não pode faltar. */
            console.error(erroEmail)
          }
        }

        return responder({ ok: true, tipo: 'pagamento', novo: resumo.novo })
      }
    }

    var recebido = (e && e.parameter) || {}
    var tipo = recebido.tipo
    var config = TIPOS[tipo]

    if (!config) {
      return responder({ ok: false, erro: 'tipo desconhecido: ' + (tipo || '(vazio)') })
    }

    var planilha = abrirPlanilha()
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
    'Recebedor do catálogo MASSIXA — versão ' +
      VERSAO +
      '\nFormulários: ' +
      marcas +
      '\nPagamentos da InfinitePay: sim' +
      '\nAvisa por e-mail: ' +
      (AVISAR_EMAIL || Session.getEffectiveUser().getEmail() || '(não identificado)')
  )
}

/**
 * Cria as abas e os cabeçalhos, sem escrever dado nenhum.
 *
 * Normalmente não é preciso: cada aba nasce sozinha quando chega o primeiro
 * envio. Serve para ver a planilha montada antes de existir movimento — e
 * porque "colei o script e não apareceu nada" é a primeira coisa que assusta
 * quem instala.
 */
function prepararPlanilha() {
  var planilha = abrirPlanilha()
  var criadas = []

  function garantir(nomeDaAba, colunas) {
    var aba = planilha.getSheetByName(nomeDaAba)
    if (!aba) {
      aba = planilha.insertSheet(nomeDaAba)
      criadas.push(nomeDaAba)
    }
    if (aba.getLastRow() === 0) {
      var titulos = colunas.map(function (c) {
        return c[1]
      })
      aba.appendRow(titulos)
      aba.getRange(1, 1, 1, titulos.length).setFontWeight('bold')
      aba.setFrozenRows(1)
    }
  }

  for (var marca in TIPOS) {
    garantir(TIPOS[marca].aba, TIPOS[marca].colunas)
  }
  garantir(ABA_PAGAMENTOS, COLUNAS_PAGAMENTO)

  var recado = criadas.length
    ? 'Abas criadas: ' + criadas.join(', ')
    : 'Todas as abas já existiam.'

  console.log('Versão ' + VERSAO + '. ' + recado)
  return recado
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

/**
 * Testa só o e-mail, sem planilha e sem pagamento no meio.
 *
 * Serve para separar as duas causas de "não chegou e-mail": falta de
 * autorização, que aparece como erro vermelho no registro, e destino vazio, que
 * antes passava em silêncio.
 *
 * Diz também quantos e-mails a conta ainda pode mandar hoje — a cota do Google
 * é limitada, e uma conta comum tem umas 100 por dia.
 */
function testarEmail() {
  var destino = descobrirDestino()

  if (!destino) {
    console.error('Parei aqui: sem destino não há o que testar.')
    return 'sem destino'
  }

  console.log('E-mails restantes na cota de hoje: ' + MailApp.getRemainingDailyQuota())

  MailApp.sendEmail(
    destino,
    'Teste do recebedor MASSIXA',
    'Se você está lendo isto, o aviso de venda vai funcionar.\n\n' +
      'Pode apagar esta mensagem.\n\n' +
      '— Enviado pela função testarEmail, versão ' +
      VERSAO +
      '.'
  )

  console.log('Enviado. Confira a caixa de entrada de ' + destino + ' (e o spam).')
  return destino
}

/**
 * Simula um aviso de pagamento, no formato que a InfinitePay manda. Roda por
 * aqui mesmo, pelo ▷ Executar, sem gastar dinheiro.
 *
 * Roda duas vezes de propósito: a segunda tem que ser recusada como repetida,
 * que é o que impede a mesma venda de entrar duas vezes quando a InfinitePay
 * reenvia o aviso por achar a resposta lenta.
 */
function testarPagamento() {
  /* Transação nova a cada execução. Antes era fixa, e a partir da segunda vez
     a função recusava tudo como repetido e não mandava e-mail — parecia que o
     envio tinha parado de funcionar. A conferência de repetidos continua
     testada, porque o mesmo corpo é enviado duas vezes aqui dentro. */
  var nsu = 'TESTE-' + new Date().getTime()

  var corpo = JSON.stringify({
    invoice_slug: 'teste-' + new Date().getTime(),
    amount: 500,
    paid_amount: 500,
    installments: 1,
    capture_method: 'pix',
    transaction_nsu: nsu,
    order_nsu: 'pedido-de-teste',
    receipt_url: 'https://exemplo.com/comprovante',
    items: [{ quantity: 1, price: 500, description: 'Teste Compra Bússola' }],
  })

  var primeira = doPost({ postData: { contents: corpo } }).getContent()
  var segunda = doPost({ postData: { contents: corpo } }).getContent()

  console.log('1ª vez (deve gravar e mandar e-mail): ' + primeira)
  console.log('2ª vez (deve dizer novo:false):       ' + segunda)

  return [primeira, segunda]
}
