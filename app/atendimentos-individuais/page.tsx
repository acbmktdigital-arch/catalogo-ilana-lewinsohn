import CategoriaPagina from '@/components/sections/CategoriaPagina'
import { siteConfig } from '@/lib/content'

export const metadata = { title: 'Atendimentos Individuais — ' + siteConfig.name }

export default function AtendimentosIndividuaisPage() {
  return <CategoriaPagina slug="atendimentos-individuais" />
}
