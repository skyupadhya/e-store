var mongoose = require('mongoose');

module.exports = mongoose.model('router', {
    _id: Number,
  	name: String,
  	brand: String,
  	dualband: String,
  	range: Number,
  	numwifi: Number,
  	price: Number,
  	description: String,
  	image: String,
  	url: String,
    startdate: String,
    enddate: String,
});