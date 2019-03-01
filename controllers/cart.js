var Sneaker = require('../models/sneaker'); 
var User = require('../models/user');

module.exports = {
    update
};

function update(req,res){ 
    // console.log(req)
    
    //user clicks on submit button. obejct will post on cart view
    //and user wiil be redirected back to the buy view.
        // console.log(req.body._id)

    req.user.cart.push(req.body._id); 
        req.user.save(function(err){ 
            console.log(req.user.cart)
            res.redirect('sneakers/buy')
        })
}