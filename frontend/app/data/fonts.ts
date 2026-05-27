// Arquivo separado para configurar as fontes do Google Fonts.
// Separamos do layout.tsx para manter a organização.
//
// COMO FUNCIONA:
// O next/font/google carrega fontes do Google de forma otimizada.
// Em vez de fazer o navegador baixar um CSS externo do Google (que depende de rede,
// pode ser lento e violar privacidade), o Next.js baixa a fonte durante o BUILD
// e entrega os arquivos estáticos junto com o resto do site.
// Resultado: mais rápido, offline-friendly, e sem chamadas externas no cliente.
//
// Cada fonte é exportada como um objeto que contém uma variável CSS customizada.
// No layout.tsx importamos essas variáveis e aplicamos no <body>.
// No CSS/globals.css podemos usar a variável --font-nome para referenciar a fonte.
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";

// Criamos uma variável que representa a fonte Geist Sans.
// "variable" define o nome da variável CSS (ex: --font-geist-sans) para usar no Tailwind/CSS.
// "subsets" define quais caracteres carregar (latin = nosso alfabeto).
export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const dm_sans = DM_Sans({
    variable: "--font-dm_sans",
    subsets: ["latin"],
});
