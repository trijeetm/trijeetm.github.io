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
      .when('/coursera', {
        templateUrl: 'views/coursera.html',
        controller: 'CourseraCtrl',
        controllerAs: 'coursera'
      })
      .when('/flow', {
        templateUrl: 'views/flow.html',
        controller: 'FlowCtrl',
        controllerAs: 'flow'
      })
      .when('/sonic-canvas', {
        templateUrl: 'views/sonic-canvas.html',
        // controller: 'FlowCtrl',
        // controllerAs: 'flow'
      })
      .when('/fingerboard', {
        templateUrl: 'views/fingerboard.html',
        // controller: 'FlowCtrl',
        // controllerAs: 'flow'
      })
      .when('/binaural-man', {
        templateUrl: 'views/binaural-man.html',
        // controller: 'FlowCtrl',
        // controllerAs: 'flow'
      })
      .when('/apb', {
        templateUrl: 'views/apb.html',
        // controller: 'FlowCtrl',
        // controllerAs: 'flow'
      })
      .when('/badumtss', {
        templateUrl: 'views/badumtss.html',
        // controller: 'FlowCtrl',
        // controllerAs: 'flow'
      })
      .when('/accompanier', {
        templateUrl: 'views/accompanier.html',
        // controller: 'FlowCtrl',
        // controllerAs: 'flow'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
