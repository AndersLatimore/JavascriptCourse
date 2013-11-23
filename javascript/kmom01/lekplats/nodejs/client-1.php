<?php $title='Anders Akesson | Test HTML5 websockets'; 
include(__DIR__ . '/../mall/header.php'); ?>
<h1>Test HTML5 websockets</h1>
<p>Open up firebug and see the output in the console.</p>
<input id='url' value='ws:127.0.0.1:1339'/>
<button id='connect'>Connect</button>
<button id='send'>Send message "Hello World, I am Anders"</button>

<script>
var url = document.getElementById('url'),
  websocket,
  connect = document.getElementById('connect'),
  send = document.getElementById('send');
 
// Event handler to create the websocket connection when someone clicks the button #connect
connect.addEventListener('click', function(event) {
  console.log('Connecting to: ' + url.value);
  websocket = new WebSocket(url.value);
 
  // Eventhandler when the websocket is opened.
  websocket.onopen = function() {
    console.log('The websocket is now open.');
    websocket.send('Thanks for letting me connect to you.');
  }
 
  websocket.onmessage = function(event) {
    console.log('Receiving message: ' + event.data);
  }
 
  // Eventhandler when the websocket is closed.
  websocket.onclose = function() {
    console.log('The websocket is now closed.');
  }
} , false);


// Add eventhandler to send message
send.addEventListener('click', function(event) {
  var message = "Hello World, I am Anders";
  
  if(!websocket || websocket.readyState === 3) {
    console.log('The websocket is not connected to a server.');
  } else {
    console.log("Sending message: " + message);
    websocket.send(message);      
  }
});

</script>
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>