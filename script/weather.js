"use strict";

angular.module('cdty').factory('Config', function($cookies, WEATHER_COOKIE) {
	// Retrieve configuration from cookie if present 
	function getConfig() {
		if (!$cookies.WEATHER_COOKIE) return {
			'temperature': 'celsius'
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

			// Temporary
			scope.backgrounds = [
				{ 'value': '01d', 'name': '01d'},
        { 'value': '01n', 'name': '01n'},
        { 'value': '02d', 'name': '02d'},
        { 'value': '02n', 'name': '02n'},
        { 'value': '03d', 'name': '03d'},
        { 'value': '03n', 'name': '03n'},
        { 'value': '04d', 'name': '04d'},
        { 'value': '04n', 'name': '04n'},
        { 'value': '09d', 'name': '09d'},
        { 'value': '09n', 'name': '09n'},
        { 'value': '10d', 'name': '10d'},
        { 'value': '10n', 'name': '10n'},
        { 'value': '11d', 'name': '11d'},
        { 'value': '11n', 'name': '11n'},
        { 'value': '13d', 'name': '13d'},
        { 'value': '13n', 'name': '13n'},
        { 'value': '50d', 'name': '50d'},
        { 'value': '50n', 'name': '50n'}
      ];
      scope.background = '01d';

			scope.temperatureOptions = [
				{'value': 'celsius', 'name': 'Celsius'},
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