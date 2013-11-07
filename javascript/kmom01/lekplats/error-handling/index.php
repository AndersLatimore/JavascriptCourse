<?php $title='Anders Akesson | Error handling'; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>
<h1>Anders Åkesson, <a href="http://andyweb.info">Andyweb</a></h1>
<p id='text' class='red'>Hello, this text should be replaced when page and DOM is loaded.</p>

<p>Please input a number between 5 and 10:</p>
<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
</div>

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>