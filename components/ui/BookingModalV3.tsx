'use client'

import { useState } from 'react'

export type ModalidadeAgendamento = {
  id: string
  titulo: string
  descricao: string
  /* Nome usado na mensagem do WhatsApp */
  nomeNaMensagem: string
  /* Preço próprio desta modalidade. Sem isso, usa o valor geral da página. */
  valor?: string
}

type BookingModalV3Props = {
  aberto: boolean
  aoFechar: () => void
  /* Número no formato internacional, só dígitos. Ex.: 557399855339 */
  whatsappNumero: string
  tituloEtiqueta: string
  titulo: string
  subtitulo: string

  modalidades: ModalidadeAgendamento[]
  /* Rótulo do seletor. Em produtos, algo como "Escolha o preparado:" */
  labelModalidade?: string
  /* Qual modalidade já vem marcada ao abrir. Serve para quando a página tem
     mais de um botão, cada um levando a uma intenção diferente (nas Rodas,
     participar da roda do Instituto x levar uma roda para outra cidade).
     Sem isso, abre sempre na primeira. */
  modalidadeInicial?: string

  /* Valor exibido em "Investimento total". Some quando não há preço fechado. */
  valor?: string
  mostrarValor?: boolean

  /* Local citado na mensagem. Vazio em serviços online ou produtos. */
  local?: string
  /* Início da frase do WhatsApp, antes do nome da modalidade. */
  fraseInicial?: string

  /* Bloco de agenda: o aviso de que a Ilana atende à tarde, mais a pergunta
     sobre urgência. Substituiu o seletor "qual período prefere?", que ela
     pediu para tirar — ela só atende de tarde, então perguntar o turno dava
     a entender uma escolha que não existe. Some onde agendar sessão não faz
     sentido (eventos coletivos, lista de espera, produtos). */
  mostrarAgenda?: boolean
  avisoAgenda?: string

  /* Campo de e-mail. Fica desligado por padrão: para agendar uma sessão, o
     WhatsApp basta. Serve para a Biblioteca Viva, onde o cadastro é uma lista
     de espera e o e-mail é o canal de aviso. */
  mostrarEmail?: boolean
  emailObrigatorio?: boolean

  /* Recado em destaque no topo do formulário, antes dos campos. Serve para
     dizer algo que muda o sentido do que a pessoa está preenchendo — na Vem Pra
     Roda, que o formulário de aplicação ainda está por vir. */
  aviso?: string

  /* Com um endereço aqui, o formulário passa a gravar numa planilha.
     `tipoRegistro` é a marca que o recebedor precisa devolver: sem ela, o envio
     é dado como falho. É o que impede uma resposta de sumir num script antigo
     que continue no ar.

     `endpointModo` decide o papel da planilha:

     'planilha'             — ela é o destino. O WhatsApp não abre, e a pessoa
                              só vê a confirmação se o recebedor confirmar.
                              É a lista de espera da Vem Pra Roda.

     'planilha-e-saida'     — ela é uma cópia. A pessoa segue para a saída —
                              WhatsApp, ou o endereço de `urlAoEnviar` — e uma
                              falha na gravação não custa nada a quem
                              preencheu, porque a saída já aconteceu. É a
                              consulta da Botica e o checkout da Bússola.

     O nome do modo era 'planilha-e-whatsapp' e passou a mentir quando a saída
     virou o checkout. */
  endpoint?: string
  endpointModo?: 'planilha' | 'planilha-e-saida'
  tipoRegistro?: string
  origemRegistro?: string

  /* Para onde a pessoa segue ao enviar. Sem isto, vai para o WhatsApp com a
     mensagem montada. Com um endereço aqui, vai para ele — é o checkout da
     Bússola.

     ⚠️ O checkout não carrega nome, telefone nem urgência: esse caminho não
     tem como levar o que a pessoa escreveu. Então, indo para um checkout,
     `endpoint` precisa estar ligado também, senão os dados do formulário se
     perdem e a Ilana recebe um pagamento sem saber de quem é. */
  urlAoEnviar?: string
  /* O que aparece quando a planilha confirma o recebimento. */
  tituloSucesso?: string
  textoSucesso?: string

  labelMensagem?: string
  placeholderMensagem?: string
  mensagemObrigatoria?: boolean
  /* Oculta o campo de mensagem por completo (ex.: lista de espera) */
  mostrarMensagem?: boolean

  labelEnviar?: string
}

function IconeFechar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function IconeCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--cor-destaque)"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function IconeWhatsApp() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--cor-destaque)"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 20.5l1.6-4.9A8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4z" />
    </svg>
  )
}

export default function BookingModalV3({
  aberto,
  aoFechar,
  whatsappNumero,
  tituloEtiqueta,
  titulo,
  subtitulo,
  modalidades,
  labelModalidade = 'Selecione a modalidade:',
  modalidadeInicial,
  valor,
  mostrarValor = true,
  local,
  fraseInicial = 'Gostaria de agendar a minha',
  mostrarAgenda = true,
  avisoAgenda = '⚠️ ATENÇÃO: As sessões são realizadas exclusivamente no período da tarde. O seu atendimento será agendado para as próximas 4 semanas e, em até 4 dias úteis, entraremos em contato para confirmar a data e o horário definitivos.',
  mostrarEmail = false,
  emailObrigatorio = false,
  aviso,
  endpoint,
  endpointModo = 'planilha',
  tipoRegistro,
  origemRegistro,
  urlAoEnviar,
  tituloSucesso = 'Recebido, gratidão!',
  textoSucesso = 'Assim que abrir, você é avisada em primeira mão.',
  labelMensagem = 'Algo sobre o seu momento',
  placeholderMensagem = 'O que te trouxe até aqui?',
  mensagemObrigatoria = false,
  mostrarMensagem = true,
  labelEnviar = 'Conversar e agendar no WhatsApp',
}: BookingModalV3Props) {
  const [modalidade, setModalidade] = useState(
    modalidadeInicial ?? modalidades[0]?.id ?? ''
  )
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [urgencia, setUrgencia] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [registrado, setRegistrado] = useState(false)
  const [falhou, setFalhou] = useState(false)

  if (!aberto) return null

  const escolhida = modalidades.find((m) => m.id === modalidade) ?? modalidades[0]
  /* Cada modalidade pode ter preço próprio (ex.: 60 e 90 minutos) */
  const valorExibido = escolhida?.valor ?? valor

  const corpoDoRegistro = () =>
    new URLSearchParams({
      tipo: tipoRegistro ?? '',
      modalidade: escolhida?.titulo ?? '',
      nome: nome.trim(),
      telefone: telefone.trim(),
      email: email.trim(),
      /* Só existe quando o bloco de agenda aparece, e é onde a pessoa conta se
         o caso é urgente — na Bússola, o dado mais útil depois do contato. */
      urgencia: mostrarAgenda ? urgencia.trim() : '',
      mensagem: mensagem.trim(),
      origem: origemRegistro ?? '',
    })

  /* Envio para planilha. Espera a resposta e só confirma se o recebedor
     devolver a marca combinada — nada de dar por enviado o que não chegou. */
  const registrarNaPlanilha = async (aoTerminar?: () => void) => {
    setFalhou(false)
    setEnviando(true)

    const corpo = corpoDoRegistro()

    try {
      const resposta = await fetch(endpoint as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: corpo.toString(),
      })

      if (!resposta.ok) throw new Error(String(resposta.status))

      const texto = await resposta.text()

      /* Duas conferencias separadas de proposito, para o erro dizer qual foi. */
      if (!texto.includes('"ok":true')) {
        throw new Error('recebedor recusou')
      }
      if (tipoRegistro && !texto.includes(tipoRegistro)) {
        throw new Error('recebedor desatualizado: nao conhece ' + tipoRegistro)
      }

      if (aoTerminar) aoTerminar()
      else setRegistrado(true)
    } catch (erro) {
      /* No console fica o motivo; na tela, o recado e a saida pelo WhatsApp. */
      console.error('Falha ao gravar na planilha:', erro)
      setFalhou(true)
    } finally {
      setEnviando(false)
    }
  }

  const enviar = (e: React.FormEvent) => {
    e.preventDefault()

    if (endpoint && endpointModo === 'planilha') {
      void registrarNaPlanilha()
      return
    }

    let texto = `Olá, Ilana! ${fraseInicial} ${escolhida.nomeNaMensagem}`
    if (mostrarValor && valorExibido) texto += ` (${valorExibido})`
    if (local) texto += ` ${local}`
    texto += '.'

    if (nome.trim()) texto += `\n\nMeu nome: ${nome.trim()}`
    if (telefone.trim()) texto += `\nTelefone: ${telefone.trim()}`
    if (mostrarEmail && email.trim()) texto += `\nE-mail: ${email.trim()}`
    if (mostrarAgenda && urgencia.trim()) texto += `\nUrgência: ${urgencia.trim()}`
    if (mostrarMensagem && mensagem.trim()) texto += `\n${labelMensagem}: ${mensagem.trim()}`

    /* A saída abre primeiro, e de dentro do clique. Se fosse depois de esperar
       a planilha, o navegador já não reconheceria o gesto da pessoa e o
       bloqueador de pop-up engoliria a aba. */
    window.open(
      urlAoEnviar ?? `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(texto)}`,
      '_blank',
      'noopener,noreferrer'
    )

    /* A gravação vai atrás, com a saída já aberta — então não atrasa ninguém.
       O modal só fecha quando ela termina, e se falhar fica na tela com o
       recado e o caminho pelo WhatsApp.

       Antes isto falhava em silêncio, com o argumento de que a mensagem do
       WhatsApp já teria levado tudo. Deixou de valer quando a saída virou o
       checkout: ali a planilha é a ÚNICA chance de saber quem é a pessoa, e
       uma falha invisível vira pagamento sem dono. */
    if (endpoint && endpointModo === 'planilha-e-saida') {
      void registrarNaPlanilha(aoFechar)
      return
    }

    aoFechar()
  }

  const campo =
    'w-full rounded-xl px-3.5 py-2.5 text-xs font-body transition-colors focus:outline-none'
  const campoStyle = {
    background: '#1B190D',
    border: '1px solid rgba(201,162,39,0.28)',
    color: '#FFFFFF',
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto fade-in-v3"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }}
      onClick={aoFechar}
      role="dialog"
      aria-modal="true"
      aria-label={titulo}
    >
      <div
        className="w-full max-w-md rounded-3xl p-6 sm:p-8 text-left relative my-8"
        style={{
          background: 'var(--cor-fundo)',
          border: '1px solid rgba(201,162,39,0.4)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={aoFechar}
          aria-label="Fechar"
          className="absolute top-5 right-5 p-1.5 rounded-full transition-colors cursor-pointer"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          <IconeFechar />
        </button>

        <p
          className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold mb-1"
          style={{ color: 'var(--cor-destaque)' }}
        >
          {tituloEtiqueta}
        </p>
        <h3 className="font-heading text-2xl mb-2" style={{ color: '#FFFFFF' }}>
          {titulo}
        </h3>
        <p className="font-body text-xs mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {subtitulo}
        </p>

        {/* Deu certo: o formulário sai de cena e fica só a confirmação. */}
        {registrado ? (
          <div className="text-center py-2">
            <h4 className="font-heading text-xl mb-3" style={{ color: '#FFFFFF' }}>
              {tituloSucesso}
            </h4>
            <p
              className="font-body text-xs leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {textoSucesso}
            </p>
            <button
              type="button"
              onClick={aoFechar}
              className="font-sans text-xs font-semibold uppercase tracking-[0.12em] py-2 cursor-pointer"
              style={{ color: 'var(--cor-destaque)' }}
            >
              Fechar
            </button>
          </div>
        ) : (

        <form onSubmit={enviar} className="space-y-4">
          {aviso && (
            <p
              className="font-body text-xs leading-relaxed rounded-xl px-3.5 py-2.5"
              style={{
                color: 'rgba(255,255,255,0.8)',
                background: 'rgba(201,162,39,0.10)',
                border: '1px solid rgba(201,162,39,0.28)',
              }}
            >
              {aviso}
            </p>
          )}

          {/* Modalidade — só aparece quando há mais de uma opção */}
          {modalidades.length > 1 && (
            <div>
              <label className="block font-sans text-xs font-medium mb-2" style={{ color: '#FFFFFF' }}>
                {labelModalidade}
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {modalidades.map((m) => {
                  const ativa = m.id === modalidade
                  return (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setModalidade(m.id)}
                      className="p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between"
                      style={{
                        border: ativa
                          ? '1px solid var(--cor-destaque)'
                          : '1px solid rgba(201,162,39,0.22)',
                        background: ativa ? 'rgba(255,255,255,0.06)' : '#1B190D',
                        opacity: ativa ? 1 : 0.75,
                      }}
                    >
                      <span className="flex items-center justify-between mb-1">
                        <span className="font-sans text-xs font-medium" style={{ color: '#FFFFFF' }}>
                          {m.titulo}
                        </span>
                        {ativa && <IconeCheck />}
                      </span>
                      <span
                        className="font-body text-[10px] leading-tight"
                        style={{ color: 'rgba(255,255,255,0.55)' }}
                      >
                        {m.descricao}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Nome */}
          <div>
            <label
              htmlFor="v3-nome"
              className="block font-body text-xs mb-1"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              Seu nome completo
            </label>
            <input
              id="v3-nome"
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como prefere ser chamada(o)?"
              className={campo}
              style={campoStyle}
            />
          </div>

          {/* Telefone */}
          <div>
            <label
              htmlFor="v3-telefone"
              className="block font-body text-xs mb-1"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              WhatsApp para contato
            </label>
            <input
              id="v3-telefone"
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(DDD) 99999-9999"
              className={campo}
              style={campoStyle}
            />
          </div>

          {/* E-mail — só onde o cadastro é uma lista, não um agendamento */}
          {mostrarEmail && (
            <div>
              <label
                htmlFor="v3-email"
                className="block font-body text-xs mb-1"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                E-mail{' '}
                {!emailObrigatorio && <span style={{ opacity: 0.6 }}>(opcional)</span>}
              </label>
              <input
                id="v3-email"
                type="email"
                required={emailObrigatorio}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seunome@email.com"
                className={campo}
                style={campoStyle}
              />
            </div>
          )}

          {/* Agenda: o aviso de como a data é combinada, e a pergunta sobre
              urgência. Entrou no lugar do seletor de turno — a Ilana só atende
              de tarde, então oferecer manhã ou noite prometia uma escolha que
              não existe. */}
          {mostrarAgenda && (
            <div>
              <p
                className="font-body text-xs leading-relaxed rounded-xl px-3.5 py-2.5 mb-4"
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  background: 'rgba(201,162,39,0.08)',
                  border: '1px solid rgba(201,162,39,0.22)',
                }}
              >
                {avisoAgenda}
              </p>

              <label
                htmlFor="v3-urgencia"
                className="block font-body text-xs mb-1"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                Há alguma urgência? Se sim, qual seria?{' '}
                <span style={{ opacity: 0.6 }}>(opcional)</span>
              </label>
              <textarea
                id="v3-urgencia"
                rows={2}
                value={urgencia}
                onChange={(e) => setUrgencia(e.target.value)}
                placeholder="Por favor, especifique."
                className={campo + ' resize-none leading-relaxed'}
                style={campoStyle}
              />
            </div>
          )}

          {/* Mensagem */}
          {mostrarMensagem && (
            <div>
              <label
                htmlFor="v3-mensagem"
                className="block font-body text-xs mb-1"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {labelMensagem}{' '}
                {!mensagemObrigatoria && <span style={{ opacity: 0.6 }}>(opcional)</span>}
              </label>
              <textarea
                id="v3-mensagem"
                rows={3}
                required={mensagemObrigatoria}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder={placeholderMensagem}
                className={campo + ' resize-none leading-relaxed'}
                style={campoStyle}
              />
            </div>
          )}

          {/* Valor — some quando não há preço fechado */}
          {mostrarValor && valorExibido && (
            <div
              className="pt-3 flex items-center justify-between"
              style={{ borderTop: '1px solid rgba(201,162,39,0.20)' }}
            >
              <span className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Investimento total:
              </span>
              <span className="font-heading text-lg" style={{ color: 'var(--cor-destaque)' }}>
                {valorExibido}
              </span>
            </div>
          )}

          {/* Falha nunca pode ser silenciosa: quem preencheu precisa saber que
              não chegou, e ter uma saída. */}
          {falhou && (
            <div
              className="rounded-xl px-3.5 py-3"
              style={{
                background: 'rgba(180,60,40,0.22)',
                border: '1px solid rgba(180,60,40,0.5)',
              }}
              role="alert"
            >
              <p className="font-body text-xs leading-relaxed mb-2" style={{ color: '#FFFFFF' }}>
                Não consegui registrar seus dados agora. Tente de novo em instantes
                — ou fale com Ilana pelo WhatsApp, que ela anota seu contato.
              </p>
              <a
                href={`https://wa.me/${whatsappNumero}?text=${encodeURIComponent(
                  `Olá, Ilana! Gostaria de ser avisada quando abrir a ${escolhida.nomeNaMensagem}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs font-semibold underline"
                style={{ color: 'var(--cor-destaque)' }}
              >
                Falar no WhatsApp
              </a>
            </div>
          )}

          <button type="submit" className="btn-sales-v2 mt-2" disabled={enviando}>
            {!endpoint && <IconeWhatsApp />}
            {enviando ? 'Enviando…' : labelEnviar}
          </button>
        </form>

        )}
      </div>
    </div>
  )
}
