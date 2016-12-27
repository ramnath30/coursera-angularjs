(function() {
"use strict";

angular.module('common', [])
.constant('ApiBasePath', 'https://ramnath30-angularjs.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
