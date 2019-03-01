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

        //SneakerDetails returns an array of "shoe detail" objects which are the result of the sneakers array being filtered
        // for a particular sneaker, based off the id of the current cart object inside of "map"
        sneakerDetails = cart.map(sneakerId => {
           
        let filtered  = sneakers.filter(sneaker => {
            return JSON.stringify(sneaker._id) == JSON.stringify(sneakerId)
        })
         return filtered[0]
        }).filter(sneaker => sneaker)
       
        console.log("sneakerDetails", sneakerDetails)

        res.render('sneakers/cart', {
            user: req.user,
            cart: req.user.cart,
            sneakers,
            sneakerDetails
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