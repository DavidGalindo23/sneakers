// utility to initialize database
require('dotenv').config();
require('./config/database');
const Sneaker = require('./models/sneaker');
const data = require('./data');

// clear out all sneakers to prevent dups
const p1 = Sneaker.deleteMany({});
Promise.all([p1])
.then(function(results) {
  return Sneaker.create(data.products);
})
.then(function(sneaker) {
    console.log(sneaker)
  process.exit();
});
