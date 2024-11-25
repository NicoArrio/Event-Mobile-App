import React, { useState, useEffect } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Image, 
    ScrollView,
    Alert, 
    TouchableOpacity, 
    KeyboardAvoidingView 
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from "react-native-image-picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from '@react-navigation/native';

import { useUser } from '../../context/UserContext';
import { API_BASE_URL } from "@env"; // Asegúrate de configurar esto correctamente

const EditProfile = () => {
    const { userData: globalUserData, setUserData: setGlobalUserData } = useUser(); // Usa el contexto
    const [userData, setUserData] = useState({
        name: globalUserData?.name || "",
        lastName: globalUserData?.lastName || "",
        age: globalUserData?.age?.toString() || "", // Asegúrate de manejar números
        sign: globalUserData?.sign || "",
        studies: globalUserData?.studies || "",
        job: globalUserData?.job || "",
        description: globalUserData?.description || "",
        imageUri: globalUserData?.imageUri || "",
        option: globalUserData?.option || "",
        alternativeOption: globalUserData?.alternativeOption || "",
        favoriteGenre: globalUserData?.favoriteGenre || "",
        specialWish: globalUserData?.specialWish || "",
    });
    const [errors, setErrors] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        // Si no hay datos en el estado global, fetch del backend
        if (!globalUserData) {
            const fetchUserData = async () => {
                const token = await AsyncStorage.getItem("token");
                if (!token) {
                    console.log("No token found");
                    return;
                }
                try {
                    const response = await axios.post(`${API_BASE_URL}/userdata`, { token });
                    if (response.data && response.data.data) {
                        setUserData(response.data.data);
                        setGlobalUserData(response.data.data); // Actualiza el estado global
                    }
                } catch (error) {
                    console.error("Failed to fetch user data:", error);
                }
            };

            fetchUserData();
        }
    }, []);

    const handleSave = async () => {
        if (validateFields()) {
            try {
                const token = await AsyncStorage.getItem("token");
                if (!token) {
                    Alert.alert("Error", "No se encontró un token. Inicia sesión nuevamente.");
                    return;
                }

                const response = await axios.post(`${API_BASE_URL}/updateUserData`, {
                    token,
                    userData,
                });

                if (response.data.status === "ok") {
                    Alert.alert("Cambios Guardados!");
                    setGlobalUserData(userData); // Actualiza el estado global
                    navigation.navigate("User");
                } else {
                    Alert.alert("Error", "Datos incorrectos. Revisa los campos.");
                }
            } catch (error) {
                console.error("Save Data Error:", error);
                Alert.alert("Error", "No se pudo conectar al servidor. Intenta de nuevo.");
            }
        } else {
            Alert.alert("Datos incorrectos", "Corrige los errores antes de guardar.");
        }
    };
    

    const handleChoosePhoto = () => {
        const options = { mediaType: 'photo' };
        launchImageLibrary(options, response => {
            if (response.assets && response.assets[0].uri) { 
                setUserData({ ...userData, imageUri: response.assets[0].uri });
            }
        });
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    const validateFields = () => {
        let valid = true;
        const newErrors = {};

        // Validación del nombre
        if (!userData.name || !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/.test(userData.name.trim()) || userData.name.trim().length > 15) {
            newErrors.name = "Only letters, max 15 characters";
            valid = false;
        }

        // Validación del apellido
        if (!userData.lastName || !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/.test(userData.lastName.trim()) || userData.lastName.trim().length > 15) {
            newErrors.lastName = "Only letters, max 15 characters";
            valid = false;
        }

        // Validación de la edad
        if (!userData.age || isNaN(parseInt(userData.age)) || parseInt(userData.age) > 120) {
            newErrors.age = "Age must be a number less than 120";
            valid = false;
        }

        // Validación del signo
        if (!userData.sign || userData.sign.trim().length > 11) {
            newErrors.sign = "Max 11 characters";
            valid = false;
        }

        // Validación de la descripción
        if (!userData.description || userData.description.length > 110) {
            newErrors.description = "Max 110 characters";
            valid = false;
        }

        // Validación de estudios
        if (userData.studies && userData.studies.length > 50) {
            newErrors.studies = "Max 50 characters";
            valid = false;
        }

        // Validación de trabajo
        if (userData.job && userData.job.length > 50) {
            newErrors.job = "Max 50 characters";
            valid = false;
        }

        // Validación del deseo especial
        if (userData.specialWish && userData.specialWish.length > 150) {
            newErrors.specialWish = "Max 150 characters";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView style={styles.container}>
                <View style={styles.userInformationSection}>
                    
                    {/* U S E R    I N F O R M A T I O N */}
                    <Text style={styles.header}>Información Personal</Text>

                    {/* N A M E */}
                    <Text style={styles.title}>Nombre</Text>
                    <TextInput
                        style={styles.inputNameAge}
                        value={userData.name}
                        onChangeText={(text) => setUserData({ ...userData, name: text })}
                    />
                    {!!errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

                    {/* L A S T   N A M E */}
                    <Text style={styles.title}>Apellido</Text>
                    <TextInput
                        style={styles.inputNameAge}
                        value={userData.lastName}
                        onChangeText={(text) => setUserData({ ...userData, lastName: text })}
                    />
                    {!!errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

                    {/* A G E */}
                    <Text style={styles.title}>Edad</Text>
                    <TextInput
                        style={styles.inputNameAge}
                        value={userData.age?.toString() || ""}  
                        onChangeText={(text) => setUserData({ ...userData, age: parseInt(text) || "" })}
                        keyboardType="numeric" 
                    />
                    {!!errors.age && <Text style={styles.errorText}>{errors.age}</Text>}

                    {/* S I G N */}
                    <Text style={styles.title}>Signo</Text>
                    <TextInput
                        style={styles.inputNameAge}
                        value={userData.sign}
                        onChangeText={(text) => setUserData({ ...userData, sign: text })}
                    />
                    {!!errors.sign && <Text style={styles.errorText}>{errors.sign}</Text>}

                    {/* D E S C R I P T I O N */}
                    <Text style={styles.title}>Descripción</Text>
                    <TextInput
                        style={styles.inputDescription}
                        value={userData.description}
                        onChangeText={(text) => setUserData({ ...userData, description: text })}
                        multiline
                    />
                    {!!errors.description && <Text style={styles.errorText}>{errors.description}</Text>}

                    {/* I M A G E */}
                    <View style={styles.profilePicSection}>
                        {userData.imageUri ? (
                            <Image source={{ uri: userData.imageUri }} style={styles.profilePic} />
                        ) : (
                            <View style={styles.placeholderImage}></View>
                        )}
                    </View>
                    <TouchableOpacity style={styles.changePhotoButton} onPress={handleChoosePhoto}>
                        <Text style={styles.changePhotoText}>Cambiar Foto</Text>
                    </TouchableOpacity>

                    {/* S T U D I E S */}
                    <Text style={styles.title}>Estudios</Text>
                    <TextInput
                        style={styles.inputStudies}
                        value={userData.studies}
                        onChangeText={(text) => setUserData({ ...userData, studies: text })}
                    />
                    {!!errors.studies && <Text style={styles.errorText}>{errors.studies}</Text>}

                    {/* J O B */}
                    <Text style={styles.title}>Trabajo</Text>
                    <TextInput
                        style={styles.inputStudies}
                        value={userData.job}
                        onChangeText={(text) => setUserData({ ...userData, job: text })}
                    />
                    {!!errors.job && <Text style={styles.errorText}>{errors.job}</Text>}
                </View>

                {/* P L U S   I N F O R M A T I O N */}
                <View style={styles.plusInformationSection}>
                    <Text style={styles.header}>Tus elecciones</Text>

                    {/* L A S   3   P R I N C I P A L E S   B E B I D A S*/}
                    <View style={styles.dropdownContainer}>
                        <Text style={styles.label}>Tu primera eleccion es:</Text>
                        <Picker
                            selectedValue={userData.option} // Usar el valor almacenado en el estado
                            style={styles.picker}
                            onValueChange={(itemValue) => setUserData({ ...userData, option: itemValue })}
                        >
                            <Picker.Item label="Seleccione una opción" value="" />
                            <Picker.Item label="Ferne" value="ferne" />
                            <Picker.Item label="Vodka" value="vodka" />
                            <Picker.Item label="Cerveza" value="cerveza" />
                            <Picker.Item label="No tomo Alcohol" value="No tomo" />
                        </Picker>
                    </View>

                    {/* B E B I D A S   O P C I O N A L E S */}
                    <View style={styles.dropdownContainer}>
                        <Text style={styles.label}>Tu segunda eleccion es:</Text>
                        <Picker
                            selectedValue={userData.alternativeOption} // Usar el valor almacenado en el estado
                            style={styles.picker}
                            onValueChange={(itemValue) => setUserData({ ...userData, alternativeOption: itemValue })}
                        >
                            <Picker.Item label="Seleccione una opción" value="" />
                            <Picker.Item label="Mojito" value="mojito" />
                            <Picker.Item label="Daiquiri" value="Daiquiri" />
                            <Picker.Item label="Caipirinha" value="Caipirinha" />
                            <Picker.Item label="Cuba Libre" value="cubalibre" />
                            <Picker.Item label="Tequila" value="tequila" />
                            <Picker.Item label="Gin Tonic" value="gintonic" />
                            <Picker.Item label="Ron" value="ron" />
                            <Picker.Item label="Vino + Manaos" value="vinomanaos" />
                            <Picker.Item label="No tomo Alcohol" value="No tomo" />
                        </Picker>
                    </View>

                    {/* G E N E R O   D E   M U S I C A*/}
                    <View style={styles.dropdownContainer}>
                        <Text style={styles.label}>Tu género favorito es:</Text>
                        <Picker
                            selectedValue={userData.favoriteGenre} // Usar el valor almacenado en el estado
                            style={styles.picker}
                            onValueChange={(itemValue) => setUserData({ ...userData, favoriteGenre: itemValue })}
                        >
                            <Picker.Item label="Seleccione una opción" value="" />
                            <Picker.Item label="Reggaeton" value="reggaeton" />
                            <Picker.Item label="Techno" value="techno" />
                            <Picker.Item label="Trap" value="trap" />
                            <Picker.Item label="Cumbia" value="cumbia" />
                            <Picker.Item label="Bachata" value="bachata" />
                            <Picker.Item label="Rock" value="rock" />
                            <Picker.Item label="Pop" value="pop" />
                            <Picker.Item label="80' & 90'" value="90s" />
                        </Picker>
                    </View>

                    {/* D E S E O */}
                    <Text style={styles.label}>Tu deseo fue:</Text>
                    <TextInput
                        style={styles.inputDescription}
                        value={userData.specialWish}
                        onChangeText={(text) => setUserData({ ...userData, specialWish: text })}
                        multiline
                    />
                    {!!errors.specialWish && <Text style={styles.errorText}>{errors.specialWish}</Text>}

                    {/* B U T T O N S */}
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveButtonText}>Save Changes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                        <Text style={styles.saveButtonText}>Cancel</Text>
                    </TouchableOpacity>   
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#141414',
    },
    header: {
        color: "red",
        fontSize: 20,
        fontFamily: "RobotoMono-Medium",
        marginBottom: 20,
    },
    //user information
    userInformationSection: {
        marginBottom: 20,
    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "RobotoMono-Medium",
        marginBottom: 8,
    },
    inputNameAge: {
        backgroundColor: "#333333",
        borderRadius: 30,
        padding: 10,
        marginBottom: 20,
        color: "#fff",
    },
    inputStudies: {
        width: "100%",
        height: 70,
        backgroundColor: "#333333",
        borderRadius: 30,
        padding: 10,
        color: "#fff",
        textAlignVertical: "top",
        marginBottom: 20,
    },
    inputDescription: {
        width: "100%",
        height: 90,
        backgroundColor: "#333333",
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingTop: 10,
        textAlignVertical: "top",
        color: "#fff",
        marginBottom: 20,
    },
    profilePicSection: {
        alignItems: "center",
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
        backgroundColor: "#e1e4e8",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
    },
    changePhotoButton: {
        backgroundColor: '#5C0B03',
        borderRadius: 30,
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    changePhotoText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "RobotoMono-Medium",
    },
    //plus information
    plusInformationSection:{
        marginBottom: 20,
    },
    dropdownContainer: {
        marginVertical: 15,
    },
    label: {
        color: '#fff',
        fontFamily: 'RobotoMono-Regular',
        fontSize: 16,
        marginBottom: 5,
    },
    picker: {
        height: 50,
        color: '#fff',
        backgroundColor: '#2c2c2c',
    },
    input: {
        width: '100%',
        height: 80,
        backgroundColor: '#2c2c2c',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingTop: 10,
        color: '#fff',
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: '#C21807',
        marginTop: 10,
        marginBottom: 20,
    },
    //buttons
    saveButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#1B5E20',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    cancelButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#D32F2F',
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
    //error
    errorText: {
        color: "#ff0000",
        fontSize: 12,
        marginBottom: 15,
    },
});

export default EditProfile;