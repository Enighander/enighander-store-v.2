module.exports = app => {
    const products = require ("../controllers/product.controller.js");
    const router = require("express").Router();

    router.get("/", products.findAll);

    router.post("/", products.create);

    router.put("/:id", products.update);

    app.use('/api/products', router);
};

