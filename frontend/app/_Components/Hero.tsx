// Componente = função que retorna HTML/JSX para ser renderizado na tela.
// Export default = esta função é a exportação principal deste arquivo.
// "Hero" é a seção inicial que o usuário vê ao entrar no site.
export default function Hero() {
    // Variáveis em JavaScript podem ser usadas dentro do HTML usando { }
    const nome = "vinicius";

    // O return define o HTML que será renderizado na tela
    return (
        <div>
            {/* Tudo que está entre { } no JSX é código JavaScript */}
            <h1>{nome}</h1>
        </div>
    );
}
