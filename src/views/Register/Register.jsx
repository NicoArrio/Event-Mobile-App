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
    const [email,setEmail] = useState('');
    const [emailVerify,setEmailVerify] = useState(false);
    const [mobile,setMobile] = useState('');
    const [mobileVerify,setMobileVerify] = useState(false);
    const [password,setPassword] = useState('');
    const [passwordVerify,setPasswordVerify] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function handleEmail(e) {
      const emailVar = e.nativeEvent.text;
      setEmail(emailVar);
      setEmailVerify(false);
      if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
        setEmail(emailVar);
        setEmailVerify(true);
      }
    }

    function handleMobile(e) {
      const mobileVar = e.nativeEvent.text;
      setMobile(mobileVar);
      setMobileVerify(false);
      // Asumiendo que se incluye el código de área sin '15', y el primer dígito del número es 9
      if (/^(?:\+54)?(11|221|351|260|297)[0-9]{7,8}$/.test(mobileVar)) {
        setMobile(mobileVar);
        setMobileVerify(true);
      }
    }

    function handlePassword(e) {
      const passwordVar = e.nativeEvent.text;
      setPassword(passwordVar);
      setPasswordVerify(false);
      if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
        setPassword(passwordVar);
        setPasswordVerify(true);
      }
    }

    return (
      <View style={{backgroundColor: '#141414', flex:1}} keyboardShouldPersistTaps={'always'}>
      <BigHeader/>
      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Register</Text>

        {/* I N P U T S*/}

        {/* E M A I L*/}
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#C21807" style={styles.smallIcon}/>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ffff" 
            style={styles.textInput}
            onChange={handleEmail}
          />
          {email && (
            emailVerify ? (
              <Feather name="check-circle" color='green' size={20}/> 
            ) : (
              <Feather name='x-circle' color='red' size={20}/>
            )
          )}
        </View>
        {email.length < 1 ? null : emailVerify ? null : ( 
          <Text style={{marginLeft:20, color:'red',}}> 
            email invalidate
          </Text>
        )}

        {/* P H O N E */}
        <View style={styles.action}>
          <FontAwesome name="phone" color="#C21807" style={styles.smallIcon} />
          <TextInput
            placeholder="phone"
            placeholderTextColor="#ffff" 
            style={styles.textInput}
            onChange={handleMobile}
            maxLength={15}
          />
          {mobile && (
            mobileVerify ? (
              <Feather name="check-circle" color='green' size={20}/> 
            ) : (
              <Feather name='x-circle' color='red' size={20}/>
            )
          )}
        </View>
        {mobile.length < 1 ? null : mobileVerify ? null : ( 
          <Text style={{marginLeft:20, color:'red',}}> 
            number invalidate [Only Argentine numbers]
          </Text>
        )}

        {/* P A S S W O R D */}
        <View style={styles.action}>
          <FontAwesome name="lock" color="#C21807" style={styles.smallIcon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ffff" 
            style={styles.textInput}
            onChange={e => handlePassword(e)}
            secureTextEntry={showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {password && (
			        !showPassword ? (
				        <Feather
                  name="eye-off"
                  style={{marginRight: -10}}
                  color={passwordVerify ? 'green' : 'red'}
                  size={23}
                />
              ) : (
                <Feather
                    name="eye"
                    style={{marginRight: -10}}
                    color={passwordVerify ? 'green' : 'red'}
                    size={23}
                />
			        )
            )}
          </TouchableOpacity>
        </View>
        {password.length < 1 ? null : passwordVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Incorrect password: Must include numbers and be at least 6 characters long.
            </Text>
          )}

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
        fontFamily:'RobotoMono-Regular',
        color: '#ffffff', 
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