import React from 'react';
import './Songs.css';
import Song from './Song';

function Songs() {
    
  const playlistData = {
    name: "name",
    username: "username",
    likes: 0,
    songs: [
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      },
      {
        name: "Song One",
        artist: "Artist A",
        album: "Album X",
        duration: "3:30"
      }
    ]
  }
  return (
    <div className="playlist">
      <div className = "header">
        <h6>PLAYLIST</h6>
        <h2>{playlistData.name}</h2>
        <p>Created by: {playlistData.username}</p>
        <p>Likes: {playlistData.likes}</p>
      </div>
      <div className="song-list-container">
        <div className= "songListHeader">
          <ul >
            <li> TITLE </li>
            <li> ARTIST </li>
            <li> ALBUM </li>
            <li> DURATION </li>
          </ul>
        </div>
        <div className="song-list">
            {playlistData.songs.map((song, index) => (
              <Song
                key={index}
                name={song.name}
                artist={song.artist}
                album={song.album}
                duration={song.duration}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Songs;
