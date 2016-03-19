(function(){
  'use strict';

  angular.module('jessyQuilTv')
  .controller('HomeController',
  ['TwitchStreamsService', HomeController]);

  function HomeController(service) {
    console.log('Controller Loaded');
  }
})();
