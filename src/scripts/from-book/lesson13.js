var myModule = angular.module('myModule', []);
    
    myModule.filter('censor', function(){
       return function(input, replacement){
           var cWords = ['fuck', 'dick'];
           var output = input;
           
           for(var i=0; i < cWords.length; i++){
               var regex = new RegExp(cWords[i], "gi");
               output = output.replace(regex, replacement);
           }
           
           return output;
       } 
    });
    
    myModule.controller('FilterController',['$scope','censorFilter', function($scope, censorFilter){
        $scope.censorText = "***";
        $scope.phrase = "This phrase is not allowed fuck!";
        $scope.txt = "Hello Dick. My friend";
        $scope.additionalText = "You are a bad fucking dick.";
        
        $scope.filterText = function (){
            $scope.txt = censorFilter($scope.txt, '<<censored>>');
        };
            
    }]);    