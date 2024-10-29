import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


function Choice() {
    const navigation = useNavigation();

    const handleChoice = async (choice) => {
        try {
            const token = await AsyncStorage.getItem('token');
            const decoded = jwt_decode(token);
            const email = decoded.email;

            await axios.post('http://10.0.2.2:3000/updateFirstLogin', { email });
            if (choice === 'host') {
                navigation.navigate('OnlyHost');
            } else {
                navigation.navigate('HomeNews');
            }
        } catch (error) {
            Alert.alert("Error", "Unable to complete your choice.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Are you a...</Text>
            <TouchableOpacity onPress={() => handleChoice('host')} style={styles.button}>
                <Text>Host</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChoice('guest')} style={styles.button}>
                <Text>Guest</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 20, marginBottom: 20 },
    button: { padding: 10, backgroundColor: '#ccc', margin: 10 },
});

export default Choice;