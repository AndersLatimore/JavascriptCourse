<?php $title='Checkout'; include(__DIR__ . '/../mall/header.php'); ?>
<?php $sum  = isset($_GET['sum']) && is_numeric($_GET['sum']) ? trim($_GET['sum']) : '0'; ?>
    <div id='flash'>
      <h1>Checkout</h1>
       <div class="blink" id="blink"><h2></h2></div>
      <div id='input'>
        <p>The following sum will be charged on your credit card: $<?php echo $sum; ?></p>
      </div>
      <div id='output'></div>
      <div id="checkoutTable">
      <table id='checkout_table'>
        <tr>
          <td>
            Name on credit card:*<br/>
            <input type='text' id='name_on_credit_card' required autofocus>
          </td>
          <td>
            Credit card type:*<br/>
            <select id='credit_card_type'>
              <option value='default'>Select a credit card type...</option>
              <option value='visa'>VISA</option>
              <option value='mastercard'>MasterCard</option>
              <option value='eurocard'>EuroCard</option>
              <option value='americanexpress'>American Express</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            Address:*<br/>
            <input type='text' id='address' required>
          </td>
          <td>
            Credit card number:*<br/>
            <input type='text' id='credit_card_number' required>
          </td>
        </tr>
        <tr>
          <td>
            Zip code:*<br/>
            <input type='text' id='zip_code' required>
          </td>
          <td>
            Expiration month:*<br/>
            <select id='expiration_month'>
              <option value='default'>Select credit card expiration month...</option>
              <option value='january'>January</option>
              <option value='february'>February</option>
              <option value='march'>March</option>
              <option value='april'>April</option>
              <option value='may'>May</option>
              <option value='june'>June</option>
              <option value='july'>July</option>
              <option value='august'>August</option>
              <option value='september'>September</option>
              <option value='october'>October</option>
              <option value='november'>November</option>
              <option value='december'>December</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            City:*<br/>                        
            <input type='text' id='city' required>
          </td>
          <td>
            Expiration year:*<br/>
            <select id='expiration_year'>
              <option value='default'>Select credit card expiration year...</option>
              <option value='<?php echo date('Y')+0; ?>'><?php echo date('Y')+0; ?></option>
              <option value='<?php echo date('Y')+1; ?>'><?php echo date('Y')+1; ?></option>
              <option value='<?php echo date('Y')+2; ?>'><?php echo date('Y')+2; ?></option>
              <option value='<?php echo date('Y')+3; ?>'><?php echo date('Y')+3; ?></option>
              <option value='<?php echo date('Y')+4; ?>'><?php echo date('Y')+4; ?></option>
              <option value='<?php echo date('Y')+5; ?>'><?php echo date('Y')+5; ?></option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            Country:*<br/>
            <select id='country'>
              <option value='default'>Select a country...</option>
              <option value='denmark'>Denmark</option>
              <option value='norway'>Norway</option>
              <option value='finland'>Finland</option>
              <option value='sweden'>Sweden</option>
            </select>
          </td>
          <td>
            CVC:*<br/>                        
            <input type='text' id='cvc' required>
          </td>
        </tr>
        <tr>
          <td>
            <button class='payment' id='<?php echo $sum; ?>' disabled>Perform payment</button>
          </td>
          <td>
            <button onclick="location.href='../shopping-cart-using-jquery-ajax/'">Go back</button>
          </td>
        </tr>
      </table>
      </div>
    </div>
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>