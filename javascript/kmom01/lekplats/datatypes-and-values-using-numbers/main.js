/**
 * Place your JS-code here.
 */

/**
 * Print out literals and their type.
 */
$(document).ready(function(){
  'use strict';
  var e1, rows = '',

    element = document.getElementById('text'),
    numbers = [42, 4.2, 1.21e4, 1.12e-2, 0xff00ff];

  element.innerHTML = '<b>Datatypes and their values</b>';
  e1 = document.createElement('table');

  //Table headers
  for (i = 0; i < numbers.length; i++) {
    rows += '<th>' + numbers[i] + '</th>';
  }
  rows = '<tr><th>Function</th>' + rows + '</tr>';

  //Exponentialform
  rows += '<tr><td>Exponentialform</td>';
  for (i = 0; i < numbers.length; i++) {
    rows += '<td>' + numbers[i].toExponential() + '</td>';
  }
  rows += '</tr>';

  //Fixed form, three decimals
  rows += '<tr><td>Fixed form, three decimals</td>';
  for (i = 0; i < numbers.length; i++) {
    rows += '<td>' + numbers[i].toFixed(3) + '</td>';
  }
  rows += '</tr>';

  //Round to nearest integer
  rows += '<tr><td>Round to nearest integer</td>';
  for (i = 0; i < numbers.length; i++) {
    rows += '<td>' + Math.round(numbers[i]) + '</td>';
  }
  rows += '</tr>';

  //Square root
  rows += '<tr><td>Square root of the number</td>';
  for (i = 0; i < numbers.length; i++) {
    rows += '<td>' + Math.sqrt(numbers[i]).toFixed(4) + '</td>';
  }
  rows += '</tr>';

  //Value for sinus
  rows += '<tr><td>Value for sinus</td>';
  for (i = 0; i < numbers.length; i++) {
    rows += '<td>' + Math.sin(numbers[i]).toFixed(4) + '</td>';
  }
  rows += '</tr>';
  
  e1.innerHTML = rows;
  element.parentElement.appendChild(e1);

  element.innerHTML += '<br/><br/>Eulers constant E is = ' + Math.E;
  element.innerHTML += '<br/>PI is = ' + Math.PI;
  element.innerHTML += '<br/>Largest value possible is = ' + Number.MAX_VALUE;
  element.innerHTML += '<br/>Positive infinity is = ' + Number.POSITIVE_INFINITY;
});