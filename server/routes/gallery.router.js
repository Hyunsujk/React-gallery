const express = require("express");
const router = express.Router();
const galleryItems = require("../modules/gallery.data");
const pool = require("../modules/pool");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
});

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

// router.put("/:id", (req, res) => {
//     const itemId = req.params.id;
//     const completedItem = req.body;
//     const queryText = `UPDATE "list" SET "item"=$1, "complete"=$2 WHERE "id"=$3;`;
//     pool
//       .query(queryText, [completedItem.item, completedItem.complete, itemId])
//       .then((responseDB) => {
//         res.sendStatus(200);
//       })
//       .catch((err) => {
//         console.log("Error:", err);
//         res.sendStatus(500);
//       });
//   });

// GET Route

router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "gallery" ORDER BY "id" ASC;`;
  pool
    .query(queryText)
    .then((responseDB) => {
      const dbRows = responseDB.rows;
      console.table(dbRows);
      res.send(dbRows);
    })
    .catch((err) => {
      console.log("Error:", err);
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;
