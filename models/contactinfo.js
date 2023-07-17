let mongoose = require('mongoose');

let contactModel=mongoose.Schema(
{
    "Firstname": String,
    "Lastname": String,
    "Email": String,
    "Mobile": String,
    "Message": String
},
{
    collection: "Contacts"
}
);

module.exports = mongoose.model('Contacts', contactModel);