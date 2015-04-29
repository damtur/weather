<!DOCTYPE html>
<html lang="en" ng-app="cdty">
  <head>
    <meta charset="utf-8">
    <title>Weather - Codity Ltd</title>
    <script type="text/javascript" src="script/lib/angular.min.js"></script>
    <script type="text/javascript" src="script/config.js"></script>
    <script type="text/javascript" src="script/api/geolocation.js"></script>
    <script type="text/javascript" src="script/api/openWeatherMap.js"></script>
    <script type="text/javascript" src="script/filters.js"></script>
    <script type="text/javascript" src="script/main.js"></script>
  </head>
  <body>
    <h1>Your weather</h1>
    <weather>
      <div>
        <p>
          You are in <span>{{weather.name}}</span>
        </p>
        <p>
          Your temperature: {{weather.main.temp | filterPicker:config.temperature}}
        </p>

        <p>
          Your pressure: <span>{{weather.main.pressure}} hPa</span>
        </p>
      </div>
      <div>
        <h3>Config</h3>
        <p>
        Show temperature in: 
        <select ng-model="config.temperature" ng-options="temperature.value as temperature.name for temperature in config.temperatureOptions"></select></p>
      </div>
    </weather>
  </body>
</html>