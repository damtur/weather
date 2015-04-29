"use strict";

// Create api to retrive location via html 5
angular.module('cdty').factory('WeatherApi', function($http, WEATHER_API_URL) {


	// Get weather from server by providing latitude and longitude
	function getWeather(longitude, latitude) {

		var config = {
			method: 'GET',
      url: WEATHER_API_URL,
      params: {
      	'lat': latitude,
      	'lon': longitude
      }
		};

		return $http(config);
	}

	return {
		getWeather: getWeather
	}
});