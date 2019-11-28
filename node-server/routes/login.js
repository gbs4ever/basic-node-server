const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/form", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "form.html"));
});

router.post("/users", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
