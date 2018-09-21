'use strict';

angular.module('skelpy_explorer.tools').controller('NetworkMonitor',
  function (networkMonitor, $scope) {
      networkMonitor($scope);
  });
