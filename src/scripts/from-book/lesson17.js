var myModule = angular.module('myModule', []);
    
    myModule.controller('MyController', function($scope){
       
       $scope.inputData = {input1: {value:"", state:""},
                           input2: {value:"", state:""}};
       
       $scope.focusGained = function(event, input){
           var element = angular.element(event.target);
           var value = element.val();           
           $scope.inputData[input]['value'] = value.toUpperCase();
           $scope.inputData[input]['state'] = 'Focus Gained';         
       };
       
       $scope.focusLost = function(event, input){
           var element = angular.element(event.target);
           var value = element.val();
           $scope.inputData[input]['value'] = value.toLowerCase();
           $scope.inputData[input]['state'] = 'Focus Lost';         
       };        
    });