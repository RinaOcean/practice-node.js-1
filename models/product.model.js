const { Schema, model } = require("mongoose");

const product = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Product = model("products", product);

module.exports = Product;
