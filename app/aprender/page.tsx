import CategoriaPagina from '@/components/sections/CategoriaPagina'
import { siteConfig } from '@/lib/content'

export const metadata = { title: 'Aprender — ' + siteConfig.name }

export default function AprenderPage() {
  return <CategoriaPagina slug="aprender" />
}
