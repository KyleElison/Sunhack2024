import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './createSong.css';

const CreatePlaylist = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [songs, setSongs] = useState([{ name: '', artist: '' }]);

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  // Handle form submission
  const submitForm = async (e) => {
    e.preventDefault();

    const playlistData = {
      name,
      username,
      songs,
    };

    // Send POST request to Django backend
    axios.post("/api/createSong/", JSON.stringify(playlistData)).then( (res) => {
        console.log(res);
        navigate('/Songs/' + res.data)
    });
  };

  // Handle adding a new song input field
  const addSongField = () => {
    setSongs([...songs, { name: '', artist: '' }]);
  };

  // Handle song field change
  const handleSongChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSongs = [...songs];
    updatedSongs[index][name] = value;
    setSongs(updatedSongs);
  };

  return (
    <div className="create-playlist-container">
  <button className="back-button" onClick={goHome}>Back</button>
  <h2>Create a Playlist</h2>
  <form className="playlist-form" onSubmit={submitForm}>
    <div className="form-group">
      <label>Playlist Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
    </div>

    <div className="form-group">
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
    </div>

    <h3>Add Songs</h3>
    {songs.map((song, index) => (
      <div key={index} className="song-group">
        <div className="form-group">
          <label>Song Name:</label>
          <input
            type="text"
            name="name"
            value={song.name}
            onChange={(e) => handleSongChange(index, e)}
          />
        </div>

        <div className="form-group">
          <label>Artist Name:</label>
          <input
            type="text"
            name="artist"
            value={song.artist}
            onChange={(e) => handleSongChange(index, e)}
          />
        </div>
      </div>
    ))}

    <button className="add-song-button" type="button" onClick={addSongField}>
      Add Another Song
    </button>

    <button className="submit-button" type="submit">
      Create Playlist
    </button>
  </form>
</div>
  )};

export default CreatePlaylist;
