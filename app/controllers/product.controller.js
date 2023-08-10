const Product = require("../models/product.model.js");

exports.create = (req, res) => {

    // Create a Product
    const product  = new Product({
        id: req.body.id,
        name: req.body.name,
        discription: req.body.discription,
        price: req.body.price,
        image: req.body.image,
        category: req.body.category,
        color: req.body.color
      });

   // Save Product in the database
    Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the products."
      });
    else res.send(data);
  });  
};

    // Retrieve all Products from the database (with condition).
exports.findAll = (req, res) => {
    const name = req.query.name;
    Product.getAll(name, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products."
        });
      else res.send(data);
    });
};