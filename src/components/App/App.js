import React, { Component } from "react";
import "./App.css";
import axios from "axios";

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
        <img src="images/goat_small.jpg" />
      </div>
    );
  }
}

export default App;
