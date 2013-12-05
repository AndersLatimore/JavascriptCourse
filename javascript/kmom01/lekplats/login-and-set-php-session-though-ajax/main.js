/**
 * Place your JS-code here.
 */

/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';


  /**
   * Function for successful ajax requests
   */
  var success = function(data) {
    $('#output').removeClass().addClass(data.outputClass).html('<p>' + data.output + '</p>');
    console.log('Ajax request returned successfully. ' + data);    
  };


  /**
   * Eventhandler for #login
   */
  $('#login').on('click', function(event) {

    $('#output').removeClass().addClass('working').html('<img src="ajax-loader-2.gif" width="50px" /> Performing login...');

    $.ajax({
      type: 'post',
      url: 'login.php?do=login',
      data: $('#form1').serialize(),
      dataType: 'json',
      success: success
    }); 

    console.log('Form submitted, lets wait for a response.');
  });



  /**
   * Eventhandler for #logout
   */
  $('#logout').on('click', function(event) {

    $('#output').removeClass().addClass('working').html('<img src="ajax-loader-2.gif" width="50px" /> Performing logout...');

    $.ajax({
      type: 'post',
      url: 'login.php?do=logout',
      dataType: 'json',
      success: success
    }); 

    console.log('Form submitted, lets wait for a response.');
  });



  /**
   * Eventhandler for #status
   */
  $('#status').on('click', function(event) {

    $('#output').removeClass().addClass('working').html('<img src="ajax-loader-2.gif" width="50px" /> Checking current status...');

    $.ajax({
      type: 'post',
      url: 'login.php?do=status',
      dataType: 'json',
      success: success
    }); 

    console.log('Form submitted, lets wait for a response.');
  });


  console.log('Everything is ready.');
});
