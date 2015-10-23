'use strict';

/**
 * @ngdoc overview
 * @name trijeetmcomApp
 * @description
 * # trijeetmcomApp
 *
 * Main module of the application.
 */
angular
  .module('trijeetmcomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      // .when('/coursera', {
      //   templateUrl: 'views/coursera.html',
      //   controller: 'CourseraCtrl',
      //   controllerAs: 'coursera'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
