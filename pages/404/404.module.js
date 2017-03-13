angular.module('Modular.404', []);

angular.module('Modular.404').config(function($stateProvider){

  $stateProvider
    .state('404', {
      url: '/404',
      params: {
      	'errorTitle':'Oops.. This page could not be found.',
      	'errorMessage': 'If you believe there is a problem in our system or with your account, please contact with us.'
      },
      templateUrl: '../panel/pages/404/404.html',
      controller:'Error404Controller'
    })
});
