import React, { useEffect } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { Platform, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/Home';
import Routes from './src/routes';
import Login from './src/views/Login/Login';
import Register from './src/views/Register/Register';
import News from './src/views/News';
import Friends from './src/views/Friends';


function App(): React.JSX.Element {

  useEffect(()=>{
    if(Platform.OS === 'android')
    SplashScreen.hide();
  },[])
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#141414' //333333
  }
})

export default App;
