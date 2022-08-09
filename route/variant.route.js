const express = require("express");
const router = express.Router();

const { createVariant } = require("../controller/variant.controller");


router.route("/variant").post( createVariant );

module.exports = router;