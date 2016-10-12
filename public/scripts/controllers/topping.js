myApp.controller("toppingController", ["$scope", function($scope){
  console.log("hello from topping controller");
  $scope.addTopping = function(data){
    console.log("you added",data);
  };
}]);
