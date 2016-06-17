/**
 * Created by luan on 16/06/2016.
 */

(function(){

    angular.module('app.controllers', []);
    angular.module('app.directives', []);

    angular.module('app', ['app.controllers', 'app.directives', 'ngRoute'])
        .config(['$routeProvider',function($routeProvider) {

            $routeProvider.when('/tasks',{
                    templateUrl: 'pages/tasks/list.html',
                    controller: 'TaskController'
            }).otherwise({redirectTo: '/tasks'});

        }]);

}).call(this);