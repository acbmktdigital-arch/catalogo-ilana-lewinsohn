import Image from 'next/image'
import { siteConfig } from '@/lib/content'

/* Monta a frase de abertura em três pedaços, para destacar o nome do método
   sem duplicar o texto: negrito em "MASSIXA — Um Universo de Cuidado" e, dentro
   dele, itálico só em "Um Universo de Cuidado".

   Se o trecho destacado não for encontrado na frase — porque o texto mudou e
   alguém esqueceu de atualizar o destaque —, cai para a frase inteira sem
   formatação, em vez de renderizar errado ou quebrar. */
function DescricaoComDestaque() {
  const { description, descriptionDestaque, descriptionDestaqueItalico } = siteConfig
  const corte = description.indexOf(descriptionDestaque)
  if (corte === -1) return <>{description}</>

  const antes = description.slice(0, corte)
  const depois = description.slice(corte + descriptionDestaque.length)

  const [prefixo, italico] = descriptionDestaque.split(descriptionDestaqueItalico)

  return (
    <>
      {antes}
      <strong className="font-semibold">
        {prefixo}
        <em>{descriptionDestaqueItalico}</em>
        {italico}
      </strong>
      {depois}
    </>
  )
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Main hero image */}
      <div className="relative w-full h-[240px]">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(35,33,18,0) 40%, rgba(35,33,18,1) 100%)',
          }}
        />
        <Image src={siteConfig.heroImage} alt={siteConfig.name} fill className="object-cover object-top" priority />

        {/* Profile badge */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
            <Image src={siteConfig.heroImage} alt={siteConfig.name} fill className="object-cover object-top" />
          </div>
          <div>
            <p className="font-heading text-sm font-semibold leading-tight" style={{ color: '#FFFFFF' }}>
              {siteConfig.name}
            </p>
            <p className="font-sans text-xs mt-0.5 opacity-70" style={{ color: '#FFFFFF' }}>
              {siteConfig.handle}
            </p>
          </div>
        </div>
      </div>

      {/* A descrição vem imediatamente abaixo do nome (que fecha a foto), sem
          o "Seja bem-vinda!" cortando no meio — ele desce e passa a convidar
          para o catálogo logo abaixo. */}
      <div className="relative z-10 px-6 pt-5 pb-6 text-center">
        <p className="font-body text-sm leading-relaxed max-w-sm mx-auto opacity-80" style={{ color: '#FFFFFF' }}>
          <DescricaoComDestaque />
        </p>
        <h1 className="font-heading text-3xl mt-7 tracking-wide italic" style={{ color: '#FFFFFF' }}>
          {siteConfig.tagline}
        </h1>
      </div>
    </section>
  )
}
