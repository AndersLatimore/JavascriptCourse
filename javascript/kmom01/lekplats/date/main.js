/**
 * Place your JS-code here.
 */

/**
 * Print out literals and their type.
 */
$(document).ready(function(){
  'use strict';

  var element = document.getElementById('text');

  var d = new Date();
  //document.write(d);
  
  element.innerHTML = '<p><strong>Todays date is ' + d + '</strong></p>';

});