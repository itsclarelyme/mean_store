app.controller('ordController', ['$scope', 'orderFactory', 'customerFactory', 'itemFactory', '$routeParams', function($scope, orderFactory, customerFactory, itemFactory, $routeParams){

	$scope.orders = [];
	$scope.customers = [];
	$scope.items = [];
	$scope.order = {};
	$scope.ord_filter = "";
	$scope.q_limit = 0;
	$scope.errmsg = "";



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

	var update_inventory = function(){
		console.log($scope.order._product.amount-$scope.order.quantity);
		itemFactory.update($scope.order._product._id, {amount: ($scope.order._product.amount-$scope.order.quantity)}, function(returndata){
			$scope.items = returndata.data;
			console.log($scope.items);
		})
	}

	$scope.add_order = function(){
		console.log($scope.order);
		if($scope.order.quantity < $scope.q_limit){
			$scope.errmsg = "";
			update_inventory();
			orderFactory.add_order($scope.order, function(returndata){
				//console.log(returndata);
				$scope.orders = returndata.data;
				console.log($scope.orders);
				$scope.order = {};
				$scope.q_limit = 0;
			})
		}
		else{
			$scope.errmsg = "Not enough inventory!";
		}
	}

	$scope.updatemax = function(){
		console.log($scope.order._product);
		$scope.q_limit = $scope.order._product.amount;

	}




}])
