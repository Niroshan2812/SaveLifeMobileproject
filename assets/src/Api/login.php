<?php
  
  $CN = mysqli_connect("localhost", "root","");
  $DB = mysqli_select_db($CN,"savelife");

  $EncodedData = file_get_contents('php://input');
  $DecodedData = json_decode($EncodedData, true);	

	
  $username = $DecodedData['Username'];
  $password =  $DecodedData['Password'];


		
  	
  	$query = "SELECT * FROM userregister WHERE userName='$username' AND password='$password'";

  	$check = mysqli_fetch_array(mysqli_query($CN,$query));
	
	if(isset($check)){
		echo json_encode('Data Matched');	
		
	}else{		
		echo json_encode('ok');				
		}
	
	
  	
	
	


?>