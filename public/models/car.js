var mongoose = require('mongoose');

module.exports = mongoose.model('car', {
    _id: Number,
  	name: String,
  	brand: String,
  	year: Number,
  	mileage: Number,
  	condition: String,
  	price: Number,
  	description: String,
  	image: String,
  	url: String,
    startdate: String,
    enddate: String,
});