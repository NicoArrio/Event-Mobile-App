import React, { useEffect } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { Platform, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Home from './src/views/Home';
import Routes from './src/routes';
import Login from './src/views/Login';
import Register from './src/views/Register';


function App(): React.JSX.Element {

  useEffect(()=>{
    if(Platform.OS === 'android')
    SplashScreen.hide();
  },[])
  
  return (
    <SafeAreaProvider style={styles.container}>
      <Home/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#141414' //333333
  }
})

export default App;
