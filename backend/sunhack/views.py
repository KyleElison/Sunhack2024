from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo
import json

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


def Songs(request):
    return HttpResponse("Testing...!")

def GetPlaylist(request, playlist_id):
    return HttpResponse(playlist_id)

def GetPlaylists(request):
    playlists = []

    for _ in range(6):
        playlist = Playlist()
        playlists.append(playlist.to_dict())

    return HttpResponse(json.dumps(playlists, indent=2), content_type='application/json')


class Playlist():
    def __init__(self):
        self.name = "name"
        self.username = "username"
        self.likes = 0
        self.songs = [Song().to_dict(), Song().to_dict()]

    def to_dict(self):
        return {
            'name': self.name,
            'username': self.username,
            'likes': self.likes,
            'songs': self.songs 
        }
    
class Song():
    def __init__(self):
        self.name = "name"
        self.artist = "artist_example"

    def to_dict(self):
        return {
            'name': self.name,
            'artist': self.artist 
        }
    