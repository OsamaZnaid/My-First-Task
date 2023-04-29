import React from 'react';
import {Text,View, StyleSheet, TextInput,TouchableO} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntdesignIcon from'react-native-vector-icons/AntDesign';
import EntypoIcon from'react-native-vector-icons/Entypo';

const ListItem = ({item,deleteItem}) => {
  
  return (
    <TouchableOpacity style={styles.ListItem}>
        <View style={styles.ListItemView}>
        <AntdesignIcon
            style={styles.ss}
              name='close'
              size={20}
              color='darkslateblue'
              onPress={()=> deleteItem(item.id)}/>
        <Text style={styles.ListItemText}>{item.text}</Text>
        </View>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
    ListItem:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee',
    },
    ss:{
marginVertical:20
    },
    ListItemView:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    ListItemText:{
     fontSize:18,
     color:'black',

    },
   
  
});
export default ListItem;