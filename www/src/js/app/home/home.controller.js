(function(){
  'use strict';

  angular.module('jessyQuilTv')
  .controller('HomeController',
  ['TwitchStreamsService', 'twitchUsernameConstant', 'twitchVideoConstant', HomeController]);

  function HomeController(service, username, getVideo) {
    var vm = this;

    vm.displayVideo = false;
    vm.videoSrc = null;

    service.get(function(channel) {
      if(channel.channel !== null) {
        vm.displayVideo = true;
        vm.videoSrc = getVideo(username);
      }
    });
  }
})();
