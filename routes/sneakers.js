var express = require('express'); 
var router = express.Router();
var sneakersCtrl = require('../controllers/sneakers'); 

router.get('/', sneakersCtrl.index); 
router.get('/buy',sneakersCtrl.buy); 
router.get('/cart', sneakersCtrl.show);
router.get('/:id', sneakersCtrl.details);



module.exports = router; 