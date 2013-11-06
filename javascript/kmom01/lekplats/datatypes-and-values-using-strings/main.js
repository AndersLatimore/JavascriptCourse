/**
 * Print out literals and their type.
 */
$(document).ready(function(){
  'use strict';
  var tempStr = '';
  var e1, rows = '',

  element = document.getElementById('text'),
  strings = ['Copyright \u00A9 by XXX', ' Mumintrollet ', 1942, '.'];

  element.innerHTML = '<b>Datatypes and values using strings</b>';
  e1 = document.createElement('ul');

  // Function to concatenate two elements
  var concat = function(firstElem, secondElem) {
    tempStr += firstElem + '' + secondElem;
    return tempStr;
  };

  rows += '<strong>Strings</strong>';
  rows += '<li>' + strings[0] + ' (' + strings[0].length + ') ' + '</li>';

  rows += '<li>' + concat(strings[0], strings[1]) + ' (' + (tempStr.length) + ') ' + '</li>';
  rows += '<li>' + concat('', strings[2]) + ' (' + (tempStr.length) + ') ' + '</li>';
  rows += '<li>' + concat('', strings[3]) + ' (' + (tempStr.length) + ') ' + '</li>';

  var res = strings[0].substring(0, strings[0].length - 3);
  var newStr = res + strings[1] + strings[2] + strings[3];
  rows += '<li>' + newStr + ' (' + newStr.length + ')' + '</li>'; 

  var numberOne = "19" + "42";
  var numberTwo = "19" + 42;
  var numberThree = 19 + 42;
  var numberFour = 19 + "42";

  var numbers = [numberOne, numberTwo, numberThree, numberFour];

  for(var i = 0; i < numbers.length; i++) {
    rows += '<li>' + numbers[i] + ' (' + typeof(numbers[i]) + ')' + '</li>'; 
  };

  e1.innerHTML = rows;
  element.parentElement.appendChild(e1);

});