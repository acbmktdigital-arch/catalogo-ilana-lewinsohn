import CategoriaPagina from '@/components/sections/CategoriaPagina'
import { siteConfig } from '@/lib/content'

export const metadata = { title: 'Mentorias — ' + siteConfig.name }

export default function MentoriasPage() {
  return <CategoriaPagina slug="mentorias" />
}
