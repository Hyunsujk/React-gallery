// import react and galleryItem
import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GelleryItem";

class GalleryList extends Component {
  render() {
    // go through every single item in gallery and store that list as galleryList
    const galleryList = this.props.gallery.map((gallery, index) => {
      return (
        <GalleryItem
          // key is index
          key={index}
          // gallery is gallery
          gallery={gallery}
          // updateGalleryLikes is linked up to updateGalleryLikes function in app.js
          updateGalleryLikes={this.props.updateGalleryLikes}
          // contentClicked is linked up to contentClicked function in app.js
          contentClicked={this.props.contentClicked}
        />
      );
    });
    return <div>{galleryList}</div>;
    // return variable galleryList
  }
}

export default GalleryList;
