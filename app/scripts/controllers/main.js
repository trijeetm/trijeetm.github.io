'use strict';

/**
 * @ngdoc function
 * @name trijeetmcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trijeetmcomApp
 */
angular.module('trijeetmcomApp')
  .controller('MainCtrl', function ($scope) {
  	// set dynamic height of portfolio items
  	var setGridItemHeight = function () {
  		var gridItems = angular.element('.grid-item');
  		var width = $(gridItems[0]).width();
  		var height = Math.floor((width * 3 / 4) - 3); 
  		gridItems.each(function () {
  			$(this).height(height);
  		});
  	};

  	function init() {
  		$(window).resize(setGridItemHeight);
  		setGridItemHeight();
  	}

  	$scope.portfolioPieces = [
      {
        id: 2,
        title: 'Coursera Redesign',
        image: 'images/coursera1.png',
        desc: 'Product Design; UX Research',
        category: 'project',
        link: 'assets/coursera-report.pdf',
        target: '_blank'
      },
  		{
  			id: 5,
  			title: 'Sonic Canvas',
  			image: 'images/sonic-canvas.png',
  			desc: 'UX Design; Product Engineering',
  			category: 'project',
        link: 'https://ccrma.stanford.edu/~trijeetm/sonic-canvas/',
        target: '_blank'
  		},
  		{
  			id: 3,
  			title: 'Flow',
  			image: 'images/flow.png',
  			desc: 'UI / UX Design; iOS Prototyping',
  			category: 'project',
        link: 'http://hci.stanford.edu/courses/cs147/2014/au/projects/creation/flow/',
        target: '_blank'
  		},
      {
        id: 7,
        title: 'Fingerboard',
        image: 'images/fb0.png',
        desc: 'Product Design; Audio Engineering',
        category: 'project',
        link: 'https://github.com/trijeetm/Fingerboard',
        target: '_blank'
      },
      {
        id: 8,
        title: 'Binaural Man',
        image: 'images/binaural-man.png',
        desc: 'Game Design; iOS Engineering',
        category: 'project',
        link: 'https://github.com/trijeetm/BinauralMan',
        target: '_blank'
      },
      {
        id: 9,
        title: 'Alan\'s Psychedelic Breakfast',
        image: 'images/asb-cover.png',
        desc: 'Audio Processing; Data Visualization',
        category: 'project',
        link: 'https://ccrma.stanford.edu/~trijeetm/alan\'s-psychedelic-breakfast/',
        target: '_blank'
      },
  		{
  			id: 10,
  			title: 'Ba-dum-tss!',
  			image: 'images/badumtss-cover.png',
  			desc: 'Interaction Design; Audio Engineering',
  			category: 'project',
        link: 'https://ccrma.stanford.edu/~trijeetm/ba-dum-tss/',
        target: '_blank'
  		},
  		{
  			id: 11,
  			title: 'L\'accompanier',
  			image: 'images/accomp.png',
  			desc: 'Product Design; Audio Engineering',
  			category: 'project',
        link: 'https://ccrma.stanford.edu/~trijeetm/l\'accompanier/',
        target: '_blank'
  		}
  	];

  	$scope.$on('onRepeatEnd', function (scope, element, attrs) {
  		if (attrs.collection === 'portfolioPieces') {
  			setGridItemHeight();
  		}
  	});

  	init();
  });
