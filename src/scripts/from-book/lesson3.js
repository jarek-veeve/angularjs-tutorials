var myModule = angular.module('myModule', []);

    myModule.value('moduleMsg', 'Hello from myModule.');

    myModule.controller('FirstController', ['$scope', 'moduleMsg', function ($scope, msg) {
        $scope.message = msg;
}]);

/**** Second module which injects functionality from myModule ****/

var myApp = angular.module('myApp', ['myModule']);
    
    myApp.value('appMsg', 'Hello from myApp.');
    
    myApp.controller('SecondController', ['$scope', 'appMsg', function ($scope, msg){
        $scope.message = msg;
    }]);