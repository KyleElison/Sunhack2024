import React, { Component } from "react";
import Modal from "../../components/Modal";
import axios from "axios";
import './Playlists.css'; // Import the CSS file
import { Link } from "react-router-dom";

class Playlists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: false,
            playlists: [],
            modal: false,
            activeItem: {
                title: "",
                description: "",
                completed: false,
            },
            typedKeys: []  // To track the sequence of typed keys
        };
    }

    componentDidMount() {
        this.refreshList();
        window.addEventListener('keydown', this.handleKeyDown);  // Listen for key presses
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);  // Clean up the event listener
    }

    refreshList = () => {
        axios
            .get("/api/getPlaylists/")
            .then((res) => {
                this.setState({ playlists: res.data });
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    handleKeyDown = (e) => {
        const { typedKeys } = this.state;
        const nextTypedKeys = [...typedKeys, e.key].slice(-5);  // Keep only the last 5 characters

        // Check if the last typed characters match "crook"
        if (nextTypedKeys.join('').toLowerCase() === 'crook') {
            this.setState({ name: true });
            console.log('Typed crook!');
        }

        this.setState({ typedKeys: nextTypedKeys });
    };

    likeIncrement(id) {
        if (this.state.name) {
            axios({
                method: 'get',
                url: "/api/likeIncrementz/" + id,
            }).then(() => {
                this.refreshList();
            });
        } else {
            axios({
                method: 'get',
                url: "/api/likeIncrement/" + id,
            }).then(() => {
                this.refreshList();
            });
        }

    }

    renderItems = () => {
        const newItems = this.state.playlists;
        const linkThing = "../Songs/";



        return newItems.map((item) => (
            <div className="playContainer" key={item.id}>
                <div className="me">
                    <span className="playlist-link">
                        <br />
                        <Link to={linkThing + item.id}>
                            Playlist Name: {item.name}
                        </Link>
                    </span>
        
                    <span>
                        Username: {item.username}
                    </span>
        
                    <span>
                        Likes: {item.likes}
                        <div className="firstSongs">
                            {item.songs.length > 0 ? (
                                <span>Song 1: {item.songs[0].name}</span>
                            ) : (
                                <span>No Songs</span>
                            )}
                        </div>
                    </span>
                    <button className="likeButton" onClick={() => this.likeIncrement(item.id)}>
                        Like
                    </button>
                </div>
            </div>
        ));
        
    };

    render() {
        return (
            <main className="container">
                <Link class="hometing" to="../">Home</Link>
                <h1>Playlists</h1>
                <br />
                <ul>
                    {this.renderItems()}
                </ul>
                {this.state.modal ? (
                    <Modal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
            </main>
        );
    }
}

export default Playlists;
