<?php

   $CN = mysqli_connect("localhost", "root","");
   $DB = mysqli_select_db($CN,"savelife");
   
   //$EncodedData = file_get_contents('php://input');
   //$DecodedData = json_decode($EncodedData, true);
   
   
   $BloodGroup = $_POST['BloodGroup'];
   //$Location = $_POST['Location'];
   $bld = "".$BloodGroup; 
	
	
	
   $SQ = "SELECT * FROM donor_details WHERE D_bloodGroup =$BloodGroup ";
   

   $Table = mysqli_query($CN, $SQ);

   if(mysqli_num_fields($Table)>0)
   {
		$Row = mysqli_fetch_assoc($Table);
		$ID  =$Row["ID "];
		$bloodgroup = $Row["D_bloodGroup"];
		$DssD_name = $Row["D_name"];
	echo("User register");
   }
   else{
		$ID  ="";
		$bloodgroup = "";
		$DssD_name = "";

   }
	
   $Response[] = array("ID" => $ID,"bloodgroup"=>$bloodgroup, "Name"=> $DssD_name);

   echo json_encode($Response);

?>