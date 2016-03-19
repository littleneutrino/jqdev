(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$stateProvider',
  function($stateProvider) {

  $stateProvider
    .state('info', {
      url: "/info",
      templateUrl: "dist/js/app/info/info.html"
    });
  }]);
})();
