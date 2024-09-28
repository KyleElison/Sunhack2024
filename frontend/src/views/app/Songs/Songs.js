import React from 'react';
import '../../App.css';
import Song from '../Song';

function Songs() {
    
  // Example array of song data
  const songsData = [
    { title: "Song 1", artist: "Artist 1", album: "Album 1", duration: "3:45" },
    { title: "Song 2", artist: "Artist 2", album: "Album 2", duration: "4:20" },
    { title: "Song 3", artist: "Artist 3", album: "Album 3", duration: "3:30" },
  ];

  return (
    <div className="songs-page">
      <h1>Songs</h1>
      {songsData.map((song, index) => (
        <Song
          key={index}
          title={song.title}
          artist={song.artist}
          album={song.album}
          duration={song.duration}
        />
      ))}
    </div>
  );
}

export default Songs;
