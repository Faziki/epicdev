//NPM packages declared and used
const cors = require("cors");
const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//define the port number for the application
const port = 3000


//dotenv used to store sensative data in .env file
dotenv.config();

//declare the use of express
const app = express();

// connection to mongoose database using the .env file that contains the connection URI 
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, err => {

    if (err) {
        console.log(err)
    } else {
        console.log("Connected to the Mongoose database")
    }
})

//Middlewares
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));

// Require apis
const productRoutes = require("./routes/products");
const supplierRoutes = require("./routes/suppliers");
// const contactRoutes = require("./routes/contact");
// const locationRoutes = require("./routes/location");
app.use("/api", productRoutes);
// api/products
app.use("/api", supplierRoutes);
// api/suppliers
// app.use("/api", contactRoutes);
// api/contacts
// app.use("/api", locationRoutes);
// api/locations



//Server startup and set to listen at port 3000
app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(` Server is listening at http://localhost:${port}`)
    }

});