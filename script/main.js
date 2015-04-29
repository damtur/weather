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


angular.module('cdty').directive('weather', function(GeolocationApi, WeatherApi) {
	return {
		scope: true,
		link: function(scope) {
			scope.weather = {};
			scope.config = {
				'temperature': 'celcius'
			};
			scope.config.temperatureOptions = [
				{'value': 'celcius', 'name': 'Celcius'},
				{'value': 'fahrenheit', 'name': 'Fahrenheit'},
			];

			// Get client location
			var locationPromise = GeolocationApi.getLocation();
			locationPromise.catch(function() {
				// Handle error
			});

			// Get client weather
			locationPromise.then( function(location) {
				WeatherApi.getWeather(location.longitude, location.latitude).then(function(weather) {
					scope.weather = weather.data;
				}, function() {
					// Handle error
				});
			});
		}
	};
});