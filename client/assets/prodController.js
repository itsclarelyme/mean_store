app.controller('prodController', ['$scope', 'itemFactory', '$routeParams', function($scope, itemFactory, $routeParams){

	$scope.items = [];
	$scope.item = {};
	$scope.product_filter = "";
	$scope.show = 3;

	var index = function(){
		itemFactory.retrieve(function(returndata){
			console.log(returndata);
			$scope.items = returndata.data;
			console.log($scope.items);
		})
	}
	index();

	$scope.add_product = function(){
		itemFactory.add_product($scope.item, function(returndata){
			console.log(returndata);
			$scope.items = returndata.data;
			console.log($scope.items);
			$scope.item = {};
		})
	}

	$scope.show_more = function(){
		$scope.show += 3;
	}


}])