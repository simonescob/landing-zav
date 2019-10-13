<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './composer/vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$host = "localhost";
$userName = "simo";
$password = "27442041Ss#";
$dbName = "Info_landing_zav";

// Create database connection
$conn = new mysqli($host, $userName, $password, $dbName);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

if (empty($_POST['name']) && empty($_POST['email'])) die();

$Name = $conn->real_escape_string($_POST['name']);
$Email = $conn->real_escape_string($_POST['email']);
$Phone = $conn->real_escape_string($_POST['phone']);
$sql="INSERT INTO contact_form_info (name, email, phone) VALUES ('".$Name."','".$Email."', '".$Phone."')";
if(!$result = $conn->query($sql)){
	die('There was an error running the query [' . $conn->error . ']');
}
else{
	echo "Thank you! We will contact you soon";
}

$mail = new PHPMailer(true);

/* Open the try/catch block. */
try {
	/* Set the mail sender. */
	$mail->setFrom('escobarplinio@gmail.com', 'Simon Escobar');

	/* Add a recipient. */
	$mail->addAddress($Email, $Name);

	/* Set the subject. */
	$mail->Subject = 'Registro exisoto';

	/* Set the mail message body. */
	$mail->Body = "Hola $Name. se ha registrado exitosament, en un momento se comunicaran con usted";

	/* Use SMTP. */
	$mail->isSMTP();

	/* Google (Gmail) SMTP server. */
	$mail->Host = 'smtp.gmail.com';

	/* SMTP port. */
	$mail->Port = 587;

	/* Set authentication. */
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = 'tls';

	/* Username (email address). */
	$mail->Username = 'escobarplinio@gmail.com';

	/* Google account password. */
	$mail->Password = 'simon/4930';

	/* Finally send the mail. */
	$mail->send();
}
catch (Exception $e)
{
	/* PHPMailer exception. */
	echo $e->errorMessage();
}
catch (\Exception $e)
{
	/* PHP exception (note the backslash to select the global namespace Exception class). */
	echo $e->getMessage();
}

?>