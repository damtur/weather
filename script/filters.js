"use strict";

angular.module('cdty').filter('fahrenheit', function() {
	return function(input) {
		if (!input) return "";
		return Math.round(9/5 * parseFloat(input) - 459.67) + "°F";
	};
});

angular.module('cdty').filter('celcius', function() {
	return function(input) {
		if (!input) return "";
		return Math.round(parseFloat(input) - 273.15) + "°C";
	};
});

angular.module('cdty').filter('filterPicker', function($filter) {
	return function(value, filterName) {
		return $filter(filterName)(value);
	};
});