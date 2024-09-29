import React, { useEffect, useState, useRef } from 'react';
import './Songs.css';
import Song from './Song';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

function Songs() {
  const [playlistData, setPlaylistData] = useState({
    name: "",
    username: "username",
    likes: 0,
    songs: [],
  });

  const navigate = useNavigate();
  const songListRef = useRef(null);

  const goHome = () => {
    navigate('/');
  };

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

  useEffect(() => {
    if (songListRef.current) {
      songListRef.current.scrollTop = songListRef.current.scrollHeight;
    }
  }, [playlistData.songs]);
  

  
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState({ name: '', artist: '', playlistId: playlistId })


  // Handle adding a new song input field
  const addSong = () => {
    setSongs([...songs, newSong]);
    submitSong(newSong);
    console.log('hihihoho');
    console.log(newSong);
    setNewSong({ name: '', artist: '', playlistId: playlistId } );
  };

  // Handle song field change
  const handleSongChange = (e) => {
    const { name, value } = e.target;
    console.log('name: ' + name)
    console.log('value: ' + value);
    setNewSong((prevSong) => ({
      ...prevSong,
      [name]: value,
    }))
  };

  // Handle form submission
  const submitSong = async (e) => {

    setSongs([...songs, newSong]);

    // Send POST request to Django backend
    axios.post("/api/createSong/", JSON.stringify(newSong)).then( (res) => {
        console.log(res);
        setPlaylistData((prevData) => ({ ...prevData, songs: [...prevData.songs, newSong] }));
        });
    
    setNewSong({ name: '', artist: '', playlistId: playlistId } );
  };

  return (
    <div className="playlist">
      <button className="back-button" onClick={goHome}>Back</button>
  
      <div className="header">
        <h2>{playlistData.name}</h2>
        <p>Likes: {playlistData.likes}</p>
      </div>
  
      <div className="song-list" ref={songListRef} >
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

      <form onSubmit={submitSong}>
        <h3>Add Songs</h3>
            <div className="song-group">
              <div className="form-group">
                <label>Song Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newSong.name}
                  onChange={(e) => handleSongChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Artist Name:</label>
                <input
                  type="text"
                  name="artist"
                  value={newSong.artist}
                  onChange={(e) => handleSongChange(e)}
                />
              </div>
            </div>
          

          <button className="add-song-button" type="button" onClick={addSong}>
            Add Song
          </button>
      </form>

    </div>
  );
  
  
}

export default Songs;
