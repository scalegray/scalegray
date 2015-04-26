'use strict';

 var sgapp = angular
.module('scalegrayApp', [
  'ngAnimate',
  'ngRoute',
  'ngResource'

])
.constant('SURL', 'http://localhost:3001/')
.config(function ($routeProvider) {
  $routeProvider
     .when('/', {
       templateUrl: 'views/login.html',
       controller: 'AuthController'
     })
    .when('/register', {
       templateUrl: 'views/register.html',
       controller: 'AuthController'
       })

       .when('/login', {
         templateUrl: 'views/login.html',
         controller: 'AuthController'
       })
       .when('/dash', {
         templateUrl: 'views/dash.html'
       });
});
