import React, { useEffect } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { Platform, StyleSheet } from 'react-native';
import Routes from './src/routes';
import SplashScreen from 'react-native-splash-screen';


function App(): React.JSX.Element {

  useEffect(()=>{
    if(Platform.OS === 'android')
    SplashScreen.hide();
  },[])
  
  return (
    <SafeAreaProvider style={styles.container}>
      <Routes/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#141414' //333333
  }
})

export default App;
