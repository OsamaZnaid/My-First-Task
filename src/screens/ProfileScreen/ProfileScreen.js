import React, {useState} from "react";
import { View,Text,StyleSheet,Image,  } from "react-native";
import {Picker} from '@react-native-picker/picker';
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput";



const ProfileScreen =()=>{
    return(
        <View >
         <Image source={require('../../../assets/Logo.png')} style={styles.Logo}/>
         <Text style={styles.title}>Name</Text>
         <Text style={styles.text}>Osama Alaa Abu Znaide</Text>
         <Text style={styles.title}>Email</Text>
         <Text style={styles.text}>Osama2001.bs@gmali.com</Text>
         <Text style={styles.title}>Specilist</Text>
         <Text style={styles.text}>Softwer Engineer</Text>
         <Text style={styles.title}>Courses</Text>
         <Text style={styles.text}>- Mobile programming</Text>
         <Text style={styles.text}>- Web programming</Text>
         <Text style={styles.text}>- Informatin secyrity</Text>
         <Text style={styles.text}>- Didtributed system</Text>
        </View>
   
    );
};
const styles = StyleSheet.create({
    root: {
    alignItems : 'center',
    padding: 20,
    
    },
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
      },
    Logo: {
        alignSelf : 'center',
        marginVertical:25,
        width: '70%',
        maxWidth: 100,
        maxHeight: 100,
    },
    text:{
        marginHorizontal:60,
        backgroundColor:'#3B71F3',
        color:'black',
        
    },
    title:{
        color:'black',
    fontFamily:"sans-serif-light",
        fontSize:18,
       
        marginHorizontal:50,
        marginVertical: 15,
        
       
    },
});
export default ProfileScreen