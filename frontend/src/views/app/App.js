// App.js
import {  BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Playlists from '../playlists/Playlists'
import Home from '../home/home';
 
const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
 
export default App;