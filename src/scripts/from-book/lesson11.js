var myModule = angular.module('myModule', []);

    myModule.controller('FilterController', function($scope){
       $scope.currentDate = new Date();
       $scope.JsonObject = {title: 'myTitle'};
       $scope.stringValue = 'Superduperhipermultimega';
       $scope.ObjectArray = ['Monday', 'Tuesday', 'Wednesday']; 
       
       $scope.myScopeText = 'Exerice text';
       $scope.myScopeNumber = 101;
        
    });
    
