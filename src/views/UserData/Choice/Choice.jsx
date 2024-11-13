import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {jwtDecode} from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { API_BASE_URL } from '@env';


function Choice() {
    const navigation = useNavigation();
    const [guest, setGuest] = useState('');

    const handleChoice = async (choice) => {
        console.log("Guest choice made:", choice); // Confirmación del valor seleccionado
        setGuest(choice);
    
        if (choice === 'anfitrion') {
            Alert.alert("Acceso Denegado", "Uso Exclusivo para Anfitriones");
            return;
        }
    
        try {
            const token = await AsyncStorage.getItem('token');
            console.log("Retrieved token:", token); // Confirmar si el token existe y es correcto
            if (!token) {
                Alert.alert("Error", "Session not valid.");
                return;
            }
    
            await AsyncStorage.setItem('guest', choice);
    
            const decoded = jwtDecode(token);
            const email = decoded.email;
    
            console.log("Sending to backend:", { choice, guest: choice }); // Confirmación antes del envío al backend
            console.log("Email:", email); // Verificar email decodificado
    
            const response = await axios.post('http://192.168.0.40:3000/updateChoiceData', {
                token,
                choiceData: { guest: choice, choice }
            });
            console.log("Response from updateChoiceData:", response.data); // Confirmación de la respuesta del backend
    
            await axios.post('http://192.168.0.40:3000/updateFirstLogin', { email });
            console.log("UserData screen is about to navigate"); // Confirmación antes de la navegación
    
            navigation.navigate('UserData');
        } catch (error) {
            console.error("Error during choice submission:", error); // Muestra el error exacto
            Alert.alert("Error", "Unable to complete your choice.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Vos sos...</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleChoice('invitado')}>
                    <Image
                        source={require('../../../images/Invitados.png')}
                        style={styles.image}
                    />
                    <Text style={styles.buttonText}>invitado</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleChoice('anfitrion')}>
                    <Image
                        source={require('../../../images/Anfitrion.jpeg')}
                        style={styles.image}
                    />
                    <Text style={styles.buttonText}>anfitrión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20,
        backgroundColor: '#141414'
    },
    headerText: { 
        fontSize: 24, 
        fontFamily: 'RobotoMono-Medium',
        marginBottom: 20,
        color: '#fff'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        width: 120,
        height: 120,  
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 5,
        alignItems: 'center',  
        justifyContent: 'center' 
    },
    image: {
        width: '100%',
        height: 100,  
    },
    buttonText: {
        marginTop: 5,
        color: 'white',
        fontSize: 16,
        fontFamily: 'RobotoMono-Medium',
        textAlign: 'center',
    }
});

export default Choice;