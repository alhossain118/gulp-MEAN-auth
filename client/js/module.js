'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    .state('other', { url: '/other', template: '<h1>OTHER</h1>', controller:'otherCtrl' })

  $urlRouterProvider.otherwise('/');
});
