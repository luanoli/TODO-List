/**
 * Created by luan on 16/06/2016.
 */

angular.module('app.controllers').controller('TaskController', ['$scope', function($scope) {

    $scope.tasks = [];
    $scope.alertMessage = 0;

    $scope.salvar = function(){
        $scope.tasks.push(angular.copy($scope.task));
        $scope.task = null;
    };

    $scope.limpar = function(){
        $scope.task = null;
    };

    $scope.deletar = function(index){
        $scope.tasks.splice(index,1);
        $scope.alertMessage = 1;
    };


}]);