var app=angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "partials/main.html",
		controller: "mainController"
	})
	.when('/products', {
		templateUrl: "partials/products.html",
		controller: "prodController"
	})
	.when('/orders', {
		templateUrl: "partials/orders.html",
		controller: "ordController"
	})
	.when('/customers', {
		templateUrl: "partials/customers.html",
		controller: "custController"
	})
	.otherwise({
		redirectTo: '/'
	})
})