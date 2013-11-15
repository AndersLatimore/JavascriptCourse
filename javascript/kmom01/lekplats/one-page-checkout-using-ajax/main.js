/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';

  var inputMessage = function (message) {
    //var html = '';
    document.getElementById('input').innerHTML = '<p>' + message + '</p>';
    if ( html == '' ) {
      html = message;
    }
    else {
      html += '<br/>\n' + message;
    }
    document.getElementById('output').innerHTML = html;
  }

  var flushoutputMessage = function () {
    document.getElementById('output').innerHTML = '';
  }

  var outputMessage = function (message) {
    var html = document.getElementById('output').innerHTML;
    if ( html == '' ) {
      html = message;
    }
    else {
      html += '<br/>\n' + message;
    }
    document.getElementById('output').innerHTML = html;
  }

  var initTable = function () {
    flushoutputMessage();
    document.getElementById('name_on_credit_card').value = '';
    document.getElementById('credit_card_type').value = 'default';
    document.getElementById('address').value = '';
    document.getElementById('credit_card_number').value = '';
    document.getElementById('zip_code').value = '';
    document.getElementById('expiration_month').value = 'default';
    document.getElementById('city').value = '';
    document.getElementById('expiration_year').value = 'default';
    document.getElementById('country').value = 'default';
    document.getElementById('cvc').value = '';
  }
  initTable();

  // Validate values in payment table.
  var validatePayment = function () {
    var credit_card_number = document.getElementById('credit_card_number').value,
        zip_code = document.getElementById('zip_code').value,
        cvc = document.getElementById('cvc').value,
        ret_value = true;

    flushoutputMessage();

    if ( document.getElementById('name_on_credit_card').value == '' ) {
      outputMessage('Please enter name of card holder !');
      ret_value = false;
    }

    if ( document.getElementById('credit_card_type').value == 'default' ) {
      outputMessage('Please select a credit card type !');
      ret_value = false;
    }

    if ( document.getElementById('address').value == '' ) {
      outputMessage('Please enter address of card holder !');
      ret_value = false;
    }

    if ( credit_card_number == '' ) {
      outputMessage('Please enter credit card number !');
      ret_value = false;
    }
    else
    if ( ! validate_creditcardnumber( credit_card_number ) ) {
      outputMessage('<strong>Invalid credit card number! Should be a 16-digit number.</strong>');
      ret_value = false;
    }

    if ( zip_code == '' ) {
      outputMessage('Please enter zip code of card holder!');
      ret_value = false;
    }
    else
    if ( ! validate_zipcode( zip_code ) ) {
      outputMessage('<strong>Invalid zip code! Should be a 5-digit number.</strong>');
      ret_value = false;
    }

    if ( document.getElementById('expiration_month').value == 'default' ) {
      outputMessage('Please select credit card expiration month !');
      ret_value = false;
    }

    if ( document.getElementById('city').value == '' ) {
      outputMessage('Please enter city of card holder !');
      ret_value = false;
    }

    if ( document.getElementById('expiration_year').value == 'default' ) {
      outputMessage('Please select credit card expiration year !');
      ret_value = false;
    }

    if ( document.getElementById('country').value == 'default' ) {
      outputMessage('Please select country of card holder !');
      ret_value = false;
    }

    if ( cvc == '' ) {
      outputMessage('Please enter credit card CVC code !');
      ret_value = false;
    }
    else
    if ( ! validate_cvc( cvc ) ) {
      outputMessage('<strong>Invalid credit card CVC code ! Should be a 3-digit number.</strong>');
      ret_value = false;
    }

    return ret_value;       
  }

  // Check credit card number.
  function validate_creditcardnumber(credit_card_number) {
    var re16digit = /^\d{16}$/,
        test_credit_card_number = credit_card_number.replace(/\s/g, '').replace(/-/g,'');

    return re16digit.test( test_credit_card_number );
  }

  // Check zip code.
  function validate_zipcode(zip_code) {
    var re5digit = /^\d{5}$/,
        test_zip_code = zip_code.replace(/\s/g, '');

    return re5digit.test( test_zip_code );
  }

  // Check zip code.
  function validate_cvc(cvc) {
    var re3digit = /^\d{3}$/,
        test_cvc = cvc.replace(/\s/g, '');

    return re3digit.test( test_cvc );
  }

  // Callback when making a payment
  $('.payment').click(function() {
    var sum = $(this).attr('id');
    if ( sum > 0 ) {
      console.log('Click to make a payment');
      if ( validatePayment() ) {
        console.log('Payment valid.');

  setTimeout(function() {
    document.getElementById('blink').innerHTML = '<p>Your bank is currently being contacted, please wait...</p>';
  }, 3);

  setTimeout(function() {
    initTable();
    document.getElementById('blink').innerHTML = '';
    document.getElementById('checkoutTable').innerHTML = '';
    document.getElementById('input').style.backgroundColor='#00FF00';
    inputMessage( 'The payment has been withdrawn from your credit card.' );
  }, 5000);
      }
      else {
        console.log('Payment invalid.');
      }
     outputMessage( ' ' );
     outputMessage( ' ' );
    }
  });

  if ( $('.payment').attr('id') > 0 ) {
    $('.payment').prop('disabled', false);
  }

   // Source: http://www.antiyes.com/jquery-blink-plugin
// http://www.antiyes.com/jquery-blink/jquery-blink.js
(function($) {
    $.fn.blink = function(options) {
        var defaults = {
            delay: 500
        };
        var options = $.extend(defaults, options);

        return this.each(function() {
            var obj = $(this);
            setInterval(function() {
                if ($(obj).css("visibility") == "visible") {
                    $(obj).css('visibility', 'hidden');
                }
                else {
                    $(obj).css('visibility', 'visible');
                }
            }, options.delay);
        });
    }
}(jQuery)) 

/////////////////////////////////////////////
///////////////////////////////////////////// 
/////////////////////////////////////////////

$(document).ready(function() {
    $('.blink').blink(); // default is 500ms blink interval.
    $('.blink_second').blink({
        delay: 100
    }); // causes a 100ms blink interval.
    $('.blink_third').blink({
        delay: 1500
    }); // causes a 1500ms blink interval.     
});

/////////////////////////////////////////////
///////////////////////////////////////////// 
///////////////////////////////////////////// 

  console.log('Document ready.');
});