import type { Metadata } from 'next'
import { Lora, Poppins } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

const TITULO = 'Ilana Lewinsohn | Instituto Canto da Floresta'
const DESCRICAO =
  'MASSIXA, Ayurveda, Rodas de Mulheres e terapias integrativas com Ilana Lewinsohn, em Arraial d\'Ajuda, Bahia.'

export const metadata: Metadata = {
  /* Endereço do site publicado. Sem isto o Next monta a URL da imagem de
     prévia como caminho relativo, e WhatsApp, Instagram e afins precisam de
     endereço absoluto — o resultado é link compartilhado sem foto, que foi o
     que aconteceu até 23/09/2026.

     ⚠️ Mudou de hospedagem? Esta linha muda junto. Ela não é lida de variável
     de ambiente de propósito, pelo mesmo motivo do endereço da planilha em
     lib/planilha.ts: configuração escondida que vence o código já custou uma
     tarde neste projeto. */
  metadataBase: new URL('https://catalogomassixa.netlify.app'),
  title: TITULO,
  description: DESCRICAO,

  /* A imagem da prévia é o arquivo app/opengraph-image.jpg, que o Next
     encontra sozinho pelo nome e publica com as dimensões declaradas. Não
     precisa ser citada aqui; o texto alternativo vem de
     app/opengraph-image.alt.txt, ao lado dela. */
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ilana Lewinsohn',
  },

  /* summary_large_image pede o cartão grande, com a foto ocupando a largura
     toda. Sem isto a foto viraria uma miniatura quadrada ao lado do texto. */
  twitter: {
    card: 'summary_large_image',
    title: TITULO,
    description: DESCRICAO,
  },

  other: {
    'color-scheme': 'dark',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
