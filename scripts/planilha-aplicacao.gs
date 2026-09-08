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
 * ⚠️ Ao ligar o lançamento no formulário da Ilana (ver FORM_ID_ARQUIVO, mais
 *    abaixo), o Google vai pedir uma autorização nova, porque o script passa a
 *    mexer em formulários além da planilha. É esperado.
 *
 * ⚠️ A aba ganhou uma coluna nova, "Entrou no formulário da Ilana?". O
 *    cabeçalho só é escrito quando a aba está vazia — então, numa planilha que
 *    já tem linhas, apague a aba inteira e deixe o script criá-la de novo, ou
 *    acrescente o título dessa coluna à mão.
 *
 * Para conferir sem passar pelo site: rode a função  testarLancamento,  lá no
 * fim deste arquivo, pelo botão ▷ Executar.
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

/**
 * ────────────────────────────────────────────────────────────────────────────
 * LANÇAR TAMBÉM NO FORMULÁRIO DA ILANA
 *
 * O navegador não consegue enviar direto para o formulário dela — o Google
 * responde 401 a qualquer POST vindo de fora. Mas um script rodando dentro do
 * Google, com acesso ao formulário, cria uma resposta de verdade. E resposta de
 * verdade entra no resumo e nos gráficos, que é o que a Ilana quer preservar.
 *
 * Para ligar: cole abaixo o ID do formulário. Ele está na URL de EDIÇÃO, não na
 * de resposta:
 *
 *   docs.google.com/forms/d/ ESTE_PEDAÇO_AQUI /edit
 *
 * Não confundir com o `1FAIpQLSe...` do link público, que é outro código.
 * Deixando vazio, o script só grava na planilha e não tenta o formulário.
 *
 * ⚠️ Quem instalar precisa ter acesso de edição ao formulário, porque o script
 * roda como essa pessoa.
 */
var FORM_ID_ARQUIVO = ''

/** A pergunta de cada campo, como está escrita no formulário dela. */
var PERGUNTAS = {
  nome: 'Nome',
  email: 'E-mail',
  cidade: 'Cidade/Estado/País',
  telefone: 'Número de telefone',
  como_soube: 'Como soube do programa Travessia Cuidado Autoral?',
  ja_atua: 'Você já atua como terapeuta?',
  linha_atuacao: 'Qual sua linha de atuação terapêutica? Sua profissão?',
  individual_ou_grupo: 'Atende individualmente ou em grupos?',
  protocolos: 'Você sente que seus atendimentos atuais estão baseados em técnicas e protocolos?',
  elementos_natureza: 'Com que frequência você utiliza elementos da natureza (ervas, argila, pedras etc) para cuidar de você e/ou das pessoas que atende?',
  como_se_sente: 'Como você se sente em relação ao seu servir como terapeuta hoje? O que poderia melhorar?',
  o_quanto_incomoda: 'Sobre esse aspecto que poderia melhorar (ou aspectos): o quanto isso incomoda você, a ponto de ser uma prioridade olhar para isso agora?',
  o_que_cuidar: 'Se você pudesse escolher algo na sua prática para cuidar de perto, com apoio, por 3 meses próximos, o que seria?',
  investe_em_si: 'Você costuma investir tempo e recursos financeiros para cuidar de si? Retiros, cursos, práticas especiais?',
  algo_mais: 'O quanto você sente que há algo mais para trazer ao seu servir, para que ele ganhe em força, sentido, profundidade, beleza, clareza?',
  quer_programa: 'Você gostaria de atravessar um programa online que te apoie no desenvolvimento de um cuidado mais autoral, nutritivo e libertador da sua expressão plena como terapeuta? Com alguém que passou por isso te levando pela mão?',
  quer_retiro: 'Você gostaria de participar de um retiro presencial de 3 dias no Extremo Sul da Bahia (Arraial, Caraíva ou Santo André), ao final do programa online, para vivenciar uma imersão sensorial e viva de cuidado?',
  indicacao: 'Mesmo sem (ainda) saber dos detalhes da Travessia Cuidado Autoral, você sente que pode caber a alguém? Gostaria de indicar algum contato?  GRATIDÃO!',
}

/** Tira acento, pontuação e caixa, para comparar texto sem sofrer com detalhe. */
function achatar(texto) {
  return String(texto || '')
    .normalize('NFD')
    /* Faixa dos sinais que ficam soltos depois do NFD: o til do "ã", a cedilha
       do "ç". Escrita por código porque são invisíveis, e um editor
       distraído os apagaria sem ninguém notar. */
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

/** Acha a opção do formulário que corresponde ao que o site mandou. */
function acharOpcao(escolhas, valor) {
  var alvo = achatar(valor)
  for (var i = 0; i < escolhas.length; i++) {
    if (achatar(escolhas[i].getValue()) === alvo) return escolhas[i].getValue()
  }
  return null
}

/**
 * Cria a resposta no formulário da Ilana. Devolve uma string dizendo o que
 * aconteceu — que vai para a última coluna da planilha, para nunca haver dúvida
 * sobre ter entrado ou não.
 */
function lancarNoFormulario(recebido, multiplos) {
  if (!FORM_ID_ARQUIVO) return 'não configurado'

  var form = FormApp.openById(FORM_ID_ARQUIVO)
  var resposta = form.createResponse()
  var itens = form.getItems()
  var naoEncaixaram = []

  for (var chave in PERGUNTAS) {
    var valores = multiplos[chave] || (recebido[chave] ? [recebido[chave]] : [])
    if (!valores.length) continue

    var procurado = achatar(PERGUNTAS[chave])
    var item = null

    for (var i = 0; i < itens.length; i++) {
      if (achatar(itens[i].getTitle()) === procurado) {
        item = itens[i]
        break
      }
    }

    if (!item) {
      naoEncaixaram.push(chave)
      continue
    }

    var tipo = item.getType()

    try {
      if (tipo === FormApp.ItemType.TEXT) {
        resposta.withItemResponse(item.asTextItem().createResponse(valores[0]))
      } else if (tipo === FormApp.ItemType.PARAGRAPH_TEXT) {
        resposta.withItemResponse(item.asParagraphTextItem().createResponse(valores[0]))
      } else if (tipo === FormApp.ItemType.MULTIPLE_CHOICE) {
        var mc = item.asMultipleChoiceItem()
        var achada = acharOpcao(mc.getChoices(), valores[0])
        resposta.withItemResponse(mc.createResponse(achada || valores[0]))
      } else if (tipo === FormApp.ItemType.CHECKBOX) {
        var cb = item.asCheckboxItem()
        var escolhas = cb.getChoices()
        var lista = []
        for (var v = 0; v < valores.length; v++) {
          lista.push(acharOpcao(escolhas, valores[v]) || valores[v])
        }
        resposta.withItemResponse(cb.createResponse(lista))
      } else {
        naoEncaixaram.push(chave + ' (tipo ' + tipo + ')')
      }
    } catch (err) {
      /* Opção que o formulário não aceita, normalmente um "Outro" desligado.
         Segue sem ela, para não perder a resposta inteira por causa de uma. */
      naoEncaixaram.push(chave + ' (' + err + ')')
    }
  }

  resposta.submit()

  return naoEncaixaram.length ? 'ok, exceto: ' + naoEncaixaram.join('; ') : 'ok'
}

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
      titulos.push('Entrou no formulário da Ilana?')
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

    /* A planilha é gravada primeiro, e é ela que decide se o envio deu certo.
       O formulário da Ilana vem depois, como um extra: se ele falhar, a
       aplicação já está salva e ninguém perde nada. */
    var multiplos = (e && e.parameters) || {}
    var situacao

    try {
      situacao = lancarNoFormulario(recebido, multiplos)
    } catch (err) {
      console.error(err)
      situacao = 'falhou: ' + err
    }

    linha.push(situacao)
    aba.appendRow(linha)

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, formulario: situacao })
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (erro) {
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

/**
 * Teste de bancada. Rodar por aqui mesmo, pelo botão ▷ Executar do editor,
 * escolhendo esta função — não precisa passar pelo site.
 *
 * Deixa uma linha na planilha e, se `FORM_ID_ARQUIVO` estiver preenchido, uma
 * resposta no formulário da Ilana. As duas dizem TESTE no nome, para achar e
 * apagar depois. O resultado aparece no registro de execução, embaixo.
 */
function testarLancamento() {
  var recebido = {
    nome: 'TESTE do script — pode apagar',
    email: 'teste@exemplo.com',
    cidade: "Arraial d'Ajuda / BA / Brasil",
    telefone: '(73) 99999-9999',
    como_soube: 'Por indicação',
    ja_atua: 'Sim, há mais de 5 anos',
    linha_atuacao: 'Terapeuta corporal',
    protocolos: 'Sim, um pouco',
    elementos_natureza: 'Às vezes',
    como_se_sente: 'Teste com acentuação: coração, à noite.',
    o_quanto_incomoda: 'Me incomoda muito. Estou pronta a olhar e fazer meu melhor para sair desse lugar',
    investe_em_si: 'Sim, em média a cada 6 meses',
    algo_mais: 'Muito, sinto que posso evoluir bastante',
    quer_programa: 'Sim, quero!',
    quer_retiro: 'Adoraria!',
    indicacao: 'Envio de teste.',
  }

  /* As de marcar mais de uma opção chegam assim quando vêm do site. */
  var multiplos = {
    individual_ou_grupo: ['Individualmente', 'Pequenos grupos'],
    o_que_cuidar: ['Criar atendimentos mais autênticos', 'Ganhar mais confiança no meu sentir'],
  }

  var resultado = lancarNoFormulario(recebido, multiplos)
  console.log('Formulário da Ilana: ' + resultado)
  return resultado
}
