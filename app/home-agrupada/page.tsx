import HeroSection from '@/components/sections/HeroSection'
import ServicesSectionAgrupada from '@/components/sections/ServicesSectionAgrupada'
import AboutSection from '@/components/sections/AboutSection'
import { siteConfig } from '@/lib/content'

/* ─── Página de teste ────────────────────────────────────────────────────
   Cópia da home com o catálogo dividido nos quatro blocos do doc 4, para
   comparar com a home atual em "/" sem tocar nela. Só o miolo da lista
   muda; o topo, a bio e o rodapé são exatamente os mesmos componentes.

   Quando a Vera decidir: ou este agrupamento vai para "/" e esta pasta é
   apagada, ou a pasta é apagada e nada muda.
   ──────────────────────────────────────────────────────────────────────── */

export const metadata = {
  title: 'Teste de agrupamento — ' + siteConfig.name,
  robots: { index: false, follow: false },
}

export default function HomeAgrupadaPage() {
  return (
    <main className="min-h-screen max-w-md mx-auto relative overflow-hidden">
      {/* Faixa de aviso, para ninguém confundir esta página com a home */}
      <div
        className="px-4 py-2 text-center font-sans text-[10px] uppercase tracking-[0.18em] font-semibold"
        style={{ background: 'rgba(201,162,39,0.14)', color: 'var(--cor-destaque)' }}
      >
        Página de teste · catálogo agrupado
      </div>

      <HeroSection />
      <ServicesSectionAgrupada baseHref="/home-agrupada" />
      <AboutSection />
      <footer className="pt-3 pb-6 text-center" style={{ background: 'var(--cor-fundo)', color: '#FFFFFF' }}>
        <p className="font-heading text-xs italic opacity-60">
          {siteConfig.name} © {new Date().getFullYear()}
        </p>
        <p className="font-sans text-xs opacity-50 mt-1">
          {siteConfig.handle}
        </p>
      </footer>
    </main>
  )
}
