console.log('JS');
var myApp = angular.module('myApp',['ngRoute']);
myApp.config(["$routeProvider", function($routeProvider){
  console.log('in app config');
  $routeProvider.
  when("/base", {
    templateUrl: "views/partials/base.html",
    controller: "baseController"
  }).
  when("/loginDecision", {
    templateUrl: "views/partials/loginDecision.html",
    controller: "loginDecisionController"

  }).
  when("/protien", {
    templateUrl: "views/partials/protien.html",
    controller: "protienController"

  }).
  when("/SorB", {
    templateUrl: "views/partials/SorB.html",
    controller: "SorBController"

  }).
  when("/topping", {
    templateUrl: "views/partials/topping.html",
    controller: "toppingController"
  }).
  when("/finish", {
    templateUrl: "views/partials/finish.html",
    controller: "finishController"

  }).
  when("/slider", {
    templateUrl: "views/partials/slider.html",
    controller: "sliderController"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);

myApp.controller('fakeController',['$scope','$http','$route',function($scope,$http,$ngRoute){
  console.log('NG');
}]);//controller
