/**
 * Place your JS-code here.
 */

/**
 * Get started with jQuery.
 */
$(document).ready(function(){
  'use strict';

  /**
   * Related to all examples. This expands the box to full width.
   */
  $('.gift').click(function() {
    $(this).parent().addClass('fullwidth');
    $(this).parent().find('*').show('slow');
    $(this).parent().children('.gift').hide();
    console.log("Clicked to open a box, displaying it in full width.");
  });
  

  /**
   * Related to all examples. This minimizes the box.
   */
  $('.minimize').click(function(event) {
    $(this).parent().find('*').hide();
    $(this).parent().removeClass().addClass('box').show();
    $(this).parent().children('.gift').show();
    console.log("Minimizing the box.");
  });
  

  /**
   * Only related to example 1.
   */
  $('#box1 .example, #box1 p').click(function() {
    $(this).toggleClass('dark');
    console.log("Toggle the dark class.");
  });

  /**
   * Only related to example 2. 
   */
  $('#box2').click(function() {
    if($(this).hasClass('fullwidth')) {
      $(this).toggleClass('pink');
      event.stopPropagation();
      console.log("Make the background a bit pink.");
    }
  });

  $('#box2 img.example').click(function() {
    $(this).toggleClass('thumbnail');
    console.log("Resizing the image.");
  });

  /**
   * Only related to example 3. 
   */
  var addColor = function() {
    $('<div></div>')
      .addClass('palette')
      .css('background-color', $('#box3_color').val())
      .insertBefore('#palette')
      .click(function() {
        $(this).remove();
        console.log("Removing an item from the color palette.");
      });
    console.log("Adding an item to the color palette." + $('#box3_color').val());
  };

  $('#box3 input[type=button]').click(addColor);
  $('#box3 input[type=text]').keypress(function(event) {
    if ( event.which == 13 ) { //Enter keycode
      event.preventDefault();
      addColor();
    }
  });

  /**
   * Only related to example 4. 
   */
  var currentDimension = function() {
    var height = $('#me-image-4').height(),
        width = $('#me-image-4').width();
        $('#box4_current').text(width + ' x ' + height);
  };
  
  $('#box4_dimensions').click(currentDimension());
  
  $('#box4_height_incr').click(function() {
    $('#me-image-4').css('height', '+=10px');
    console.log("Increase the height of the image.");
    currentDimension();
  });
  
  $('#box4_height_decr').click(function() {
    $('#me-image-4').css('height', '-=10px');
    console.log("Decrease the height of the image.");
    currentDimension();
  });
  
  $('#box4_width_incr').click(function() {
    $('#me-image-4').css('width', '+=10px');
    console.log("Increase the width of the image.");
    currentDimension();
  });
  
  $('#box4_width_decr').click(function() {
    $('#me-image-4').css('width', '-=10px');
    console.log("Decrease the width of the image.");
    currentDimension();
  });

  /**
   * Only related to example 5. 
   */
  $( "#slide-toggle" ).click(function() {
    $( "#me-image-51" ).slideToggle( "slow", function() {
    // Animation complete.
    });
  });

  $( "#fade-toggle" ).click(function() {
    $( "#me-image-52" ).fadeToggle( "slow", function() {
    });
  });

  /**
  * Only related to example 6
  **/
    $('.lightbox').click(function() {
    var windowHeigth = window.innerHeight || $(window).height(), // Works on ipad & android
        windowWidth  = window.innerWidth  || $(window).width();

    // hide scrollbars
    $('body').css('overflow-y', 'hidden');

    //Display overlay
    $('<div id="overlay"></div>')
    //.css('top', $(document).scrollTop())
    .css('opacity', '0')
    .animate({'opacity': '0.5'}, 'slow')
    .appendTo('body');

    //Create lightbox div
    $('<div id="lightbox"></div>')
    .hide()
    .appendTo('body');

    // Load and display image
    $('<img>')
      .attr('src', $(this).attr('src'))
      .css({
      'max-height': windowHeigth, 
      'max-width':  windowWidth
    })
      .load(function() {
        $('#lightbox')
          .css({
            'top':  (windowHeigth - $('#lightbox').height()) / 2,
            'left': (windowWidth  - $('#lightbox').width())  / 2
          })
          .fadeIn();
      })
      .appendTo('#lightbox');

      // Remove it all on click
      $('#overlay, #lightbox').click(function() {
        $('#overlay, #lightbox').remove();
        $('body').css('overflow-y', 'auto'); // show scrollbars
      });

    return false;
  });      

/*
  function positionLightboxImage() {
    var top = ($(window).height() - $('#lightbox').height()) / 2;
    var left = ($(window).width() - $('#lightbox').width()) / 2;
    $('$lightbox') 
      .css({
        'top': top + ($document).scrollTop(),
        'left': left
      })
      .fadeIn();
  }

  function removeLightbox() {
    $('#overlay, #lightbox')
      .fadeOut('slow', function() {
        $(this).remove();
        $('body').css('overflow-y', 'auto'); // show scrollbars
      });
  }
  */

  /**
   * Only related to example 7. 
   */
  var galleryInit = function() {
    var current = null;

    $('.gallery-all img').each(function() {
      $(this)
        .attr('src', $(this).attr('src1') + '?w=' + $(this).width() + '&h=' + $(this).height() + '&crop-to-fit')
        .click(function() {
          if(!current) {
            current = this;
          } else {
            $(current).toggleClass('selected');
            current = this;
          }
          $(this).toggleClass('selected');
          $('.gallery-current img').attr('src', $(this).attr('src1') + '?w=' + $('.gallery-current').width() + '&h=' + $('.gallery-current').height());
        });
      console.log("Gallery image was initiated.");
    });
    
    $('.gallery-all img').first().trigger('click');
  };
  galleryInit();

  /**
   * Only related to example 8. 
   */
  var currentPosition = 0; 
  var slideWidth = 500; 
  var slides = $('.slide'); 
  var numberOfSlides = slides.length; 
  var slideShowInterval; 
  var speed = 3000; 

  slideShowInterval = setInterval(changePosition, speed); 
  slides.wrapAll('<div id="slidesHolder"></div>') 
  slides.css({ 'float' : 'left' }); 
  $('#slidesHolder').css('width', slideWidth * numberOfSlides); 

  function changePosition() { 
    if(currentPosition == numberOfSlides - 1) { 
      currentPosition = 0; } 
    else { 
      currentPosition++; } 
      moveSlide(); } 

  function moveSlide() { 
    $('#slidesHolder') 
    .animate({'marginLeft' : slideWidth*(-currentPosition)}); }

  /**
  * Only related to example 9
  */
  (function($) {

      var scrollSpeed = 20;     // Speed in milliseconds
      var step = 1;             // How many pixels to move per step
      var current = 0;          // The current pixel row
      var imageHeight = 4300;   // Background image height
      var headerHeight = 300;   // How tall the header is.
      
      //The pixel row where to start a new loop
      var restartPosition = -(imageHeight - headerHeight);
      
      window.scrollBg = function(){ 
        //Go to next pixel row.
        current -= step;
        
        //If at the end of the image, then go to the top.
        if (current == restartPosition){
          current = 0;
        }
        
        //Set the CSS of the header.
        $('#header').css("background-position","0 "+current+"px");
        
      }
      
      //Calls the scrolling function repeatedly
      var init = setInterval("scrollBg()", scrollSpeed);


  }) (jQuery);

  /**
  * Only related to example 10
  */
  (function($) {
  
    $.fn.slideUpDown = function(options) {
      options = $.extend({}, $.fn.slideUpDown.defaults, options);
      return this.each(function() {
        $(this).slideUp(options.duration, function() {
          $(this).slideDown(options.duration)});
      });
    };
  
    $.fn.slideUpDown.defaults = {
      'duration': 'fast',
    }
  
  }) (jQuery);

  $('#box10 img.example').click(function() {
    $(this).slideUpDown({'duration':5000});
    console.log('Clicked image to slide it up and down.');
  });

console.log('Everything is ready.');    
});