var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var sneakerSchema = new Schema({ 
    sku: { 
        type: String
    },
    name:{ 
        type: String, 
        required: true 
    }, 
    size: { 
        type: String, 
        required: true
    }, 
    price: { 
        type: String,
        required: true
    }
}); 

module.exports = mongoose.model('Sneaker', sneakerSchema); 