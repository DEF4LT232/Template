// Este arquivo gera o sitemap.xml na build do Next.js.
// O sitemap lista todas as páginas do site para ajudar os robôs de busca a indexarem o conteúdo.
import { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
    const baseurl = "http://localhost:3000";

    return [
        {
            url: `${baseurl}`,             // URL da página
            changeFrequency: "monthly",    // Com que frequência a página é atualizada (always, hourly, daily, weekly, monthly, yearly, never)
            lastModified: new Date(),      // Data da última modificação
            priority: 1,                   // Prioridade relativa entre as páginas (0.0 a 1.0)
        },
        // Conforme o site crescer, adicione mais páginas aqui:
        // {
        //   url: `${baseurl}/sobre`,
        //   changeFrequency: "monthly",
        //   lastModified: new Date(),
        //   priority: 0.8,
        // },
    ];
}
