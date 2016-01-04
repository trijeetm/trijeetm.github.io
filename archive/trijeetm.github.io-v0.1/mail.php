<?php
if(isset($_POST['email'])) {
     
    $email_to = "trijeetm@gmail.com";
    $email_subject = "Someone asked trijeetm";
     
     
    function died($error) {
        echo '<script type="text/javascript">'; 
		echo 'alert("Sorry, but there were errors in the form you submitted. '. $error.' Please correct them.")'; 
		echo '</script>'; 
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['name']) ||
        // !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
        // !isset($_POST['telephone']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['comments']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid. ';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The name you entered does not appear to be valid. ';
  }
  if(strlen($comments) < 2) {
    $error_message .= 'The message you entered does not appear to be valid. ';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Message: ".clean_string($comments)."\n";
     
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
<?php
 
        echo '<script type="text/javascript">'; 
		echo 'alert("Thank you for your message, I will get back to you as soon as possible.")'; 
		echo '</script>'; 
 
}
?>