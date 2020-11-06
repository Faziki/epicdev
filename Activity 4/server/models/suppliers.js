// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const Product = require('./products')


// const SupplierSchema = mongoose.Schema(
//     "supplier",
//     new mongoose.Schema({
//         name: {
//             type: String,
//             // required: (true, 'name is required')
//         },
//         email: {
//             type: String,
//             unique: (true, 'email should be unique')
//         },
//         phone: {
//             type: String,
//             unique: (true, 'phone should be unique')
//         },
//         country: {
//             type: String,
//         },
//         city: {
//             type: String,
//         },
//         street: {
//             type: String,
//         },

//         products: [{
//             type: Schema.Types.ObjectId,
//             ref: 'Product'
//         }],

//     })
// );

// module.exports = SupplierSchema;


const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const SupplierSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    country: String,
    city: String,
    street: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],

}, {
    toJSON: {
        virtuals: true,
    },
});

module.exports = mongoose.model('Supplier', SupplierSchema);