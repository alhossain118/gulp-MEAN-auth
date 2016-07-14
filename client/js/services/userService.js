'use strict';

var app = angular.module('myApp');

app.service('User', function($http) {
  this.getUser = () => $http.get('/api/users/self');  
});
