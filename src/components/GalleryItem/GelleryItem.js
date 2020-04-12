import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  render() {
    const isClicked = this.props.gallery.isClicked;
    let content;
    // if isClicked is true, set content to description, if it's false, set content to image
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
          {/* when button is clicked, run updateGalleryLikes function with the id of the item */}
          <button
            className="right-GalleryItem"
            onClick={this.props.updateGalleryLikes(this.props.gallery.id)}
          >
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            Love it!
          </button>
          {/* if number of like is 1, display 1 person loved it, if more than 1, display people loved it, if none, display be the first one to love it. */}
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
