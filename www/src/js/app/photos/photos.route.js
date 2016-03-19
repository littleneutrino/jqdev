(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('photos', {
        url: "/photos",
        templateUrl: "dist/js/app/photos/photos.html"
      });
  }]);
})();
