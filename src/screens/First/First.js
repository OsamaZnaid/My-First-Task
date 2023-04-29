import React, {useState} from 'react';
import { View, Text, Image,StyleSheet, useWindowDimensions ,} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SingInScreen = () => {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height}= useWindowDimensions();

    return (
       <View >
        <Image source={require('../../../assets/Logo.png')} style={[styles.Logo, {height: height * 0.3}]} resizeMode="contain" />
        <CustomInput placeholder='Username' value={Username} setValue={setUsername}  />
        <CustomInput placeholder='password' value={password} setValue={setPassword} secureTextEntry/>
        <CustomButton text="Sing in"  type="PRIMARY" />
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
    alignSelf : 'center',
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