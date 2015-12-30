var myBlocks = angular.module('myBlocks', []);

myBlocks.config(function($provide){
    $provide.value('configTime', new Date());
    $provide.value('runTime', new Date());
    
    for(var x = 0; x < 1000000; x++){
        var y = Math.sqrt(Math.log(x));
    }
});

myBlocks.run(function(configTime, runTime){
   runTime.setTime((new Date()).getTime()); 
});

myBlocks.controller('TimeController',['$scope', 'configTime','runTime', function($scope, configTime, runTime){
    $scope.configTime = configTime;
    $scope.runTime = runTime;
}]);