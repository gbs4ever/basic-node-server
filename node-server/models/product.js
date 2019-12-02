const products = [];

module.exports = class product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  static fetchall() {
    return products;
  }
};
