// Este arquivo é a página inicial do site.
// Ele é renderizado DENTRO do layout.tsx, substituindo o {children} de lá.
// Aqui você coloca todo o conteúdo visível da página (títulos, parágrafos, imagens, etc.)
import Hero from "./_Components/Hero";

export default function Home() {
  return (
    // <main> = conteúdo principal da página (acessibilidade e SEO)
    // Use tags semânticas: <header>, <section>, <footer>, etc.
    <main>
      {/* Componente Hero importado de _Components/Hero.tsx — primeira seção do site */}
      <Hero />
    </main>
  );
}
