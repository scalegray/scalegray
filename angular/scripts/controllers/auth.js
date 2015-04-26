'use strict';

angular.module('AuthModule', ['ui.router'])
.controller('AuthController', function ($scope, $state, SURL, $location, $http) {

  $scope.user = {};


	$scope.register = function() {


   $http({
    url: 'http://localhost:3001/users',
    method: 'POST',
    data: $scope.user
  }).then(function(response) {
    //store.set('jwt', response.data.id_token);
    $state.go('main');
    console.log(response);
    console.log("done! signed up!")
  }, function(error) {
    alert(error.data);
  });
};


	$scope.login = function(user) {

     console.log("worked");
      $http({
       url: 'http://localhost:3001/sessions/create',
       method: 'POST',
       data: $scope.user
    }).then(function(response) {
      //store.set('jwt', response.data.id_token);
      $state.go('main');
      console.log(response);
      console.log("Done! logged-in")
  }, function(error) {
    alert(error.data);
  });
};




	$scope.changePassword = function(user) {


  };

	function errMessage(err) {

    var msg = "Unknown Error...";

    if(err && err.code) {
      switch (err.code) {
        case "EMAIL_TAKEN":
          msg = "This email has been taken"; break;
        case "INVALID_EMAIL":
          msg = "Invalid email"; break;
        case "NETWORK_ERROR":
          msg = "Network error"; break;
        case "INVALID_PASSWORD":
          msg = "Invalid password"; break;
        case "INVALID_USER":
          msg = "Invalid user"; break;
      }
    }

  //  toaster.pop('error', msg);
  };

});
