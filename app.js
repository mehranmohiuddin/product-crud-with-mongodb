const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const {
    getAllProducts,
    createProduct,
    deleteProduct,
    getProductById,
    updateProduct
 } = require("./controller/ProductController");
const { update } = require("./models/Products");

const mongoDB = process.env.MONGO_DB;
const app = express();
const router = express.Router();

app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MongoDB");
    }
});

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct);

app.use("/api/products", router);

module.exports = app;