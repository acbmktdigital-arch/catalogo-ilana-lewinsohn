import type { Metadata } from 'next'
import Link from 'next/link'
import FormularioAplicacao from '@/components/sections/FormularioAplicacao'

export const metadata: Metadata = {
  title: 'Formulário de Aplicação · Travessia da Semente',
  description:
    'Conte um pouco da sua trajetória para aplicar à Mentoria Cuidado Autoral, com Ilana Lewinsohn.',
  /* Página de destino de um botão, não de busca: não faz sentido alguém cair
     aqui sem ter lido a mentoria antes. */
  robots: { index: false, follow: true },
}

export default function AplicacaoMentoriaPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start overflow-x-hidden"
      style={{ background: 'var(--cor-fundo)', color: '#FFFFFF' }}
    >
      <main className="w-full max-w-[480px] sm:max-w-[520px] px-3 sm:px-4 flex flex-col items-center">
        <section className="w-full flex flex-col items-center text-center pt-8 pb-6">
          <p
            className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-4"
            style={{ color: 'var(--cor-destaque)' }}
          >
            Ilana Lewinsohn · Travessia da Semente
          </p>

          <h1
            className="font-heading text-3xl sm:text-4xl leading-[1.15] mb-4 px-2"
            style={{ color: '#FFFFFF' }}
          >
            Aplicar para a{' '}
            <span style={{ color: 'var(--cor-destaque)' }}>Mentoria Cuidado Autoral</span>
          </h1>
        </section>

        <section className="w-full pb-6">
          <FormularioAplicacao />
        </section>

        <footer className="w-full flex justify-center pb-10">
          <Link
            href="/mentoria-cuidado-autoral"
            className="font-sans text-sm sm:text-base font-medium py-2"
            style={{ color: 'var(--cor-destaque)' }}
          >
            ← Voltar para a Mentoria
          </Link>
        </footer>
      </main>
    </div>
  )
}
