import { Link } from 'react-router-dom';
import './home.css';


const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to Music World</h1>
                <p>Your go-to place for creating and managing playlists!</p>
                
                <div className="home-links">
                    <Link className="home-link" to="/playlists">View Playlists</Link>
                    <Link className="home-link create" to="/createPlaylist">Create a Playlist!</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
