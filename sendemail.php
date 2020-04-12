<?php
$to='quanghuy472004@gmail.com';
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['message'] ;

  if(mail($to, $subject, $message)){
    echo 'Your mail has been sent successfully.';
  } else {
    echo 
    'Unable to send email. Please try again';
  }
  
?>
