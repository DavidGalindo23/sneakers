var Sneaker = require('../models/sneaker'); 
var User = require('../models/user');

module.exports = {
    update
};

function update(req,res){ 
    // console.log(req)
    //user clicks on submit button. obejct will post on cart view
    //and user wiil be redirected back to the buy view.
    User.findById(req.user.id, function(err, user){ 
        // console.log(req.body);
        user.cart.push(req.body);
        user.save();
        console.log(user)
        res.render('/buy');
        // user.cart.push (req.body);
    })
}