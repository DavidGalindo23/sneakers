var Sneaker = require('../models/sneaker'); 

module.exports = { 
    index, 
    buy
}; 

function index(req,res){ 
    res.render('sneakers/index');
}

function buy(req,res){ 
    Sneaker.find({}, function(err, sneakers){ 
        console.log("hitting")
        res.render('sneakers/buy', { sneakers } );
    });
}