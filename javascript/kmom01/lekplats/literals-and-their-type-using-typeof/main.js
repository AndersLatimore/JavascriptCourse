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
    literals = [42, 4.2, "hello world", 'hello world', true, false, null, undefined, 
      /javascript/, {x:1,y:2}, ['array-item', 'array-item'], function(){}];

  element.innerHTML = '<b>Literals and their type using typeof</b>';
  e1 = document.createElement('ul');
  for (var i = 0; i < literals.length; i++) {
  	rows += '<li>' + literals[i] + ' is a ' + typeof(literals[i]) + '</li>';
  };
  
  e1.innerHTML = rows;
  element.parentElement.appendChild(e1);
});