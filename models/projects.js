let mongoose = require('mongoose');

let projectModel=mongoose.Schema(
{
    "Title" : String,
    "Description" : String,
    "Date" : String
},
{
    collection: "Projects"
}
);

module.exports = mongoose.model('Projects', projectModel);