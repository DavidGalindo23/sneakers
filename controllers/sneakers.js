var Sneaker = require('../models/sneaker'); 

module.exports = { 
    index, 
    buy,
    details,
    show
}; 

function details(req, res){ 
    Sneaker.findById(req.params.id)
    .populate().exec(function(err, sneaker){
        Sneaker.find({_id: {$nin: sneaker}})
        .exec(function(err,sneakers){ 
            // console.log(sneakers)
            res.render('sneakers/details', { 
                sneaker,
                user: req.user
            });
        });
    });
}

function show(req, res){
    // console.log("THIS IS THE CARTS FIRST ITEM:", req.user.cart[0])
    let cart = req.user.cart
   
    
    Sneaker.find({}, function(err, sneakers){

        sneakerDetails = cart.map(sneakerId => {
           
            let filtered  = sneakers.filter(sneaker => {
                console.log(typeof(sneakerId), typeof(sneaker._id), sneakerId.toString(), sneaker._id.toString())
               console.log(sneakerId.toString() == sneaker._id.toString())

                return sneaker._id.equals(sneakerId)
            })
            console.log("FILTERED", filtered)

        })
        console.log("sneakerDetails", sneakerDetails)

        // console.log("cart", req.user.cart, "sneakers", sneakers);


        res.render('sneakers/cart', {
            user: req.user,
            cart: req.user.cart,
            sneakers
        })
    })
}

function index(req,res){ 
    Sneaker.find({}, function(err, sneakers){ 
        res.render('sneakers/index',{ 
            sneakers,
            user: req.user,
            name: req.query.name
        });
    });

}

function buy(req,res){ 
    Sneaker.find({}, function(err, sneakers){ 
        // console.log("hitting")
        res.render('sneakers/buy', { sneakers, user: req.user });
    });
} 