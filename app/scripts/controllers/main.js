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
  		var height = width * 3 / 4; 
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
  			id: 1,
  			title: 'bebop.co',
  			image: 'images/bebop-logo.svg',
  			desc: 'Software Engineering Intern',
  			time: 'Summer \'15',
  			category: 'work',
        link: 'http://www.bebop.co/',
        target: '_blank'
  		},
      {
        id: 2,
        title: 'Coursera Redesign',
        image: 'images/coursera1.png',
        desc: 'Product Design; UX Research',
        time: 'Winter \'14',
        category: 'project',
        link: 'assets/coursera-report.pdf',
        target: '_blank'
      },
  		{
  			id: 5,
  			title: 'Sonic Canvas',
  			image: 'images/sonic-canvas.png',
  			desc: 'UX Design; Product Engineering',
  			time: 'Winter \'14',
  			category: 'project',
        link: 'https://ccrma.stanford.edu/~trijeetm/sonic-canvas/',
        target: '_blank'
  		},
  		{
  			id: 3,
  			title: 'Flow',
  			image: 'images/flow.png',
  			desc: 'UI / UX Design; iOS Prototyping',
  			time: 'Fall \'14',
  			category: 'project',
        link: 'http://stanford.edu/class/cs147/projects/creation/flow/',
        target: '_blank'
  		},
      {
        id: 7,
        title: 'Fingerboard',
        image: 'images/fb0.png',
        desc: 'Product Design; Audio Engineering',
        time: 'Winter \'14',
        category: 'project',
        link: 'https://github.com/trijeetm/Fingerboard',
        target: '_blank'
      },
      {
        id: 8,
        title: 'Binaural Man',
        image: 'images/binaural-man.png',
        desc: 'Game Design; iOS Engineering',
        time: 'Winter \'14',
        category: 'project',
        link: 'https://github.com/trijeetm/BinauralMan',
        target: '_blank'
      },
      {
        id: 9,
        title: 'Alan\'s Psychedelic Breakfast',
        image: 'images/asb-cover.png',
        desc: 'Audio Processing; Data Visualization',
        time: 'Fall \'14',
        category: 'project',
        link: 'https://ccrma.stanford.edu/~trijeetm/alan\'s-psychedelic-breakfast/',
        target: '_blank'
      },
  		{
  			id: 10,
  			title: 'Ba-dum-tss!',
  			image: 'images/badumtss-cover.png',
  			desc: 'Interaction Design; Audio Engineering',
  			time: 'Fall \'14',
  			category: 'project',
        link: 'https://ccrma.stanford.edu/~trijeetm/ba-dum-tss/',
        target: '_blank'
  		},
  		{
  			id: 11,
  			title: 'L\'accompanier',
  			image: 'images/accomp.png',
  			desc: 'Product Design; Audio Engineering',
  			time: 'Fall \'14',
  			category: 'project',
        link: 'https://ccrma.stanford.edu/~trijeetm/l\'accompanier/',
        target: '_blank'
  		},
      {
        id: 4,
        title: 'EagerPanda',
        image: 'images/ep.png',
        desc: 'UI / UX Design Intern',
        time: 'Summer \'13 - Winter \'14',
        category: 'work',
        link: 'http://eagerpanda.com/',
        target: '_blank'
      },
      {
        id: 6,
        title: 'TreeHacks',
        image: 'images/treehacks.png',
        desc: 'Organizer',
        time: '',
        category: 'work',
        link: 'https://www.treehacks.com/',
        target: '_blank'
      },
  		{
  			id: 12,
  			title: 'BASES',
  			image: 'images/bases-cover.png',
  			desc: 'Officer',
  			time: 'Fall \'13 - Spring \'14',
  			category: 'work',
        link: 'http://bases.stanford.edu/',
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
