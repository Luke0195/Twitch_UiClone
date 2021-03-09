import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './routes';
import {View, Text, StatusBar} from 'react-native';


const App:React.FC = () =>{
  return(
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#030304"/>
      <Routes/>
    </NavigationContainer>

  )
}

export default App;
