<!DOCTYPE html>
<html lang="en" ng-app="cdty">
  <head>
    <meta charset="utf-8">
    <title>Weather - Codity Ltd</title>
    <script type="text/javascript" src="script/lib/angular.min.js"></script>
    <script type="text/javascript" src="script/lib/angular-cookies.min.js"></script>
    <script type="text/javascript" src="script/lib/angular-touch.min.js"></script>
    <script type="text/javascript" src="script/config.js"></script>
    <script type="text/javascript" src="script/api/geolocation.js"></script>
    <script type="text/javascript" src="script/api/openWeatherMap.js"></script>
    <script type="text/javascript" src="script/filters.js"></script>
    <script type="text/javascript" src="script/tools.js"></script>
    <script type="text/javascript" src="script/weather.js"></script>

    <link rel="stylesheet" type="text/css" href="style/background.css">
    <link rel="stylesheet" type="text/css" href="style/layout.css">
  </head>
  <body weather ng-class="'bck-' + weather.weather[0].icon">
    <div class="container" ng-if="weather">
      <div class="city-name">
        <button type="button" ng-show="cityEditing" ng-click="getWeatherByCity()">ok</button><!--
      --><input type="text" ng-class="{editing: cityEditing}" ng-model="weather.name" ng-enter="getWeatherByCity()" ng-focus="cityFocus()"></input>
      </div>
      <div class="weather-container">
        <div class="temperature">
          <span>{{weather.main.temp | filterPicker:config.temperature}}
        </div>

        <div class="pressure">
          <span>{{weather.main.pressure}} hPa</span>
        </div>
      </div>
    
      <div class="config" ng-class="{contracted: !config.showConfig}">
        <button class="toggle-config" ng-click="config.showConfig = !config.showConfig">•••</button>
        <p>
          Temperature in: 
          <select ng-model="config.temperature" ng-options="temperature.value as temperature.name for temperature in temperatureOptions"></select>
        </p>
      </div>
    </div>
  </body>
</html>