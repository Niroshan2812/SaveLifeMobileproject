import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';  
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native-gesture-handler";

const FinddonorScreen = ({ navigation }) => {
  const [bloodOpen, setBloodOpen] = useState(false);
  const [bloodValue, setBloodValue] = useState(null);
  const [blood, setBlood] = useState([
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ]);
  const [locationOpen, setLocationOpen] = useState(false);
  const [locationValue, setLocationValue] = useState(null);
  const [location, setLocation] = useState([
    { label: "Akkaraipattu", value: "Akkaraipattu" },
    { label: "Ampara", value: "Ampara" },
    { label: "Batticaloa", value: "Batticaloa" },
    { label: "Badulla", value: "Badulla" },
    { label: "Colombo", value: "Colombo" },
    { label: "Dambulla", value: "Dambulla" },
    { label: "Dikkoya", value: "Dikkoya" },
    { label: "Gampaha", value: "Gampaha" },
    { label: "Gampola", value: "Gampola" },
    { label: "Homagama", value: "Homagama" },
    { label: "Horana", value: "Horana" },
    { label: "Jaffna", value: "Jaffna" },
    { label: "Kandy", value: "Kandy" },
    { label: "Kegalle", value: "Kegalle" },
    { label: "Killinochchi", value: "Killinochchi" },
    { label: "Mannar", value: "Mannar" },
    { label: "NuwaraEliya", value: "NuwaraEliya" },
    { label: "Polonnaruwa", value: "Polonnaruwa" },
    { label: "Ratnapura", value: "Ratnapura" },
    { label: "Trincomalee", value: "Trincomalee" },
    { label: "Vavuniya", value: "Vavuniya" },
  ]);
  return (
    <View style={styles.container2}>
      <View style={{ zIndex: 2 }}>
        <View style={styles.dropdownAge}>
          <Text style={styles.label}>Blood Group</Text>
          <DropDownPicker
            style={styles.dropdown}
            open={bloodOpen}
            value={bloodValue}
            items={blood}
            setOpen={setBloodOpen}
            setValue={setBloodValue}
            setItems={setBlood}
            placeholder="Select Blood Group "
            placeholderStyle={styles.placeholderStyles}
            maxHeight={100}
          />
        </View>
      </View>

      <View style={{ zIndex: 1 }}>
        <View style={styles.dropdownAge}>
          <Text style={styles.label}>Location</Text>
          <DropDownPicker
            style={styles.dropdown}
            open={locationOpen}
            value={locationValue}
            items={location}
            setOpen={setLocationOpen}
            setValue={setLocationValue}
            setItems={setLocation}
            placeholder="Select Location "
            placeholderStyle={styles.placeholderStyles}
            maxHeight={100}
          />
        </View>
      </View>
    

      <Button
        title="FIND DONOR"
        onPress={() => navigation.navigate("Contact Donor")}
      />
    
      <View style={styles.secondcontanner}>
        <MapView style={styles.map} >

        <Marker  
            coordinate={{ latitude: 6.9271, longitude: 79.8612 }}  
            title={"Donor Location"}  
          />  
        </MapView>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({


  container2: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop:'1%'
   
   
  },

  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  content: {
    width: "90%",
    marginTop: "10%",
  },
  content2: {
    width: "90%",
    marginTop: "0.5%",
  },

  label2: {
    marginHorizontal: 10,
    marginBottom: 15,
    fontWeight: "bold",
  },

  text: {
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 20,
    marginTop: "-20%",
  },

  TextHead: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: "1%",
  },

  image: {
    marginBottom: 30,
    width: 200,
    height: 200,
    marginHorizontal: "20%",
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 5,
    width: "70%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontWeight: "bold",
    borderColor: "#B7B7B7",
  },

  RegisterBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
    marginHorizontal: "2%",
  },

  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "-30%",
  },
  fixToTxt: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
  },

  TextBody: {
    fontSize: 12,
    textAlign: "justify",
    marginLeft: "0.99%",
    marginVertical: 8,
    marginHorizontal: 6,
    fontWeight: "bold",
    color: "red",
  },
  logo: {
    marginBottom: 30,
    width: 300,
    height: 300,
    marginTop: "-20%",
    marginHorizontal: "10%",
  },

  img: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 100,
    height: 100,
    marginTop: "5%",
    marginLeft: "-40%",
  },

  dropdownAge: {
    marginHorizontal: 10,
    marginBottom: 15,
    width: "93%",
  },
  dropdown: {
    borderColor: "#B7B7B7",
    
  },
  placeholderStyles: {
    color: "black",
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
    fontWeight: "bold",
  },

  inputView1: {
    backgroundColor: "#FFC0CB",
    borderRadius: 5,
    width: "70%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },
  secondcontanner:{
    flex:2,
    margin:'5%',
  },
  map:{
    width:'100%',
    height:'100%',
  }
 
});

export default FinddonorScreen;
