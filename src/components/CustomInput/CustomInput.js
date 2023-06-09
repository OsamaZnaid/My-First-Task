import React from "react";
import { View, Text, TextInput,StyleSheet } from "react-native";

const CustomInput = ( { value,seValue , placeholder,secureTextEntry } ) => {
    return(
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={(value)=>seValue(value)}
            placeholder={placeholder} 
            style={styles.input}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={"black"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical:5,
    },
    input: {},
}
);
export default CustomInput