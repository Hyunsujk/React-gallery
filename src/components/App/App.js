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
        this.setState(
          {
            galleryItems: response.data,
          },
          () => {
            console.log(this.state.galleryItems);
          }
        );
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

  contentClicked = (id) => (event) => {
    axios
      .put(`/gallery/clicked/${id}`)
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
        <div>
          <GalleryList
            gallery={this.state.galleryItems}
            updateGalleryLikes={this.updateGalleryLikes}
            contentClicked={this.contentClicked}
          />
        </div>
      </div>
    );
  }
}

export default App;
