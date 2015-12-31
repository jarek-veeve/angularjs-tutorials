var myModule = angular.module('myModule', []);

    myModule.controller('LevelaController', function($scope){
        $scope.title = "Level A";
        $scope.valueA = 1;
        $scope.inc = function (){
            $scope.valueA++;
        };
    });

    myModule.controller('LevelbController', function($scope){
        $scope.title = "Level B";
        $scope.valueB = 1;
        $scope.inc = function (){
            $scope.valueB++;
        };
    });
    
    myModule.controller('LevelcController', function($scope){
        $scope.title = "Level C";
        $scope.valueC = 1;
        $scope.inc = function (){
            $scope.valueC++;
        };
    });        