(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$stateProvider',
  function($stateProvider) {

  $stateProvider
    .state('gettingHelp', {
      url: "/getting-help",
      templateUrl: "dist/js/app/getting-help/getting-help.html"
    });
  }]);
})();
