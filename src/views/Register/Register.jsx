import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";

import BigHeader from '../../components/Header/BigHeader';


function Register () {
    return (
        <View style={styles.container}>
            <BigHeader/>
  
            <Text style={styles.LoginLegend}>Register</Text>
          
            <Button 
                title='login'     
                // onPress={() => navigation.navigate('Login')}
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
    
});

export default Register;