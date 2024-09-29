import React, { useEffect, useState } from 'react';
import './Songs.css';
import Song from './Song';
import { useParams } from 'react-router-dom';
import axios from "axios";

function Songs() {
  const [playlistData, setPlaylistData] = useState({
    name: "",
    username: "username",
    likes: 0,
    songs: [],
  });

  let { playlistId } = useParams();

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const res = await axios(`/api/getPlaylist/${playlistId}`);
        setPlaylistData(res.data);
      } catch (error) {
        console.error("Error fetching playlist data:", error);
      }
    };

    fetchPlaylistData();
  }, [playlistId]);

  return (
    <div className="playlist">
      <div className="header">
        <h6>Playlist ID: {playlistId}</h6>
        <h2>{playlistData.name}</h2>
        <p>Likes: {playlistData.likes}</p>
      </div>
  
      <div className="song-list">
        <div className="songListHeader">
          <ul>
            <li>Title</li>
            <li>Artist</li>
            <li>Album</li>
            <li>Duration</li>
          </ul>
        </div>
  
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
  );
  
}

export default Songs;
