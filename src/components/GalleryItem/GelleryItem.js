import React, { Component } from "react";

class GalleryItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.gallery.path} alt="animal" />
      </div>
    );
  }
}

export default GalleryItem;
