const express = require("express");
const router = express.Router();

const { createProduct, deleteProductById, updateProductById, getProductById, getAllProducts, getAllVariants, getVariantById } = require("../controller/product.controller");
const upload = require("../middlewares/upload.middleware");


router.route("/product").post( upload.array("images", 6), createProduct );
router.route("/product").get( getAllProducts );
router.route("/product/:id").get( getProductById );
router.route("/product/:id/variants").get( getAllVariants );
router.route("/product/:id/variant/:id").get( getVariantById );
router.route("/product/:id").patch( updateProductById );
router.route("/product/:id").delete( deleteProductById );

module.exports = router;