console.log("Order Factory");
app.factory('orderFactory', ['$http', function($http){

	//initializing models
	var orders=[];

	function orderFactory(){
		var _this=this;

		this.retrieve = function(callback){
			$http.get('/getallorder').then(function(data){
				console.log(data);
				orders = data.data;
				if (typeof(callback) == 'function'){
		        	callback(data);
		        }
			})
		}

		this.add_order = function(ord, callback){
			$http.post('/addorder', ord).then(function(data){
				console.log(data);
				orders = data.data;
				if (typeof(callback) == 'function'){
		        	callback(data);
		        }
			})
		}


	}



	console.log(new orderFactory());
	return new orderFactory();

}])
