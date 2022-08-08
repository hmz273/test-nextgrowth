const Product = require('../model/product.model')

exports.createProduct = async (req, res) => {
    const { reference, name, description } = req.body;
    try {
    //   if (!req.files) {
    //     return res.status(400).send({
    //       error: true,
    //       message: 'Please upload at least one image',
    //     });
    //   }
  
      
  
      const isProductExists = await Product.findOne({
        name,
      });
  
      if (isProductExists) {
        return res.status(400).json({
          error: true,
          message: 'Product name already exists',
        });
      }
  
    //   const images = req.files.map(
    //     (image) => `${req.protocol}://${req.host}/${image.path}`
    //   );
  
      const product = new Product({ name, description, reference });
    //   , image: images
      await product.save((err, data) => {
        if (err) {
          return res.status(500).json({
            error: true,
            message: 'Error creating Product',
            err,
          });
        }
        return res.status(201).json({
          error: false,
          message: 'Product created successfully',
          data,
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };