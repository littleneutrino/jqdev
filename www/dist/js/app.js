(function() {
  'use strict';

  angular.module('jessyQuilTv', [
    'ngResource',
    'ui.router',
    'ui.bootstrap'
  ]);
})();

(function(){
  'use strict';

  angular.module('jessyQuilTv')
  .constant('twitchUsernameConstant', 'jessyQuil');
})();

(function(){
  'use strict';

  angular.module('jessyQuilTv')
  .constant('twitchUrlConstant', 'https://api.twitch.tv/kraken');
})();

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

(function(){
  'use strict';

  angular.module('jessyQuilTv')
  .constant('twitchVideoConstant', function(username) {
      return 'https://player.twitch.tv/?channel=' + username;
  })
})();

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

(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$stateProvider',
  function($stateProvider) {

  $stateProvider
    .state('info', {
      url: "/info",
      templateUrl: "dist/js/app/info/info.html"
    });
  }]);
})();

(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'dist/js/app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      });
    }]);
})();

(function(){
  'use strict';

  angular.module('jessyQuilTv')
  .controller('HomeController',
  ['TwitchStreamsService', 'twitchUsernameConstant', 'twitchVideoConstant', '$sce', HomeController]);

  function HomeController(service, username, getVideo, $sce) {
    var vm = this;

    vm.displayVideo = false;
    vm.videoSrc = null;

    service.get(function(channel) {
      if (!(channel.stream === null)) {
        vm.displayVideo = true;
        vm.videoSrc = $sce.trustAsResourceUrl(getVideo(username));
      }
    });
  }
})();

(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$stateProvider',
  function($stateProvider) {

  $stateProvider
    .state('gettingHelp', {
      url: "/getting-help",
      templateUrl: "dist/js/app/getting-help/getting-help.html"
    });
  }]);
})();

(function(){
  'use strict';

  angular.module('jessyQuilTv')
  .constant('twitchChatConstant', function(username) {
      return 'https://www.twitch.tv/' + username + '/chat';
    })
  })();

(function() {
  'use strict';

  angular.module('jessyQuilTv').config(['$urlRouterProvider',
  function($urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');
  }]);
})();

(function() {
  'use strict';

  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
    if (d.getElementById(id)) { return t; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
    return t;
  }(document, "script", "twitter-wjs"));

})();

(function($) {
  'use strict';

    $.fn.parallax = function(options) {

        var windowHeight = $(window).height();

        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);

        // Iterate over each object in collection
        return this.each( function() {

        	// Save a reference to the element
        	var $this = $(this);

        	// Set up Scroll Handler
        	$(document).scroll(function(){

    		        var scrollTop = $(window).scrollTop();
            	        var offset = $this.offset().top;
            	        var height = $this.outerHeight();

    		// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}

			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

                 // Apply the Y Background Position to Set the Parallax Effect
    			$this.css('background-position', 'center ' + yBgPosition + 'px');

        	});
        });
    };

    $('.bg-1,.bg-3').parallax({
    	speed :	0.15
    });

    $('.bg-2').parallax({
    	speed :	0.25
    });
})(jQuery);

//# sourceMappingURL=app.js.map
