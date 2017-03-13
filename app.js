angular.module('Modular', [
	'ui.router',
  'Modular.404',
	'Modular.account',
]);

angular.module('Modular').config(function($stateProvider, $urlRouterProvider, $httpProvider){
  	$urlRouterProvider.otherwise('404');
})

angular.module('Modular').run(function($rootScope){

});
