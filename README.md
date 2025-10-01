# Neurelix Website

## Descrição
Este é o website oficial da Neurelix, uma empresa especializada em soluções full-stack com IA e automação, acessíveis e sob medida.

## Tecnologias utilizadas
- Next.js 14 (App Router)
- React 18
- TypeScript
- TailwindCSS
- shadcn/ui
- lucide-react
- Framer Motion
- MDX
- next-intl (i18n)
- next-seo
- JSON-LD (Schema.org)

## Pré-requisitos
- Node.js 18 ou superior

## Configuração da Porta

### Opção 1: Variável de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:
```bash
PORT=3000
WHATSAPP_NUMBER=5566999999999
```

### Opção 2: Scripts Pré-configurados
Use os scripts já configurados no `package.json`:
```bash
# Porta padrão (3000)
npm run dev

# Porta 3001
npm run dev:3001

# Porta 8080
npm run dev:8080
```

### Opção 3: Variável de Ambiente Temporária
```bash
# Linux/Mac
PORT=8080 npm run dev

# Windows
set PORT=8080 && npm run dev
```
- npm ou yarn

## Instalação

1. Clone este repositório:
```bash
git clone https://github.com/Giuseph66/neurelix-website.git
```

2. Navegue até o diretório do projeto:
```bash
cd neurelix-website
```

3. Instale as dependências:
```bash
npm install
```

4. Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:
```env
# URLs
NEXT_PUBLIC_APP_URL=https://neurelix.com.br

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Contato
NEXT_PUBLIC_CONTACT_EMAIL=contato@neurelix.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5566XXXXXXXXX

# API Keys
RESEND_API_KEY=seu_api_key_aqui

# Outros
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/usuario
```

## Desenvolvimento

Para rodar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O servidor iniciará em `http://localhost:3000`.

## Build

Para criar uma build de produção:

```bash
npm run build
```

## Deploy

Este projeto está configurado para deploy no Vercel. Para fazer o deploy:

1. Faça login no Vercel: `vercel login`
2. Faça o deploy: `vercel --prod`

## Estrutura de arquivos

```
src/
├── app/                # Páginas do Next.js (App Router)
│   ├── api/            # Rotas da API
│   ├── contato/        # Página de contato
│   ├── solucoes/       # Página de soluções
│   ├── exemplos/       # Página de exemplos
│   ├── cases/          # Página de cases
│   ├── tecnologias/    # Página de tecnologias
│   ├── precos/         # Página de preços
│   ├── sobre/          # Página sobre
│   ├── termos/         # Página de termos
│   ├── privacidade/    # Página de privacidade
│   ├── cookies/        # Página de cookies
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/         # Componentes reutilizáveis
├── lib/                # Funções utilitárias e lógica de negócios
├── styles/             # Arquivos de estilo globais
└── utils/              # Funções utilitárias
content/
├── solutions/          # Conteúdo MDX das soluções
├── examples/           # Conteúdo MDX dos exemplos
├── cases/              # Conteúdo MDX dos cases
└── company/            # Conteúdo MDX da empresa
```

## Conteúdo dinâmico (MDX)

Para criar novas soluções, exemplos ou cases:

1. Crie um arquivo `.mdx` no diretório apropriado em `/content`
2. Siga o formato de frontmatter estabelecido nos exemplos existentes
3. Adicione o conteúdo em Markdown com suporte a componentes React

Exemplo de frontmatter para cases:
```md
---
title: "Nome do Projeto"
status: "MVP"
repo: "https://github.com/usuario/repo"
stack: ["Tecnologia1","Tecnologia2"]
problem: "Descrição do problema resolvido."
solution: "Descrição da solução implementada."
outcomes: ["Resultado1", "Resultado2"]
metrics: ["Métrica1", "Métrica2"]
images:
  - "URL da imagem 1"
  - "URL da imagem 2"
---
```

## Formulário de Contato

O formulário de contato na página `/contato` envia dados para `/api/contact/route.ts`. Para que o envio funcione corretamente em produção, configure uma conta com um serviço de envio de e-mails (como Resend) e adicione a chave de API no arquivo `.env.local`.

## Internacionalização (i18n)

O website está preparado para internacionalização com `next-intl`. Atualmente suporta PT-BR como padrão e EN como idioma opcional. Para adicionar mais idiomas:

1. Crie pastas nomeadas com os códigos de idioma no diretório `src/app`
2. Copie os arquivos de página para a nova pasta de idioma
3. Traduza o conteúdo mantendo a estrutura

## SEO

O website está otimizado para SEO com:

- Metadados dinâmicos para cada página
- Schema.org JSON-LD para Organization e Person
- Sitemap.xml gerado automaticamente
- Robots.txt configurado
- Tags Open Graph e Twitter Cards

## Componentes de UI

Para adicionar novos componentes da shadcn/ui:

```bash
npx shadcn@latest add [nome-do-componente]
```

Componentes disponíveis: button, card, input, label, etc.

## Variáveis de ambiente

As seguintes variáveis de ambiente são utilizadas no projeto:

- `NEXT_PUBLIC_APP_URL` - URL base do aplicativo
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - ID do Google Analytics (opcional)
- `NEXT_PUBLIC_CONTACT_EMAIL` - E-mail de contato
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - Número do WhatsApp com DDI
- `RESEND_API_KEY` - Chave da API do Resend para envio de e-mails
- `NEXT_PUBLIC_LINKEDIN_URL` - URL do LinkedIn

## Licença

Este projeto está licenciado sob os termos especificados na empresa Neurelix.# neurelix-website
