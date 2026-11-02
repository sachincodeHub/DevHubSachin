// import produccts data
const products = require("./data");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/product")
    .then(() => {
    console.log("database connect");
    
    })
    .catch((err) => {
    console.log(err);
    
    })

const productSchema = new
    mongoose.Schema({
        name: String,
        price: Number,
        category: String
    });

const Product = mongoose.model(
    "Product",
    productSchema
)
/* insert data 100

Product.insertMany(products)
    .then((data) => {
    console.log("data inserted......");
    
    }) 
    .catch((err) => {
    console.log(err);
    
})
    */
// find the data
Product.find({})
    .then((data) => {
    console.log(data);
    
    })
    .catch((err) => {
    console.log(err);
    
})
    