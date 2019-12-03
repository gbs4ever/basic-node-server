const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
const parser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopData = require("./routes/shop");
const path = require("path");

const rootDir = require("./util/path");

app.use(parser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(shopData);
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});
app.listen(3000);
console.log("server has loaded on port 3000");
