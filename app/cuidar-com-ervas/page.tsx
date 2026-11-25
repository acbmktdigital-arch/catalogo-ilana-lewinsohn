import CategoriaPagina from '@/components/sections/CategoriaPagina'
import { siteConfig } from '@/lib/content'

export const metadata = { title: 'Cuidar com Ervas — ' + siteConfig.name }

export default function CuidarComErvasPage() {
  return <CategoriaPagina slug="cuidar-com-ervas" />
}
