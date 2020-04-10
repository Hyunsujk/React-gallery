import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GelleryItem";

class GalleryList extends Component {
  render() {
    return (
      <div>
        <GalleryItem gallery={this.props.gallery} />
      </div>
    );
  }
}

export default GalleryList;
