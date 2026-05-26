# Frontend — Next.js

## Estrutura da pasta `app/`

```
app/
├── layout.tsx        # Layout principal — define HTML, meta tags, fontes
├── page.tsx          # Página inicial — renderizada dentro do layout
├── globals.css       # Estilos globais (Tailwind)
├── _Components/      # Componentes reutilizáveis
│   └── Hero.tsx      # Exemplo de componente
├── data/             # Dados e configurações
│   └── fonts.ts      # Configuração de fontes (Google Fonts)
└── utils/            # Funções auxiliares
    └── api.ts        # Rotas da API (exemplos)
```

## Por onde começar

1. Abra o `layout.tsx` — entenda a estrutura base do HTML
2. Depois o `page.tsx` — é onde você constrói o conteúdo da página
3. Componentes reutilizáveis vão em `_Components/`

> Não mexa em arquivos fora da pasta `app/` por enquanto (`next.config.ts`, `tsconfig.json`, etc.).

## Como rodar

```bash
npm run dev
```

Acesse em `http://localhost:3000`.
