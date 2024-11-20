import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Button, Icon, Input } from "@rneui/themed";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Asume que tus tipos están en un archivo llamado types.ts

//sacar lo rojo de replace 
//aclarar que funciona el componentee
const Stack = createStackNavigator<RootStackParamList>();

import Headers from '../../components/Header/Header';
import { API_BASE_URL } from "@env";

const User = () => {
    interface UserData {
        name: string;
        lastName: string;
        age: number;
        sign: string;
        description: string;
        studies: string;
        job: string;
        imageUri: string;
        option: string;
        alternativeOption: string;
        favoriteGenre: string;
        specialWish: string;
    }

    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                console.log('No token found');
                return;
            }
            try {
                const response = await axios.post(`${API_BASE_URL}/userdata`, { token });
                setUserData(response.data.data);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const navigation = useNavigation(); // Hook para usar la navegación

    const handleLogout = async () => {
        await AsyncStorage.removeItem('token'); // Limpia el token guardado
        navigation.replace('Login'); // Navega a la pantalla de login sin volver atrás
    };

    return (
        <ScrollView style={styles.container}>
            <Headers />

            {/* D A T A    P R O F I L E */}
            {userData ? (
                <View style={styles.profileSection}>
                    <View style={styles.nameAgeSection}>
                        <Text style={styles.text}>{`${userData.name} ${userData.lastName}, ${userData.age}`}</Text>
                    </View>
                    <View style={styles.nameAgeSection}>
                        <Text style={styles.text}>{`Signo Zodiacal: ${userData.sign}`}</Text>
                    </View>
                    
                    <View style={styles.listContainer}>
                        <View style={styles.leftContainer}>
                            <View style={styles.profilePicSection}>
                                    {userData.imageUri ? (
                                        <Image source={{ uri: userData.imageUri }} style={styles.profilePic} />
                                    ) : (
                                        <View style={styles.placeholderImage}></View>
                                    )}
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                            <View style={styles.additionalInfoSection}>
                                <Text style={styles.text}>{userData.studies}</Text>
                            </View>

                            <View style={styles.additionalInfoSection}>
                                <Text style={styles.text}>{userData.job}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.descriptionSection}>
                        <Text style={styles.text}>{userData.description}</Text>
                    </View>
                </View>
            ) : (
                <Text>Loading...</Text>
            )}

            

            {/* P L U S    I N F O R M A T I O N */}
            {/* Asegúrate de que userData no es null antes de renderizar esta sección */}
            {userData && (
                <View style={styles.plusInfoSection}>
                    <View style={styles.dataSection}>
                        <View style={styles.iconoSection}>
                            <Image source={require('../../images/botella3.jpg')} style={styles.icon} />
                        </View>
                        <View style={styles.answerContainer}>
                            <Text style={styles.electionText}>Tu elección fue:</Text>
                            <View style={styles.answerSection}>
                                <Text style={styles.text}>{userData.option}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.dataSection}>
                        <View style={styles.iconoSection}>
                            <Image source={require('../../images/botellas1.jpg')} style={styles.icon} />
                        </View>
                        <View style={styles.answerContainer}>
                            <Text style={styles.electionText}>Tu segunda elección fue:</Text>
                            <View style={styles.answerSection}>
                                <Text style={styles.text}>{userData.alternativeOption}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.dataSection}>
                        <View style={styles.iconoSection}>
                            <Image source={require('../../images/estereo2.jpg')} style={styles.icon} />
                        </View>
                        <View style={styles.answerContainer}>
                            <Text style={styles.electionText}>Tu género favorito fue:</Text>
                            <View style={styles.answerSection}>
                                <Text style={styles.text}>{userData.favoriteGenre}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.dataDreamSection}>
                        <View style={styles.iconoSection}>
                            <Image source={require('../../images/fiesta3.jpg')} style={styles.icon} />
                        </View>
                        <View style={styles.dreamAnswerContainer}>
                            <Text style={styles.electionText}>Tu mayor deseo fue:</Text>
                            <View style={styles.dreamAnswerSection}>
                                <Text style={styles.text}>{userData.specialWish}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button 
                            title=" Edite Profile" 
                            titleStyle={{ color: '#ffff' }}
                            icon={<Icon name="edit" color="#ffff" />}
                            radius='lg'
                            color="#5C0B03"
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 80,
                                marginVertical: 10,
                            }}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button 
                            title=" Log out" 
                            titleStyle={{ color: '#ffff' }}
                            icon={<Icon name="exit-to-app" color="#ffff" />}
                            radius='lg'
                            color="#5C0B03"
                            containerStyle={{
                                width: 250,
                                marginHorizontal: 80,
                                marginBottom: 20,
                            }}
                            onPress={handleLogout} // Agrega la acción de logout
                        />
                    </View>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#141414',
    },
    // DATA PROFILE
    profileSection: {
        padding: 1
    },
    listContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:5,
        justifyContent: 'space-between',
    },
    leftContainer:{
        flex:1,
        padding: 0, 
    },
    rightContainer:{
        flex: 2,  // Da más espacio al contenedor derecho
        marginLeft: 50,
        marginBottom: -5,
        
    },
    nameAgeSection: {
        backgroundColor: '#333333',
        borderRadius: 30,
        padding: 10,
        marginBottom: 20,
        justifyContent: 'center',  
        alignItems: 'center' 
    },
    profilePicSection: {
        alignItems: 'flex-start', 
        marginBottom: 10,
    },
    profilePic: {
        width: 140,
        height: 190,
        borderRadius: 30,
    },
    placeholderImage: {
        width: 140,
        height: 190,
        backgroundColor: '#e1e4e8', // A light grey background
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    additionalInfoSection: {
        width: '100%',
        height: 84,
        backgroundColor: '#333333',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 15,
        marginBottom: 20,
        marginLeft: 0,
    },
    descriptionSection: {
        width: '100%',
        height: 80,
        backgroundColor: '#333333',
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingTop: 10,
        textAlignVertical: 'top',
        marginBottom: 20,
        
    },
    buttonContainer: {
        marginBottom: 10,
        width: '100%',
    },
    // PLUS INFORMATION
    plusInfoSection: {
        padding: 1,
    },
    dataSection: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    iconoSection: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    answerContainer: {
        flex: 2,
    },
    dreamAnswerContainer:{
        flex: 2,
    },
    electionText: {
        color: 'white',
        fontFamily: 'RobotoMono-Regular',
        fontSize: 16,
        marginBottom: 10, 
    },
    answerSection: {
        backgroundColor: '#333333',
        borderRadius: 30,
        padding: 10,
    },
    dataDreamSection: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    dreamAnswerSection: {
        height: 100,
        backgroundColor: '#333333',
        borderRadius: 30,
        padding: 10,
        marginBottom: 5,
    },
    text: {
        color: 'white',
        fontFamily: 'RobotoMono-Regular',
        fontSize: 16,
    
    },
    
});

export default User;
