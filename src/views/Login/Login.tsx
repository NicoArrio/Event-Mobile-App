import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BigHeader from '../../components/Header/BigHeader';

const Login = () => {
    return (
      <View style={styles.container}>
        <BigHeader/>
        <Text style={styles.LoginLegend}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          placeholderTextColor="#888"
        />

        <TouchableOpacity>
          <LinearGradient
            colors={['#5C0B03', '#C21807']}
            style={styles.buttonContainer}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          >
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
          <LinearGradient
            colors={['#5C0B03', '#C21807']}
            style={styles.buttonContainer}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          >
            <Text style={styles.buttonText}>Login with Google</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.signUpText}>
          Don’t have an account? <Text style={{fontWeight: 'bold' }}>Sign Up</Text>
        </Text>

      </View>
    );
};

const styles = StyleSheet.create({
        container: {
        //flex: 1,
        //backgroundColor: '#141414', // Asume un fondo negro para toda la pantalla
        alignItems: 'center',
        justifyContent: 'center',
      padding: 20,
    },
    LoginLegend:{

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
  
  // No olvides agregar el linear gradient en el botón
  
export default Login