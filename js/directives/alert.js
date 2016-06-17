/**
 * Created by luan on 16/06/2016.
 */

angular.module('app.directives').directive('alertMsg', function($timeout){

    return {
        templateUrl: 'js/directives/alert.html',
        replace: true,
        restrict: 'E',
        link: function(scope, element, attrs, ctrl){
            scope.$watchCollection('alertMessage', function(){

                if(scope.alertMessage == true){
                    element.show();
                    scope.timer = $timeout(function(){
                        scope.$apply(function(){
                            scope.alertMessage = false;
                        });
                        element.hide();
                    }, 3000);
                }else{
                    element.hide();
                }

            });
        }
    };
});
