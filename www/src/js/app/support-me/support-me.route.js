(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$stateProvider',
  function($stateProvider) {

  $stateProvider
    .state('supportMe', {
      url: "/support-me",
      templateUrl: "dist/js/app/support-me/support-me.html"
    });
  }]);
})();
