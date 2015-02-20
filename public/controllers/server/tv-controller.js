var Tv = require('../../models/tv');

module.exports.list = function (req, res) {
 	Tv.find({}, function (err, results) {
 		//console.log(results);
 		if (err) return next(err);
    	res.json(results);
  	});
}

module.exports.find = function(req, res) {
  	Tv.findById(req.params.id, function (err, results) {
  		//console.log(results);
    	if (err) return next(err);
    	res.json(results);
  	});
}