"use strict";

// Getting position from client browser and then. Fetching weather from open weather api.
// Client may use getWeatherByCity option to retrieve weather for a particular city
angular.module('cdty').directive('weather', function(GeolocationApi, WeatherApi, Config, GENERIC_ERROR) {
	return {
		scope: true,
		link: function(scope) {
			scope.weather = {};
			scope.error = null;
			scope.temperatureOptions = [
				{'value': 'celsius', 'name': 'Celsius'},
				{'value': 'fahrenheit', 'name': 'Fahrenheit'},
			];

			// Client configuration e.g. temperature unit. Automatic saving in cookie.
			scope.config = Config.getConfig();
			scope.$watch('config', function() {
				Config.saveConfig(scope.config);
			}, true);

			// Get client location
			var locationPromise = GeolocationApi.getLocation();
			locationPromise.catch(function() {
				scope.error = GENERIC_ERROR;
			});

			// Get weather by location
			locationPromise.then(function(location) {
				WeatherApi.getWeatherByCoorditates(location.longitude, location.latitude).then(function(weather) {
					scope.weather = weather.data;
				}, function() {
					scope.error = GENERIC_ERROR;
				});
			});

			// Get weather for custom city support
			scope.getWeatherByCity = function getWeatherByCity() {
				scope.cityEditing = false;
				if (!scope.weather.name) return;
				WeatherApi.getWeatherByCity(scope.weather.name).then(function(weather) {
					scope.weather = weather.data;
				}, function() {
					scope.error = GENERIC_ERROR;
				});
			};

			// For showing button to accept city change
			scope.cityEditing = false;
			scope.cityFocus = function cityFocus() {
				scope.cityEditing = true;
			};

			// For closing error message
			scope.closeError = function closeError() {
				scope.error = null;
			};
		}
	};
});