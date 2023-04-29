import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer} from '@react-navigation/native'
import SingInScreen from "../screens/SingInScreen";
import HomeScreen from '../screens/HomeScreen';
import ForgotScreen from '../screens/ForgotScreen';
import ContactScreen from '../screens/ContactScreen';
import CourseScreen from '../screens/CourseScreen';
import ProfileScreeen from '../screens/ProfileScreen';
import TermsScreen from '../screens/TermsScreen';

import { createDrawerNavigator } from "@react-navigation/drawer";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer>
            
         <Stack.Navigator haederMode={'none'} >
         <Stack.Screen name="Drawer" options={{headerShown:false}} component={DrawerNavigation}/>
            <Stack.Screen name="Sing"  options={{headerShown:false}} component={SingInScreen}/>
            <Stack.Screen name="Home"  options={{headerShown:false}} component={HomeScreen}/>
            <Stack.Screen name="Forgot"  options={{headerShown:false}} component={ForgotScreen}/>
            <Stack.Screen name="Terms"  options={{headerShown:false}} component={TermsScreen}/>
            <Stack.Screen name="CouresDes"  options={{headerShown:false}} component={CourseScreen}/>
            
         </Stack.Navigator>
        </NavigationContainer>
    );
};

const DrawerNavigation = () => {
    return <Drawer.Navigator >
        
        <Drawer.Screen name= {'Home'} options={{headerShown:false}}   component={HomeScreen} />
        <Drawer.Screen name= {'Profile'} options={{headerShown:false}} component={ProfileScreeen}/>
        <Drawer.Screen name= {'Policy'} options={{headerShown:false}} component={TermsScreen}/>
        <Drawer.Screen name= {'Contact'}options={{headerShown:false}} component={ContactScreen}/>
        <Drawer.Screen name= {'Singin'}options={{headerShown:false}} component={SingInScreen}/>
    </Drawer.Navigator>
}
export default Navigation;