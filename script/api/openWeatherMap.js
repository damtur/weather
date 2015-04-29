"use strict";

// Create api to retrive location via html 5
angular.module('cdty').factory('WeatherApi', function($http, WEATHER_API_URL) {

	// common config for all calls
	function _getBaseConfig() {
		return {
			method: 'GET',
			url: WEATHER_API_URL
		}
	}

	// Get weather from server by providing latitude and longitude
	function getWeatherByCoorditates(longitude, latitude) {
		var config = _getBaseConfig();
		angular.extend(config, {
			params: {
				'lat': latitude,
				'lon': longitude
			}
		});
	}

	// Get weather from server by providing city name
	function getWeatherByCity(cityName) {
		var config = _getBaseConfig();
		angular.extend(config, {
			params: {
				'q': cityName
			}
		});

		return $http(config);
	}

	return {
		getWeatherByCoorditates: getWeatherByCoorditates,
		getWeatherByCity: getWeatherByCity
	}
});