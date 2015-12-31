var myModule = angular.module('myModule', []);

    myModule.controller('FilterController', ['$scope', 'filterFilter', function($scope, filterFilter){
        $scope.planes = [{make: 'Boeing', model:'777', capacity:'400'}
                         ,{make: 'Airbus', model:'111', capacity:'500'}
                         ,{make: 'Antek', model:'001', capacity:'10'}
                        ];
        
        $scope.filteredPlanes = $scope.planes;
        $scope.reverse = true;
        $scope.column = 'make';
        
        $scope.setSort = function(column){
            $scope.column = column;
            $scope.reverse = !$scope.reverse;
        };
        
        $scope.filterString = '';
        $scope.setFilter = function(value){
            $scope.filteredPlanes = 
                filterFilter($scope.planes, $scope.filterString);    
        };
        
        
    }]);