const sql = require("./db.js");

const Product = function (product) {
  this.id = product.id;
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

Product.updateById = (id, product, result) => {
  sql.query(
    "UPDATE product SET name = ?, discription = ?, price = ?, image = ?, category = ?, color = ? WHERE id = ?"[
      (product.name,
      product.discription,
      product.price,
      product.image,
      product.category,
      product.color,
      id)
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("update product: ", { id: id, ...product });
      result(null, { id: id, ...tutorial });
    }
  );
};

module.exports = Product;
