<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>

<?php
$body = " First Name:
{$_POST['firstname']}\n
Last Name:
{$_POST['lastname']}\n
Address:
{$_POST['address']}\n
City:
{$_POST['city']}\n
State:
{$_POST['state']}\n
Zip:
{$_POST['zip']}\n
Country:
{$_POST['country']}\n
Phone:
{$_POST['areacode']} {$_POST['phone']}\n
E-mail:
{$_POST['email']}\n
Interests:
{$_POST['interests']}";
 // Make it no longer than 70 characters long:
$body = wordwrap($body, 700);

// Send the email:
mail('bea.mission@verizon.net',
'Contact Form Submission', $body,
"From: {$_POST['email']}");
echo "$fn $ln Thank you for your interest in BEA Ministry.";
?>


</body>
</html>