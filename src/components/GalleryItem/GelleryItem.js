import React, { Component } from "react";

class GalleryItem extends Component {
  render() {
    const gallery = this.props.gallery.map((gallery, index) => {
      return (
        <div key={index}>
          <img src={gallery.path} alt="animal" />
        </div>
      );
    });
    return <div>{gallery}</div>;
  }
}

export default GalleryItem;
