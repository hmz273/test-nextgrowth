const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  reference: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  

});

const Product = model("Product", ProductSchema);

module.exports = Product;
