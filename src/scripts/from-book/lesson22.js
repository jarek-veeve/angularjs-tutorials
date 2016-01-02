var myModule = angular.module('myModule', []);

    myModule.controller('MyController', function($scope){
       $scope.myColor = '';
       $scope.hits = 0;
       $scope.misses = 0;
       $scope.changes = 0;
       $scope.ratio = 0;
       $scope.mColors = ['red', 'orange', 'green'];
       $scope.myObj = {color: '', hits: '', misses: '', ratio: ''};

       $scope.setColor = function(color){
           $scope.myColor = color;
       };
       
       $scope.hit = function(){
           $scope.hits +=1;
           $scope.ratio = (($scope.hits)/($scope.hits + $scope.misses));
       };
       
       $scope.miss = function(){
           $scope.misses +=1;
           $scope.ratio = (($scope.hits)/($scope.hits + $scope.misses));
       };
       
       $scope.$watch('myColor', function(newValue, oldValue){
           $scope.myObj.color = newValue;
       });
       
       $scope.$watchGroup(['hits','misses', 'ratio'], function(newValue, oldValue){
           $scope.myObj.hits = newValue[0];
           $scope.myObj.misses = newValue[1];
           $scope.myObj.ratio = newValue[2];
       });
       
       $scope.$watchCollection('myObj', function(newValue, oldValue){
           $scope.changes +=1;
       }); 
    });