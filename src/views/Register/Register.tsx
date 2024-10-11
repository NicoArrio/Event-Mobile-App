import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BigHeader from '../../components/Header/BigHeader';
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";

const Register = () => {
    return (
        <View style={styles.container}>
            <BigHeader/>
  
            <Text style={styles.LoginLegend}>Register</Text>
          
            <Button 
                title='login'     
            />
            
  
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
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: 'RobotoMono-Regular',
        color: '#333',
    },
    buttonContainer: {
        width: '100%',
        height: 50,
        marginBottom: 15,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    signUpText: {
        color: '#fff',
        marginTop: 20,
        fontFamily: 'RobotoMono-Regular',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        justifyContent: 'center', // Centrar el texto en el botón
    },
    });
export default Register;