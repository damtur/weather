<!DOCTYPE html>
<html lang="en" ng-app="cdty">
  <head>
    <meta charset="utf-8">
    <title>Weather - Codity Ltd</title>
    <script type="text/javascript" src="script/lib/angular.min.js"></script>
    <script type="text/javascript" src="script/lib/angular-cookies.min.js"></script>
    <script type="text/javascript" src="script/config.js"></script>
    <script type="text/javascript" src="script/api/geolocation.js"></script>
    <script type="text/javascript" src="script/api/openWeatherMap.js"></script>
    <script type="text/javascript" src="script/filters.js"></script>
    <script type="text/javascript" src="script/tools.js"></script>
    <script type="text/javascript" src="script/weather.js"></script>

    <link rel="stylesheet" type="text/css" href="style/background.css">
    <link rel="stylesheet" type="text/css" href="style/layout.css">
  </head>
  <body weather ng-class="'bck-' + background">
    <div class="container">
      <div class="city-name">
        <span>{{weather.name}}</span>
      </div>
      <div class="weather-container">
        <div class="temperature">
          <span>{{weather.main.temp | filterPicker:config.temperature}}
        </div>

        <div class="pressure">
          <span>{{weather.main.pressure}} hPa</span>
        </div>
      </div>
      <div class="config">
        <h3>Config</h3>
        <p>
          Temperature in: 
          <select ng-model="config.temperature" ng-options="temperature.value as temperature.name for temperature in temperatureOptions"></select>
        </p>

        <p>
          Custom city:
          <input ng-enter="getWeatherByCity()" type="text" ng-model="config.customCity">
          <button ng-click="getWeatherByCity()">Go</button>

          <select ng-model="background" ng-options="b.value as b.name for b in backgrounds"></select>
        </p>
      </div>
    </div>
  </body>
</html>