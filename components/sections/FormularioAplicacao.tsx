'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  campos,
  camposOcultos,
  tituloFormulario,
  aberturaFormulario,
  destino,
  nomeDoCampo,
  VALOR_OUTRO,
  sufixoOutro,
  type CampoFormulario,
} from '@/lib/formulario-mentoria'

const FIO_CLARO = 'rgba(201,162,39,0.20)'
const FIO_OLIVA = 'rgba(201,162,39,0.30)'
const PAINEL = 'rgba(255,255,255,0.055)'

const TOTAL = campos.length

const campoClasse =
  'w-full rounded-xl px-3.5 py-3 text-sm font-body transition-colors focus:outline-none'

const campoEstilo: React.CSSProperties = {
  background: 'rgba(0,0,0,0.28)',
  border: `1px solid ${FIO_CLARO}`,
  color: '#FFFFFF',
}

const botaoClasse =
  'inline-flex items-center justify-center px-8 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0'

const botaoEstilo: React.CSSProperties = {
  background: '#6E7B47',
  color: '#FFFFFF',
  border: '2px solid rgba(201,162,39,0.75)',
  boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
}

/* Uma pergunta por vez. A Ilana pediu assim: vendo o questionário inteiro, a
   pessoa mede o tamanho da tarefa e desiste no meio; uma de cada vez fica leve,
   e a curiosidade pela próxima puxa para a frente. */
export default function FormularioAplicacao() {
  /* 0 é a abertura; de 1 a TOTAL são as perguntas. */
  const [passo, setPasso] = useState(0)
  const [respostas, setRespostas] = useState<Record<string, string[]>>({})
  const [outroMarcado, setOutroMarcado] = useState<Record<string, boolean>>({})
  const [outroTexto, setOutroTexto] = useState<Record<string, string>>({})
  const [erro, setErro] = useState<string | null>(null)
  const [enviado, setEnviado] = useState(false)

  const enviando = useRef(false)
  const formRef = useRef<HTMLFormElement>(null)

  const campo = passo > 0 ? campos[passo - 1] : null
  const ultimo = passo === TOTAL

  const valores = (c: CampoFormulario) => respostas[c.entry] ?? []

  const respondido = (c: CampoFormulario) => {
    if (c.tipo === 'texto' || c.tipo === 'paragrafo') {
      return (valores(c)[0] ?? '').trim().length > 0
    }
    if (outroMarcado[c.entry] && (outroTexto[c.entry] ?? '').trim()) return true
    return valores(c).length > 0
  }

  const guardar = (c: CampoFormulario, novos: string[]) => {
    setErro(null)
    setRespostas((atual) => ({ ...atual, [c.entry]: novos }))
  }

  const alternar = (c: CampoFormulario, opcao: string) => {
    const atuais = valores(c)
    guardar(
      c,
      atuais.includes(opcao) ? atuais.filter((v) => v !== opcao) : [...atuais, opcao]
    )
  }

  const avancar = () => {
    if (campo && campo.obrigatorio && !respondido(campo)) {
      setErro(
        campo.tipo === 'texto' || campo.tipo === 'paragrafo'
          ? 'Escreva sua resposta para seguir.'
          : 'Escolha uma opção para seguir.'
      )
      return
    }
    setErro(null)
    setPasso((p) => Math.min(p + 1, TOTAL))
  }

  const voltar = () => {
    setErro(null)
    setPasso((p) => Math.max(p - 1, 0))
  }

  /* Escolha única fecha a pergunta sozinha. É o que dá a sensação de leveza —
     escolheu, virou a página. Na última fica quieto: ninguém deve ser enviado
     por um clique que não pediu. */
  const avancarSozinho = (c: CampoFormulario) => {
    if (c.tipo !== 'escolha' || ultimo) return
    window.setTimeout(() => setPasso((p) => (p === passo ? p + 1 : p)), 260)
  }

  const aoEnviar = (evento: React.FormEvent<HTMLFormElement>) => {
    if (campo && campo.obrigatorio && !respondido(campo)) {
      evento.preventDefault()
      setErro('Escreva sua resposta para enviar.')
      return
    }
    enviando.current = true
  }

  /* Os campos escondidos que de fato viajam. Só existem no envio, então o que
     aparece na tela fica livre para ser uma pergunta de cada vez. */
  const paraEnvio = () => {
    const saida: { nome: string; valor: string }[] = []

    for (const c of campos) {
      const nome = nomeDoCampo(c)
      for (const v of valores(c)) saida.push({ nome, valor: v })

      if (c.aceitaOutro && outroMarcado[c.entry]) {
        const texto = (outroTexto[c.entry] ?? '').trim()
        if (destino.usaChave) {
          /* Na nossa planilha o texto entra como mais um valor da pergunta. */
          if (texto) saida.push({ nome, valor: texto })
        } else {
          /* O Google espera a marca do "Outro" e o texto num campo à parte. */
          saida.push({ nome, valor: VALOR_OUTRO })
          if (texto) saida.push({ nome: sufixoOutro(c.entry), valor: texto })
        }
      }
    }

    return saida
  }

  if (enviado) {
    return (
      <div
        className="w-full rounded-2xl p-8 text-center flex flex-col items-center"
        style={{ background: PAINEL, border: `1px solid ${FIO_OLIVA}` }}
      >
        <p
          className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold mb-3"
          style={{ color: 'var(--cor-destaque)' }}
        >
          Aplicação enviada
        </p>

        <h2 className="font-heading text-2xl mb-4" style={{ color: '#FFFFFF' }}>
          Recebido, gratidão!
        </h2>

        <p
          className="font-body text-sm leading-relaxed max-w-[380px] mb-7"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          A partir das suas respostas, Ilana entra em contato pelo WhatsApp para
          agendarem uma conversa e avaliarem, juntas, se este é o momento certo
          para seguirem.
        </p>

        <Link
          href="/mentoria-cuidado-autoral"
          className="font-sans text-sm font-medium py-2"
          style={{ color: 'var(--cor-destaque)' }}
        >
          ← Voltar para a Mentoria
        </Link>
      </div>
    )
  }

  return (
    <>
      <iframe
        name="destino-aplicacao"
        title="Envio da aplicação"
        className="hidden"
        aria-hidden="true"
        onLoad={() => {
          /* Dispara uma vez sozinho, quando o iframe nasce vazio. Só vale como
             confirmação depois que a pessoa enviou. */
          if (enviando.current) setEnviado(true)
        }}
      />

      <form
        ref={formRef}
        action={destino.url}
        method="POST"
        target="destino-aplicacao"
        onSubmit={aoEnviar}
        /* Enter no meio do formulário não pode enviar: só a última pergunta
           envia, e pelo botão. */
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !ultimo && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
            e.preventDefault()
            avancar()
          }
        }}
      >
        {!destino.usaChave &&
          Object.entries(camposOcultos).map(([nome, valor]) => (
            <input key={nome} type="hidden" name={nome} value={valor} readOnly />
          ))}

        {paraEnvio().map((item, i) => (
          <input key={`${item.nome}-${i}`} type="hidden" name={item.nome} value={item.valor} readOnly />
        ))}

        <div
          className="w-full rounded-2xl p-6 sm:p-8"
          style={{ background: 'var(--cor-card)', border: `1px solid ${FIO_OLIVA}` }}
        >
          {/* ── Progresso ─────────────────────────────────── */}
          {passo > 0 && (
            <div className="mb-7">
              <div className="flex items-baseline justify-between mb-2">
                <p
                  className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold"
                  style={{ color: 'var(--cor-destaque)' }}
                >
                  {campo?.secao ?? tituloFormulario}
                </p>
                <p
                  className="font-sans text-[10px] tracking-[0.1em] font-semibold"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {passo} de {TOTAL}
                </p>
              </div>

              <div
                className="w-full h-[3px] rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.10)' }}
              >
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(passo / TOTAL) * 100}%`,
                    background: 'var(--cor-destaque)',
                  }}
                />
              </div>
            </div>
          )}

          {/* ── Abertura ──────────────────────────────────── */}
          {passo === 0 && (
            <div>
              <p
                className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold mb-4"
                style={{ color: 'var(--cor-destaque)' }}
              >
                {tituloFormulario}
              </p>

              {aberturaFormulario.map((paragrafo) => (
                <p
                  key={paragrafo.slice(0, 24)}
                  className="font-body text-xs sm:text-sm leading-relaxed mb-3"
                  style={{ color: 'rgba(255,255,255,0.72)' }}
                >
                  {paragrafo}
                </p>
              ))}

              <div className="flex flex-col items-center mt-8">
                <button
                  type="button"
                  onClick={avancar}
                  className={botaoClasse}
                  style={botaoEstilo}
                >
                  Começar
                </button>

                <p
                  className="font-body text-[11px] text-center mt-4"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {TOTAL} perguntas, uma de cada vez.
                </p>
              </div>
            </div>
          )}

          {/* ── A pergunta da vez ─────────────────────────── */}
          {campo && (
            <div aria-live="polite">
              <p
                className="font-heading text-xl sm:text-2xl leading-snug mb-1"
                style={{ color: '#FFFFFF' }}
              >
                {campo.pergunta}
              </p>

              <p
                className="font-body text-[11px] mb-5"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {campo.obrigatorio
                  ? 'Obrigatória'
                  : 'Opcional — pode seguir sem responder'}
                {campo.tipo === 'multipla' && ' · pode escolher mais de uma'}
              </p>

              {campo.tipo === 'texto' && (
                <input
                  autoFocus
                  type={campo.pergunta === 'E-mail' ? 'email' : 'text'}
                  value={valores(campo)[0] ?? ''}
                  onChange={(e) => guardar(campo, [e.target.value])}
                  placeholder={campo.exemplo}
                  className={campoClasse}
                  style={campoEstilo}
                />
              )}

              {campo.tipo === 'paragrafo' && (
                <textarea
                  autoFocus
                  rows={5}
                  value={valores(campo)[0] ?? ''}
                  onChange={(e) => guardar(campo, [e.target.value])}
                  className={campoClasse + ' resize-none leading-relaxed'}
                  style={campoEstilo}
                />
              )}

              {(campo.tipo === 'escolha' || campo.tipo === 'multipla') && (
                <div className="flex flex-col gap-2">
                  {(campo.opcoes ?? []).map((opcao) => {
                    const marcada = valores(campo).includes(opcao)
                    return (
                      <button
                        key={opcao}
                        type="button"
                        onClick={() => {
                          if (campo.tipo === 'escolha') {
                            setOutroMarcado((a) => ({ ...a, [campo.entry]: false }))
                            guardar(campo, [opcao])
                            avancarSozinho(campo)
                          } else {
                            alternar(campo, opcao)
                          }
                        }}
                        className="flex items-start gap-3 rounded-xl px-4 py-3 text-left transition-colors"
                        style={{
                          background: marcada
                            ? 'rgba(201,162,39,0.14)'
                            : 'rgba(0,0,0,0.22)',
                          border: `1px solid ${marcada ? 'rgba(201,162,39,0.55)' : FIO_CLARO}`,
                        }}
                        aria-pressed={marcada}
                      >
                        <span
                          className="mt-[3px] shrink-0 inline-flex items-center justify-center"
                          style={{
                            width: 14,
                            height: 14,
                            borderRadius: campo.tipo === 'escolha' ? '50%' : 4,
                            border: `1.5px solid ${marcada ? 'var(--cor-destaque)' : 'rgba(255,255,255,0.35)'}`,
                            background: marcada ? 'var(--cor-destaque)' : 'transparent',
                          }}
                        >
                          {marcada && (
                            <span
                              style={{
                                width: 5,
                                height: 5,
                                borderRadius: '50%',
                                background: '#232112',
                              }}
                            />
                          )}
                        </span>

                        <span
                          className="font-body text-xs sm:text-sm leading-relaxed"
                          style={{ color: 'rgba(255,255,255,0.85)' }}
                        >
                          {opcao}
                        </span>
                      </button>
                    )
                  })}

                  {campo.aceitaOutro && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOutroMarcado((a) => ({
                            ...a,
                            [campo.entry]: !a[campo.entry],
                          }))
                        }
                        className="flex items-start gap-3 rounded-xl px-4 py-3 text-left transition-colors"
                        style={{
                          background: outroMarcado[campo.entry]
                            ? 'rgba(201,162,39,0.14)'
                            : 'rgba(0,0,0,0.22)',
                          border: `1px solid ${
                            outroMarcado[campo.entry]
                              ? 'rgba(201,162,39,0.55)'
                              : FIO_CLARO
                          }`,
                        }}
                        aria-pressed={Boolean(outroMarcado[campo.entry])}
                      >
                        <span
                          className="mt-[3px] shrink-0"
                          style={{
                            width: 14,
                            height: 14,
                            borderRadius: 4,
                            border: `1.5px solid ${
                              outroMarcado[campo.entry]
                                ? 'var(--cor-destaque)'
                                : 'rgba(255,255,255,0.35)'
                            }`,
                            background: outroMarcado[campo.entry]
                              ? 'var(--cor-destaque)'
                              : 'transparent',
                          }}
                        />
                        <span
                          className="font-body text-xs sm:text-sm"
                          style={{ color: 'rgba(255,255,255,0.85)' }}
                        >
                          Outro
                        </span>
                      </button>

                      {outroMarcado[campo.entry] && (
                        <input
                          autoFocus
                          type="text"
                          value={outroTexto[campo.entry] ?? ''}
                          onChange={(e) => {
                            setErro(null)
                            setOutroTexto((a) => ({
                              ...a,
                              [campo.entry]: e.target.value,
                            }))
                          }}
                          placeholder="O que seria?"
                          className={campoClasse}
                          style={campoEstilo}
                        />
                      )}
                    </>
                  )}
                </div>
              )}

              {erro && (
                <p
                  className="font-body text-xs leading-relaxed rounded-xl px-3.5 py-2.5 mt-5"
                  style={{
                    color: '#FFFFFF',
                    background: 'rgba(180,60,40,0.22)',
                    border: '1px solid rgba(180,60,40,0.5)',
                  }}
                  role="alert"
                >
                  {erro}
                </p>
              )}

              {/* ── Navegação ───────────────────────────── */}
              <div className="flex items-center justify-between gap-4 mt-8">
                <button
                  type="button"
                  onClick={voltar}
                  className="font-sans text-xs font-medium py-2 transition-opacity hover:opacity-70"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  ← Voltar
                </button>

                {ultimo ? (
                  <button type="submit" className={botaoClasse} style={botaoEstilo}>
                    Enviar minha aplicação
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={avancar}
                    className={botaoClasse}
                    style={botaoEstilo}
                  >
                    {campo.obrigatorio || respondido(campo) ? 'Continuar' : 'Pular'}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  )
}
