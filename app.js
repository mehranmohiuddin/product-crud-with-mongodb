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
const port = process.env.PORT || 3001

app.use(express.json());

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

app.listen(port, () => {
    console.log("Server is running on port", port);
});

module.exports = app;