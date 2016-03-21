(function(){
  'use strict';

  angular.module('jessyQuilTv')
  .service('TwitchStreamsService',
  ['$resource', 'twitchUrlConstant', 'twitchUsernameConstant', TwitchStreamsService]);

  function TwitchStreamsService($resource, twitchUrl, username) {
    var streams = $resource(twitchUrl + '/streams/:channel',
      {
         channel: username
      },
      {
        method: 'JSONP',
        params: {
          callback: 'JSON_CALLBACK'
        },
        isArray: false
      });

    this.get = function(callback) {
      streams.get(function(stream) {
        callback(stream);
      });
    };
  }
})();
