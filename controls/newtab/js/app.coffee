angular.module 'app', []

.controller 'MainCtrl', ($scope, $timeout) ->
    $scope.date = {}

    do updateTime = ->
        $scope.date.tz = new Date
        $timeout updateTime, 1000
