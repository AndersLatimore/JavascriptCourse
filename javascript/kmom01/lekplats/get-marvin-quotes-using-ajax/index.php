<?php $title='Anders Akesson | Marvin provides quotes through jquery ajax requests'; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>
	<h1>Anders Åkesson, <a href="http://andyweb.info" target="blank">Andyweb</a></h1>
	<h1>Listen to Marvin's wisdom</h1>
	<p>Hi, I'm Marvin, <strong>click me</strong> to get a quote, I promise you that I will not reload the page, I will only use ajax, promise.</p>
	<img src="img/marvin.jpg">
	<p>The quotes are delivered in JSON format from a PHP-script <a href="quote.php">quote.php</a>.</p>
	<p id="quote"></p>
</div>

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>