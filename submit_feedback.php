<?php 	

require_once 'db_connect.php';

$valid['success'] = array('success' => false, 'messages' => array());

if($_POST) {	

	$Name = $_POST['name'];
  $Rating = $_POST['rating']; 
  $Features = $_POST['features']; 
  $Category = $_POST['category']; 

	$sql = "INSERT INTO feedback (name, rating, features, category) VALUES ('$Name', '$Rating','$Features','$Category')";

	if($connect->query($sql) === TRUE) {
	 	$valid['success'] = true;
		$valid['messages'] = "Successfully Added";	
	} else {
	 	$valid['success'] = false;
	 	$valid['messages'] = "Error while adding the members";
	}
	 

	$connect->close();

	echo json_encode($valid);
 
} // /if $_POST
