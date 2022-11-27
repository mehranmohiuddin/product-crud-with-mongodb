const ProductModel = require("../models/Products");

exports.getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.json({ data: products, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};