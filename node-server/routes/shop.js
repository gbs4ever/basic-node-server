const express = require("express");
const path = require("path");
const router = express.Router();
const data = require("./admin");

router.get("/", (req, res, next) => {
  const products = data.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;

console.log(data.products);
