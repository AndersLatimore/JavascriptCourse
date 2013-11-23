/**
 * A websocket client.
 */
$(document).ready(function(){
  'use strict';

  var url = 'ws:dbwebb.se:1337/',
    websocket,
    form = $('#form1'),
    connect = document.getElementById('connect'),
    send_msg = document.getElementById('send_message'),
    close = document.getElementById('close'),
    output = $('#output');

  // Display the url in form field for the user to change
  $('#connect_url').val(url);


  // Event handler to create the websockt connection
  $('#connect').on('click', function(event) {
    url = $('#connect_url').val();
    console.log('Connecting to: ' + url);
    websocket = new WebSocket(url, 'echo-protocol');

    websocket.onopen = function() {
      connect.disabled=true;
      send_msg.disabled=false;
      close.disabled=false;
      console.log('The websocket is now open.');
      console.log(websocket);
      outputLog('The websocket is now open.\n');
    }

    websocket.onmessage = function(event) {
      console.log('Receiving message: ' + event.data);
      console.log(event);
      console.log(websocket);
      outputLog('\nServer said: ' + event.data);
    }

    websocket.onclose = function() {
      connect.disabled=false;
      send_msg.disabled=true;
      close.disabled=true;
      console.log('The websocket is now closed.');
      console.log(websocket);
      outputLog('Websocket closed.');
    }
  });


  // Add the message to the log
  function outputLog(message) {
    var now = new Date();
    $(output).append(now.toLocaleTimeString() + ' ' + message + '\n').scrollTop(output[0].scrollHeight);
  }


  // Send a message to the server
  $('#send_message').on('click', function(event) {
    var msg = $('#message').val();
    $(output).append('\n');

    if(!websocket || websocket.readyState === 3) {
      console.log('The websocket is not connected to a server.');
    } else {
      websocket.send(msg);      
      outputLog('\nYou said: ' + msg);
    }
  });


  // Close the connection to the server
  $('#close').on('click', function() {
    console.log('Closing websocket.');
    websocket.send('Client closing connection by intention.');
    websocket.close();
    console.log(websocket);
  });


  console.log('Everything is ready.'); 
});