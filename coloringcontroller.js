var myApp = angular.module('myModule', [])
.controller('ColorCtrl', ['$scope', function($scope){
        $scope.message = 'Look at all the fine colors!';
        $scope.colors = colorList;
      }]);

var colorList = ['green', 'orange', 'red', 'blue', 'purple'];

  