'use strict';

angular.module('skelpy_explorer',[
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngProgress',
    'ui.bootstrap',
    'gettext',
    'monospaced.qrcode',
    'skelpy_explorer.system',
    'skelpy_explorer.socket',
    'skelpy_explorer.blocks',
    'skelpy_explorer.transactions',
    'skelpy_explorer.address',
    'skelpy_explorer.search',
    'skelpy_explorer.tools',
    'skelpy_explorer.currency'
]);

angular.module('skelpy_explorer.system', []);
angular.module('skelpy_explorer.socket', []);
angular.module('skelpy_explorer.blocks', []);
angular.module('skelpy_explorer.transactions', []);
angular.module('skelpy_explorer.address', []);
angular.module('skelpy_explorer.search', []);
angular.module('skelpy_explorer.tools', ['naturalSort']);
angular.module('skelpy_explorer.currency', []);
