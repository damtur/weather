"use strict";

angular.module('cdty').factory('Config', function($cookies, WEATHER_COOKIE) {
	// Retrieve configuration from cookie if present 
	function getConfig() {
		if (!$cookies.WEATHER_COOKIE) return {
			'temperature': 'celcius'
		}
		return angular.fromJson($cookies.WEATHER_COOKIE);
	}

	// Save configuration to client cookie
	function saveConfig(config) {
		$cookies.WEATHER_COOKIE = angular.toJson(config);
	}

	return {
		getConfig: getConfig,
		saveConfig: saveConfig
	};
});


angular.module('cdty').directive('weather', function(GeolocationApi, WeatherApi, Config) {

	return {
		scope: true,
		link: function(scope) {
			scope.weather = {};

			scope.temperatureOptions = [
				{'value': 'celcius', 'name': 'Celcius'},
				{'value': 'fahrenheit', 'name': 'Fahrenheit'},
			];

			// Client configuration e.g. temperature unit, last entered custom city
			scope.config = Config.getConfig();
			scope.$watch('config', function() {
				Config.saveConfig(scope.config);
			}, true);

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