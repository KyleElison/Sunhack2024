// App.js
import {  BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Playlists from '../playlists/Playlists'
import CreatePlaylist from '../createPlaylist/createPlaylist'
import Songs from '../Songs/Songs'
import Home from '../home/home';
 
const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />}> </Route>
          <Route path="/createPlaylist" element={<CreatePlaylist />}> </Route>
          <Route path="/Songs" element={<Songs />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
 
export default App;