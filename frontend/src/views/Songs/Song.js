import React from 'react';
import './Songs.css';
import { Link } from 'react-router-dom';

// Define props in the function parameters
const Song = ({title, artist, album, duration }) => {
  return (
    <div className="song-container">
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <p>Album: {album}</p>
      <p>Duration: {duration}</p>
      <Link to={`/song/${title}`}>View Details</Link>
    </div>
  );
};

export default Song;
