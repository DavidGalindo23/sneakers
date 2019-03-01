var Sneaker = require('../models/sneaker'); 
var User = require('../models/user');

module.exports = {
    update
};

function update(req,res){ 
    req.user.cart.push(req.body._id); 
        req.user.save(function(err){ 
            console.log(req.user.cart)
            res.redirect('sneakers/buy')
        })
}