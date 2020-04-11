import React, { Component } from "react";

class GalleryItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.gallery.path} alt="animal" />
        <p>Likes:{this.props.gallery.likes}</p>
        <button onClick={this.props.updateGalleryLikes(this.props.gallery.id)}>
          Like
        </button>
      </div>
    );
  }
}

export default GalleryItem;
