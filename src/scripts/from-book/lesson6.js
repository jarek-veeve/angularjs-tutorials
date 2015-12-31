var myModule = angular.module('myModule', []);

    myModule.controller('CalcController', function($scope){
       $scope.valueA = 5;
       $scope.valueB = 7;
       $scope.valueC = 12;
       
       $scope.addition = function(v1, v2) {
           $scope.valueC = v1 + v2;
       } 
       
       $scope.multiplication = function(v1, v2) {
           $scope.valueC = v1 * v2;
       }
       
    });