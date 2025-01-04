<?php
  
  $CN = mysqli_connect("localhost", "root","");
  $DB = mysqli_select_db($CN,"savelife");

  $EncodedData = file_get_contents('php://input');
  $DecodedData = json_decode($EncodedData, true);	

  $Username = $DecodedData['Username'];
  $password = $DecodedData['Password'];
  $CnfromPassword =  $DecodedData['frgPassword'];


		
  	
  	$query = "UPDATE userregister set password = '$password', confirmpassword = '$CnfromPassword' WHERE userName='$Username'";

  	//$check = mysqli_fetch_array(mysqli_query($CN,$query));
	
	if (mysqli_query($CN, $query)) {
			echo json_encode('Data Matched');	
	} else {
			echo json_encode('ok');	
	}
	
	
	
	