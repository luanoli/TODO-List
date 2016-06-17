/**
 * Created by luan on 16/06/2016.
 */

angular.module('app.directives').directive('alertMsg', function(){
    return {
        templateUrl: alert.html,
        replace: true,
        scope: true,
        restrict: E
    };
});
