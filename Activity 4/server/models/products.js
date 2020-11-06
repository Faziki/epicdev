// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const supplier = require('./suppliers')



// const ProductSchema = mongoose.model(
//     "product",
//     new mongoose.Schema({
//         supplier: {
//             type: Schema.Types.ObjectId,
//             ref: supplier
//         },
//         name: {
//             type: String
//         },
//         sku: {
//             type: String,
//             // unique: true
//         },
//         price: {
//             type: Number
//         }
//     })
// );

// module.exports = ProductSchema;


const Supplier = require('./suppliers');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    name: String,
    sku: String,
    price: String,
    Supplier: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier'
    }
}, {
    toJSON: {
        virtuals: true,
    },
});

module.exports = mongoose.model('Product', ProductSchema);
// export default UserModel;