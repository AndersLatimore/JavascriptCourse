<?php $title='Anders Akesson | Get started with jQuery'; include(__DIR__ . '/../mall/header.php'); ?>

<div class='wrapper'>

<h1>Nine small wrapped gifts to get started with jQuery</h1>

<div id='box1' class='box'>
<div class='minimize' title='Miminize this box'>x</div>
<img class='gift' src='img/gift.png' alt='' width='200px' />
<h1 class='gift'>1.</h1>
<img class= 'example' src='image/andybw2.JPG' alt='' style="width:250px" />
<h1 class='example'>1. Selecting items, hide, show and change their look</h1>  
<p>This example is just to get going. You might wonder how this box opens and closes? Its just a matter of hiding and showing the elements you want to display. The box minimizes itself when you click the x up in the right corner and you can open it up in full width by clicking the number or the wrapped giftbox.</p>
<p>When you click on the text or images in this example it will shift (toggle) between dark and light color.</p>
<p>Its all about using selectors and the eventhandlers.</p>
</div>

<div id='box2' class='box'>
<div class='minimize' title='Miminize this box'>x</div>
<img class='gift' src='img/gift.png' alt='' width='200px' />
<h1 class='gift'>2.</h1>
<img class= 'example' src='image/andycolor.JPG' alt='' width='400px' />
<h1 class= 'example'>2. Events and event propagation</h1>
<p>In this example we look at event propagation. When you click anywhere in this box, independently on the cursor style, the box will toggle between pink and white. The same thing happens when you click on the image, and in addition, the image will toggle between larger and smaller size.</p>
<p>Looking in the code will show you an eventhandler for the image, but any click in the image is also a click in the box which has its own eventhandler, the event is propagated up through the chain of eventhandlers. This behaviour can be stopped by using the method <code>stopPropagation()</code>.</p>
</div>

<div id='box3' class='box'>
<div class='minimize' title='Miminize this box'>x</div>
<img class='gift' src='img/gift.png' alt='' width='200px' />
<h1 class='gift'>3.</h1>
<img class= 'example' src='image/andycolor.JPG' alt='' width='300px' />
<h1 class= 'example'>3. Add and remove elements</h1>
<p>Lets create a color palette from this image. Choose each color you think should be in there and add it to the palette, click the color to remove it.</p>
<p><form>
<label>Colorcode in hex (#eee or #5c5c5c): <input id='box3_color' type='text' name='color' /></label>
<input id='box3_add' type='button' value='Add color' /> 
</form></p>
<p id='palette'></p>
</div>

<div id='box4' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='img/gift.png' alt='' width='200px' />
<h1 class='gift'>4.</h1>
<img id='me-image-4' class='example' src='image/andycolor.JPG' alt='' width='450px' height='250px' />
<h1 class= 'example'>4. Let's resize me</h1>
<p>Here are a couple of buttons which will resize the image when you press them. The current image size is also visible.</p>
<p><form>
<input id='box4_dimensions' type='button' value='Get current dimensions wxh' /> <span id='box4_current'></span>
<br/>
<label>Width: </label>
<input id='box4_width_incr' type='button' value='+' />
<input id='box4_width_decr' type='button' value='-' />
<br/>
<label>Height: </label>
<input id='box4_height_incr' type='button' value='+' />
<input id='box4_height_decr' type='button' value='-' />
</form></p>
</div>

<div id='box5' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='img/gift.png' alt='' width='200px' />
<h1 class='gift'>5.</h1>
<img id='me-image-51' class='example' class= 'example' src='image/andybw2.JPG' alt='' width='200px' />
<img id='me-image-52' class='example' class= 'example' src='image/andybw2.JPG' alt='' width='200px' />
<h1 class= 'example'>5. Basic animations</h1>
<p>Basic animations can make your page look a bit more lively by dynamically change its look. 
One ood idea is to make movements a bit smoother. 
You can <a id='fade-toggle' href='#box5'>toggle the image visibility by fadeing it in or out</a>. 
You can also <a id='slide-toggle' href='#box5'>slide the image visibility by sliding it in or out</a>.</p>
</div>


<div id='box6' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='img/gift.png' alt='' width='200px' />
<h1 class='gift'>6.</h1>
<img class='example lightbox' src='image/andycolor2.JPG' alt='' width='200px' />
<h1 class= 'example'>6. A lightbox for images</h1>
<p>A lightbox is often used to display a larger version of an image without reloading the page. Click the image to try out my lightbox.</p>
</div>


<div id='box7' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='img/gift.png' alt='' width='200px' />
<h1 class='gift'>7.</h1>
<h1 class= 'example'>7. A image gallery</h1>
<p>An example gallery of flowers.</p>
<div class='gallery'>
  <div class='gallery-current'><img/></div>
  <div class='gallery-all'>
  <img src1='img/img1.jpg'/>
  <img src1='img/img2.jpg'/>
  <img src1='img/img3.jpg'/>
  <img src1='img/img4.jpg'/>
  <img src1='img/img5.jpg'/>
  <img src1='img/img6.jpg'/>
  <img src1='img/img3.jpg'/>
  <img src1='img/img4.jpg'/>
  <img src1='img/img1.jpg'/>
  <img src1='img/img2.jpg'/>
  <img src1='img/img3.jpg'/>
  <img src1='img/img4.jpg'/>
  <img src1='img/img1.jpg'/>
  <img src1='img/img2.jpg'/>
  <img src1='img/img3.jpg'/>
  <img src1='img/img4.jpg'/>
  <img src1='img/img1.jpg'/>
  <img src1='img/img2.jpg'/>
  <img src1='img/img3.jpg'/>
  <img src1='img/img5.jpg'/>
  <img src1='img/img6.jpg'/>
  <img src1='img/img2.jpg'/>
  <img src1='img/img3.jpg'/>
  <img src1='img/img4.jpg'/>
  <img src1='img/img5.jpg'/>
  <img src1='img/img6.jpg'/>
  </div>
</div> <!-- end of gallery -->
<p>An image gallery may look in many ways but it usually acts as a container for a bunch om images and allows for the user to easily traverse and look at the images.</p>
</div>

<div id='box8' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='img/gift.png' alt='' width='200px' />
<h1 class='gift'>8.</h1>
<h1 class= 'example'>A slideshow for your firstpage</h1>
<p>A slideshow is commonly used at the first page on many websites to display a set of images and change the image being displayed with a timed interval or by clicking it.</p>
<div id="slideshow"> 
<div id="slideshowWindow"> 
	<div class="slide"> 
		<img src="img/slide1.jpg" />
	</div><!--/slide--> 
	<div class="slide"> 
		<img src="img/slide2.jpg" />
	</div><!--/slide--> 
	<div class="slide"> 
		<img src="img/slide3.jpg" /> 
	</div><!--/slide--> 
	<div class="slide"> 
		<img src="img/img1.jpg" /> 
	</div><!--/slide--> 
	<div class="slide"> 
		<img src="img/img2.jpg" /> 
	</div><!--/slide--> 
	<div class="slide"> 
		<img src="img/img3.jpg" /> 
	</div><!--/slide--> 
</div><!--/slideshowWindow--> 
</div><!--/slideshow-->
</div>

<div id='box9' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='img/gift.png' alt='' width='200px' />
<h1 class='gift'>9.</h1>
<h1 class= 'example'>9. Animated Background</h1>
<p>An animated header background.</p>
		<div id="headerwrapper">
			<div id="header">
				<!-- Div is for Shadow Overlay-->
				<div>
					<h1>Animated Header Background</h1>	
				</div>	
			</div>
			<div id="nav">
				<!-- Navigation Goes HERE -->
			</div>
			<div id="body">
				<!-- Body Content Goes HERE -->
			</div>
		</div>
</div>

<div id='box10' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='img/gift.png' alt='' width='200px' />
<h1 class='gift'>10.</h1>
<img class='example' src='image/andycolor2.JPG' alt='' width='200px' />
<h1 class= 'example'>10. A jquery plugin</h1>
<p>This plugin slides the image up and down when clicked.</p>
</div>

</div><!--Wrapper-->

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>