import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import PageTransition from '@/components/PageTransition'
import ClientLayout from '@/components/ClientLayout'
import { getOrganizationJsonLd, getPersonJsonLd } from '@/lib/json-ld'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neurelix - Soluções Full-Stack com IA e Automação',
  icons: {
    icon: '/neurelix-fundo.png',
  },
  description: 'Neurelix entrega páginas, apps e funcionalidades de IA/sistemas sob medida com custo acessível.',
  metadataBase: new URL('https://neurelix.com.br'),
  openGraph: {
    title: 'Neurelix - Soluções Full-Stack com IA e Automação',
    description: 'Neurelix entrega páginas, apps e funcionalidades de IA/sistemas sob medida com custo acessível.',
    url: 'https://neurelix.com.br',
    siteName: 'Neurelix',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neurelix - Soluções Full-Stack com IA e Automação',
    description: 'Neurelix entrega páginas, apps e funcionalidades de IA/sistemas sob medida com custo acessível.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '(TBD - Google Verification Code)',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationJsonLd = getOrganizationJsonLd();
  const personJsonLd = getPersonJsonLd();

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={organizationJsonLd}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={personJsonLd}
        />
      </head>
      <body className={`${inter.className} ${jetbrainsMono.className}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}