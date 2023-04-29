import React, {useState} from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import NewButton from "../../components/NewBoutton/NewButton";
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';


const HomeScreen =()=>{
   
    const navigation = useNavigation();
    const onPressedM = () => {
        navigation.navigate('CouresDes');
    }
    return(
        <View >
       <View style={styles.root}>
       <Image source={require('../../../assets/Logo.png')} style={styles.Logo}/>
       <View style={styles.root2}>
       <Text style={styles.title}>اسامة علاء الدين ابو زنيد</Text>
       <Text style={styles.title}>Osama2001.bs@gmali.com</Text>
       </View>
      
        </View> 
        
        <View style={styles.root1}>
       <Image source={require('../../../assets/Logo.png')} style={[styles.Logo , styles.item]} />
       <Image source={require('../../../assets/Logo.png')} style={styles.Logo}/>
        </View> 
        <View style={styles.root1} >
      <NewButton text="Mobile programming" onPress={onPressedM} />
      <NewButton text="Web programming" onPress={onPressedM} />
        </View> 
        <View style={styles.root1}>
        <Image source={require('../../../assets/Logo.png')} style={[styles.Logo , styles.item]} />
        <Image source={require('../../../assets/Logo.png')} style={styles.Logo}/>
        </View>
        <View style={styles.root1} >
      <NewButton text="Informatin secyrity" onPress={onPressedM} />
      <NewButton text="Didtributed system"  onPress={onPressedM}/>
        </View> 
        </View>
    )
}
const styles = StyleSheet.create({
    Logo: {
        width: '70%',
        maxWidth: 100,
        maxHeight: 100,
        marginVertical:25,
        },
    root: {
        flexDirection:"row",
        backgroundColor:'#3B71F3',
         },
    root1: {flexDirection:"row",},
    root2: { flexDirection:"column",},
    item: {marginHorizontal:50,},
    item2: {marginHorizontal:125,},
  
    title:{
        color:'white',
        marginVertical:40,
        marginHorizontal:10,
        marginBottom:-20
    },
   
});
export default HomeScreen