angular.module('Ecommerce')
  	.controller('RouterCtrl', ['$scope', '$resource', '$routeParams', function ($scope, $resource, $routeParams) { 

   	var Router = $resource('/api/store/router/router:id', {id: $routeParams.id }); 
  	Router.get(function (results) {
    	$scope.router = results;
    	$scope.headingTitle = 'Wireless Router';
      $scope.carturl = 'http://localhost:8080/cart/login/router/';
  	});
}]);

angular.module('Ecommerce')
  	.controller('RouterListCtrl', ['$scope', '$resource', function ($scope, $resource) { 

 	var Router = $resource('/api/store/router');
    $scope.headingTitle = 'Router listing'; 

  	Router.query(function (results) {
     	$scope.routers = results;
  	});
}]);