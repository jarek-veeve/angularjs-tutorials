var myModule = angular.module('myModule', []);

    myModule.value('moduleMsg', 'Hello from myModule.');

    myModule.controller('FirstController', ['$scope', 'moduleMsg', function ($scope, moduleMsg) {
        $scope.message = moduleMsg;
}]);

/**** Third model - exercise ****/
var myExercise = angular.module('myExercise', []);

    myExercise.value('thirdMsg', 'This is a message from third controller.')

    myExercise.controller('ThirdController', ['$scope', 'thirdMsg', function($scope, thirdMsg){
        $scope.message = thirdMsg;
    }]);

/**** Second module which injects functionality from myModule ****/
var myApp = angular.module('myApp', ['myModule', 'myExercise']);
    
    myApp.value('appMsg', 'Hello from myApp.');
    
    myApp.controller('SecondController', ['$scope', 'appMsg', function ($scope, appMsg){
        $scope.message = appMsg;
    }]);
    
