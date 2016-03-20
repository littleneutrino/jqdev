(function(){
  'use strict';

  angular.module('jessyQuilTv')
  .constant('twitchVideoConstant', function(username) {
      return 'https://player.twitch.tv/?channel=' + username;
  });
})();
