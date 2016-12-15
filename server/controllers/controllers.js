console.log('Angular controller');
var mongoose = require('mongoose');
var Item = mongoose.model('Product');
var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');

function StoreController(){
	this.getitem = function(req, res){
		console.log("backend controller");
		Item.find({}, function(err, data){
			if(err){
				console.log("Error in controller: " + err);
			}
			res.json(data);
		})
	};

	this.additem = function(req, res){
		console.log("backend controller additem");
		var newitem = new Item({item: req.body.item, amount: req.body.amount, url: req.body.url, description: req.body.description });
		newitem.save(function(err){
			if (err) {
				console.log("error in controller while adding item: " + err);
			};
			res.redirect('/getallitem');
		})
	}

	this.getorder = function(req, res){
		console.log("backend controller getall order");
		Order.find({}).populate('_customer').populate('_product').exec(function(err, data){
			if (err){
				console.log("Error in get order: " + err);
			}
			res.json(data)
		})
	}

	this.addorder = function(req, res){
		console.log("backend controller addorder");
		var neword = new Order(req.body);
		neword.save(function(err){
			if(err){
				console.log("error in add order: " + err)
			}
			res.redirect('/getallorder');
		})
	}

	this.getcustomer = function(req, res){
		console.log("backend controller getall Customer");
		Customer.find({}, function(err, data){
			if(err){
				console.log("Error in get customers: " + err);
			}
			res.json(data);
		})		
	}

	this.addcustomer = function(req, res){
		console.log("backend controller addcustomer");
		var newc = new Customer({name: req.body.name});
		newc.save(function(err){
			if(err){
				console.log("error while adding customer");
			}
			res.redirect('/getallcustomer');
		})
	}

	this.updateinv = function(req, res){
		console.log("backend controller updateinv");
		console.log(req.body);
		Item.findOneAndUpdate({_id: req.params.id}, {amount: req.body.amount}, function(err, data){
			if(err){
				console.log("Error while update inv: " + err);
			}
			res.redirect('/getallitem');
		})
	}



}

module.exports = new StoreController();