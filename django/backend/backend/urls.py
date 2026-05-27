"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
# HttpRequest = objeto com os dados da requisição HTTP que o cliente enviou
# JsonResponse = função que monta uma resposta HTTP com JSON
from django.http import HttpRequest, JsonResponse

# VIEW — é uma função que recebe uma requisição HTTP e devolve uma resposta HTTP.
# O Django chama essa função automaticamente quando alguém acessa a URL correspondente.
#
# request: HttpRequest contém tudo que o navegador enviou (cabeçalhos, método, body, etc.)
# A view processa a lógica (consultar banco, etc.) e devolve um JsonResponse
def home(request: HttpRequest):
    listaDeBaldes = [
        {"name": "pedro", "balde": True},
        {"name": "nadil", "balde": True},
        {"name": "hiago", "balde": True}
    ]

    # JsonResponse() converte um dicionário Python para JSON automaticamente
    # e devolve como resposta HTTP. O Django cuida de:
    #   1. Serializar o dict para JSON (transformar Python em texto JSON)
    #   2. Definir o Content-Type como application/json
    #   3. Montar a resposta HTTP completa com cabeçalhos corretos
    return JsonResponse({
        "baldes": listaDeBaldes
    })

# urlpatterns é a lista que mapeia URLs para as views correspondentes.
# Cada "path()" associa um caminho de URL à função que deve tratá-la.
# O Django percorre essa lista de cima pra baixo até achar a primeira rota que bate.
urlpatterns = [
    path('admin/', admin.site.urls),   # Rota /admin/ — painel administrativo do Django
    path('', home),                    # Rota raiz (/) — chama a view home()
]
