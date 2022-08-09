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

  images: [{
    type: String,
    required: true
  }],

  variant: [{ type: Schema.Types.ObjectId, ref: 'variant', required: true }],

});

const Product = model("Product", ProductSchema);

module.exports = Product;
