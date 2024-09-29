// App.js
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Playlists from '../playlists/Playlists'
import Songs from '../Songs/Songs'
import Home from '../home/home';
import { useParams } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlists" element={<Playlists />}>
        </Route>
        <Route path="/Songs/Songs.js/:playlistId" element={<Songs />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;