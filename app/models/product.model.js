const sql = require("./db.js");

const Product = function(product) {
    this.name = product.name;
    this.discription = product.discription;
    this.price = product.price;
    this.image = product.image;
    this.category = product.category;
    this.color = product.color;
};

Product.getAll = (name, result) => {
    let query = "SELECT * FROM product";
  
    if (name) {
      query += ` WHERE name LIKE '%${name}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("name: ", res);
      result(null, res);
    });
};

Product.create = (newProduct, result) => {
    sql.query("INSERT INTO product SET ?", newProduct, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created products: ", { id: res.insertId, ...newProduct });
      result(null, { id: res.insertId, ...newProduct });
    });
};

module.exports = Product;
