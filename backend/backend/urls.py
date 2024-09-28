from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from sunhack import views

router = routers.DefaultRouter()
router.register(r'todos', views.TodoView, 'todo')
#router.register(r'testing', views.Songs, 'song')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('testing/', views.Songs, name='song')
]