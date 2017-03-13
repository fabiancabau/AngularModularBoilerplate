angular.module('Modular.account', []);

angular.module('Modular.account').config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('account', {
      url: '/account',
      abstract:true,
      template: '<ui-view>'
    })
    .state('account.edit', {
      url: '/edit',
      controller: 'AccountController',
      templateUrl: '../pages/account/account.template.html'
    })
    .state('account.subscription', {
      url: '/subscription',
      params: {
        tab: 2
      },
      controller: 'AccountController',
      templateUrl: '../pages/account/account.template.html'
    })

});
