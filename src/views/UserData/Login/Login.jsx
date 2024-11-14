import React from 'react';
const {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} = require('react-native');
import { useNavigation } from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BigHeader from '../../../components/Header/BigHeader';
import { API_BASE_URL } from '@env';


function Login (props) {
  const navigation = useNavigation();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(){
    //console.log(email,password);
    const UserData={
      email:email,
      password,
    };
    axios
      .post(`${API_BASE_URL}/login`, UserData)
      .then(res=> {
        console.log(res.data);
        if (res.data.status== 'ok'){
          //Alert.alert('Logged in Succesfull');
          AsyncStorage.setItem('token', res.data.data);
          if (res.data.isFirstLogin) {
            navigation.navigate('Choice');
          } else {
            navigation.navigate('HomeNews');
          }
        }
      })
      .catch(error => {
        console.error("Login Error:", error);
        Alert.alert("Login Error", "Failed to connect to the server.");
      });
      ;
      

  }

  return (
    <View style={{backgroundColor: '#141414', flex:1}} keyboardShouldPersistTaps={'always'}>
      <BigHeader/>
      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Login</Text>

        {/* I N P U T S*/}

        {/* E M A I L*/}
        <View style={styles.action}>
          <FontAwesome name="envelope" color="#C21807" style={styles.smallIcon}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ffff" 
            style={styles.textInput}
            onChange={e => setEmail(e.nativeEvent.text)}
          />
        </View>

        {/* P A S S W O R D */}
        <View style={styles.action}>
          <FontAwesome name="lock" color="#C21807" style={styles.smallIcon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ffff" 
            style={styles.textInput}
            onChange={e => setPassword(e.nativeEvent.text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather name={showPassword ? 'eye' : 'eye-off'} color="#C21807" size={20} />
          </TouchableOpacity>
        </View>

        {/* F O R G E T    P A S S W O R D */}
        {/* <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 8,
            marginRight: 10,
          }}>
          <Text style={{color: '#C21807', fontWeight: '700'}}>
            Forgot Password
          </Text>
        </View> */}

      </View>
      
      {/* B U T T O N s*/}
      <View style={styles.button}>

        {/* L O G I N   I N */}
        <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
          <View>
            <Text style={styles.textSign}>Log in</Text>
          </View>
        </TouchableOpacity>

        <View style={{padding: 15}}>
          <Text style={{fontSize: 14, fontFamily:'RobotoMono-Regular', color: '#919191'}}>
            ----Or Continue as----
          </Text>
        </View>

        {/* L O G I N   I N   G O O G L E */}
        <TouchableOpacity style={styles.inBut} onPress={() => Alert.alert("Coming Soon","will be implemented in future updates")}>
          
          <View style={styles.googleContainer}>
            <View style={styles.leftGoogleContainer}>
              <Text style={styles.textSign}>Login with</Text>
            </View>
            <FontAwesome
                name="google"
                color="white"
                style={[styles.smallIcon2, {fontSize: 25}]}
            />
          </View>
        </TouchableOpacity>
        
        {/* R E G I S T E R */}
        <Text style={styles.signUpText}>
          Don’t have an account?
          <Text 
            style={{
              fontFamily:'RobotoMono-Medium',
              fontSize:17,
              textDecorationLine: 'underline', 
              color: 'red',
            }}
            onPress={()=>navigation.navigate('Register')}
          >Sign Up</Text>
        </Text>

      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  
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
  
  // No olvides agregar el linear gradient en el botón
  
export default Login;