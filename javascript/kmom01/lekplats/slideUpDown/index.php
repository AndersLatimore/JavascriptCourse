<?php $title='Anders Akesson | The Slide Up and Down jQuery plugin'; include(__DIR__ . '/../mall/header.php'); ?>

<div class='wrapper'>

<div id='box10' class='box'>
<div class='minimize'>x</div>
<!--<img class='gift' src='img/gift.png' alt='' width='200px' />-->
<h1 class='gift'>Slide Up Down</h1>
<img class='example' src='img/img1.JPG' alt='' width='400px' />
<h1 class= 'example'>Slide Up Down: A jquery plugin</h1>
<p>This plugin slides the image up and down when clicked.</p>
<p>All you need to do to use the plugin is download it <a href="https://github.com/AndyAkesson/SlideUpDownPlugin" target="blank">here</a> and the define the elements as seen below.
<code>#box10</code> is the <code>div</code> where you want to use the plugin. <code>example</code> is
where you define the image that you want to use the the plugin. You can set the speed of the animation by
changing the <code>duration</code> parameter.</p>
<p><code>  $('#box10 img.example').click(function() {
    $(this).slideUpDown({'duration':5000});
    console.log('Clicked image to slide it up and down.');
  });</code></p>
</div>

</div><!--Wrapper-->

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>