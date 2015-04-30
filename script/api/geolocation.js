"use strict";

// Create api to retrive location via html 5
angular.module('cdty').factory('GeolocationApi', function($q) {

	// Get location from client browser if possible
	function getLocation() {

		return $q(function(resolve, reject) {
			// check browser support
			if ("geolocation" in navigator) {

				// geolocation is available
				navigator.geolocation.getCurrentPosition(function(position) {
					resolve({
						'longitude': position.coords.longitude,
						'latitude': position.coords.latitude
					});
				}, reject);
			} else {
				reject("Geolocation is not available.");
			}
		});
	}

	return {
		getLocation: getLocation
	};
});