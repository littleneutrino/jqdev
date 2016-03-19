(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$stateProvider',
  function($stateProvider) {

  $stateProvider
    .state('updates', {
      url: "/updates",
      templateUrl: "dist/js/app/updates/updates.html"
    });
  }]);
})();
