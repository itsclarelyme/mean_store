console.log("Customers Factory");
app.factory('customerFactory', ['$http', function($http){

	//initializing models
	var customers = [];
	var customer = {};

	function customerFactory(){
		var _this=this;

		this.retrieve = function(callback){
			console.log("retrieve customers")
			$http.get('/getallcustomer').then(function(data){
				console.log(data);
				customers = data.data;
				callback(customers);
			});
		}

		this.add_customer = function(newc, callback){
			console.log("add customer");
			$http.post('/addcustomer', newc).then(function(data){
				console.log(data);
				customers = data.data;
				callback(customers);
			})
		}



	}



	console.log(new customerFactory());
	return new customerFactory();
}]);