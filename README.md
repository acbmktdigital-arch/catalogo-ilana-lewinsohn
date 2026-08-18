# Catálogo Ilana Lewinsohn — Site & Páginas de Vendas

Site institucional e páginas de venda dos serviços da Ilana Lewinsohn.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Lora (títulos) + Poppins (texto)

## Estrutura

```
├── app/
│   ├── layout.tsx                # Layout raiz + metadados do site
│   ├── page.tsx                  # Home (link-in-bio)
│   └── [slug-do-servico]/
│       └── page.tsx              # Página de vendas de cada serviço
│
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx       # Hero da home
│   │   ├── ServicesSection.tsx   # Grid de serviços na home
│   │   ├── AboutSection.tsx      # Seção "sobre" na home
│   │   └── SalesPageTemplate.tsx # Template usado por TODAS as páginas de venda
│   └── ui/
│       └── ServiceCard.tsx       # Card de serviço (usado no grid)
│
├── lib/
│   └── content.ts                # Lista de serviços exibidos na home (título, imagem, link)
│
├── public/images/                # Fotos (hero, bio, uma por serviço)
│
├── tailwind.config.ts            # Cores, fontes
└── app/globals.css               # Variáveis de cor e estilos base
```

## Como rodar localmente

```bash
npm install
npm run dev
# http://localhost:3000
```

## Como editar um serviço já existente

Abra `app/[slug-do-serviço]/page.tsx` (ex.: `app/madalena/page.tsx`) e edite os textos direto nas props do `SalesPageTemplate`: `heroTitle`, `whatIsTexts`, `benefits`, `faqItems`, `pricingOptions`, etc. Não é preciso mexer em nenhum outro arquivo para isso.

## Como adicionar uma terapia nova

1. **Crie a pasta e a página**: `app/nome-da-terapia/page.tsx`, copiando a estrutura de uma página existente (ex.: `app/madalena/page.tsx`) e preenchendo o `SalesPageTemplate` com os textos, preços e FAQ da nova terapia.
2. **Adicione a imagem** em `public/images/nome-da-terapia.jpg`.
3. **Cadastre no catálogo da home**: adicione um novo item em `lib/content.ts` (array `services`), seguindo o mesmo formato dos existentes — `id`, `slug`, `title`, `description`, `image`, `ctaHref` apontando para `/nome-da-terapia`.

Isso é suficiente para a nova terapia aparecer na home e ter sua própria página de vendas.

## Padrões de cor e texto

- Fundo **escuro** → texto branco (`#FFFFFF`)
- Fundo **claro** → texto escuro (`#2C2C2C`)
- Cores centralizadas em `tailwind.config.ts` (token `brand`) e `app/globals.css` (variáveis `--cor-fundo`, `--cor-card`, `--cor-destaque`, `--cor-destaque-hover`)

## Links de WhatsApp

Todo botão de WhatsApp deve incluir mensagem pré-preenchida:

```
https://wa.me/55DDDNUMERO?text=Olá%2C+quero+saber+mais+sobre+[Serviço]
```

## Deploy

```bash
npx vercel
# ou
npm run build
```
