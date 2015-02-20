var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var tvController = require('./public/controllers/server/tv-controller');
var carController = require('./public/controllers/server/car-controller');
var routerController = require('./public/controllers/server/router-controller');

var app = express();

app.set('port', process.env.PORT || 8090);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to db
mongoose.connect('mongodb://localhost:27017/ecommerce-db');

// Routes
app.use(function(req, res, next) {
    // log each request to the console
	console.log(req.method, req.url);
	// continue doing what we were doing and go to the route
	next();	
})
app.get('/api/store/tv', tvController.list);
app.get('/api/store/tv/tv:id', tvController.find);
app.get('/api/store/car', carController.list);
app.get('/api/store/car/car:id', carController.find);
app.get('/api/store/router', routerController.list);
app.get('/api/store/router/router:id', routerController.find);
app.get('*', function(req, res) {
	res.redirect('/#' + req.originalUrl);
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({ message: err.message });
});

// Startup message
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});