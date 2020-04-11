import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GelleryItem";

class GalleryList extends Component {
  render() {
    const galleryList = this.props.gallery.map((gallery, index) => {
      return (
        <GalleryItem
          key={index}
          gallery={gallery}
          updateGalleryLikes={this.props.updateGalleryLikes}
          contentClicked={this.props.contentClicked}
        />
      );
    });
    return <div>{galleryList}</div>;
  }
}

export default GalleryList;
