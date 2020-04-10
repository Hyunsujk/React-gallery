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
        this.setState({
          galleryItems: [...response.data],
        });
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
      </div>
    );
  }
}

export default App;
