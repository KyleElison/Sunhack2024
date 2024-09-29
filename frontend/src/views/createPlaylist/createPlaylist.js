import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreatePlaylist = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [likes, setLikes] = useState(0);
  const [songs, setSongs] = useState([{ name: '', artist: '' }]);

  const navigate = useNavigate();


  // Handle form submission
  const submitForm = async (e) => {
    e.preventDefault();

    const playlistData = {
      name,
      username,
      songs,
    };

    // Send POST request to Django backend
    axios.post("/api/createPlaylist/", JSON.stringify(playlistData)).then( (res) => {
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
    <div>
      <h2>Create a Playlist</h2>
      <form onSubmit={submitForm}>
        <label>Playlist Name:</label><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

        <label>Username:</label><br />
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />

        <h3>Add Songs</h3>
        {songs.map((song, index) => (
          <div key={index}>
            <label>Song Name:</label><br />
            <input
              type="text"
              name="name"
              value={song.name}
              onChange={(e) => handleSongChange(index, e)}
            /><br />

            <label>Artist Name:</label><br />
            <input
              type="text"
              name="artist"
              value={song.artist}
              onChange={(e) => handleSongChange(index, e)}
            /><br /><br />
          </div>
        ))}

        <button type="button" onClick={addSongField}>Add Another Song</button><br /><br />

        <button type="submit">Create Playlist</button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
