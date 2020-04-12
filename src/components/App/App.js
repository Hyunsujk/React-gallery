import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryItems: [],
  };
  // when component is mounted, do getGallery function and update galleryItems with up to date data
  componentDidMount() {
    this.getGallery();
  }

  //
  // API SERVER CALLS
  //----------------
  // get data from server side and update galleryItems with the response.
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

  // update number of likes when the like button is clicked for the item of the id
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

  // update status of clicked when the item of the id is clicked.
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
            // gallery in galleryList is linked up with galleryItems in app.js
            gallery={this.state.galleryItems}
            // updateGalleryLikes in galleryList is linked up with updateGalleryLikes function in app.js
            updateGalleryLikes={this.updateGalleryLikes}
            // contentClicked in galleryList is linked up with contentClicked function in app.js
            contentClicked={this.contentClicked}
          />
        </div>
      </div>
    );
  }
}

export default App;
