'use strict';

angular.module('skelpy_explorer.system').factory('addressTxs',
  function ($http, $q) {
      return function (address, direction) {
          var lessMore = new LessMore($http, $q, {
              url       : '/api/getTransactionsByAddress',
              parent    : 'address',
              key       : 'transactions',
              address   : address,
              direction : direction
          });

          lessMore.loadMore = function () {
              this.getData(0, 1, function (data) {
                  var changed = false;

                  if (this.results[0] && data[0]) {
                      changed = (this.results[0].id !== data[0].id);
                  }
                  if (changed) {
                      this.reloadMore();
                  } else {
                      LessMore.prototype.loadMore.call(this);
                  }
              }.bind(this));
          };

          return lessMore;
      };
  });
