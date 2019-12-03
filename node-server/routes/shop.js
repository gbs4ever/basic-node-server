const express = require("express");
const path = require("path");
const router = express.Router();

const prodcutsController = require("../controllers/products");
router.get("/", prodcutsController.getProducts);

module.exports = router;
