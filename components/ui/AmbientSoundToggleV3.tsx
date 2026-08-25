'use client'

import { useEffect, useRef, useState } from 'react'

/* Ícones em SVG embutido — evita adicionar a dependência lucide-react */
function IconeSomLigado() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--cor-destaque)"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M19 5a9 9 0 0 1 0 14" />
    </svg>
  )
}

function IconeSomMudo() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <path d="M22 9l-6 6" />
      <path d="M16 9l6 6" />
    </svg>
  )
}

/**
 * Atmosfera sonora sintetizada na hora com a Web Audio API:
 * ruído marrom filtrado (brisa de mata) + tigelas ressonantes periódicas.
 * Sempre opt-in — nunca toca sozinho.
 */
export default function AmbientSoundToggleV3() {
  const [tocando, setTocando] = useState(false)
  const ctxRef = useRef<AudioContext | null>(null)
  const ganhoRef = useRef<GainNode | null>(null)
  const intervaloRef = useRef<number | null>(null)

  const iniciar = () => {
    try {
      const AudioCtx =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!AudioCtx) return

      const ctx = new AudioCtx()
      ctxRef.current = ctx

      const ganhoMestre = ctx.createGain()
      ganhoMestre.gain.setValueAtTime(0.01, ctx.currentTime)
      ganhoMestre.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 3)
      ganhoMestre.connect(ctx.destination)
      ganhoRef.current = ganhoMestre

      // 1. Ruído marrom filtrado — brisa de floresta
      const tamanho = ctx.sampleRate * 2
      const buffer = ctx.createBuffer(1, tamanho, ctx.sampleRate)
      const saida = buffer.getChannelData(0)
      let anterior = 0
      for (let i = 0; i < tamanho; i++) {
        const branco = Math.random() * 2 - 1
        saida[i] = (anterior + 0.02 * branco) / 1.02
        anterior = saida[i]
        saida[i] *= 3.5
      }

      const ruido = ctx.createBufferSource()
      ruido.buffer = buffer
      ruido.loop = true

      const filtro = ctx.createBiquadFilter()
      filtro.type = 'lowpass'
      filtro.frequency.setValueAtTime(280, ctx.currentTime)

      ruido.connect(filtro)
      filtro.connect(ganhoMestre)
      ruido.start()

      // 2. Tigelas ressonantes em harmônicos suaves
      const tocarTigela = (freq: number) => {
        const atual = ctxRef.current
        if (!atual || atual.state === 'closed') return

        const osc = atual.createOscillator()
        const ganho = atual.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, atual.currentTime)

        ganho.gain.setValueAtTime(0.001, atual.currentTime)
        ganho.gain.exponentialRampToValueAtTime(0.06, atual.currentTime + 0.8)
        ganho.gain.exponentialRampToValueAtTime(0.0001, atual.currentTime + 6)

        osc.connect(ganho)
        ganho.connect(ganhoMestre)

        osc.start()
        osc.stop(atual.currentTime + 6.2)
      }

      tocarTigela(432)

      const frequencias = [216, 324, 432, 528, 648]
      intervaloRef.current = window.setInterval(() => {
        tocarTigela(frequencias[Math.floor(Math.random() * frequencias.length)])
      }, 7500)

      setTocando(true)
    } catch {
      // Navegador sem suporte ou com áudio bloqueado — o botão simplesmente não liga
    }
  }

  const parar = () => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current)
      intervaloRef.current = null
    }
    const ctx = ctxRef.current
    if (ganhoRef.current && ctx) {
      ganhoRef.current.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 1)
      setTimeout(() => {
        if (ctxRef.current && ctxRef.current.state !== 'closed') {
          ctxRef.current.close()
        }
        ctxRef.current = null
      }, 1000)
    }
    setTocando(false)
  }

  useEffect(() => {
    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current)
      if (ctxRef.current && ctxRef.current.state !== 'closed') {
        ctxRef.current.close()
      }
    }
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        type="button"
        onClick={tocando ? parar : iniciar}
        title={tocando ? 'Pausar som ambiente' : 'Ouvir atmosfera sonora'}
        aria-pressed={tocando}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs tracking-wider transition-all duration-300 shadow-xl cursor-pointer backdrop-blur-md"
        style={
          tocando
            ? {
                background: 'rgba(84,95,55,0.92)',
                borderColor: 'var(--cor-destaque)',
                color: '#FFFFFF',
              }
            : {
                background: 'rgba(27,25,14,0.82)',
                borderColor: 'rgba(201,162,39,0.35)',
                color: 'rgba(255,255,255,0.55)',
              }
        }
      >
        {tocando ? <IconeSomLigado /> : <IconeSomMudo />}
        <span className="text-[11px] font-medium">
          {tocando ? 'Som ambiente ativo' : 'Ativar som da floresta'}
        </span>
      </button>
    </div>
  )
}
