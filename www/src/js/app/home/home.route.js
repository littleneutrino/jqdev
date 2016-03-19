(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'dist/js/app/home/home.html',
        controller: 'HomeController'
      });
    }]);
})();
