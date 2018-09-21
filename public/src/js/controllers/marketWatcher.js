'use strict';

angular.module('skelpy_explorer.tools').controller('MarketWatcher',
  function (marketWatcher, $scope) {
      marketWatcher($scope);
  });
