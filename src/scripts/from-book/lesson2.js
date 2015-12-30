var myModule = angular.module('myModule', []);

    myModule.controller('LessonTwoController', ['$scope', '$window', function ($scope, $window) {
        $scope.message = 'My module has loaded.' +' '+$window.screenX +'x '+ $window.screenY;
        $window.alert($scope.message);   
       
    }])