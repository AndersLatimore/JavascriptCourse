/**
 * Place your JS-code here.
 */

/**
 * Get started with jQuery.
 */
$(document).ready(function(){
  'use strict';

  /**
   * This expands the box to full width.
   */
  $('.gift').click(function() {
    $(this).parent().addClass('fullwidth');
    $(this).parent().find('*').show('slow');
    $(this).parent().children('.gift').hide();
    console.log("Clicked to open a box, displaying it in full width.");
  });
  

  /**
   * This minimizes the box.
   */
  $('.minimize').click(function(event) {
    $(this).parent().find('*').hide();
    $(this).parent().removeClass().addClass('box').show();
    $(this).parent().children('.gift').show();
    console.log("Minimizing the box.");
  });
  

  /**
  * Only related to the slide up and down plugin
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