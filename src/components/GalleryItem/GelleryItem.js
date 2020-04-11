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
      <div className="sideByside-GalleryItem">
        <div onClick={this.props.contentClicked(this.props.gallery.id)}>
          <div className="content-GalleryItem">{content}</div>
        </div>

        <div className="likeDisplay-GalleryItem sideByside-GalleryItem">
          <button
            className="right-GalleryItem"
            onClick={this.props.updateGalleryLikes(this.props.gallery.id)}
          >
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            Love it!
          </button>
          {this.props.gallery.likes === 1 ? (
            <p>{this.props.gallery.likes} person loved it!</p>
          ) : this.props.gallery.likes > 1 ? (
            <p>{this.props.gallery.likes} people loved it!</p>
          ) : (
            <p>Be the first one to love it!</p>
          )}
        </div>
      </div>
    );
  }
}

export default GalleryItem;
