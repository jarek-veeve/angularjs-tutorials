var myModule = angular.module('myModule', []);

    myModule.controller('MyController', function($scope){
       $scope.storedStrings = '';
       $scope.keyInfo = {};
       $scope.keyStrokes = [];
       $scope.keyState = 'Not Pressed';
       
       $scope.keyPressed = function(event) {
           if(event.keyCode === 13) {
               var element = angular.element(event.target);
               $scope.storedStrings = element.val();
               element.val('');
               $scope.keyInfo.keyCode = event.keyCode;
               $scope.keyStrokes = [];
               $scope.keyState = 'Enter Pressed';
           } else {
                $scope.keyInfo.keyCode = event.keyCode;
                $scope.keyStrokes.push(event.keyCode);
                $scope.keyState = 'Not Pressed';
           }       
       };
    });
    
    myModule.controller('MouseEventsController', function($scope){
        $scope.mouseInfo = {};
        $scope.lastClickInfo = {};
        
        $scope.mouseClick = function(event) {
           $scope.lastClickInfo.clientX = event.clientX;
           $scope.lastClickInfo.clientY = event.clientY;
           $scope.lastClickInfo.screenX = event.screenX;
           $scope.lastClickInfo.screenY = event.screenY;     
        };
        
        $scope.mouseMove = function(event) {
           $scope.mouseInfo.clientX = event.clientX;
           $scope.mouseInfo.clientY = event.clientY;
           $scope.mouseInfo.screenX = event.screenX;
           $scope.mouseInfo.screenY = event.screenY;     
        };        
    });