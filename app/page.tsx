import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import { siteConfig } from '@/lib/content'

export default function HomePage() {
  return (
    <main className="min-h-screen max-w-md mx-auto relative overflow-hidden">
      <HeroSection />
      <ServicesSection />
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
