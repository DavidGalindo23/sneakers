var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB,
  { useNewUrlParser: true }
);

// shortcut to mongoose.connection object
var db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});