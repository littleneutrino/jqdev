(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$urlRouterProvider',
  function($urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');
  }]);
})();
