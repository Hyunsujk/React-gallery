import React, { Component } from "react";

class GalleryList extends Component {
  render() {
    const displayGallery = this.props.gallery.map((gallery, index) => {
      return (
        <div key={index}>
          <img src={gallery.path} alt="animal" />
        </div>
      );
    });
    return <div>{displayGallery}</div>;
  }
}

export default GalleryList;
