import React from 'react';
const {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet
} = require('react-native');
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { RootStackParamList } from '../../types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useEffect, useState} from 'react';
import {log} from 'react-native-reanimated';
//import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BigHeader from '../../components/Header/BigHeader';


function Login ({props}) {
  return (
    <ScrollView
    contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps={'always'}>
    <View style={{backgroundColor: '#141414'}}>
      <BigHeader/>
      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Login !!!</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#420475"
            style={styles.smallIcon}
          />
          <TextInput
            placeholder="Mobile or Email"
            style={styles.textInput}
            onChange={e => setEmail(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            onChange={e => setPassword(e.nativeEvent.text)}
          />
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 8,
            marginRight: 10,
          }}>
          <Text style={{color: '#420475', fontWeight: '700'}}>
            Forgot Password
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
          <View>
            <Text style={styles.textSign}>Log in</Text>
          </View>
        </TouchableOpacity>

        <View style={{padding: 15}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#919191'}}>
            ----Or Continue as----
          </Text>
        </View>
        <View style={styles.bottomButton}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={styles.inBut2}>
              <FontAwesome
                name="user-circle-o"
                color="white"
                style={styles.smallIcon2}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Guest</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.inBut2}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <FontAwesome
                name="user-plus"
                color="white"
                style={[styles.smallIcon2, {fontSize: 30}]}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Sign Up</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.inBut2}
              onPress={() => alert('Coming Soon')}>
              <FontAwesome
                name="google"
                color="white"
                style={[styles.smallIcon2, {fontSize: 30}]}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Google</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.inBut2}
              onPress={() => alert('Coming Soon')}>
              <FontAwesome
                name="facebook-f"
                color="white"
                style={[styles.smallIcon2, {fontSize: 30}]}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Facebook</Text>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      //alignItems: 'center',
      //justifyContent: 'center',
      padding:20,
      backgroundColor: '#141414',
  },
  LoginLegend:{
      fontSize:23,
      fontFamily:'RobotoMono-Medium',
      color:'#ffff',
      marginBottom:'auto'
  },
  signUpText: {
      color: '#fff',
      marginTop: 20,
      fontFamily: 'RobotoMono-Regular',
  },
  //copy
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  smallIcon: {
    marginRight: 10,
    fontSize: 24,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 260,
    width: 260,
    marginTop: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 3,
    marginTop: 15,

    paddingHorizontal: 15,

    borderWidth: 1,
    borderColor: '#420475',
    borderRadius: 50,
  },
  textInput: {
    flex: 1,
    marginTop: -12,

    color: '#05375a',
  },
  loginContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  text_header: {
    color: '#420475',
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: -20,
    alignItems: 'center',
    textAlign: 'center',
    margin: 20,
  },
  inBut: {
    width: '70%',
    backgroundColor: '#420475',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
  },
  inBut2: {
    backgroundColor: '#420475',
    height: 65,
    width: 65,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallIcon2: {
    fontSize: 40,
    // marginRight: 10,
  },
  bottomText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  radioButton_div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioButton_inner_div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButton_title: {
    fontSize: 20,
    color: '#420475',
  },
  radioButton_text: {
    fontSize: 16,
    color: 'black',
  },
  });
  
  // No olvides agregar el linear gradient en el botón
  
export default Login;