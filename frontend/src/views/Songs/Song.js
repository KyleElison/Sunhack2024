import React from 'react';
import './Song.css';
import { Link } from 'react-router-dom';

// Define props in the function parameters
const Song = ({name, artist, album, duration }) => {
  return (
    <div className="song-container">
      <div className="song-item">{name}</div>
      <div className="song-item">{artist}</div>
      <div className="song-item">{album}</div>
      <div className="song-item">{duration}</div>
      {/* <Link to={`/song/${name}`}>View Details</Link> */}
    </div>
  );
};

export default Song;
