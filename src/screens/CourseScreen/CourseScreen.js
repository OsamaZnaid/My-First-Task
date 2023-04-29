import React, {useState} from "react";
import { View,Text,StyleSheet, Image} from "react-native";
import { color } from "react-native-reanimated";



const CourseScreen =()=>{
 
    return(
        <View >
            <View>
            <Text style={styles.title}>Course Detlis</Text>
            </View>
            <View style={styles.root1}>
            <Image source={require('../../../assets/Logo.png')} style={styles.Logo}/>
            <View style={styles.root2}>
            <Text style={styles.title3}>Mobile programming</Text>
            <Text style={styles.title3}>123456789456123</Text>
            </View>
            <View>
                <Text style={styles.item}>Descrption:</Text>
                <Text style={styles.item2}>Files:</Text>
            </View>
           
            
            </View>
            
      
    
           
       
          
           
        </View>
   
    );
};

const styles = StyleSheet.create({
    Logo: {
        width: '70%',
        maxWidth: 100,
        maxHeight: 100,
        marginVertical:15,
      
        },
    root: {
        flexDirection:"row",
        backgroundColor:'#3B71F3',
         },
    root1: {flexDirection:"row"},
    root2: { flexDirection:"column",},
    item: {
        marginVertical:150,
        color:"black",
        fontSize:15,
        fontWeight:'bold',
        fontFamily:"sans-serif-light",
    },
    item2: {
        marginVertical:30,
        color:"black",
        fontSize:15,
        fontWeight:'bold',
        fontFamily:"sans-serif-light",
    },
  
    title:{
      alignSelf:'center',
      color:'black',
      fontSize:20,
      marginVertical:15,
      fontWeight:'bold',
    },
    title2:{
        marginVertical:20,
        color:'black',
        
      },
      title3:{
        color:'black',
        marginVertical:30,
        marginHorizontal:10,
        marginBottom:-10,
        fontWeight:'bold',
        fontFamily:"sans-serif-light",
    },
     
   
});

export default  CourseScreen