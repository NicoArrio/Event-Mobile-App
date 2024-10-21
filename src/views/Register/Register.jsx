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


function Register (props) {
    const navigation=useNavigation();
    return (
        <View style={{backgroundColor: '#141414', flex:1}} >
      <BigHeader/>
      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Register </Text>

        {/* I N P U T    D A T O S */}
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#C21807" style={styles.smallIcon}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ffff" 
            style={styles.textInput}
            onChange={e => setEmail(e.nativeEvent.text)}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="lock" color="#C21807" style={styles.smallIcon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ffff" 
            style={styles.textInput}
            onChange={e => setPassword(e.nativeEvent.text)}
          />
        </View>

      </View>
      
      {/* B U T T O N s*/}
      <View style={styles.button}>

        {/* L O G I N */}
        <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
          <View>
            <Text 
            style={styles.textSign}
            onPress={()=>navigation.navigate('Login')}
            >Register</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.signUpText}>
          Already have an account 
          <Text 
            style={{fontWeight: 'bold', color:'red'}}
            onPress={()=>navigation.navigate('Login')}
            > Login</Text>
        </Text>

      </View>
    </View>
    );
}

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
    //new
    loginContainer: {
        backgroundColor: '#141414',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#ffff',
        fontSize: 30,
        fontFamily: 'RobotoMono-Medium',
    },
    action: {
        flexDirection: 'row',
        paddingTop: 14,
        paddingBottom: 3,
        marginTop: 15,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#C21807',
        borderRadius: 50,
    },
    smallIcon: {
        marginRight: 10,
        fontSize: 24,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        fontFamily:'RobotoMono-Regular'
    },
    button: {
        alignItems: 'center',
        textAlign: 'center',
        margin: 20,
        marginTop: -10,
    },
    inBut: {
        width: '70%',
        backgroundColor: '#5C0B03',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 50,
        marginBottom: 10,
    },
    textSign: {
        fontSize: 18,
        color: 'white',
        fontFamily:'RobotoMono-Medium'
    },
    googleContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    leftGoogleContainer:{
        marginRight: 10,
    },
    signUpText: {
        color: '#fff',
        marginTop: 20,
        fontFamily: 'RobotoMono-Regular',
    },
});

export default Register;