<?php

	if( isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['email']) && isset($_POST['message'])) {
		$firstName = $_POST['firstName']; //HINT: use preg_replace to filter the data
		$lastName = $_POST['lastName'];
		$email = $_POST['email'];
		$message = nl2br($_POST['message']);
		$to ="marketingstrategies250@gmail.com";
		$from = $email;
		$subject = 'MENET CORP NETWORK: Contact Form Message';

/* COME BACK TO THIS SINCE I AM NOT SURE IF IT'S CORRECT. MOVE ON FOR NOW SO THAT YOU CAN SAVE TIME*/

		$message = '<b>First Name: </b> '.$firstName.' <br><b>Last Name: </b> '.$lastName.' <br><b>Email: </b> '.$email.' <p>'.$message.'</p>';
		$headers = "From: $from\n";
		$headers = "MIME-Version: 1.0\n";
		$headers = "Contect-type: text/html; charset = iso-8859-1\n";

		if( mail($to, $subject, $message, $headers) ) {
			echo "success";
		}
		else {
			echo "The server failed to send the message. Please try again later. Thank you.";
		}
	}

?>