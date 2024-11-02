//librerias
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome5'
//Navegation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './src/types/index'; 
//Pantallas
import Login from './src/views/UserData/Login/Login';
import Register from './src/views/UserData/Register/Register';
import Choice from './src/views/UserData/Choice/Choice';
import UserData from './src/views/UserData/UserData/UserData';
import PlusInformation from './src/views/UserData/PlusInformation/PlusInformation';
import News from './src/views/News';
import Friends from './src/views/Friends';
import Statistics from './src/views/Statistics';
import User from './src/views/User';


function App(): React.JSX.Element {

  useEffect(()=>{
    if(Platform.OS === 'android')
    SplashScreen.hide();
  },[])
  
  const TabNav = createBottomTabNavigator();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const TabNavigator = () => (
    <TabNav.Navigator
      initialRouteName="NewsTab"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 4,
          fontWeight: '600',
        },
      }}>
      <TabNav.Screen name="NewsTab" component={News} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="calendar-alt" size={23} color={focused ? 'red' : 'black'} />
        ),
        headerShown: false
      }} />
      <TabNav.Screen name="Friends" component={Friends} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="users" size={23} color={focused ? 'red' : 'black'} />
        ),
        headerShown: false
      }} />
      <TabNav.Screen name="Statistics" component={Statistics} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="chart-line" size={23} color={focused ? 'red' : 'black'} />
        ),
        headerShown: false
      }} />
      <TabNav.Screen name="User" component={User} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="user-alt" size={23} color={focused ? 'red' : 'black'} />
        ),
        headerShown: false
      }} />
    </TabNav.Navigator>
  );
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Choice" component={Choice} />
        <Stack.Screen name="UserData" component={UserData} />
        <Stack.Screen name="PlusInformation" component={PlusInformation}/>
        <Stack.Screen name="HomeNews" component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
