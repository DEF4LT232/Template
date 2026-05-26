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
from django.http import HttpRequest, HttpResponse  # HttpRequest = dados da requisição, HttpResponse = resposta que devolvemos

def home(request: HttpRequest):  # View da página inicial — recebe uma requisição e devolve uma resposta
    return HttpResponse("teste")  # Resposta HTTP simples com texto "teste"

# urlpatterns mapeia URLs para as views correspondentes
# Ex: quando alguém acessar "http://localhost:8000/", chama a função home()
urlpatterns = [
    path('admin/', admin.site.urls),  # Rota /admin/ — painel administrativo do Django
    path('', home),  # Rota raiz (/)
]
