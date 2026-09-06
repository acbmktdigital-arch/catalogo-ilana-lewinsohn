import CategoriaPagina from '@/components/sections/CategoriaPagina'
import { siteConfig } from '@/lib/content'

export const metadata = { title: 'Atendimentos Individuais Presenciais — ' + siteConfig.name }

export default function AtendimentosPresenciaisPage() {
  return <CategoriaPagina slug="atendimentos-presenciais" />
}
