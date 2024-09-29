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
    path('api/getPlaylists/', views.GetPlaylists, name='playlists'),
    path('api/getPlaylist/<int:playlist_id>', views.GetPlaylist, name='playlist'),
    path('api/likeIncrement/<int:playlist_id>', views.likeIncrement, name='likeIncrement'),
    path('api/likeIncrementz/<int:playlist_id>', views.easterEgg, name='likeIncrementz'),
    path('api/getSongs/', views.GetSongs, name='songs'),
    path('api/createPlaylist/', views.createPlaylist, name='createPlaylist')
    


]