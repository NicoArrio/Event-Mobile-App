import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import Routes from './src/routes';


function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={styles.container}>
      <Routes/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba( 17, 17, 17, 355)'
  }
})

export default App;
