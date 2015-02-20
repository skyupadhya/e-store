angular.module('Ecommerce', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
 .config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainCtrl'
      })
      .when('/store', {
          templateUrl: 'views/store.html',
          controller: 'MainCtrl'
      })
      .when('/store/tv', {
          templateUrl: 'views/tvCatalog.html',
          controller: 'TvListCtrl'
      })
      .when('/store/tv/tv:id', {
          templateUrl: 'views/tv/tv.html',
          controller: 'TvCtrl'
      })
      .when('/store/car', {
          templateUrl: 'views/carCatalog.html',
          controller: 'CarListCtrl'
      })
      .when('/store/car/car:id', {
          templateUrl: 'views/car/car.html',
          controller: 'CarCtrl'
      })
      .when('/store/router', {
          templateUrl: 'views/routerCatalog.html',
          controller: 'RouterListCtrl'
      })
       .when('/store/router/router:id', {
          templateUrl: 'views/wirelessrouter/router.html',
          controller: 'RouterCtrl'
      })
      .otherwise({
          redirectTo: '/'
      });
}]);

 