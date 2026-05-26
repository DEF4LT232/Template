# Backend — Django

## Sobre

O backend usa Django com **Django REST Framework** e **django-cors-headers** para funcionar como API REST.

- `rest_framework` — facilita a criação de endpoints REST
- `corsheaders` — permite que o frontend (Next.js em `localhost:3000`) acesse a API

## Configurações já aplicadas

- Idioma: `pt-br`
- Fuso horário: `America/Sao_Paulo`
- CORS liberado para `http://localhost:3000`
- Banco SQLite padrão

> As configurações de CORS e REST framework estão prontas para uso. A API ainda não tem endpoints definidos — você pode criar seus apps normalmente.

## Como rodar

Dentro da pasta `django/`:

```bash
python3 manage.py runserver
```

ou, se `python3` não funcionar:

```bash
python manage.py runserver
```
