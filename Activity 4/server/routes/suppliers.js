const router = require("express").Router();
const Supplier = require("../models/suppliers");
const products = require("../models/products");

// POST request - Create a new supplier
router.post("/suppliers", async (req, res) => {
    try {
        let supplier = new Supplier();
        supplier.name = req.body.name;
        supplier.email = req.body.email;
        supplier.phone = req.body.phone;
        supplier.country = req.body.country;
        supplier.city = req.body.city;
        supplier.street = req.body.street;
        supplier.products = req.body.products;

        await supplier.save();
        res.json({
            status: true,
            message: "Successfully created a new Supplier"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
router.post("/addsupplier", async (req, res) => {
    try {
        const supplier = new Supplier(req.body);
        await supplier.save();
        res.status(201).json({
            status: true,
            data: supplier,
            message: "Successfully created a new Supplier"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// GET request - GET All supplier
router.get("/suppliers", async (req, res) => {
    try {
        let suppliers = await Supplier.find();

        res.json({
            success: true,
            message: "GET ALL Supplier successfully initiated",
            suppliers: suppliers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});
// router.get("/suppliers", function async (req, res) {
//     db.Supplier.find({})
//         .then(function (dbsuppliers) {
//             res.json(dbsuppliers);
//         })
//         .catch(function (err) {
//             res.json(err);
//         })
// });

// GET request - GET single supplier
router.get("/suppliers/:id", async (req, res) => {
    try {
        let supplier = await Supplier.findOne({
            _id: req.params.id
        })
        res.json({
            success: true,
            message: "GET single supplier successfully initiated",
            supplier: supplier
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// PUT request - Modify single supplier
router.put("/suppliers/:id", async (req, res) => {
    try {
        let supplier = await Supplier.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                country: req.body.country,
                city: req.body.city,
                street: req.body.street,
                products: req.body.products,


            }
        }, {
            upsert: true
        });

        res.json({
            success: true,
            message: "UPDATED a single supplier successfully initiated",
            updatedsupplier: supplier
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// DELETE request - DELETE single supplier
router.delete("/suppliers/:id", async (req, res) => {
    try {
        let deleteSupplier = await Supplier.findOneAndDelete({
            _id: req.params.id
        });

        if (deleteSupplier) {
            res.json({
                status: true,
                message: "Single Supplier deleted successfully"
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