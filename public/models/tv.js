var mongoose = require('mongoose');

module.exports = mongoose.model('tv', {
    _id: Number,
  	name: String,
  	brand: String,
  	diagonal: Number,
  	hd: String,
  	length: Number,
  	width: Number,
  	height: Number,
  	price: Number,
  	description: String,
  	warranty: Number,
  	image: String,
  	url: String,
    startdate: String,
    enddate: String,
});