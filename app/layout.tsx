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

  /* A imagem da prévia fica em public/ e é citada aqui à mão, em vez de usar
     o arquivo app/opengraph-image.jpg que o Next acharia sozinho. Duas razões,
     as duas descobertas em 23/09/2026 depois de o WhatsApp montar o cartão sem
     foto:

     1. O JPEG precisa ser BASELINE, não progressivo. O robô do Facebook e do
        WhatsApp não decodifica progressivo para prévia — o cartão aparece com
        título e texto, e a imagem simplesmente não vem. Gerando o arquivo à
        mão, o encoder é nosso: `progressive=False`.

     2. A convenção do Next publica a imagem com uma query no fim
        (`?7b8f13ef...`), para furar cache. Em public/ o endereço é limpo, que
        é o que robô de prévia lida melhor.

     ⚠️ Sem a query de cache, trocar a imagem exige TROCAR O NOME do arquivo —
     senão WhatsApp e Instagram seguem mostrando a antiga por muito tempo. É a
     mesma regra das fotos do catálogo. */
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ilana Lewinsohn',
    images: [
      {
        url: '/og-catalogo.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Ilana Lewinsohn abraçada a um tronco na Mata Atlântica, de olhos fechados.',
      },
    ],
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
