angular.module('data', [])
  .controller('loader', ['$scope', '$http' ,function($scope, $http) {

    $scope.data = 'Welcome!'
  }]);