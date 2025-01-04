<?php

   $CN = mysqli_connect("localhost", "root","");
   $DB = mysqli_select_db($CN,"savelife");
   
   $EncodedData = file_get_contents('php://input');
   
   $DecodedData = json_decode($EncodedData, true);

   $clusterCenter = $DecodedData['Cluster'];
   $bloodBank = $DecodedData['Bloodbank'];
   $userName = $DecodedData['Username'];
   $password = $DecodedData['Password'];
   $confirmPassword = $DecodedData['Confirmpassword'];

   $IQ = "insert into userregister(clusterCenter, bloodBank, userName, password, confirmpassword) values ('$clusterCenter', '$bloodBank', '$userName', $password, $confirmPassword)";

	

   $R = mysqli_query($CN, $IQ);

   if($R){
   $Message = "User has been registered successfully";

   }
   else{
   $Message = "server error.. try again";


   }

   $Response[] = array("Message" => $Message);

   echo json_encode($Response);

?>