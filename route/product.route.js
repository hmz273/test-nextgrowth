const express = require("express");
const router = express.Router();

const { createProduct } = require("../controller/product.controller");

router.route("/product").post( createProduct );

module.exports = router;