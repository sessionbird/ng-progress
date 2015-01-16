(function(window, angular, undefined) {
  'use strict';

  angular.module('angular-progress', []).
    directive('ngProgress', function () {
      return {
        scope: {
          'ngModel': '=',
          'theme': '@'
        },
        restrict: 'EA',
        template: '<div class="{{theme}} pace pace-active"><div class="pace-progress" data-progress="{{ngModel}}" data-progress-text="{{ngModel}}%" style="-webkit-transform: translate3d({{ngModel}}%, 0px, 0px); -ms-transform: translate3d({{ngModel}}%, 0px, 0px); transform: translate3d({{ngModel}}%, 0px, 0px);"><div class="pace-progress-inner"></div></div><div class="pace-activity"></div></div>'
      };
    });
})(window, window.angular);

