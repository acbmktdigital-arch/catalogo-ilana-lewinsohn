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
var VERSAO = 16

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
    /* Sem e-mail ninguém fica sabendo: este formulário não abre WhatsApp
       nenhum, então a planilha seria o único lugar e só quem a abrisse veria. */
    avisar: 'Nova inscrição na lista de espera',
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
    /* Sem e-mail de propósito: aqui o WhatsApp abre com a mensagem pronta e a
       Ilana vê na hora. Um aviso a mais seria repetição. */
    avisar: '',
    colunas: [
      ['recebido_em', 'Recebido em'],
      ['modalidade', 'Preparado'],
      ['nome', 'Nome'],
      ['telefone', 'WhatsApp'],
      ['mensagem', 'O que está buscando'],
      ['origem', 'Origem'],
    ],
  },

  /* Quem preencheu o formulário da Bússola antes de seguir para o checkout.
     O pagamento chega depois, na aba de Pagamentos, e não diz quem pagou —
     o aviso da InfinitePay manda valor e códigos, nunca o comprador. Esta aba
     é a outra ponta: cruzando as duas pela hora, sabe-se de quem é a venda.

     A linha entra mesmo quando a pessoa desiste de pagar. É informação, não
     defeito: mostra quem chegou até o fim do formulário e não converteu. */
  'pedido-bussola': {
    aba: 'Pedidos — Bússola',
    /* O pagamento chega minutos depois, em outro e-mail. Os dois juntos, na
       caixa de entrada, dizem quem comprou — sem abrir a planilha. */
    avisar: 'Novo pedido da Bússola',
    colunas: [
      ['recebido_em', 'Recebido em'],
      ['nome', 'Nome'],
      ['telefone', 'WhatsApp'],
      ['urgencia', 'Urgência'],
      ['mensagem', 'Sobre o momento'],
      ['origem', 'Origem'],
    ],
  },

  /* Quem pediu Acompanhamento Contínuo. Aqui não há pagamento pelo site: a
     saída é o WhatsApp, como na Botica, e a planilha é cópia.

     A frequência é a coluna que importa — ela é o preço. Semanal, quinzenal e
     avulsa custam R$ 134,00, R$ 161,00 e R$ 197,00 por sessão, então saber
     quem pediu o quê é saber quanto foi combinado. */
  'pedido-acompanhamento': {
    aba: 'Pedidos — Acompanhamento',
    /* Sem e-mail, pelo mesmo motivo da Botica: o WhatsApp abre com a mensagem
       pronta e a Ilana vê na hora. Um aviso a mais seria repetição. */
    avisar: '',
    colunas: [
      ['recebido_em', 'Recebido em'],
      ['modalidade', 'Frequência'],
      ['nome', 'Nome'],
      ['telefone', 'WhatsApp'],
      ['urgencia', 'Urgência'],
      ['mensagem', 'Sobre o momento'],
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

/**
 * Para quem vai o aviso — de venda e de formulário. Aceita vários endereços
 * separados por vírgula.
 *
 * Deixar vazio também funcionaria: o código cai para
 * `Session.getEffectiveUser().getEmail()`, que numa instalação da Ilana seria
 * ela mesma. Está preenchido de propósito. Esse caminho de reserva nunca foi
 * exercitado de verdade — durante todos os testes o campo esteve preenchido —
 * e `getEffectiveUser()` devolve vazio em algumas situações. Se devolvesse
 * vazio num webhook anônimo, o e-mail não sairia e nada denunciaria. Uma linha
 * explícita não tem esse risco.
 */
var AVISAR_EMAIL = 'cantodafloresta8@gmail.com'

/**
 * ════════════════════════════════════════════════════════════════════════════
 * QUAL PLANILHA ESTE SCRIPT USA
 *
 * Deixe vazio se o projeto foi criado **pela planilha**, em Extensões → Apps
 * Script: aí ele já sabe qual é. É o nosso caso, e por isso está vazio.
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
var PLANILHA_ID = ''

/**
 * Abre a planilha, venha ela de onde vier.
 *
 * A planilha do próprio projeto vem primeiro, de propósito. Num projeto criado
 * pela planilha ela é sempre a certa, e não exige permissão para abrir outro
 * documento. O PLANILHA_ID só entra quando não há planilha própria — e um ID
 * esquecido de outra instalação deixa de atrapalhar.
 */
function abrirPlanilha() {
  var ativa = null
  try {
    ativa = SpreadsheetApp.getActiveSpreadsheet()
  } catch (erro) {
    ativa = null
  }

  if (ativa) return ativa

  if (PLANILHA_ID) {
    try {
      return SpreadsheetApp.openById(PLANILHA_ID)
    } catch (erro) {
      throw new Error(
        'Não consegui abrir a planilha de código ' +
          PLANILHA_ID +
          '. Ou ela não existe, ou a conta que roda este script não tem acesso ' +
          'a ela. Se o projeto foi criado pela própria planilha, o certo é ' +
          'deixar PLANILHA_ID vazio.'
      )
    }
  }

  throw new Error(
    'Não achei a planilha. Este projeto não está preso a nenhuma — ' +
      'preencha PLANILHA_ID, no topo do arquivo, com o código que aparece no ' +
      'endereço da planilha entre /d/ e /edit.'
  )
}

/**
 * A ordem em que as abas aparecem na planilha.
 *
 * Sem isto elas ficam na ordem em que foram criadas — que é a ordem em que o
 * sistema foi crescendo, e não diz nada a quem abre a planilha. Aqui a ordem
 * segue o caminho real: o pedido da Bússola vem antes do pagamento, porque a
 * pessoa preenche o formulário e só então paga.
 *
 * Aba que não estiver nesta lista vai para o fim, sem reclamar.
 */
var ORDEM_DAS_ABAS = [
  'Pedidos — Bússola',
  'Pagamentos — InfinitePay',
  'Pedidos — Acompanhamento',
  'Consultas — Botica da Bruxa',
  'Interessadas — Vem Pra Roda',
]

/** Põe as abas na ordem de ORDEM_DAS_ABAS. */
function ordenarAbas() {
  var planilha = abrirPlanilha()
  var posicao = 1

  for (var i = 0; i < ORDEM_DAS_ABAS.length; i++) {
    var aba = planilha.getSheetByName(ORDEM_DAS_ABAS[i])
    if (!aba) continue
    planilha.setActiveSheet(aba)
    planilha.moveActiveSheet(posicao)
    posicao++
  }

  /* Deixa a primeira aberta — senão a planilha abre na última que foi movida. */
  var primeira = planilha.getSheetByName(ORDEM_DAS_ABAS[0])
  if (primeira) planilha.setActiveSheet(primeira)
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
    /* Aba nova nasce no fim; põe de volta no lugar antes que alguém veja. */
    ordenarAbas()
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

/**
 * O pé de todo aviso: de onde ele veio e o link para ver o resto.
 *
 * O link aponta para a **aba**, não só para a planilha — o `#gid` abre já na
 * certa. A Ilana pediu isso: recebendo o aviso, ela quer poder olhar o
 * panorama sem caçar a guia.
 */
function rodapeDoAviso(aba) {
  var link = ''
  try {
    link = abrirPlanilha().getUrl() + '#gid=' + aba.getSheetId()
  } catch (erro) {
    console.error('Não consegui montar o link da planilha: ' + erro)
  }

  var linhas = [
    '—',
    'Aviso automático. O histórico fica na planilha, na aba "' + aba.getName() + '".',
  ]
  if (link) linhas.push(link)

  return linhas.join('\n')
}

/**
 * Avisa que um formulário do site foi preenchido.
 *
 * Monta o corpo a partir das próprias colunas, então um formulário novo passa a
 * avisar sem código a mais — basta pôr `avisar` na entrada dele em TIPOS.
 */
function avisarFormulario(config, recebido, multiplos, aba) {
  if (!config.avisar) return

  var destino = descobrirDestino()
  if (!destino) return

  var corpo = ['Alguém preencheu um formulário no catálogo.', '']

  for (var i = 0; i < config.colunas.length; i++) {
    var chave = config.colunas[i][0]
    var titulo = config.colunas[i][1]
    if (chave === 'recebido_em' || chave === 'origem') continue

    var valor = recebido[chave]
    if (multiplos && multiplos[chave] && multiplos[chave].length > 1) {
      valor = multiplos[chave].join(', ')
    }
    if (valor === undefined || String(valor).trim() === '') continue

    corpo.push(titulo + ': ' + valor)
  }

  if (recebido.origem) {
    corpo.push('')
    corpo.push('Veio de: ' + recebido.origem)
  }

  corpo.push('')
  corpo.push(rodapeDoAviso(aba))

  var quem = recebido.nome ? ' — ' + recebido.nome : ''
  MailApp.sendEmail(destino, config.avisar + quem, corpo.join('\n'))
  console.log('Aviso de formulário enviado para ' + destino + '.')
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
    rodapeDoAviso(abrirPlanilha().getSheetByName(ABA_PAGAMENTOS)),
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
      ordenarAbas()
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

    /* O aviso vem depois da linha, e uma falha nele não derruba o recebimento:
       a linha na planilha é o que não pode faltar. */
    try {
      avisarFormulario(config, recebido, e && e.parameters, aba)
    } catch (erroAviso) {
      console.error(erroAviso)
    }

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

  ordenarAbas()

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
