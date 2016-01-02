var myModule = angular.module('myModule', []);

    myModule.controller('MyController', function($scope){
        $scope.title = 'My Title';
            
    });
    
    myModule.directive('mybox', function(){
        return {
            transclude: true,
            restrict: 'E',
            scope: {title: '@', bwidth: '@bwidth', bheight:'@bheight'},
            template: '<div><span class="titleBar">{{ title }}'+
                      '</span><div ng-transclude></div></div>',
            link: function(scope, elem, attr, controller, transclude) {
                elem.append('<span class="footer">'+scope.$parent.title
                 + '</span>');
                elem.css('display', 'inline-block');
                elem.css('width', scope.bwidth);
                elem.css('height', scope.bheight);    
            }    
        };
    });