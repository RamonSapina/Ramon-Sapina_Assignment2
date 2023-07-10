let mongoose = require('mongoose');

let productModel=mongoose.Schema(
{
    "name" : String,
    "company" : String,
    "price" : Number
},
{
    collection: "products"
}
);

module.exports = mongoose.model('Product', productModel);
