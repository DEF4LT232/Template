// Este arquivo separa os dados de configuração/negócio da lógica de renderização.
// A ideia é manter os dados centralizados aqui, em vez de espalhados nos componentes.
//
// Interface que define o formato esperado dos dados da hero (seção inicial do site).
// Se no futuro os dados vierem de uma API, essa interface garante que o formato esteja correto.
interface HeroData {
    nome: string,  // nome que aparece na tela
}

// Exportamos heroData como uma constante — por enquanto os dados são fixos,
// mas poderiam vir de uma futura API ou CMS (ex: Strapi, WordPress).
export const heroData: HeroData = {
    nome: "Vinicius"
}

