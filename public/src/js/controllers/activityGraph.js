'use strict';

angular.module('skelpy_explorer.tools').controller('ActivityGraph',
  function (activityGraph, $scope) {
      activityGraph($scope);
  });
