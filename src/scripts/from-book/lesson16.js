var myModule = angular.module('myModule', []);

    myModule.controller('DynamicController', function($scope){
        $scope.colours = ['red', 'blue', 'orange', 'pink'];
        $scope.myStyle = {"background-color": 'none'};
        $scope.days = ['Monday', 'Tuesday', 'Wednesday'
                        , 'Thursday', 'Firday'
                       ];
        $scope.msg = 'Message to display';
    });