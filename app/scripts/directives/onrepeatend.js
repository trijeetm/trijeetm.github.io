'use strict';

/**
 * @ngdoc directive
 * @name trijeetmcomApp.directive:onRepeatEnd
 * @description
 * # onRepeatEnd
 */
angular.module('trijeetmcomApp')
  .directive('onRepeatEnd', function ($timeout) {
    return {
      link: function postLink(scope, element, attrs) {
        if (scope.$last) {
        	$timeout(function() {
          	scope.$emit('onRepeatEnd', element, attrs);
        	}, 1);
        }
      }
    };
  });
