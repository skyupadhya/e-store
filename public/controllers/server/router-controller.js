var Router = require('../../models/router');

module.exports.list = function (req, res) {
 	Router.find({}, function (err, results) {
 		//console.log(results);
 		if (err) return next(err);
    	res.json(results);
  	});
}

module.exports.find = function(req, res) {
  	Router.findById(req.params.id, function (err, results) {
  		//console.log(results);
    	if (err) return next(err);
    	res.json(results);
  	});
}