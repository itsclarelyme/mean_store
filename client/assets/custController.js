app.controller('custController', ['$scope', 'customerFactory', '$routeParams', function($scope, customerFactory, $routeParams){

	$scope.customers = [];
	$scope.customer = {};
	$scope.cust_filter = "";



	var index = function(){
		customerFactory.retrieve(function(returndata){
			console.log(returndata);
			$scope.customers = returndata;
			console.log($scope.customers);
		})
	}
	index();

	$scope.add_customer = function(){
		customerFactory.add_customer($scope.customer, function(returndata){
			console.log(returndata);
			$scope.customers = returndata;
			console.log($scope.customers);
			$scope.customer = {};
		})
	}




}])
