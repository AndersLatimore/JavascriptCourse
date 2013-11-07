<?php $title='Anders Akesson | Validate email'; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>
<h1>Anders Åkesson, <a href="http://andyweb.info">Andyweb</a></h1>
<script>
function validateForm()
{
	var x=document.forms["myForm"]["email"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  	{
	  alert("Not a valid e-mail address");
	  return false;
  	}
  	else {
  		alert("Yes! Your e-mail address is valid.");
	  	return false;
  	}
}
</script>

<form name="myForm" action="demo_form.asp" onsubmit="return validateForm();" method="post">
Email: <input type="text" name="email">
<input type="submit" value="Submit">
</form>

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>