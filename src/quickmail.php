<?php

if ($_SERVER['REQUEST_METHOD'] != "POST") {
    exit("<p>No Hacking attempts please</p>");
}

$first = trim(stripslashes(strip_tags($_POST['quickfirst'])));
$last = trim(stripslashes(strip_tags($_POST['quicklast'])));
$email = trim(stripslashes(strip_tags($_POST['quickemail'])));
$msg = trim(stripslashes(strip_tags($_POST['quickmsg'])));


$subject = "Email from "  .$first. " " .$last.  " via www.andrewjamesdowd.com.au Contact Form";
$body = " From: $email \r \n First name: $first \r \n Last name : $last \r \n Message : $msg \r \n ";
$headers = 'From: '.$email.'' . "\r\n" .
    'Reply-To: '.$email.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail("drewdowd@gmail.com", $subject, $body, $headers);
?>

<div id="mail">
<p>Thanks <span class="grey"><?php echo $first; ?>.</span> I'll hit you back shortly. </p>
</div> 