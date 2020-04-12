const express = require("express");
const router = express.Router();
const galleryItems = require("../modules/gallery.data");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// increment number of likes in gallery.data.js when like button is clicked.
router.put("/like/:id", (req, res) => {
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
});

// update status of isClicked in gallery.data.js every time the content is clicked.
router.put("/clicked/:id", (req, res) => {
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      if (galleryItem.isClicked == true) {
        galleryItem.isClicked = false;
      } else if (galleryItem.isClicked == false) {
        galleryItem.isClicked = true;
      }
    }
  }
  res.sendStatus(200);
}); // END PUT Route

// GET Route
// get the array of galleryItems
router.get("/", (req, res) => {
  res.send(galleryItems);
}); // END GET Route

module.exports = router;
