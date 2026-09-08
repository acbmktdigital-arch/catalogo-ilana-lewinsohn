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

const campoClasse =
  'w-full rounded-xl px-3.5 py-2.5 text-sm font-body transition-colors focus:outline-none'

const campoEstilo: React.CSSProperties = {
  background: 'rgba(0,0,0,0.28)',
  border: `1px solid ${FIO_CLARO}`,
  color: '#FFFFFF',
}

/* Uma pergunta e as suas opções. Sai daqui de propósito: o corpo do formulário
   é longo, e com a pergunta inteira inline ficaria difícil achar a lógica de
   envio no meio dela. */
function Pergunta({
  campo,
  indice,
  outroMarcado,
  aoMarcarOutro,
}: {
  campo: CampoFormulario
  indice: number
  outroMarcado: boolean
  aoMarcarOutro: (marcado: boolean) => void
}) {
  const id = `campo-${indice}`
  const nome = nomeDoCampo(campo)

  return (
    <div className="mb-7">
      <label
        htmlFor={campo.tipo === 'texto' || campo.tipo === 'paragrafo' ? id : undefined}
        className="block font-body text-sm leading-relaxed mb-2.5"
        style={{ color: 'rgba(255,255,255,0.88)' }}
      >
        {campo.pergunta}
        {campo.obrigatorio ? (
          <span style={{ color: 'var(--cor-destaque)' }} aria-hidden="true">
            {' '}
            *
          </span>
        ) : (
          <span style={{ opacity: 0.5 }}> (opcional)</span>
        )}
      </label>

      {campo.tipo === 'texto' && (
        <input
          id={id}
          name={nome}
          type={campo.pergunta === 'E-mail' ? 'email' : 'text'}
          required={campo.obrigatorio}
          placeholder={campo.exemplo}
          className={campoClasse}
          style={campoEstilo}
        />
      )}

      {campo.tipo === 'paragrafo' && (
        <textarea
          id={id}
          name={nome}
          rows={4}
          required={campo.obrigatorio}
          className={campoClasse + ' resize-none leading-relaxed'}
          style={campoEstilo}
        />
      )}

      {(campo.tipo === 'escolha' || campo.tipo === 'multipla') && (
        <div className="flex flex-col gap-2">
          {(campo.opcoes ?? []).map((opcao) => (
            <label
              key={opcao}
              className="flex items-start gap-2.5 rounded-xl px-3.5 py-2.5 cursor-pointer transition-colors"
              style={{ background: 'rgba(0,0,0,0.22)', border: `1px solid ${FIO_CLARO}` }}
            >
              <input
                type={campo.tipo === 'escolha' ? 'radio' : 'checkbox'}
                name={nome}
                value={opcao}
                /* Em rádio o próprio navegador cobra o grupo inteiro. Em caixas
                   de seleção o `required` valeria só para a caixa marcada, então
                   esse grupo é conferido no envio. */
                required={campo.tipo === 'escolha' && campo.obrigatorio}
                className="mt-0.5 shrink-0 accent-[#C9A227]"
              />
              <span
                className="font-body text-xs leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                {opcao}
              </span>
            </label>
          ))}

          {campo.aceitaOutro && (
            <>
              <label
                className="flex items-start gap-2.5 rounded-xl px-3.5 py-2.5 cursor-pointer transition-colors"
                style={{ background: 'rgba(0,0,0,0.22)', border: `1px solid ${FIO_CLARO}` }}
              >
                {/* Indo para a nossa planilha, esta caixa é só o interruptor
                    que revela o campo aberto — quem viaja é o texto digitado,
                    com o mesmo nome das outras opções. No Google Forms ela
                    precisa viajar, com o valor que ele espera. */}
                <input
                  type={campo.tipo === 'escolha' ? 'radio' : 'checkbox'}
                  name={destino.usaChave ? undefined : nome}
                  value={VALOR_OUTRO}
                  checked={outroMarcado}
                  onChange={(e) => aoMarcarOutro(e.target.checked)}
                  className="mt-0.5 shrink-0 accent-[#C9A227]"
                />
                <span
                  className="font-body text-xs leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.78)' }}
                >
                  Outro
                </span>
              </label>

              {outroMarcado && (
                <input
                  name={destino.usaChave ? nome : sufixoOutro(campo.entry)}
                  type="text"
                  placeholder="O que seria?"
                  className={campoClasse + ' mt-1'}
                  style={campoEstilo}
                />
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default function FormularioAplicacao() {
  /* O envio vai para um iframe escondido. É o jeito de mandar para o Google sem
     tirar a pessoa do site: o navegador faz um POST comum, e a resposta — que
     não podemos ler, por ser de outro domínio — cai ali dentro em vez de
     substituir a página. */
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [outros, setOutros] = useState<Record<string, boolean>>({})
  const enviando = useRef(false)

  const aoEnviar = (evento: React.FormEvent<HTMLFormElement>) => {
    const formulario = evento.currentTarget

    /* Grupos de caixas obrigatórios: pelo menos uma marcada. */
    const faltando = campos.find(
      (campo) =>
        campo.tipo === 'multipla' &&
        campo.obrigatorio &&
        formulario.querySelectorAll(`input[name="${nomeDoCampo(campo)}"]:checked`).length === 0 &&
        /* A caixa "Outro" pode não ter nome, quando o destino é a nossa
           planilha; aí quem conta é o campo aberto ter texto. */
        !(
          campo.aceitaOutro &&
          outros[campo.entry] &&
          (formulario.querySelector(
            `input[type="text"][name="${nomeDoCampo(campo)}"]`
          ) as HTMLInputElement | null)?.value.trim()
        )
    )

    if (faltando) {
      evento.preventDefault()
      setErro(`Escolha ao menos uma opção em: "${faltando.pergunta}"`)
      document
        .querySelector(`input[name="${nomeDoCampo(faltando)}"]`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setErro(null)
    enviando.current = true
    /* O POST nativo segue daqui; quem confirma é o onLoad do iframe. */
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
        action={destino.url}
        method="POST"
        target="destino-aplicacao"
        onSubmit={aoEnviar}
        noValidate={false}
      >
        {/* Só quando o destino é o Google: ele precisa saber que a pessoa
            passou pelas duas páginas do formulário dela, já que aqui tudo
            aparece de uma vez só. */}
        {!destino.usaChave &&
          Object.entries(camposOcultos).map(([nome, valor]) => (
            <input key={nome} type="hidden" name={nome} value={valor} readOnly />
          ))}

        <div
          className="w-full rounded-2xl p-6 sm:p-8"
          style={{ background: 'var(--cor-card)', border: `1px solid ${FIO_OLIVA}` }}
        >
          <p
            className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold mb-3"
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

          <div className="mt-8">
            {campos.map((campo, i) => (
              <div key={campo.entry}>
                {campo.secao && (
                  <h2
                    className="font-heading text-lg sm:text-xl mb-5 mt-2 pt-6"
                    style={{ color: '#FFFFFF', borderTop: `1px solid ${FIO_CLARO}` }}
                  >
                    {campo.secao}
                  </h2>
                )}

                <Pergunta
                  campo={campo}
                  indice={i}
                  outroMarcado={Boolean(outros[campo.entry])}
                  aoMarcarOutro={(marcado) =>
                    setOutros((atual) => ({ ...atual, [campo.entry]: marcado }))
                  }
                />
              </div>
            ))}
          </div>

          {erro && (
            <p
              className="font-body text-xs leading-relaxed rounded-xl px-3.5 py-2.5 mb-4"
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

          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: '#6E7B47',
                color: '#FFFFFF',
                border: '2px solid rgba(201,162,39,0.75)',
                boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
              }}
            >
              Enviar minha aplicação
            </button>

            <p
              className="font-body text-[11px] leading-relaxed text-center mt-4 max-w-[320px]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Os campos com <span style={{ color: 'var(--cor-destaque)' }}>*</span> são
              obrigatórios.
            </p>
          </div>
        </div>
      </form>
    </>
  )
}
