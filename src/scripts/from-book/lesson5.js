var myModule = angular.module('myModule', []);

myModule.value('start', 200);

myModule.controller('ModuleController', ['$scope', 'start', function($scope, start){
    $scope.start = start;
    $scope.current = start;
    $scope.difference = 0;
    $scope.change = 1;
    
    $scope.inc = function (){
        $scope.current += $scope.change;
        $scope.calcDiff();  
    };
    
    $scope.dec = function (){
        $scope.current -= $scope.change;
        $scope.calcDiff();
    };
    
    $scope.calcDiff = function (){
        $scope.difference = $scope.current - $scope.start;
    };
    
    $scope.reset = function () {
        $scope.current = start;
        $scope.difference = $scope.current - $scope.start;
    }
}]);