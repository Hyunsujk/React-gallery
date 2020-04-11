import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  render() {
    const isClicked = this.props.gallery.isClicked;
    let content;
    if (isClicked) {
      content = this.props.gallery.description;
    } else {
      content = <img src={this.props.gallery.path} alt="gallery" />;
    }
    return (
      <div>
        <div onClick={this.props.contentClicked(this.props.gallery.id)}>
          {content}
        </div>
        <p>Likes:{this.props.gallery.likes}</p>
        <button onClick={this.props.updateGalleryLikes(this.props.gallery.id)}>
          Like
        </button>
      </div>
    );
  }
}

export default GalleryItem;
