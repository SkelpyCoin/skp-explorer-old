'use strict';

angular.module('skelpy_explorer.system').factory('blockTxs',
  function ($http, $q) {
      return function (blockId) {
          var lessMore = new LessMore($http, $q, {
              url     : '/api/getTransactionsByBlock',
              parent  : 'block',
              key     : 'transactions',
              blockId : blockId
          });

          return lessMore;
      };
  });
