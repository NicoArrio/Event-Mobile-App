import React, { useState } from 'react';
import { 
    ScrollView, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Alert, 
    StyleSheet, 
    KeyboardAvoidingView, 
    Platform,
    Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { API_BASE_URL } from '@env';
import BigHeader from '../../../components/Header/BigHeader';


function UserData () {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [sign, setSign] = useState('');
    const [description, setDescription] = useState('');
    const [studies, setStudies] = useState('');
    const [job, setJob] = useState('');
    const [imageUri, setImageUri] = useState();

    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [signError, setSignError] = useState('');
    const [studiesError, setStudiesError] = useState('');
    const [jobError, setJobError] = useState('');
    const [imageError, setImageError] = useState();

    const handleSave = async () => {
        if (validateFields()) {
            const token = await AsyncStorage.getItem('token');
            const userData = {
                name,
                lastName,
                age: parseInt(age),
                sign,
                description,
                studies,
                job,
                imageUri
            };
            axios.post(`${API_BASE_URL}/updateUserData`, { token, userData })
                .then((response) => {
                    if (response.data.status === 'ok') {
                        Alert.alert("Saved Successfully!");
                        navigation.navigate('PlusInformation');
                    } else {
                        Alert.alert("Error", "Failed to save data.");
                    }
                })
                .catch((error) => {
                    console.error("Save Data Error:", error);
                    Alert.alert("Error", "Failed to connect to the server.");
                });
        } else {
            Alert.alert("Incorrect Data...");
        }
    };

    const handleChoosePhoto = () => {
        const options = { mediaType: 'photo' };
        launchImageLibrary(options, response => {
            if (response.assets && response.assets[0].uri) { 
                setImageUri(response.assets[0].uri);
            }
        });
    };

    const validateFields = () => {
        let valid = true;
        const ageNumber = parseInt(age);

        // Validación del nombre
        if (!name || !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/.test(name.trim()) || name.trim().length > 15) {
            setNameError('Only letters, max 15 characters');
            valid = false;
        } else {
            setNameError('');
        }
    
        // Validación del apellido
        if (!lastName || !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/.test(lastName.trim()) || lastName.trim().length > 15) {
            setLastNameError('Only letters and max 15 characters');
            valid = false;
        } else {
            setLastNameError('');
        }
    
        // Validación de la edad
        if (!age || isNaN(ageNumber) || ageNumber >= 120) {
            setAgeError('Age must be less than 120');
            valid = false;
        } else {
            setAgeError('');
        }
    
        // Validación de la descripción
        if (!description || description.length > 110) {
            setDescriptionError('Max 110 characters');
            valid = false;
        } else {
            setDescriptionError('');
        }
    
        // Validación del signo
        if (!sign || !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/.test(sign.trim()) || sign.trim().length > 11) {
            setSignError('Only letters and Max 11 characters');
            valid = false;
        } else {
            setSignError('');
        }
    
        // Validación de estudios
        if (studies && studies.length >= 50) {
            setStudiesError('Max 50 characters');
            valid = false;
        } else {
            setStudiesError('');
        }
    
        // Validación de trabajo
        if (job && job.length >= 50) {
            setJobError('Max 50 characters');
            valid = false;
        } else {
            setJobError('');
        }
    
        // Validación de la imagen
        if (!imageUri) {
            setImageError('Image required');
            valid = false;
        } else {
            setImageError('');
        }
    
        return valid;
    };

    

    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <BigHeader />
                <Text style={styles.header}>About you...</Text>

                {/* I N P U T S   O B L I G A T O R I O S */}

                {/* N A M E */}
                <TextInput
                    style={[styles.input, { borderColor: nameError ? '#ff0000' : '#C21807' }]}
                    onChangeText={(text) => {
                        setName(text);
                        setNameError('');
                    }}
                    value={name}
                    placeholder="Name: Marcos..."
                    placeholderTextColor="#7B7B7B" 
                />
                <Text style={styles.errorText}>{nameError}</Text>

                {/* L A S T   N A M E */}
                <TextInput
                    style={[styles.input, { borderColor: lastNameError ? '#ff0000' : '#C21807' }]}
                    onChangeText={(text) => {
                        setLastName(text);
                        setLastNameError('');
                    }}
                    value={lastName}
                    placeholder="Last name: De Lellis..."
                    placeholderTextColor="#7B7B7B" 
                />
                <Text style={styles.errorText}>{lastNameError}</Text>

                {/* A G E */}
                <TextInput
                    style={[styles.input, { borderColor: ageError? '#ff0000' : '#C21807' }]}
                    onChangeText={(text) => {
                        setAge(text);
                        setAgeError('');
                    }}
                    value={age}
                    placeholder="Age: 21"
                    placeholderTextColor="#7B7B7B" 
                    keyboardType="numeric"
                />
                <Text style={styles.errorText}>{ageError}</Text>

                {/* S I G N O */}
                <TextInput
                    style={[styles.input, { borderColor: signError? '#ff0000' : '#C21807' }]}
                    onChangeText={(text) => {
                        setSign(text);
                        setSignError('');
                    }}
                    value={sign}
                    placeholder="Signo: Tauro"
                    placeholderTextColor="#7B7B7B" 
                />
                <Text style={styles.errorText}>{signError}</Text>

                {/* D E S C R I P T I O N */}
                <TextInput
                    style={[styles.descriptionInput, { borderColor: descriptionError? '#ff0000' : '#C21807' }]}
                    onChangeText={(text) => {
                        setDescription(text);
                        setDescriptionError('');
                    }}
                    value={description}
                    placeholder="Description: amante del café y de ver a Messi... [Max:110]"
                    placeholderTextColor="#7B7B7B" 
                    multiline
                    maxLength={110}
                />
                <Text style={styles.errorText}>{descriptionError}</Text>

                {/* C A R G A R    I M A G E N    L O C A L */}
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={[styles.imagePreview, { borderColor: imageError? '#ff0000' : '#C21807' }]} />
                ) : null}
                <TouchableOpacity style={styles.uploadButton} onPress={handleChoosePhoto}>
                    <Text style={styles.uploadButtonText}>Upload Photo</Text>
                </TouchableOpacity>
                <Text style={styles.reminderText}>( Remember that your photo represents you! )</Text>
                <Text style={styles.errorText}>{imageError}</Text>

                {/* I N P U T S   O P T I O N A L E S */}
                <Text style={styles.optionalHeader}>Optional</Text>

                {/* S T U D I E S */}
                <TextInput
                    style={[styles.input, { borderColor: studiesError? '#ff0000' : '#C21807' }]}
                    onChangeText={(text) => {
                        setStudies(text);
                        setStudiesError('');
                    }}
                    value={studies}
                    placeholder="Studies: Actuario, Psicologia..."
                    placeholderTextColor="#7B7B7B" 
                />
                <Text style={styles.errorText}>{studiesError}</Text>

                {/* J O B */}
                <TextInput
                    style={[styles.input, { borderColor: jobError? '#ff0000' : '#C21807' }]}
                    onChangeText={(text) => {
                        setJob(text);
                        setJobError('');
                    }}
                    value={job}
                    placeholder="Job: Cajero, Recepcionista..."
                    placeholderTextColor="#7B7B7B" 
                />
                <Text style={styles.errorText}>{jobError}</Text>
                
                {/* B U T T O N    S A V E D */}
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
    },
    scrollViewContainer: {
        alignItems: 'center',
        padding: 20,
    },
    header: {
        alignSelf: 'flex-start',
        color: '#fff',
        fontSize: 24,
        fontFamily: "RobotoMono-Medium",
        marginBottom: 10,
        marginLeft: '5%',
        
    },
    input: {
        width: '90%',
        height: 40,
        backgroundColor: '#2c2c2c',
        borderRadius: 10,
        paddingHorizontal: 10,
        color: '#fff',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#C21807',
    },
    descriptionInput: {
        width: '90%',
        height: 80,
        backgroundColor: '#2c2c2c',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingTop: 10,
        color: '#fff',
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: '#C21807',
        //marginTop: -20,
        marginBottom: 20,
    },
    imagePreview: {
        width: 100,
        height: 100,
        marginTop: -10,
        borderRadius: 10,
    },
    uploadButton: {
        width: '50%',
        backgroundColor: '#5C0B03',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop:20,
        marginBottom: 5,
    },
    uploadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: "RobotoMono-Medium",
    },
    reminderText: {
        color: '#7B7B7B',
        fontSize: 12,
        marginBottom: 20,
    },
    optionalHeader: {
        color: '#fff',
        fontSize: 20,
        fontFamily: "RobotoMono-Medium",
        alignSelf: 'flex-start',
        marginLeft: '5%',
        marginBottom: 10,
        marginTop: 12,
    },
    saveButton: {
        width: '90%',
        height: 50,
        backgroundColor: '#5C0B03',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: "RobotoMono-Medium",
    },
    errorText: {
        color: '#ff0000',
        alignSelf: 'flex-start',
        marginLeft: '5%',
        marginTop: -20,
        marginBottom: 15,
    },
});

export default UserData;
