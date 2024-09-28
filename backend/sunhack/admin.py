from django.contrib import admin
from .models import Todo, Song, SongPlaylists, Playlist

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

class SongAdmin(admin.ModelAdmin):
    list_display = ('name', 'artist')

class SongPlaylistAdmin(admin.ModelAdmin):
    list_display = ('playlistId', 'songId')

class PlaylistAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'likes')

# Register your models here.

admin.site.register(Todo, TodoAdmin)
admin.site.register(Song ,SongAdmin)
admin.site.register(Playlist, PlaylistAdmin)
admin.site.register(SongPlaylists, SongPlaylistAdmin)