/**
 * Rolling dice using functions
 */
$(document).ready(function(){
  'use strict';
  var str, outPut,
    element = document.getElementById('text');

  element.innerHTML = '<p><b>Roll The Dice - Using Functions in JavaScript</b></p>';

  function randomNumber(min, max) {
    return Math.floor(Math.random()*(max+1-min)+min);
  };
  
  function rollDice(times) {
    var i, val, res = '', sum = 0;
    times = times || 1;
    
    for(i = 0; i < times; i++) {
      val = randomNumber(1, 6);
      sum += val; 
      res += val + ', ';
    }
    return '<strong>Average:</strong> ' + (sum/times).toPrecision(2) + ' <strong>Serie:</strong> ' + res;
  };
  
  outPut = function (elementPara, stringPara) {
    elementPara.innerHTML += '<p>' + stringPara;
  };

  //Roll a serie of 6
  outPut(element, '<p><strong>Roll a serie of 6 with a die.</strong></p>');
  str = outPut(element, rollDice(6));

  //Roll a serie of 12
  outPut(element, '<p><strong>Roll a serie of 12 with a die.</strong></p>');
  str = outPut(element, rollDice(12));

  //Roll a serie of 100
  outPut(element, '<p><strong>Roll a serie of 100 with a die.</strong></p>');
  str = outPut(element, rollDice(100));

});


