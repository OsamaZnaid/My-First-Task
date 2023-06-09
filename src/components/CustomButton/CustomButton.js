import React  from "react";
import { View, Text, StyleSheet, Pressable,  } from "react-native";

const CustomButton = ({onPress, text, type="PRIMARY"}) =>{``
    return(
        <Pressable onPress={onPress} style={[styles.container, {backgroundColor:type=="PRIMARY"?"#3B71F3":""}]}>
            <Text style={[styles.text, styles['text_${type}']]}>{text}</Text>
        </Pressable>
    );
};
const styles =StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',
        width: '100%',

        padding:15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY:{
        backgroundColor: '#3B71F3',
    },

    container_TERTIARY:{},
    text: {
        fontWeight: 'bold',
        color:'black',
    },

    text_TERTIARY: {
        color:'black',
    },
})
export default CustomButton