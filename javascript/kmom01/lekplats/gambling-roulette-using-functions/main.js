/**
 * Roulette
 */
$(document).ready(function(){
  'use strict';
  var out,
    element = document.getElementById('text'),
    table = document.getElementById('table'),
    button = document.getElementById('button'),
    bet = document.getElementById('bet'),
    bankroll = document.getElementById('bankroll'),
    color = document.getElementById('color'),
    log = document.getElementById('log');

  console.log('Starting');
  element.className = 'black';
  element.innerHTML = '<p><b>Roulette - Functions in JavaScript</b></p>';

  function random (min, max) {
    return Math.floor(Math.random()*(max-min)+min);
  }
  
  function spinnWheel (times) {
    var i, res = [];
    times = times || 1;

    for(i = 0; i < times; i++) {
      	res[i] = random(0, 36);
    }
    
    return res;
  }
  
  function getColor (n) {
    var colors = ['green', 'black', 'red'],
    table = [0,2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2];   
    return colors[table[n]];
  }
    
  function createRouletteTable () {
    var i, e;   
    for(i = 0; i <= 36; i++) {
	    e = document.createElement('div');
	    e.innerHTML = i;
	    e.className = 'number ' + getColor(i);
	    e.id = 'n' + i;
	    table.appendChild(e);
    } 

  }
  
  function clearRouletteTable () {
    var i, e;    
    for(i = 0; i <= 36; i++) {
      e = document.getElementById('n' + i);
      e.className = 'number ' + getColor(i);
    } 
  }

  function reset() {
  	bankroll = 1000;
  	location.reload(); 
  }
  
  out = function (e, s) {
    var el = document.createElement('p');
    el.innerHTML = s;
    return e.insertBefore(el, e.firstChild);
  };
  
  button.addEventListener('click', function () {
  	document.getElementById("button").disabled=true;
  	document.getElementById("resetbutton").disabled=true;
    var current = out(log, '&ndash; Your bet is ' + bet.value + '. Spinning the wheel&hellip;'),
      times = 10, results, step = 0, animateSpinn;
    
    animateSpinn = function () {
      var number, winColor, betColor;
      
      number = document.getElementById('n' + results[step]);
      number.className += ' selected';

     if (step > 0) {
        number = document.getElementById('n' + (results[step-1]));
        number.className = 'number ' + getColor(results[step-1]);
      }
      
      step += 1;
      if (step < times) {
        window.setTimeout(animateSpinn, 500);
      } else {
        winColor = getColor(results[step-1]);
        betColor = color.value;
        current.innerHTML += ' Stopped at: ' + results[step-1] + ' ' + winColor;
        
        if (winColor === betColor) {
          current.innerHTML += '. You won ' + (parseInt(bet.value, 10) * 2) + '.';
          bankroll.value = parseInt(bankroll.value, 10) + parseInt(bet.value, 10) * 2;
          document.getElementById("button").disabled=false;
          document.getElementById("resetbutton").disabled=false;
        } 
		else {
          current.innerHTML += '. You lost.';
          document.getElementById("button").disabled=false;
          document.getElementById("resetbutton").disabled=false;
        }
        console.log('Bankroll: ' + bankroll.value + ' Bet: ' + bet.value);          
      }
      
    };
    
    clearRouletteTable();
    bankroll.value = parseInt(bankroll.value, 10) - parseInt(bet.value, 10);
    results = spinnWheel(10);
    window.setTimeout(animateSpinn, 500);
  }, false);

  createRouletteTable();
  out(log, '<p>&ndash; Welcome to my Roulette table, go ahead and gamble your money away!</p>');
  
});