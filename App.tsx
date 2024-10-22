import React, { useEffect } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { Platform, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
  
  // BUTTON NAVIGATION
  // const TabNav = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    // // B U T T O N   N A V I G A T I O N
    // <NavigationContainer>
    //   <TabNav.Navigator
    //     screenOptions={{
    //       tabBarActiveTintColor:'red',
    //       tabBarInactiveTintColor:'black',
          
    //       tabBarLabelStyle:{
    //         fontSize:12,
    //         paddingBottom:4,
    //         fontWeight:600,
            
    //       }
    //     }}
    //   >
    //     <TabNav.Screen name='Novedades' component={News} 
    //     options={{
    //       tabBarIcon:({focused})=>(
    //         <Icon name='calendar-alt' size={23} color={focused ? 'red' : 'black'}/>
    //       ),
    //     headerShown:false
    //     }}
    //     />

    //     <TabNav.Screen name='Invitados' component={Friends} 
    //     options={{
    //       tabBarIcon:({focused})=>(
    //         <Icon name='users' size={23} color={focused ? 'red' : 'black'}/>
    //       ),
    //     headerShown:false
    //     }}
    //     />

    //     <TabNav.Screen name='login' component={Login} 
    //     options={{
    //       tabBarIcon:({focused})=>(
    //         <Icon name='glass-cheers' size={23} color={focused ? 'red' : 'black'}/>
    //       ),
    //     headerShown:false
    //     }}
    //     />

    //     <TabNav.Screen name='register' component={Register} 
    //     options={{
    //       tabBarIcon:({focused})=>(
    //         <Icon name='user-alt' size={23} color={focused ? 'red' : 'black'}/>
    //       ),
    //     headerShown:false
    //     }}
    //     />
        
        
    //   </TabNav.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#141414' //333333
  }
})

export default App;
