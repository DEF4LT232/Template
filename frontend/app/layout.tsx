import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./data/fonts";

// =============================================================================
// METADATA — SEO do site
// =============================================================================
// Esse objeto define TODAS as informações de SEO que o Next.js vai injetar no
// <head> do HTML. Cada campo aqui controla tags <meta>, <link>, <script>, etc.
//
// USE ISSO COMO REFERÊNCIA: esse template tem TUDO que o Next.js suporta.
// Quando for usar, apague o que não precisar e preencha com seus dados.
// =============================================================================
export const metadata: Metadata = {
  // ── BÁSICO ─────────────────────────────────────────────────────────────────
  // title: aparece na aba do navegador e no resultado do Google
  // Aceita string simples ou objeto com template (veja exemplo comentado abaixo)
  title: "Template",
  // "title" também pode ser um objeto com "default" + "template" para páginas internas:
  // title: {
  //   default: "Template",           // fallback se a página não definir title
  //   template: "%s | Template",     // %s é substituído pelo title de cada página
  // },

  // description: resumo que aparece nos resultados de busca (Google, Bing, etc.)
  description: "Template para usar em alguns projetos",

  // metadataBase: URL base usada para resolver URLs relativas em outros campos
  // (ex: openGraph.images, twitter.images, alternates.canonical)
  metadataBase: new URL("http://localhost:3000"),

  // applicationName: nome do app (usado em PWA e alguns contextos)
  applicationName: "Template",

  // generator: ferramenta que gerou o site (Next.js já preenche automaticamente)
  // generator: "Next.js",

  // referrer: controla o header Referrer ao navegar para links externos
  // Valores comuns: "no-referrer", "origin", "strict-origin-when-cross-origin" (padrão)
  referrer: "strict-origin-when-cross-origin",

  // keywords: palavras-chave (pouco relevante pra SEO hoje, mas ainda usado)
  keywords: ["Template", "Next.js", "Frontend", "Typescript"],

  // authors: quem criou o site
  authors: [{ name: "DEF4LT23", url: "https://github.com/DEF4LT232" }],

  // creator: criador (versão simplificada de authors)
  creator: "DEF4LT23",

  // publisher: entidade/publicadora responsável
  publisher: "Vercel",

  // category: categoria do site
  category: "Template",

  // classification: classificação geral (ex: "Tecnologia", "Educação")
  classification: "Tecnologia",

  // ── ÍCONES ─────────────────────────────────────────────────────────────────
  // icons: define favicon, ícones de atalho, apple touch icon, etc.
  // Aceita um objeto ou array de objetos
  // icons: {
  //   icon: "/favicon.ico",          // favicon clássico
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  //   other: [
  //     { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
  //   ],
  // },

  // manifest: arquivo JSON de manifest para PWA (instalar o site como app)
  // manifest: "/manifest.json",

  // ── ROBOTS ─────────────────────────────────────────────────────────────────
  // robots: controla como os robôs de busca interagem com o site.
  // O arquivo robots.ts gera o robots.txt, mas aqui dá para refinar por página.
  robots: {
    index: true,            // Permite indexar a página no Google?
    follow: true,           // Permite seguir os links da página?
    // nocache: false,      // Impede que o Google mostre versão em cache?
    // noarchive: false,    // Impede que o Google Archive salve cópias?
    // nosnippet: false,    // Impede que o Google mostre trechos nos resultados?
    // noimageindex: false, // Impede que imagens da página sejam indexadas?
    // notranslate: false,  // Impede que o Google ofereça tradução?
    // maxSnippet: -1,      // -1 = sem limite. Número = max de caracteres no snippet
    // maxImagePreview: "large",  // "none" | "standard" | "large"
    // maxVideoPreview: -1,       // -1 = sem limite. Número = segundos
    // indexifembedded: false,    // Permitir indexação mesmo quando incorporado?

    // Configuração específica pro GoogleBot (pode ser diferente dos robôs genéricos)
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ── ALTERNATES ─────────────────────────────────────────────────────────────
  // alternates: URLs alternativas (canonical, versões em outros idiomas)
  // alternates: {
  //   canonical: "https://meusite.com",       // URL canônica principal
  //   languages: {
  //     "pt-BR": "https://meusite.com",
  //     "en-US": "https://meusite.com/en",
  //   },
  //   media: {
  //     "only screen and (max-width: 600px)": "https://meusite.com/mobile",
  //   },
  //   types: {
  //     "application/rss+xml": "https://meusite.com/rss",
  //   },
  // },

  // ── OPEN GRAPH ─────────────────────────────────────────────────────────────
  // Open Graph: controla a aparência do link quando compartilhado em redes
  // sociais como Facebook, WhatsApp, Telegram, LinkedIn, Discord, etc.
  openGraph: {
    title: "Template next.js",
    description: "Template para usar em alguns projetos",
    url: "http://localhost:3000",
    siteName: "Template next.js",
    locale: "pt-br",

    // alternateLocale: se o site tiver versões em outros idiomas
    alternateLocale: "pt_BR",

    // type: o tipo de conteúdo — "website", "article", "video.movie", etc.
    type: "website",

    // images: imagens que aparecem no card de compartilhamento
    // O ideal é uma imagem com proporção 1200x630 (1.91:1)
    // images: [
    //   {
    //     url: "https://meusite.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Descrição da imagem para acessibilidade",
    //   },
    // ],

    // videos: se o link for um vídeo
    // videos: [
    //   {
    //     url: "https://meusite.com/video.mp4",
    //     width: 1920,
    //     height: 1080,
    //     type: "video/mp4",
    //   },
    // ],

    // audio: se o link for um áudio/podcast
    // audio: [
    //   {
    //     url: "https://meusite.com/audio.mp3",
    //     type: "audio/mpeg",
    //   },
    // ],

    // determiner: palavra que antecede o título ("um", "uma", "o", "a")
    // Ex: "Um" -> "Um Template incrível" / "O" -> "O Template que você precisa"
    // Valores: "a" | "an" | "auto" | "the" | ""
    // determiner: "um",

    // releaseDate: data de lançamento (útil pra type "article")
    // releaseDate: "2026-01-01",

    // tags: tags associadas (útil pra type "article")
    // tags: ["Next.js", "React", "Typescript"],

    // Dados de localização (útil pra type "place")
    // latitude: -23.5505,
    // longitude: -46.6333,
    // streetAddress: "Av. Paulista, 1000",
    // locality: "São Paulo",
    // region: "SP",
    // postalCode: "01310-100",
    // countryName: "Brasil",

    // emails / phoneNumbers / faxNumbers: contatos (usado pra type "profile" ou "business")
    // emails: ["contato@meusite.com"],
    // phoneNumbers: ["+5511999999999"],
    // faxNumbers: ["+5511999999998"],
  },

  // ── TWITTER ────────────────────────────────────────────────────────────────
  // Twitter Card: controla a aparência quando compartilhado no Twitter/X
  // Se não definir, o Twitter usa os dados do Open Graph automaticamente
  twitter: {
    card: "summary_large_image",  // "summary" | "summary_large_image" | "app" | "player"
    title: "Template",
    description: "Template para usar em alguns projetos",
    site: "http://localhost:3000",
    creator: "@DEF4LT23",

    // siteId / creatorId: ID numérico do Twitter (opcional)
    // siteId: "123456789",
    // creatorId: "123456789",

    // images: mesma lógica do Open Graph, mas específica pro Twitter
    images: [
      // {
      //   url: "https://meusite.com/twitter-image.jpg",
      //   alt: "Descrição da imagem",
      // },
    ],

    // players: para conteúdo multimídia
    // players: [
    //   {
    //     url: "https://meusite.com/player",
    //     streamUrl: "https://meusite.com/stream",
    //     height: 1080,
    //     width: 1920,
    //   },
    // ],

    // app: para deep link quando o post for aberto no celular
    // app: {
    //   id: {
    //     iphone: "com.example.app",
    //     ipad: "com.example.app",
    //     googleplay: "com.example.app",
    //   },
    //   name: "Template App",
    //   url: {
    //     iphone: "myapp://",
    //     ipad: "myapp://",
    //     googleplay: "myapp://",
    //   },
    // },
  },

  // ── VERIFICATION ───────────────────────────────────────────────────────────
  // verification: meta tags de verificação de domínio para ferramentas de busca
  // verification: {
  //   google: "código-de-verificação-do-google",           // Google Search Console
  //   yandex: "código-de-verificação-do-yandex",
  //   yahoo: "código-de-verificação-do-yahoo",
  //   // Qualquer outra verificação (Bing, Pinterest, etc.)
  //   other: {
  //     "msvalidate.01": "código-do-bing",
  //     "p:domain_verify": "código-do-pinterest",
  //   },
  // },

  // ── APP LINKS ──────────────────────────────────────────────────────────────
  // appLinks: associa o site a apps nativos
  // appLinks: {
  //   ios: {
  //     url: "https://apps.apple.com/app/id123456",
  //     appStoreId: "123456",
  //   },
  //   android: {
  //     package: "com.example.app",
  //     url: "intent://example/#Intent;...",
  //   },
  //   web: {
  //     url: "http://localhost:3000",
  //   },
  // },

  // ── PWA ────────────────────────────────────────────────────────────────────
  // appleWebApp: configuração específica para iOS (Safari + Add to Home Screen)
  // appleWebApp: {
  //   title: "Template",
  //   capable: true,             // Permite tela cheia (sem Safari UI)
  //   statusBarStyle: "black",   // "default" | "black" | "black-translucent"
  //   startupImage: [
  //     {
  //       url: "/splash.png",
  //       media: "(device-width: 375px) and (device-height: 812px)",
  //     },
  //   ],
  // },

  // itunes: link para o app na App Store
  // itunes: {
  //   appId: "123456",
  //   appArgument: "utm_source=website",
  // },

  // ── OUTROS ─────────────────────────────────────────────────────────────────
  // archives, assets, bookmarks: links relacionados (pouco usados)
  // archives: ["https://meusite.com/archives"],
  // assets: ["https://meusite.com/assets"],
  // bookmarks: ["https://meusite.com/bookmark"],

  // other: qualquer meta tag que o Next.js não tem tipada oficialmente
  // other: {
  //   "google-site-verification": "código",  // alternativa ao verification
  //   "theme-color": "#000000",              // cor do tema do navegador no celular
  // },
};

// RootLayout é o componente que envolve todas as páginas.
// {children} é o conteúdo de cada página (vem do page.tsx) renderizado aqui dentro.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
