'use strict';

var config = {};
config.SKP = {};
config.freegeoip = {};
config.redis = {};
config.proposals = {};
config.exchangeRates = {exchanges: { SKP: {}, BTC: {}}};
config.marketWatcher = {exchanges: {}, candles: {}, orders: {}};

module.exports = config;
