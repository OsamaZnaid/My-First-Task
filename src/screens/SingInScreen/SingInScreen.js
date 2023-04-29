import React, {useState} from 'react';
import { View, Text, Image,StyleSheet, useWindowDimensions ,} from 'react-native';
import Logo from '../../../assets/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';
import { TextInput } from 'react-native-gesture-handler';

const SingInScreen = () => {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const {height}= useWindowDimensions();

    const onSignInPressed = () => {
        
    navigation.navigate('Home');
    }

    const onForgotPassmordPressed= () =>{
        navigation.navigate('Forgot');
    }
    const OnTermsOfUesPressed = () =>{
        navigation.navigate('Terms');
    }

    return (
       <View style={styles.root}>
        <Image source={require('../../../assets/Logo.png')} style={[styles.Logo, {height: height * 0.3}]} resizeMode="contain"/>
        <Text style={styles.title}>ٍSING IN</Text>
        <CustomInput placeholder='Username' value={Username} setValue={setUsername}  />
        <CustomInput placeholder='password' value={password} setValue={setPassword} secureTextEntry/>
        <CustomButton text="Sing in" onPress={onSignInPressed} type="PRIMARY" />

        <CustomButton text="Forgot password?" onPress={onForgotPassmordPressed} type="TERTIARY" />
        <Text style={{color:'red' , backgroundColor:'black'}}></Text>
        
        <View style={styles.text}><CustomButton text="Terms of Use and Policy" onPress={OnTermsOfUesPressed} type="TERTIARY" /></View>
       </View> 
    );
};
const styles = StyleSheet.create({
    root: {
    alignItems : 'center',
    padding: 20,
    
    },
    Logo: {
    width: '70%',
    maxWidth: 100,
    maxHeight: 200,
    },
    text:{
       
        marginVertical: 10,
        padding:50,
    },
    title:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        marginTop: -30,
        marginBottom:20,
        fontFamily:"sans-serif-light",
    },
});

export default SingInScreen