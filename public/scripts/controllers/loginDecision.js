myApp.controller("loginDecisionController", ["$scope", function($scope){
  console.log("hello from loginDecision controller");
  $scope.authenticate = function(){
    confirm('insert some authentication logic here');
  };
}]);
