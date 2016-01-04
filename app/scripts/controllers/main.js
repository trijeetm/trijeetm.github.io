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
        link: '#/coursera',
        target: ''
      },
  		{
  			id: 5,
  			title: 'Sonic Canvas',
  			image: 'images/sonic-canvas.png',
  			desc: 'UX Design; App Development',
  			category: 'project',
        link: '#/sonic-canvas',
        target: ''
  		},
  		{
  			id: 3,
  			title: 'Flow',
  			image: 'images/flow.png',
  			desc: 'UI / UX Design',
  			category: 'project',
        link: '#/flow',
        target: ''
  		},
      {
        id: 7,
        title: 'Fingerboard',
        image: 'images/fingerboard-long.png',
        desc: 'Product Design; Audio Engineering',
        category: 'project',
        link: '#/fingerboard',
        target: ''
      },
      {
        id: 8,
        title: 'Binaural Man',
        image: 'images/binaural-man.png',
        desc: 'Game Design & development',
        category: 'project',
        link: '#/binaural-man',
        target: ''
      },
      {
        id: 9,
        title: 'Alan\'s Psychedelic Breakfast',
        image: 'images/asb-cover.png',
        desc: 'Data Visualization',
        category: 'project',
        link: '#/apb',
        target: ''
      },
  		{
  			id: 10,
  			title: 'Ba-dum-tss!',
  			image: 'images/badumtss-mockup.png',
  			desc: 'Interaction Design; Audio Engineering',
  			category: 'project',
        link: '#/badumtss',
        target: ''
  		},
  		{
  			id: 11,
  			title: 'L\'accompanier',
  			image: 'images/accomp-display.png',
  			desc: 'Product Design & Engineering',
  			category: 'project',
        link: '#/accompanier',
        target: ''
  		}
  	];

  	$scope.$on('onRepeatEnd', function (scope, element, attrs) {
  		if (attrs.collection === 'portfolioPieces') {
  			setGridItemHeight();
  		}
  	});

  	init();
  });
