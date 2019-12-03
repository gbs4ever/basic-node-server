const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "prodcuts.json"
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, file) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(file));
  });
};

module.exports = class product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchall(cb) {
    getProductsFromFile(cb);
  }
};
