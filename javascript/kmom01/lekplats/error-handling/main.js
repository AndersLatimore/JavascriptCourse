/**
 * Error handling in javascript.
 */
 
$(document).ready(function(){
  'use strict'; 
  var element = document.getElementById('text');
	window.myFunction = function()
	{
		element.innerHTML = "";
		try
		{ 
			var x = document.getElementById("demo").value;
			if(x == "")   throw "empty";
			if(isNaN(x))   throw "not a number";
			if(x > 10)     throw "too high";
			if(x < 5)      throw "too low";
			else {
				element.innerHTML = '<strong>Good job!</strong>';
			}
		}
		catch(err)
		{
			element.innerHTML = "<strong>Error: " + err + "!</strong>";
		}
	}
  
  element.innerHTML = '<strong>Error handling yo!</strong>';

});