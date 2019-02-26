var express = require('express'); 
var router = express.Router();
var sneakersCtrl = require('../controllers/sneakers'); 

router.get('/', sneakersCtrl.index); 
router.get('/buy',sneakersCtrl.buy); 


module.exports = router; 