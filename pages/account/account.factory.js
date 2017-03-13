(function(){  'use strict';

angular.module('Modular.account').factory('accountFactory', ['$q', '$http', accountFactory]);

  function accountFactory($q, $http){

	return {
    yourFunction: yourFunction
	};


  function yourFunction(token, plan) {
    // var deferred = $q.defer();
    //
    // var data = {
    //   token: token,
    //   plan: plan
    // }
    //
  	// $http.post(envService.read('api_url')+'webapp/payment/', data)
	  //  .then(function(response) {
		//      deferred.resolve(response);
  	//  }, function(error) {
		//      console.log(error);
		//      deferred.resolve(error);
  	// });
    //
  	// return deferred.promise;
  }


  }
})();
