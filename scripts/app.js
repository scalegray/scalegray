'use strict';

 var app = angular
.module('scalegray-dash', [
  'ngAnimate',
  'ngRoute',
  'ngResource'

])
.config(function ($routeProvider) {
   $routeProvider
    .when('/', {
      templateUrl: 'views/welcome.html'
      //controller: 'MainController'

    })
    .when('/register', {
      templateUrl: 'views/register.html'
      //controller: 'AuthController'

    })
    .when('/login', {
      templateUrl: 'views/login.html'
      //controller: 'AuthController'

    })

    .otherwise({
      redirectTo: '/'
    });
});
