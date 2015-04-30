"use strict";

// Initialize module cdty to namespace project
// and initialize all needed modules
angular.module('cdty', [
	"ngCookies", // For cookies support - saving configuration
	"ngTouch"    // For better touch support
]);

// Open weather map api url
angular.module('cdty').value('WEATHER_API_URL', 'http://api.openweathermap.org/data/2.5/weather');
angular.module('cdty').value('WEATHER_COOKIE', 'CDTY_WEATHER');
angular.module('cdty').value('GENERIC_ERROR', 'Something is not right. Please try entering city name and try again.');


// Cookie support
angular.module('cdty').factory('Config', function($cookies, WEATHER_COOKIE) {
	// Retrieve configuration from cookie if present 
	function getConfig() {
		if (!$cookies.WEATHER_COOKIE) return {
			'temperature': 'celsius',
			'showConfig': false,
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

