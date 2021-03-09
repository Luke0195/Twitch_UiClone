import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StatusBar} from 'react-native';


const App:React.FC = () =>{
  return(
    <>
    <StatusBar barStyle="light-content" backgroundColor="#030304"/>
    <View  style={{ backgroundColor:'#030304', flex:1}}>
      <Text> Recriando a Interface do Twitch</Text>
    </View>

  </>

  )
}

export default App;
