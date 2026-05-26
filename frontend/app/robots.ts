// Este arquivo gera o robots.txt na build do Next.js.
// O robots.txt diz aos robôs de busca (Google, Bing, etc.) quais partes do site podem ou não acessar.
import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
    const baseurl = "http://localhost:3000";

    return {
        rules: {
            userAgent: "*",      // Aplica a TODOS os robôs de busca
            allow: "/",          // Permite indexar o site inteiro
            disallow: "/api/",   // BLOQUEIA a indexação de rotas /api/ (dados internos)
        },
        sitemap: `${baseurl}/sitemap.xml`,  // Localização do sitemap (ajuda os robôs a encontrarem todas as páginas)
    };
}
