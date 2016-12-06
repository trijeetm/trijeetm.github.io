"use strict";angular.module("trijeetmcomApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angulartics","angulartics.google.analytics"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/coursera",{templateUrl:"views/coursera.html",controller:"CourseraCtrl",controllerAs:"coursera"}).when("/flow",{templateUrl:"views/flow.html",controller:"FlowCtrl",controllerAs:"flow"}).when("/sonic-canvas",{templateUrl:"views/sonic-canvas.html"}).when("/fingerboard",{templateUrl:"views/fingerboard.html"}).when("/binaural-man",{templateUrl:"views/binaural-man.html"}).when("/apb",{templateUrl:"views/apb.html"}).when("/badumtss",{templateUrl:"views/badumtss.html"}).when("/accompanier",{templateUrl:"views/accompanier.html"}).otherwise({redirectTo:"/"})}]),angular.module("trijeetmcomApp").controller("MainCtrl",["$scope",function(a){function b(){$(window).resize(c),c()}var c=function(){var a=angular.element(".grid-item"),b=$(a[0]).width(),c=Math.floor(3*b/4-3);a.each(function(){$(this).height(c)})};a.portfolioPieces=[{id:2,title:"Coursera Redesign",image:"images/coursera1.65215d2d.png",desc:"Product Design; UX Research",category:"project",link:"#/coursera",target:""},{id:5,title:"Sonic Canvas",image:"images/sonic-canvas.348efa2a.png",desc:"UX Design; App Development",category:"project",link:"#/sonic-canvas",target:""},{id:3,title:"Flow",image:"images/flow.7c27740e.png",desc:"UI / UX Design",category:"project",link:"#/flow",target:""},{id:7,title:"Fingerboard",image:"images/fingerboard-long.3bb7b2c3.png",desc:"Product Design; Audio Engineering",category:"project",link:"#/fingerboard",target:""},{id:8,title:"Binaural Man",image:"images/binaural-man.cb380c0a.png",desc:"Game Design & development",category:"project",link:"#/binaural-man",target:""},{id:9,title:"Alan's Psychedelic Breakfast",image:"images/asb-cover.a6503018.png",desc:"Data Visualization",category:"project",link:"#/apb",target:""},{id:10,title:"Ba-dum-tss!",image:"images/badumtss-mockup.caddfbf6.png",desc:"Interaction Design; Audio Engineering",category:"project",link:"#/badumtss",target:""},{id:11,title:"L'accompanier",image:"images/accomp-display.645534f3.png",desc:"Product Design & Engineering",category:"project",link:"#/accompanier",target:""}],a.$on("onRepeatEnd",function(a,b,d){"portfolioPieces"===d.collection&&c()}),b()}]),angular.module("trijeetmcomApp").directive("onRepeatEnd",["$timeout",function(a){return{link:function(b,c,d){b.$last&&a(function(){b.$emit("onRepeatEnd",c,d)},1)}}}]),angular.module("trijeetmcomApp").controller("CourseraCtrl",["$scope",function(a){}]),angular.module("trijeetmcomApp").controller("FlowCtrl",["$scope",function(a){}]),angular.module("trijeetmcomApp").run(["$templateCache",function(a){a.put("views/accompanier.html",'<article> <h1>L\'accompanier</h1> <h2 class="subtitle">A real-time visualizer for the audio around you</h2> <div class="meta"> <span class="tags">Product Design &amp; Engineering</span> <span class="date">Fall \'14</span> </div> <img src="images/accomp-display.645534f3.png" class="cover"> <div class="content"> L\'accompanier is a live drums and bass accompanier for keyboardists to jam or perform with. Simply plug in your keyboard through MIDI and starting playing, and the system will learn from your playing style, and synthesize accompanying drums and bass. </div> <div class="content"> The core motivation behind this project was the fact that I play the keyboards myself, and sometimes you just don\'t have anyone to play with. And in order to play something tangible, a drummer and a bassist are quite essential. This led to interesting challenge of combining music theory, artificial intelligence and interface design to design a responsive system with which one could jam with. </div> <div class="content"> <div class="subtext">Project URL: <a href="https://ccrma.stanford.edu/~trijeetm/l\'accompanier/" target="_blank">https://ccrma.stanford.edu/~trijeetm/l\'accompanier/</a></div> <div class="subtext">Audio engine implemented in C/C++ using Rt-Audio and Rt-Midi libraries, and UI designed using OpenGL and MCD APIs</div> </div> <div class="footer"> <a href="#/badumtss">Ba-dum-tss!</a> <a href="#/">Back to all projects</a> <span></span> </div> </article>'),a.put("views/apb.html",'<article> <h1>Alan\'s Psychedelic Breakfast</h1> <h2 class="subtitle">A real-time visualizer for the audio around you</h2> <div class="meta"> <span class="tags">Data Visualization</span> <span class="date">Fall \'14</span> </div> <img src="images/apb.c873d807.png" class="cover"> <div class="content italicize"> This page is still a work in progress. </div> <div class="content"> <div class="subtext">Project URL: <a href="https://ccrma.stanford.edu/~trijeetm/alan\'s-psychedelic-breakfast/" target="_blank">https://ccrma.stanford.edu/~trijeetm/alan\'s-psychedelic-breakfast/</a></div> <div class="subtext">Audio processing in C/C++ using Rt-Audio library, and visualizations via OpenGL</div> </div> <div class="footer"> <a href="#/binaural-man">Binaural Man</a> <a href="#/">Back to all projects</a> <a href="#/badumtss">Ba-dum-tss!</a> </div> </article>'),a.put("views/badumtss.html",'<article> <h1>Ba-dum-tss!</h1> <h2 class="subtitle">Convert your computer into a portable step sequencer</h2> <div class="meta"> <span class="tags">Interaction Design; Audio Engineering</span> <span class="date">Fall \'14</span> </div> <img src="images/badumtss-mockup.caddfbf6.png" class="cover"> <div class="content"> Ba-dum-tss is a step sequencer which allows the user to sequence drum beats, bass notes &amp; chords to create music. The idea was to reduce the barrier to music production, so that people with even minimal musical background could produce music. </div> <div class="content"> The challenge of this project was to design an interface which had a very low learning curve, and constrained in such a way that it can\'t produce wrong music, however keeping it dynamic enough such that the user can have control over what they are playing. </div> <div class="content"> <div class="subtext">Project URL: <a href="https://ccrma.stanford.edu/~trijeetm/ba-dum-tss/" target="_blank">https://ccrma.stanford.edu/~trijeetm/ba-dum-tss/</a></div> <div class="subtext">Interface designed using OpenGL and MCD APIs, audio engine implemented in C/C++ using Rt-Audio and fluidsynth libraries</div> </div> <div class="footer"> <a href="#/apb">Alan\'s Psychedelic Breakfast</a> <a href="#/">Back to all projects</a> <a href="#/accompanier">L\'accompanier</a> </div> </article>'),a.put("views/binaural-man.html",'<article> <h1>Binaural Man</h1> <h2 class="subtitle">Binaural audio based adventure game for iOS</h2> <div class="meta"> <span class="tags">Game Design &amp; Development</span> <span class="date">Winter \'15</span> </div> <img src="images/binaural-man.cb380c0a.png" class="cover"> <div class="content italicize"> This page is still a work in progress. </div> <div class="content"> <div class="subtext">Project URL: <a href="https://github.com/trijeetm/BinauralMan" target="_blank">https://github.com/trijeetm/BinauralMan</a></div> <div class="subtext">Mobile app developed using Objective-C, and audio engine implemented in C++ with BASS for iOS.</div> </div> <div class="footer"> <a href="#/fingerboard">Fingerboard</a> <a href="#/">Back to all projects</a> <a href="#/apb">Alan\'s Psychedelic Breakfast</a> </div> </article>'),a.put("views/coursera.html",'<article> <h1>Coursera Redesign</h1> <h2 class="subtitle">A redesign of the Coursera web product</h2> <div class="meta"> <span class="tags">Product Design; UX Research</span> <span class="date">Winter \'15</span> </div> <img src="images/coursera-cover.8195a002.png" class="cover"> <div class="content"> This project explores an alternate design to Coursera\'s web product with a focus on content discovery and consumption; providing a better first-page experience for the user, and a simpler and more intuitive way of finding new and relevant courses. </div> <div class="content"> <!-- <h3>Role</h3> --> Being a personal project, I was working on all the parts of the design process, from product design, to user experience, to interface design. </div> <img src="images/coursera-collage.a3653a4d.png" class="cover"> <div class="content"> The <a href="assets/coursera-report.pdf" target="_blank">full report</a> analyzes current issues in the design, and explores different solutions to these problems, culminating with high-fidelity mock-ups. </div> <div class="content"> <div class="subtext">Project Report: <a href="assets/coursera-report.pdf" target="_blank">Coursera-Redesign-Report.pdf</a></div> <div class="subtext">Mock-ups designed with Sketch, and interactive prototype with InVision</div> </div> <div class="footer"> <span></span> <a href="#/">Back to all projects</a> <a href="#/flow">Flow</a> </div> </article>'),a.put("views/fingerboard.html",'<article> <h1>Fingerboard</h1> <h2 class="subtitle">A wind based continuum music instrument controlled by the player’s breath</h2> <div class="meta"> <span class="tags">Product Design; Audio Engineering</span> <span class="date">Winter \'15</span> </div> <img src="images/fingerboard.f91afdf7.png" class="cover"> <div class="content italicize"> This page is still a work in progress. </div> <div class="content"> <div class="subtext">Project URL: <a href="https://github.com/trijeetm/Fingerboard" target="_blank">https://github.com/trijeetm/Fingerboard</a></div> <div class="subtext">Audio engine implemented in C++ using Synthesis Toolkit (STK), interface designed with Objective-C using Core Graphics and UIKit.</div> </div> <div class="footer"> <a href="#/sonic-canvas">Sonic Canvas</a> <a href="#/">Back to all projects</a> <a href="#/binaural-man">Binaural Man</a> </div> </article>'),a.put("views/flow.html",'<article> <h1>Flow</h1> <h2 class="subtitle">An iOS productivity app for amateur creators</h2> <div class="meta"> <span class="tags">UI / UX Design</span> <span class="date">Fall \'14</span> </div> <img src="images/flow.7c27740e.png" class="cover"> <div class="content italicize"> This page is still a work in progress. </div> <div class="content"> Flow is an iOS productivity app to help creative people streamline their projects by providing a tool to catalog inspiration, brainstorm, schedule tasks and obtain feedback on their work. </div> <div class="content"> This product was developed as a part of CS 147 - Stanford’s course on HCI+Design, where we started from needfinding and user testing, to low-fi paper prototypes, to mid-fi digital interactive prototypes, and finally to an iOS hi-fidelity prototype. I played the role of a product designer and engineer in a team of three. </div> <div class="content"> <div class="subtext">Project URL: <a href="http://stanford.edu/class/cs147/projects/creation/flow/" target="_blank">http://stanford.edu/class/cs147/projects/creation/flow/</a></div> <div class="subtext">Mock-ups designed with Photoshop and InVision, iOS prototype developed with Ionic.</div> </div> <div class="footer"> <a href="#/coursera">Coursera Redesign</a> <a href="#/">Back to all projects</a> <a href="#/sonic-canvas">Sonic Canvas</a> </div> </article>'),a.put("views/main.html",'<div class="intro"> <div class="brand"> <h1 class="display-desktop">Trijeet</h1> <h1 class="display-desktop">Mukhopadhyay</h1> <h1 class="display-mobile">Trijeet Mukhopadhyay</h1> <div class="social display-desktop"> <a href="https://www.linkedin.com/in/trijeetm" target="_blank" class="si socicon-linkedin"></a> <a href="https://www.twitter.com/trijeetm" target="_blank" class="si socicon-twitter"></a> <a href="https://github.com/trijeetm" target="_blank" class="si socicon-github"></a> <a href="https://soundcloud.com/trijeet-mukhopadhyay" target="_blank" class="si socicon-soundcloud"></a> <a href="https://www.behance.net/trijeetm" target="_blank" class="si socicon-behance"></a> </div> </div> <div class="blurb"> <p> Product designer, new media artist, and technologist living in the Bay Area. Studying computer science at Stanford University, focusing in <a href="http://hci.stanford.edu/" target="_blank">Human Computer Interaction</a> and <a href="https://ccrma.stanford.edu" target="_blank">music</a>. Organizer at <a href="https://www.treehacks.com/" target="_blank">TreeHacks</a>, and Design Fellow at <a href="http://kpcbfellows.com/" target="_blank">KPCB</a>. Previously, product design intern at <a href="https://www.uber.com/" target="_blank">Uber</a>, software engineering intern at <a href="https://www.bebop.co/" target="_blank">bebop</a>, and product designer at <a href="http://eagerpanda.com/" target="_blank">EagerPanda</a>. </p> <p> Here is a <a href="assets/resume.pdf" target="_blank">piece of paper</a> about me. </p> </div> <div class="social display-mobile"> <a href="https://www.linkedin.com/in/trijeetm" target="_blank" class="si socicon-linkedin"></a> <a href="https://www.twitter.com/trijeetm" target="_blank" class="si socicon-twitter"></a> <a href="https://github.com/trijeetm" target="_blank" class="si socicon-github"></a> <a href="https://soundcloud.com/trijeet-mukhopadhyay" target="_blank" class="si socicon-soundcloud"></a> <a href="https://www.behance.net/trijeetm" target="_blank" class="si socicon-behance"></a> </div> </div> <div class="portfolio"> <div class="grid"> <a class="grid-item {{piece.category}}" ng-repeat="piece in portfolioPieces | orderBy: \'id\'" on-repeat-end collection="portfolioPieces" ng-href="{{piece.link}}" target="{{piece.target}}"> <img ng-src="{{piece.image}}"> <div class="meta"> <span class="title">{{piece.title}}</span> <span class="desc">{{piece.desc}}</span> </div> </a> </div> </div> <div class="footer"> <hr> <p>Want to work on something interesting? Contact me at <a href="mailto:trijeetm@gmail.com">trijeetm@gmail.com</a>.</p> </div>'),a.put("views/sonic-canvas.html",'<article> <h1>Sonic Canvas</h1> <h2 class="subtitle">Collaborative real-time canvas for creating audio-visual art with people</h2> <div class="meta"> <span class="tags">UX Design; App Development</span> <span class="date">Winter \'15</span> </div> <img src="images/sonic-canvas.348efa2a.png" class="cover"> <div class="content italicize"> This page is still a work in progress. </div> <div class="content"> <div class="subtext">Project URL: <a href="https://ccrma.stanford.edu/~trijeetm/sonic-canvas/" target="_blank">https://ccrma.stanford.edu/~trijeetm/sonic-canvas/</a></div> <div class="subtext">Mobile app developed with Ionic and Firebase, and audio engine implemented with the Web Audio and MIDI.js</div> </div> <div class="footer"> <a href="#/flow">Flow</a> <a href="#/">Back to all projects</a> <a href="#/fingerboard">Fingerboard</a> </div> </article>')}]);