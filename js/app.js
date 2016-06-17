/**
 * Created by luan on 16/06/2016.
 */

(function(){

    angular.module('app.controllers', []);
    angular.module('app.services', []);
    angular.module('app.filters', []);
    angular.module('app.directives', []);

    angular.module('app', ['app.controllers', 'app.services', 'app.filters', 'app.directives', 'ngRoute'])
        .config(['$routeProvider',function($routeProvider) {

            $routeProvider

                .when('/tasks',{
                    templateUrl: 'pages/tasks/list.html',
                    controller: 'TaskController'
                }).when('/tasks/insert',{
                    templateUrl: 'pages/tasks/form.html',
                    controller: 'TaskFormController'
                }).when('/tasks/update/:idTask',{
                    templateUrl: 'pages/tasks/form.html',
                    controller: 'TaskFormController'
                })

                .otherwise({redirectTo: '/tasks'});


        }]);

}).call(this);