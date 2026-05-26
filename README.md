# Template Fullstack

Template para projetos com **Django** (backend) e **Next.js** (frontend).

## Pré-requisitos

- Node.js (recomendado: versão LTS)
- Python 3
- npm (ou yarn)

## Estrutura do projeto

```
/
├── django/          # Backend Django (API REST)
│   ├── backend/
│   │   ├── backend/   # Configurações do Django
│   │   └── manage.py  # Gerenciador do Django
│   └── backend.md     # Docs do backend
├── frontend/         # Frontend Next.js
│   ├── app/           # Código da aplicação
│   │   ├── layout.tsx  # Layout principal
│   │   ├── page.tsx    # Página inicial
│   │   ├── _Components/  # Componentes reutilizáveis
│   │   ├── data/        # Configurações (fontes, etc)
│   │   └── utils/       # Funções auxiliares
│   └── frontend.md     # Docs do frontend
└── README.md         # Este arquivo
```

## Começando

### Frontend

```bash
cd frontend
npm run dev
```

Acesse em `http://localhost:3000`.

### Backend

```bash
cd django
python3 manage.py runserver
```

Se `python3` não funcionar:

```bash
python manage.py runserver
```

A API vai estar em `http://localhost:8000`.

---

Leia os arquivos `backend.md` e `frontend.md` para mais detalhes sobre cada parte.
