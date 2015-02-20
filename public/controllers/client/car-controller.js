angular.module('Ecommerce')
  	.controller('CarCtrl', ['$scope', '$resource', '$routeParams', function ($scope, $resource, $routeParams) { 

   	var Car = $resource('/api/store/car/car:id', {id: $routeParams.id }); 
  	Car.get(function (results) {
    	$scope.car = results;
    	$scope.headingTitle = 'Car';
      $scope.carturl = 'http://localhost:8080/cart/login/car/';
  	});
}]);


angular.module('Ecommerce')
  	.controller('CarListCtrl', ['$scope', '$resource', function ($scope, $resource) { 

 	var Car = $resource('/api/store/car');
    $scope.headingTitle = 'Car listing'; 

  	Car.query(function (results) {
    	  $scope.cars = results;
  	});
}]);