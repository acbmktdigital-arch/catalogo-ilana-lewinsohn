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
  const [urgencia, setUrgencia] = useState('')
  const [mensagem, setMensagem] = useState('')

  if (!aberto) return null

  const escolhida = modalidades.find((m) => m.id === modalidade) ?? modalidades[0]
  /* Cada modalidade pode ter preço próprio (ex.: 60 e 90 minutos) */
  const valorExibido = escolhida?.valor ?? valor

  const enviar = (e: React.FormEvent) => {
    e.preventDefault()

    let texto = `Olá, Ilana! ${fraseInicial} ${escolhida.nomeNaMensagem}`
    if (mostrarValor && valorExibido) texto += ` (${valorExibido})`
    if (local) texto += ` ${local}`
    texto += '.'

    if (nome.trim()) texto += `\n\nMeu nome: ${nome.trim()}`
    if (telefone.trim()) texto += `\nTelefone: ${telefone.trim()}`
    if (mostrarAgenda && urgencia.trim()) texto += `\nUrgência: ${urgencia.trim()}`
    if (mostrarMensagem && mensagem.trim()) texto += `\n${labelMensagem}: ${mensagem.trim()}`

    window.open(
      `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(texto)}`,
      '_blank',
      'noopener,noreferrer'
    )
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

        <form onSubmit={enviar} className="space-y-4">
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

          <button type="submit" className="btn-sales-v2 mt-2">
            <IconeWhatsApp />
            {labelEnviar}
          </button>
        </form>
      </div>
    </div>
  )
}
