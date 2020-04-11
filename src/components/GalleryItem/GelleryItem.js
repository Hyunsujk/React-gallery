import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  flipContent = () => {
    console.log("flipping content");
  };
  render() {
    return (
      <td>
        <tr onClick={this.flipContent}>
          <img src={this.props.gallery.path} alt="picture" />
        </tr>
        <tr>
          <p>Likes:{this.props.gallery.likes}</p>
          <button
            onClick={this.props.updateGalleryLikes(this.props.gallery.id)}
          >
            Like
          </button>
        </tr>
      </td>
    );
  }
}

export default GalleryItem;
