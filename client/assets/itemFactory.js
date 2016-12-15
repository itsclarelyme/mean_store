console.log("Items Factory");
app.factory('itemFactory', ['$http', function($http){

	//initializing models
	var items=[];

	function itemFactory(){
		var _this=this;

		this.retrieve = function(callback){
			$http.get('/getallitem').then(function(data){
				console.log(data);
				items = data.data;
				if (typeof(callback) == 'function'){
		        	callback(data);
		        }
			})
		}

		this.add_product = function(prod, callback){
			$http.post('/additem', prod).then(function(data){
				console.log(data);
				items = data.data;
				if (typeof(callback) == 'function'){
		        	callback(data);
		        }
			})
		}

		this.update = function(id, left, callback){
			$http.post('/updateinv/' + id, left).then(function(data){
				console.log(data);
				items = data.data;
				if (typeof(callback) == 'function'){
		        	callback(data);
		        }
			})
		}


	}



	console.log(new itemFactory());
	return new itemFactory();

}])
