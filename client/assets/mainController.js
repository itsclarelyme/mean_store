app.controller('mainController', ['$scope', 'customerFactory','itemFactory','orderFactory', function($scope, customerFactory, itemFactory, orderFactory){
	//scope variables
	$scope.items = [];
	$scope.customers = [];
	$scope.orders = [];
	$scope.search = "";
	$scope.showorder = 3;
	$scope.showitem = 3;
	$scope.showcust = 3;



	var ord_index = function(){
		orderFactory.retrieve(function(returndata){
			//console.log(returndata);
			$scope.orders = returndata.data;
			//console.log($scope.orders);
		})
	}
	ord_index();
	var cust_index = function(){
		customerFactory.retrieve(function(returndata){
			//console.log(returndata);
			$scope.customers = returndata;
			//console.log($scope.customers);
		})
	}
	cust_index();
	var item_index = function(){
		itemFactory.retrieve(function(returndata){
			//console.log(returndata);
			$scope.items = returndata.data;
			//console.log($scope.items);
		})
	}
	item_index();

	$scope.moreitem = function(){
		$scope.showitem += 3;
	}

	$scope.moreorder = function(){
		$scope.showorder += 3;
	}

	$scope.morecust = function(){
		$scope.showcust += 3;
	}










}]);