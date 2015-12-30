 var module = angular.module('myFirstApp', ['ngRoute'])
 
            module.controller ('SimpleController', function($scope, simpleFactory) {

            $scope.customers = [];
            
            init();            
            function init(){
                $scope.customers = simpleFactory.getCustomers();
            }
            
            $scope.addCustomer = function() {
                $scope.customers.push({name: $scope.newCustomer.name, 
                                       city: $scope.newCustomer.city});
            };
            });
            
            module.controller('ItemController', function($scope) {
                $scope.items = [
                    {name: 'cake', category: 'baking'},
                    {name: 'pankcake', category: 'cooking'},
                    {name: 'ribs', category: 'roasting'},
                ];
                
                $scope.addItem = function() {
                $scope.items.push({name: $scope.newItem.name,
                                   category: $scope.newItem.category});
            };
            });
            
            /* Factory */
            module.factory('simpleFactory', function(){
                var customers = [
                    {name: "Jan", city: "London"},
                    {name: "Janek", city: "London"},
                    {name: "Jarek", city: "London"},
                ];
                
                var factory = {};
                factory.getCustomers = function (){
                    return customers;
                };
                
                factory.postCustmers = function (customer) {
                    
                };
                
                return factory;
            });
            
            module.config(function ($routeProvider) {
               $routeProvider
                    .when ('/template1',
                    {
                        controller:'SimpleController',
                        templateUrl:'templates/template1.html'
                    })
                    .when ('/template2',
                    {
                        controller: 'ItemController',
                        templateUrl: 'templates/template2.html'    
                    })
                    .otherwise ({ redirectTo: '/template1' }); 
            });            
            