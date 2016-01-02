var myModule = angular.module('myModule', []);  
    
    myModule.directive('myPhotos', function(){
       return {
           restrict: 'E',
           transclude: true,
           scope: {},
           controller: function($scope){
               var photos = $scope.photos = [];
               $scope.select = function(photo) {
                   angular.forEach(photos, function(photo){
                      photo.selected = false; 
                   });    
                   photo.slected = true; 
               };
               this.addPhoto = function(photo){
                   photos.push(photo);                  
               };    
           },
           templateUrl: 'templates/samplePhotos.html'
       }; 
    });
    
    myModule.directive('myPhoto', function(){
       return {
           require: '^myPhotos',
           restrict: 'E',
           transclude: true,
           scope: {title: '@'},
           link: function(scope, elem, attrs, photosControl) {
               photosControl.addPhoto(scope);
           },
           template: '<div ng-show="selected" ng-transclude="" ></div>'
       } 
    });