/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text,FlatList,Alert} from 'react-native';
import SingInScreen from './src/screens/SingInScreen';
import First from './src/screens/First';
import Navigation from './src/navigation';
import { uuid } from 'uuidv4';
import Header from './src/screens/ShoppingList/Header';
import ListItem from './src/screens/ListItem/ListItem';
import AddItem from './src/screens/AddItem/Additem';
const App = () => {
  const [items ,setItems]=useState([
    {id:'1' , text:'Milk'},
    {id:'2', text:'Eggs'},
    {id:'3', text:'Bread'},
    {id:'4', text:'Juice'},
  ]);
  const deleteItem =id =>{
    setItems(prevItems =>{
    return prevItems.filter(item=>item.id != id)
    });
  };
  const addItem = text=>{
    if(!text){
      Alert.alert('Error','please enter an item',{text:'ok'});
    }else{
      setItems(prevItems=>{
        return[{id:'5',text}, ...prevItems];
      });
    }
    
  };
  return (
    <SafeAreaView style={styles.root}>
     <Header/>
     <AddItem addItem={addItem}/>
     <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

});

export default App;
