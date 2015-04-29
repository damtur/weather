"use strict";

// Initialize module cdty to namespace project
// and initialize all needed modules
angular.module('cdty', [
	"ngCookies",
	"ngTouch"
]);

// Open weather map api url
angular.module('cdty').value('WEATHER_API_URL', 'http://api.openweathermap.org/data/2.5/weather');
angular.module('cdty').value('WEATHER_COOKIE', 'CDTY_WEATHER');