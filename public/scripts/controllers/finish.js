myApp.controller("finishController", ["$scope", function($scope){
  console.log("hello from finish controller");
  $scope.congrats = function(){
    alert('congratulations! you just ordered food!');
  };
}]);
