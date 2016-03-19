(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$stateProvider','HomeController',
  function($stateProvider, HomeController) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'dist/js/app/home/home.html',
        controller: HomeController
      });
    }]);
})();
