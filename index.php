<!DOCTYPE html>
<html lang="en" ng-app="cdty">
    <head>
        <meta charset="utf-8">
        <title>Codity Ltd</title>
        <script type="text/javascript" src="script/lib/angular.min.js"></script>
        <script type="text/javascript" src="script/config.js"></script>
        <script type="text/javascript" src="script/api/geolocation.js"></script>
        <script type="text/javascript" src="script/main.js"></script>
    </head>
    <body>
        <h1>Hello World from Codity</h1>
        <geolocation>
            Your location:
            <span>Longitude: {{location.longitude}}</span>
            <span>Latitude: {{location.latitude}}</span>
        </geolocation>
    </body>
</html>