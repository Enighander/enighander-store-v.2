const Product = require("../models/product.model.js");

exports.create = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Product cant be empty!"
    });
  }

  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    discription: req.body.discription,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category,
    color: req.body.color,
  });

  Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the products.",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  Product.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Product cant be empty!",
    });
  }

  console.log(reg.body);

  Product.updateById(req.params.id, new Product(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "error updating Product with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
