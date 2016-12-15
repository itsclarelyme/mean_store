var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
	_customer: { type: Schema.Types.ObjectId, ref: "Customer", require: true},
	_product: { type: Schema.Types.ObjectId, ref: "Product", require: true},
	quantity: {type: Number, required: true},
	created_at: {type: Date, default: Date.now}
})
mongoose.model('Order', OrderSchema);
var Order = mongoose.model('Order');