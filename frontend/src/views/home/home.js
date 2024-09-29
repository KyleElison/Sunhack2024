// App.js
import {  BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Playlists from '../playlists/Playlists'
 
const Home = () => {
    return (
        <div>
            <h1>TESTING YAYAYAYAAYAYAYAYAYAYA</h1>
            <Link to="/playlists">Link</Link>
            <Link to="/Songs">Songs</Link>
            <br></br>
            <Link to="/createPlaylist">Create a playlist!</Link>
        </div>
    );
  }
 
export default Home;