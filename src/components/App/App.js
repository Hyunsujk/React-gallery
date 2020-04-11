import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryItems: [],
  };

  componentDidMount() {
    this.getGallery();
  }
  //
  // API SERVER CALLS
  //----------------

  getGallery() {
    axios
      .get("/gallery")
      .then((response) => {
        this.setState({
          galleryItems: response.data,
        });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  updateGalleryLikes = (id) => (event) => {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        this.getGallery();
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList
          gallery={this.state.galleryItems}
          updateGalleryLikes={this.updateGalleryLikes}
        />
      </div>
    );
  }
}

export default App;
