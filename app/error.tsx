'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-brand-bg">
      <div className="text-center">
        <h1 className="font-heading text-3xl text-white mb-4">Oops!</h1>
        <p className="font-body text-white mb-8 opacity-80">Algo deu errado.</p>
        <button
          onClick={() => reset()}
          className="btn-sales"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}
