const Product = require("../model/product.model");

exports.createProduct = async (req, res, next) => {
  try {
    const { reference, description, name, variantId } = req.body;
    const images = req.files.map((file) => {
      return file.path;
    });
    await Product.findById(variantId) 
      .populate('variant')
      .exec(async (err, product) => {
        if (err) {
          return res.status(401).json({
            error: true,
            message: err.message,
            data: null,
          });
        }

    // product already exists
    if (product) {
      res.status(409); // conflict error
      const error = new Error("product already exists");
      return next(error);
    }

    const newProduct = await Product.create({
      reference,
      name,
      description,
      variant: variantId,
      images: images,
    });
    res.status(201).json(newProduct);
    })
  } catch (error) {
    next(error);
  }
};

exports.updateProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ...req.body,
      },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({
        error: true,
        message: 'error to update the product',
      });
    }
    res.status(200).json({
      error: false,
      message: 'product has been updated successfully',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
      data: null,
    });
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        error: true,
        message: `Cannot find product with this id ${id}`,
        data: null,
      });
    }
    res.status(200).json({
      error: false,
      message: null,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
      data: null,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.status(404).json({
        error: true,
        message: 'products not found',
        data: null,
      });
    }
    res.status(200).json({
      error: false,
      message: 'products retrieved successfully',
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
      data: null,
    });
  }
};

exports.deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        error: true,
        message: 'product not found',
        data: null,
      });
    }
    res.status(200).json({
      error: false,
      message: 'product deleted successfully',
      product,
    });
  } catch (error) {
    res.status(500).json({
      error: false,
      message: error.message,
      data: null,
    });
  }
};

exports.getAllVariants = async (req, res) => {
  const { id } = req.params;
  try {
    const variants = await Product.findById(id).populate({
      path: 'variant',
    });
    // console.log(variants.);
    if (!variants) {
      return res.status(404).json({
        error: true,
        message: 'variants not found',
        data: null,
      });
    }
    res.status(200).json({
      error: false,
      message: 'variants retrieved successfully',
      data: variants,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
      data: null,
    });
  }
};

exports.getVariantById = async (req, res) => {
  const { id } = req.params;
  try {
    const variant = await Product.findById(id).populate({
      path: 'variant',
      select:
        'price sku specification',
    });
    console.log(variant);

    if (!variant) {
      return res.status(404).json({
        error: true,
        message: 'variant not found',
        data: null,
      });
    }
    res.status(200).json({
      error: false,
      message: 'variant retrieved successfully',
      data: variante,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
      data: null,
    });
  }
};