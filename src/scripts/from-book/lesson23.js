var myModule = angular.module('myModule', []);

    myModule.controller('CharactersController', function($scope){
        $scope.names = ['Franek', 'Zbysiu', 'Wladziu', 'Jadzia'];
        $scope.currentName = $scope.names[0];
        
        $scope.changeName = function (){
            $scope.currentName = this.name;
            $scope.$broadcast('CharacterChanged', this.name);
        }
        
        $scope.$on('CharacterDeleted', function(event, removeName){
            var i = $scope.names.indexOf(removeName);
            $scope.names.splice(i, 1);
            $scope.currentName = $scope.names[0];
            $scope.$broadcast('CharacterChanged', $scope.currentName);    
        }); 
        
        $scope.$on('CharacterAdded', function(event, removeName){
            var i = $scope.names.indexOf(removeName);
            $scope.names.splice(i, 1);
            $scope.currentName = $scope.names[0];
            $scope.$broadcast('CharacterChanged', $scope.currentName);    
        });                       
    });

    myModule.controller('CharacterController', function($scope){
            $scope.info = {'Franek': {age: '20', sex: 'male'},
                           'Zbysiu': {age: '32', sex: 'male'},
                           'Wladziu': {age: '59', sex: 'male'},
                           'Jadzia': {age:'34', sex: 'female'}};
            $scope.currentInfo = $scope.info['Franek'];
            
            $scope.$on('CharacterChanged', function(event, newCharacter){
                $scope.currentInfo = $scope.info[newCharacter];
            });
            
            $scope.deleteChar = function(){
                delete $scope.info[$scope.currentName];
                $scope.$emit('CharacterDeleted', $scope.currentName);
            };
            
            $scope.addChar = function(){
                $scope.names.push($scope.currentName);
            };    
        });    