import React, { Component } from "react";
import Modal from "../../components/Modal";
import axios from "axios";
import './Playlists.css'; // Import the CSS file

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
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
            .get("/api/getPlaylists/")
            .then((res) => {
                this.setState({ playlists: res.data })
                //console.log(res)
                console.log(res.data)
            })
            .catch((err) => console.log(err));
    };

    // toggle = () => {
    //     this.setState({ modal: !this.state.modal });
    // };

    // handleSubmit = (item) => {
    //     this.toggle();

    //     if (item.id) {
    //         axios
    //             .put(`/api/todos/${item.id}/`, item)
    //             .then((res) => this.refreshList());
    //         return;
    //     }
    //     axios
    //         .post("/api/todos/", item)
    //         .then((res) => this.refreshList());
    // };

    // handleDelete = (item) => {
    //     axios
    //         .delete(`/api/todos/${item.id}/`)
    //         .then((res) => this.refreshList());
    // };

    // createItem = () => {
    //     const item = { title: "", description: "", completed: false };

    //     this.setState({ activeItem: item, modal: !this.state.modal });
    // };

    // editItem = (item) => {
    //     this.setState({ activeItem: item, modal: !this.state.modal });
    // };

    renderItems = () => {
        const { viewCompleted } = this.state;
        const newItems = this.state.playlists;

        return newItems.map((item) => (
            <div class="playlistContainer">
                <div class="playlist">
                    <span>
                        <br></br>
                        Playlist Name: {item.name}
                    </span>

                    <span>
                        Username: {item.username}
                    </span>

                    <span>
                        Likes: {item.likes}
                        <div class="firstSongs">
                            {item.songs.length > 0 ? (
                                <>
                                    <span>Song 1: {item.songs[0].name}</span>
                                    <br></br>
                                    <span>Song 2: {item.songs[0].name}</span>
                                </>
                            ) : (
                                <span>No Songs</span>
                            )}
                        </div>
                    </span>
                    <p class="likeButton">Like</p>
                </div>
            </div>
        ));
    };

    render() {
        return (
            <main className="container">
                <h1>Playlists:</h1>
                <br></br>
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