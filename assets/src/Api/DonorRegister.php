<?php

   $CN = mysqli_connect("localhost", "root","");
   $DB = mysqli_select_db($CN,"savelife");
   
   $EncodedData = file_get_contents('php://input');
   $DecodedData = json_decode($EncodedData, true);
   
   
   $D_name = $DecodedData['Name'];
   $D_dob = $DecodedData['Birth'];
   $D_adddress = $DecodedData['Address'];
   $D_nic = $DecodedData['Id'];
   $D_contactNum1 = $DecodedData['Number1'];
   $D_contactNum2 = $DecodedData['Number2'];
    $D_lstBloodDonation = $DecodedData['Donation'];
	$D_age = $DecodedData['Age'];
	$D_weight = $DecodedData['Weight'];
	$D_bloodGroup = $DecodedData['BloodType'];
	$D_hemoglobinLvl = $DecodedData['Hemoglobinlvl'];
	
	
	
   $IQ = "insert into donor_details(D_name,D_DOB,D_adddress,D_nic,D_contactNum1,D_contactNum2,D_lstBloodDonation,D_age,D_weight,D_bloodGroup,D_hemoglobinLvl	) values ('$D_name','$D_dob', '$D_adddress', '$D_nic','$D_contactNum1','$D_contactNum2','$D_lstBloodDonation','$D_age','$D_weight','$D_bloodGroup','$D_hemoglobinLvl')";

	

   $R = mysqli_query($CN, $IQ);

   if($R){
   $Message = "User has been registered successfully";
	//echo("User register");
   }
   else{
   $Message = "server error.. try again";
	//echo("User not register");

   }
	
   $Response[] = array("Message" => $Message);

   echo json_encode($Response);

?>