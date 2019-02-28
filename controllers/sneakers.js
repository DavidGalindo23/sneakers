var Sneaker = require('../models/sneaker'); 

module.exports = { 
    index, 
    buy,
    details
}; 

function details(req, res){ 
    Sneaker.findById(req.params.id)
    .populate().exec(function(err, sneaker){
        Sneaker.find({_id: {$nin: sneaker}})
        .exec(function(err,sneakers){ 
            console.log(sneakers)
            res.render('sneakers/details', { 
                sneaker,
                user: req.user
            });
        });
    });
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
        console.log("hitting")
        res.render('sneakers/buy', { sneakers, user: req.user });
    });
} 