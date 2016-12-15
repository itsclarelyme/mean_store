var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
	item: {type: String, require: true},
	amount: {type: Number, require: true},
	url: {type: String, required: false},
	description: {type: String, required: false},
	create_at: {type: Date, default: Date.now}
})

mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product');