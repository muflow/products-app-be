const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: String,
  color: String,
  price: String,
  
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;