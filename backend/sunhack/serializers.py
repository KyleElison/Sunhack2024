from rest_framework import serializers
from .models import Todo, Song, SongPlaylists, Playlist

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ('id', 'name', 'artist')

class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = ('id', 'name', 'users', 'likes')

class SongPlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongPlaylists
        fields = ('playlistId', 'songId')