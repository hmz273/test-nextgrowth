const { Schema, model } = require("mongoose");

const variantSchema = new Schema({
  sku: {
    type: String,
    required: true,
  },

  specification: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },


});

const variant = model("variant", variantSchema);

module.exports = variant;
