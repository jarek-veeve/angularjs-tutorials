var myModule = angular.module('myModule', []);

    myModule.controller('ExpressionsController', function($scope){
        $scope.speed = 'Slow';
        $scope.vehicle = 'Train';
        $scope.newSpeed = 'Hypersonic';
        $scope.newVehicle = 'Plane';
        
        $scope.upper = function (string){
            return angular.uppercase(string);
        };
        
        $scope.lower = function (string){
            return angular.lowercase(string);
        };
        
        $scope.setValues = function (speed, vehicle) {
            $scope.speed = speed;
            $scope.vehicle = vehicle;
        }         
    })