var firstTutorial = angular.module('firstTutorial', [])

    firstTutorial.controller('TutorialController', function($scope){
       
        $scope.first = "First";
        $scope.last = "Last";
        
        $scope.heading = "Message: ";
        
        $scope.updateMessage = function() {
            $scope.message = 'Hello ' + $scope.first + ' ' + $scope.last + '!';
        }
        
        $scope.resetMessage = function() {
            $scope.message = ' ';
            $scope.first = "First";
            $scope.last = "Last";
        }
        
        $scope.clicked = function() {
            $scope.first = "First2222";
            
        }
    
    });