import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types'; 

import Headers from '../../components/Header/Header';

const EditProfile = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleSave = () => {
        console.log("Changes saved!");
        navigation.navigate("User"); 
    };

    const handleCancel = () => {
        navigation.goBack(); // Regresa a la pantalla anterior sin guardar
    };

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            />
            <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            />
            <Button title="Save Changes" onPress={handleSave} />
            <Button title="Cancel" onPress={handleCancel} color="red" />
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#141414',
    },
    input: {
        borderWidth: 1,
        borderColor: "#fff",
        color:'#fff',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default EditProfile;
