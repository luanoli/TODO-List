/**
 * Created by luan on 16/06/2016.
 */

angular.module('app.directives').directive('alertMsg', function(){
    return {
        templateUrl: 'js/directives/alert.html',
        replace: true,
        scope: true,
        restrict: 'E',
        link: function(scope, element, attrs, ctrl){
            scope.$watchCollection('alertMessage', function(){
                if(scope.alertMessage == 1){
                    element.show();
                }else{
                    element.hide();
                }
            });
        }
    };
});
