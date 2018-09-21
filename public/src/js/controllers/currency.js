'use strict';

angular.module ('skelpy_explorer.currency').controller ('CurrencyController',
  function ($scope, $rootScope) {
    $rootScope.currency.symbol = localStorage && localStorage.getItem ('skelpy_explorer-currency') || 'SKP';

    $scope.setCurrency = function(currency) {
      $rootScope.currency.symbol = currency;
      if (localStorage) {
        localStorage.setItem ('skelpy_explorer-currency', currency);
      }
    };
  });
