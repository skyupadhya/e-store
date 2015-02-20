var Car = require('../../models/car');

module.exports.list = function (req, res) {
 	Car.find({}, function (err, results) {
 		//console.log(results);
 		if (err) return next(err);
    	res.json(results);
  	});
}


module.exports.find = function(req, res) {
  	Car.findById(req.params.id, function (err, results) {
  		console.log(results);
    	if (err) return next(err);
    	res.json(results);
  	});
}