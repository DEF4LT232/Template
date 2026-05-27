import { dm_sans } from "../data/fonts";
import { heroData } from "../data/HeroData";
import { GetBaldes } from "../utils/api";
// Componente = função que retorna HTML/JSX para ser renderizado na tela.
// Export default = esta função é a exportação principal deste arquivo.
// "Hero" é a seção inicial que o usuário vê ao entrar no site.
export default async function Hero() {
    // Variáveis em JavaScript podem ser usadas dentro do HTML usando { }
    const balde = "quem leu é balde"
    // O return define o HTML que será renderizado na tela
    const baldes = await GetBaldes()
    return (
        <section className="w-screen h-screen">
            <div className="h-screen flex justify-center items-center gap-3">
                {/* Tudo que está entre { } no JSX é código JavaScript */}
                <h1 className={`text-3xl ${dm_sans.className}`}>{heroData.nome}</h1>
                {baldes.map((balde, i) => (
                    <p key={i} className={`text-3xl ${dm_sans.className}`}>{balde.name}</p>
                ))}
            </div>
        </section>
    );
}
