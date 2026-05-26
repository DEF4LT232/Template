// Arquivo separado para configurar as fontes do Google Fonts.
// Separamos do layout.tsx para manter a organização.
// O next/font/google carrega fontes do Google de forma otimizada (sem chamada externa).
import { Geist, Geist_Mono } from "next/font/google";

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
