import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack'

import BigHeader from '../../components/Header/BigHeader';
import { Button } from 'react-native-elements';
import { RootStackParamList } from '../../types';

function Login (props) {
  return (
      <View style={styles.container}>
        <BigHeader/>

        <Text style={styles.LoginLegend}>Loginnn</Text>
        
        <Text style={styles.signUpText}>
          Don’t have an account? <Text style={{fontWeight: 'bold', color:'red'}}>Sign Up</Text>
        </Text>

        <Button 
          title='Register'     
          onPress={() => props.navigation.navigate("Register")}
        />
        
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
  },
  LoginLegend:{
      fontSize:23,
      fontFamily:'RobotoMoto-Medium',
      color:'#ffff',
      marginBottom:'auto'
  },
  signUpText: {
      color: '#fff',
      marginTop: 20,
      fontFamily: 'RobotoMono-Regular',
  },
  });
  
  // No olvides agregar el linear gradient en el botón
  
export default Login;