const mongodb = require('mongoose');
const schema = mongodb.Schema;

var productSchema = new schema({
    ID : {type : Number},
    name : {type : String},
    LestName : {type : String}

});

const ProductModel = mongodb.model('information', productSchema);

module.exports = ProductModel;