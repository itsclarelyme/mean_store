var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var customerSchema = new mongoose.Schema({
	name: {type: String, require: true},
	created_at: {type: Date, default: Date.now},
})
mongoose.model('Customer', customerSchema);
var Customer = mongoose.model('Customer');