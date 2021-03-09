import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../pages/Home';


const Stack =  createStackNavigator();

const TabsNavigation = createBottomTabNavigator();

const Routes:React.FC  = () =>{
 return(
   <>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}
       options={{headerShown: false}}
      />
    </Stack.Navigator>
   </>
 )
}


export default Routes;
