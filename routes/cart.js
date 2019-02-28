var express = require('express'); 
var router = express.Router(); 
var cartCrtl = require('../controllers/cart'); 

router.post('/', cartCrtl.update);

module.exports = router;