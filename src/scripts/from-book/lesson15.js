var myModule = angular.module('myModule', []);
   
    myModule.controller('FormController', function($scope){
        
        $scope.cameras = [{name: 'Canon', model: '01', price: '100'}, 
                          {name: 'Nikon', model: '02', price: '200'},
                          {name: 'Samsung', model: '03', price: '10'}, 
                          {name:'Sony', model: '12', price: '100'}
                         ];
        
        $scope.cameraObj = $scope.cameras[0]; 
        $scope.cameraName = 'Canon';
        $scope.checkBox = '';
        $scope.someText = '';
        
        
    });
