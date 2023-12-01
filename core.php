<?php 

session_start();

require_once 'db_connect.php';

// echo $_SESSION['userId'];

if(!$_SESSION['id']) {
	header('location: http://localhost/form/submit_feedback.php');	
} 



?>