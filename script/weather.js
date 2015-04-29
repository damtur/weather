"use strict";

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
				WeatherApi.getWeatherByCoorditates(location.longitude, location.latitude).then(function(weather) {
					scope.weather = weather.data;
				}, function() {
					// Handle error
				});
			});

			// Get weather for custom city support
			scope.getWeatherByCity = function getWeatherByCity() {
				if (!scope.config.customCity) return;
				WeatherApi.getWeatherByCity(scope.config.customCity).then(function(weather) {
					scope.weather = weather.data;
				}, function() {
					// Handle error
				});
			};
		}
	};
});