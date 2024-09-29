from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo, Playlist, Song, SongPlaylists
from django.forms.models import model_to_dict
from django.shortcuts import get_object_or_404
import json

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


# def Songs(request):
#     return HttpResponse("Testing...!")

def GetSongs(request):
    querySet = Song.objects.all()
    data = [model_to_dict(instance) for instance in querySet]

    songs = []
    for s in data:
        song = SongModel(s['id'], s['name'], s['artist'])
        songs.append(song.to_dict())

    return HttpResponse(json.dumps(songs, indent=2), content_type='application/json')


def GetPlaylist(request, playlist_id):
    return HttpResponse(playlist_id)

def GetPlaylists(request):
    querySet = Playlist.objects.all()
    data = [model_to_dict(instance) for instance in querySet]
    
    playlists = []
    for item in data:
        playlist = PlaylistModel(item['id'], item['name'], item['name'], item['likes'])

        try:
            querySet = SongPlaylists.objects.filter(playlistId=playlist.id)
            data3 = [model_to_dict(instance) for instance in querySet]
            for data_song in data3:
                try:
                    querySet = Song.objects.get(id=data_song['songId'])
                    data2 = model_to_dict(querySet)
                    song = SongModel(data2['id'], data2['name'], data2['artist'])
                    playlist.songs.append(song.to_dict())
                except:
                    print('song not found for playlist: ', playlist.id, ' and song:', data_song['songId'])
        except:
            print('playlist not found for id:', playlist.id)

        playlists.append(playlist.to_dict())

    return HttpResponse(json.dumps(playlists, indent=2), content_type='application/json')


def likeIncrement(request, playlist_id):
    # Retrieve the playlist by ID
    playlist = get_object_or_404(Playlist, id=playlist_id)
    
    # Increment the likes field
    playlist.likes += 1
    playlist.save()
    
    return HttpResponse({'message': 'Likes updated successfully', 'likes': playlist.likes})


class PlaylistModel():
    def __init__(self, id, name, username, likes):
        self.id = id
        self.name = name
        self.username = username
        self.likes = likes
        self.songs = []

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'username': self.username,
            'likes': self.likes,
            'songs': self.songs 
        }
    
class SongModel():
    def __init__(self, id, name, artist):
        self.id = id
        self.name = name
        self.artist = artist

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'artist': self.artist 
        }
    