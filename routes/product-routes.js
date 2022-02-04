const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Product = require("../models/product-model");

// POST route => to create a new product
router.post("/products", (req, res, next) => {
  const { productName, color, price } = req.body;
  Product.create({
    productName,
    color,
    price,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET route => to get all the products
router.get("/products", (req, res, next) => {
  Product.find()

    .then((allTheProducts) => {
      res.json(allTheProducts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT route => to update a specific product
// router.put("/products/:id", (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Product.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => {
//       res.json({
//         message: `Product with ${req.params.id} is updated successfully.`,
//       });
//     })
//     .catch((error) => {
//       res.json(error);
//     });
// });

// DELETE route => to delete a specific product
// router.delete("/products/:id", (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Product.findByIdAndRemove(req.params.id)
//     .then(() => {
//       res.json({
//         message: `Product with ${req.params.id} is removed successfully.`,
//       });
//     })
//     .catch((error) => {
//       res.json(error);
//     });
// });

module.exports = router;
