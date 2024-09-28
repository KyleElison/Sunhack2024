from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
    
class Song(models.Model):
    name = models.CharField(max_length=200)
    artist = models.CharField(max_length=100)

    def _str_(self):
        return self.name


class Playlist(models.Model):
    name = models.CharField(max_length=200)
    user = models.CharField(max_length=100) 
    likes = models.IntegerField()

class SongPlaylists(models.Model):
    playlistId = models.IntegerField()
    songId = models.IntegerField()