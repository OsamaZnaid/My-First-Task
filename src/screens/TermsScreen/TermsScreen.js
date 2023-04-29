import React, {useState} from "react";
import { View,Text,StyleSheet, Button,} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';

const TermsScreen =()=>{
    const navigation = useNavigation();
    const OnSubmitPressed = () =>{
        navigation.navigate('Sing');
    }
    return(
        <View >
            <Text style={styles.text}> Terms of use and policy </Text>
            <Button title="osama" onPress={OnSubmitPressed}/>

            <Text style={styles.title}> 1- </Text>
            <Text style={styles.title}> 2- </Text>
            <Text style={styles.title}> 3-</Text>
            <Text style={styles.title}> 4-</Text>
            <Text style={styles.title}> 5-</Text>
            <Text style={styles.title}> 6-</Text>
            <Text style={styles.title}> 6-</Text>
            <Text style={styles.title}> 6-</Text>
            <View style={styles.root}>
            <CustomButton text="Back to sing in" type="PRIMARY" onPress={OnSubmitPressed}/>
            </View>
            <View style={styles.root}>
            <CustomButton text="Back to sing in" type="PRIMARY" />
            </View>
        </View>
   
    );
};
const styles = StyleSheet.create({
    root: {
    alignItems : 'center',
    padding:50,
    marginVertical: 306,
    
    },
    text:{
       color:'black',
       fontWeight:'bold',
       fontSize:20,
       alignSelf:'center'
    },
    title:{
        color:'white',
     },
  
});

export default TermsScreen