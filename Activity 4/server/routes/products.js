const router = require("express").Router();
const Product = require("../models/products");
const Supplier = require("../models/suppliers");


// POST request - Create a new Product
router.post("/products", async (req, res) => {
    try {
        let product = new Product();
        product.supplier = req.body.supplier;
        product.name = req.body.name;
        product.sku = req.body.sku;
        product.price = req.body.price;

        await product.save();
        res.json({
            status: true,
            message: "Successfully created a new Product"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

router.post("/addproduct", async (req, res) => {
    try {
        const product = new Product(req, res);
        await product.save();
        const supplier = await Supplier.findById({
            _id: product.supplier
        })
        if (!mongoose.Types.ObjectId.isValid(id)) return false;
        supplier.allsupplier.push(product)
        await product.save();
        res.json({
            status: true,
            message: "Successfully created a new Product"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// GET request - GET All Products
router.get("/products", async (req, res) => {
    try {
        let products = await Product.find();
        res.json({
            success: true,
            message: "GET ALL product successfully initiated",
            products: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// GET request - GET single Product
router.get("/products/:id", async (req, res) => {
    try {
        let product = await Product.findOne({
            _id: req.params.id
        })
        res.json({
            success: true,
            message: "GET single product successfully initiated",
            product: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// PUT request - Modify single product
router.put("/products/:id", async (req, res) => {
    try {
        let product = await Product.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                supplier: req.body.supplier,
                name: req.body.name,
                sku: req.body.sku,
                price: req.body.price,

            }
        }, {
            upsert: true
        });

        res.json({
            success: true,
            message: "UPDATED a single product successfully initiated",
            updatedProduct: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// DELETE request - DELETE single product
router.delete("/products/:id", async (req, res) => {
    try {
        let deleteProduct = await Product.findOneAndDelete({
            _id: req.params.id
        });

        if (deleteProduct) {
            res.json({
                status: true,
                message: "Single product deleted successfully"
            });
        } else {}
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
module.exports = router;