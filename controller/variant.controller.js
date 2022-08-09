const Variant = require("../model/variant.model");

exports.createVariant = async (req, res, next) => {
  try {
    const { price, sku, specification } = req.body;

    

    // product already exists
    

    const newVariant = await Variant.create({
      price,
      specification,
      sku,
    });
    res.status(201).json(newVariant);
  } catch (error) {
    next(error);
  }
};
