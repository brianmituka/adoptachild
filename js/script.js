$(document).ready(function() {
$('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['Home', 'About Us', 'Meet The Kids', 'Contact Us', 'Feedback'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About Us', 'The Kids', 'Contact Us', 'Feedback'],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'top',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: true,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: true,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,
    //Accessibility
   keyboardScrolling: true,
   animateAnchor: true,
   recordHistory: true,

   //Design
   controlArrows: true,
   verticalCentered: false,
   sectionsColor : ['#ccc', '#fff', '#fff', '#fff'],
   paddingTop: '3em',
   paddingBottom: '10px',
   fixedElements: '#header, .footer',
   responsiveWidth: 0,
   responsiveHeight: 0,
   responsiveSlides: false,

   //Custom selectors
   sectionSelector: '.section',
   slideSelector: '.slide',

   lazyLoading: true,

   //events
   onLeave: function(index, nextIndex, direction){},
   afterLoad: function(anchorLink, index){},
   afterRender: function(){},
   afterResize: function(){},
   afterResponsive: function(isResponsive){},
   afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
   onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
});
});
