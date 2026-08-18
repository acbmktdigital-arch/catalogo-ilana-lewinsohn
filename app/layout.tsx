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

export const metadata: Metadata = {
  title: 'Ilana Lewinsohn | Instituto Canto da Floresta',
  description: 'MASSIXA, Ayurveda, Rodas de Mulheres e terapias integrativas com Ilana Lewinsohn, em Arraial d\'Ajuda, Bahia.',
  openGraph: {
    title: 'Ilana Lewinsohn | Instituto Canto da Floresta',
    description: 'MASSIXA, Ayurveda, Rodas de Mulheres e terapias integrativas com Ilana Lewinsohn, em Arraial d\'Ajuda, Bahia.',
    type: 'website',
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
