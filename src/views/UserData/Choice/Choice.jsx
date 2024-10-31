import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
// import { View, Text, TouchableOpacity, StyleSheet, Alert, Image,ImageBackground  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { jwtDecode } from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


function Choice() {
    const navigation = useNavigation();

    const handleChoice = async (choice) => {
        if (choice === 'anfitrion') {
            Alert.alert("Acceso Denegado", "Uso Exclusivo para Anfitriones");
            return; // Detiene la ejecución adicional para no redirigir
        }

        try {
            const token = await AsyncStorage.getItem('token');
            const decoded = jwtDecode(token);
            const email = decoded.email;

            await axios.post('http://10.0.2.2:3000/updateFirstLogin', { email });
            navigation.navigate('UserData');
        } catch (error) {
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