import React, {useState} from "react";
import { View,Text,StyleSheet, } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { loadOptions } from "@babel/core";
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';
const ForgotScreen =()=>{
    const [Username, setUsername] = useState('');
    const navigation = useNavigation();
    const OnSubmitPressed = () =>{
        navigation.navigate('Sing');
    }
    return(
        <View style={styles.root}>
        
            <Text style={styles.text}>Rest Your Password</Text>
            <CustomInput placeholder='Email'/>
            <CustomButton text="Submit"/>
            <CustomButton text="< <  Back to sing in" onPress={OnSubmitPressed} type="TERTIARY" />
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
    padding: 20,
    },
    text:{
        color:'black',
        marginVertical: 20,
        padding:69,
        fontWeight:'bold',
        fontSize:20,
    },
    title:{
       fontSize:16,
       padding:5,
 
    }
   
});
export default ForgotScreen