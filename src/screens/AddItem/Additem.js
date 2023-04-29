import React ,{ useState } from 'react';
import {Text,View, StyleSheet, TextInput ,TouchableOpacity} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import AntdesignIcon from'react-native-vector-icons/AntDesign';
import EntypoIcon from'react-native-vector-icons/Entypo';
const AddItem = ({title,addItem}) => {
  const [text,settext]=useState('');
  const onChange = textValue => settext(textValue);
  return (
    <View>
        
        <TextInput placeholder='Add Item...' style={styles.input} onChangeText={onChange} placeholderTextColor={'black'}/>
        <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)}>
        <Text style={styles.btnText}>  <AntdesignIcon
              name='plus'
              size={17}
              color='white'
              /> Add Item</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
input:{
    height:60,
    padding:8,
    fontSize:16,
},
btn:{
backgroundColor:'darkslateblue',
padding:9,
margin:5,
borderRadius: 5,
},
btnText:{
    color:'#c2bad8',
    fontSize:19,
    textAlign:'center',
    
  
}
});
export default AddItem;