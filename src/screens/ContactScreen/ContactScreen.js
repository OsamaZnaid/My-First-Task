import React, {useState} from "react";
import { View,Text,StyleSheet,Image,ScrollView,  } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomInput2 from "../../components/CustomInput2";
const ContactScreen =()=>{
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    return(
      <ScrollView style={styles.root} >
       <Text style={styles.text}>Contact Us</Text>
       <Text style={styles.title}>Name</Text>
       <CustomInput placeholder='Username' value={Username} setValue={setUsername}  />
       <Text style={styles.title}>Emile</Text>
       <CustomInput placeholder='Enter your Emile' value={Username} setValue={setUsername}  />
       <Text style={styles.title}>Messege</Text>
       <CustomInput2 placeholder='Enter your massege'/>
       <CustomButton text="Sent messege"  type="PRIMARY" />
       <Text style={styles.title}>Fax</Text>
       <Text style={styles.title}>Email</Text>
       <Text style={styles.title}>Whats App</Text>
       <Text style={styles.title}></Text>
      </ScrollView>
   
    );
};
const styles = StyleSheet.create({
    root: { 
    padding: 30,
    
    },

    text:{
        alignSelf: 'center',
        marginVertical:25,
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    },
    title:{
        color:'black',
        fontFamily:"sans-serif-light",
        fontSize:18,
        marginVertical: 15,
        fontWeight:'bold',
        
       
    },
});
export default ContactScreen