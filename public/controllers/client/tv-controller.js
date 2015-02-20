angular.module('Ecommerce')
  	.controller('TvCtrl', ['$scope', '$resource', '$routeParams', function ($scope, $resource, $routeParams) { 

   	var Tv = $resource('/api/store/tv/tv:id', {id: $routeParams.id }); 
  	Tv.get(function (results) {
    	$scope.tv = results;
    	$scope.headingTitle = 'TV';
      $scope.carturl = 'http://localhost:8080/cart/login/tv/';
  	});
}]);

angular.module('Ecommerce')
  	.controller('TvListCtrl', ['$scope', '$resource', function ($scope, $resource) { 

   	var Tvs = $resource('/api/store/tv');
    $scope.headingTitle = 'TV listing'; 

  	Tvs.query(function (results) {
    	$scope.tvs = results;
  	});
}]);