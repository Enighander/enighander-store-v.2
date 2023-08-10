module.exports = app => {
    const products = require ("../controllers/product.controller.js");
    const router = require("express").Router();

    router.get("/", products.findAll);

    router.post("/", products.create);

    app.use('/api/products', router);
};

