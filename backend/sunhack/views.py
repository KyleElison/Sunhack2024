from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo, Playlist
from django.forms.models import model_to_dict
import json

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


def Songs(request):
    return HttpResponse("Testing...!")

def GetPlaylists(request):
    querySet = Playlist.objects.all()
    data = [model_to_dict(instance) for instance in querySet]
    
    playlists = []
    for item in data:
        print(item)
        playlist = PlaylistModel(item['name'], item['name'], item['likes'])
        playlists.append(playlist.to_dict())

    return HttpResponse(json.dumps(playlists, indent=2), content_type='application/json')


class PlaylistModel():
    def __init__(self, name, username, likes):
        self.name = name
        self.username = username
        self.likes = likes
        self.songs = []

    def to_dict(self):
        return {
            'name': self.name,
            'username': self.username,
            'likes': self.likes,
            'songs': self.songs 
        }
    
class Song():
    def __init__(self):
        self.name = ""
        self.artist = ""

    def to_dict(self):
        return {
            'name': self.name,
            'artist': self.artist 
        }
    