import CategoriaPagina from '@/components/sections/CategoriaPagina'
import { siteConfig } from '@/lib/content'

export const metadata = { title: 'Vivências em Grupo — ' + siteConfig.name }

export default function VivenciasEmGrupoPage() {
  return <CategoriaPagina slug="vivencias-em-grupo" />
}
