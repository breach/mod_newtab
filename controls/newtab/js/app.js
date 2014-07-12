angular.module('app', []).controller('MainCtrl', function($scope, $timeout) {
    var updateTime;
    $scope.date = {};
    return (updateTime = function() {
        $scope.date.tz = new Date;
        return $timeout(updateTime, 1000);
    })();
});
