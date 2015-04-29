"use strict";

angular.module('cdty').directive('geolocation', function(GeolocationApi) {
	return {
    scope: true,
    link: function(scope) {
    	scope.location = {};
    	GeolocationApi.getLocation().then( function(location) {
				scope.location = location;
			}, function() {
				//Handle error
			});
    }
  };
});