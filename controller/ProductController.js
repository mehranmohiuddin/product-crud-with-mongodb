const ProductModel = require("../models/Products");

exports.getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.json({ data: products, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body);
        res.json({ status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};