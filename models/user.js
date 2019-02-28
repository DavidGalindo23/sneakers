var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var userSchema = new Schema({
  name: String,
  email: String,
  cart: [{type: Schema.Types.ObjectId, ref: 'Sneaker'}],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);