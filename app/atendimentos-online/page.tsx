import CategoriaPagina from '@/components/sections/CategoriaPagina'
import { siteConfig } from '@/lib/content'

export const metadata = { title: 'Atendimentos Individuais Online — ' + siteConfig.name }

export default function AtendimentosOnlinePage() {
  return <CategoriaPagina slug="atendimentos-online" />
}
