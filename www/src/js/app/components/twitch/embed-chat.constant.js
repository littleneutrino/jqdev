(function(){
  'use strict';

  angular.module('jessyQuilTv')
  .constant('twitchChatConstant', function(username) {
      return 'https://www.twitch.tv/' + username + '/chat';
    })
  })();
