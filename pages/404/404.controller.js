angular.module('Modular.404').controller('Error404Controller', Error404Controller);

function Error404Controller($scope, $rootScope, $stateParams, $state){
    $scope.errorTitle = $stateParams.errorTitle;
    $scope.errorMessage = $stateParams.errorMessage;
}
