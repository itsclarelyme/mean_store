var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');

var controller = require('../controllers/controllers.js');

module.exports = function(app){
	app.get('/getallitem', function(req, res){
		console.log('routes getproduct');
		controller.getitem(req, res);
		
	})

	app.post('/additem', function(req, res){
		console.log("routes additem");
		controller.additem(req, res);
	})

	app.get('/getallcustomer', function(req, res){
		console.log("routes getallcustomer");
		controller.getcustomer(req, res);
	})

	app.post('/addcustomer', function(req, res){
		console.log('routes addcustomer');
		controller.addcustomer(req, res);
	})

	app.get('/getallorder', function(req, res){
		console.log("routes getallorder");
		controller.getorder(req, res);
	})

	app.post('/addorder', function(req, res){
		console.log("routes addorder");
		controller.addorder(req, res);
	})

	app.post('/updateinv/:id', function(req, res){
		console.log("routes update inv");
		controller.updateinv(req, res);
	})
}