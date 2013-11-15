<?php $title='Anders Akesson | A shopping cart using jQuery and ajax'; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>
      <h1>The Geek Bookshop</h1>
      <div id='cart'>
  <h2><img src='img/cart.png' alt='' style="width:40px;"> Shopping cart</h2>
  <div id='content'></div>
  <p>
    Number of items in cart: <span id='numitems'>0</span><br/>
    Total of items in cart: $<span id='sum'>0</span><br/><br/>
    <input id='clear' type='button' value='Clear' /><span id='status'>Nothing has happened yet. Make a purchase.</span>
    <p><input type='button' id='payment' value='Checkout payment' disabled></p>
  </p>
      </div>
  <table>
    <tr><th>Image</th><th>Title</th><th>Price</th><th>Buy it</th></tr>
    <tr><td><img src="img/atlasshrugged.jpg" style="width=200px;height:100px;"></td><td>Atlas Shrugged</td><td>$19</td><td><button id='book1' class="purchase">Buy it</button></td></tr>
  <tr><td><img src="img/batman.jpg" style="width=200px;height:100px;"></td><td>Batman</td><td>$22</td><td><button id='book2' class="purchase">Buy it</button></td></tr>
  <tr><td><img src="img/malcolm-x.jpg" style="width=200px;height:100px;"></td><td>Malmcolm X</td><td>$26</td><td><button id='book3' class="purchase">Buy it</button></td></tr>
  <tr><td><img src="img/the_htch_hikers_guide_to_the_galaxy.jpg" style="width=200px;height:100px;"></td><td>The Hitchhikers Guide To The Galaxy</td><td>$18</td><td><button id='book4' class="purchase">Buy it</button></td></tr>
  </table>

</div>
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>