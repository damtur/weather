<!DOCTYPE html>
<html lang="en" ng-app="cdty">
  <head>
    <meta charset="utf-8">
    <title>Weather - Codity Ltd</title>
    <script type="text/javascript" src="script/lib/angular.min.js"></script>
    <script type="text/javascript" src="script/config.js"></script>
    <script type="text/javascript" src="script/api/geolocation.js"></script>
    <script type="text/javascript" src="script/api/openWeatherMap.js"></script>
    <script type="text/javascript" src="script/main.js"></script>
  </head>
  <body>
    <h1>Your weather</h1>
    <weather>
      You are in <span>{{weather.name}}</span>
      
      Your temperature: <span>{{weather.main.temp}}K</span>
      Your pressure: <span>{{weather.main.pressure}} hPa</span>
    </weather>
  </body>
</html>