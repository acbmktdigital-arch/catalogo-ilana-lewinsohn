import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-brand-bg">
      <div className="text-center">
        <h1 className="font-heading text-5xl text-white mb-4 font-bold">404</h1>
        <p className="font-body text-white mb-8 opacity-80">Página não encontrada.</p>
        <Link href="/" className="btn-sales inline-block">
          Voltar para home
        </Link>
      </div>
    </div>
  )
}
