import React  from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const NewButton = ({onPress, text, type="PRIMARY"}) =>{
    console.log(type)
    return(
        <Pressable onPress={onPress} style={[styles.container, {backgroundColor:type=="PRIMARY"?"":""}]}>
            <Text style={[styles.text, styles['text_${type}']]}>{text}</Text>
        </Pressable>
    );
};
const styles =StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',
        width: '50%',

        padding:-2,
        marginVertical: 5,
        marginHorizontal:-2,

        alignItems: 'center',
        borderRadius: 5,


    },

    container_PRIMARY:{
        backgroundColor: '#3B71F3',
    },

    container_TERTIARY:{},
    text: {
        fontWeight: 'bold',
        color:'#3B71F3',
    },

    text_TERTIARY: {
        color:'black',
    },
})
export default NewButton