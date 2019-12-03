const express = require("express");
const router = express.Router();
const path = require("path");
const prodcutsController = require("../controllers/products");

router.get("/add-product", prodcutsController.addproducts);
router.post("/add-product", prodcutsController.postAddProducts);

module.exports = router;
