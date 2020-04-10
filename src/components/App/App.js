import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryItems: [],
  };

  componentDidMount() {
    console.log("in mount");
    this.getGallery();
  }
  //
  // API SERVER CALLS
  //----------------

  getGallery() {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        console.log("server response", response.data);
        this.setState(
          {
            galleryItems: [...response.data],
          },
          () => {
            console.log("new gallery list", this.state.galleryItems);
          }
        );
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList gallery={this.state.galleryItems} />
        {/* <img src="images/goat_small.jpg" />
        <img src="/images/cat.jpg" /> */}
      </div>
    );
  }
}

export default App;
