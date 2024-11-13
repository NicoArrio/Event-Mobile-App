import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { API_BASE_URL } from '@env';
import BigHeader from '../../../components/Header/BigHeader';


function PlusInformation() {
  const navigation = useNavigation();

  const [option, setOption] = useState('');
  const [alternativeOption, setAlternativeOption] = useState('');
  const [favoriteGenre, setFavoriteGenre] = useState('');
  const [specialWish, setSpecialWish] = useState('');

  const [optionError, setOptionError] = useState('');
  const [alternativeOptionError, setAlternativeOptionError] = useState('');
  const [favoriteGenreError, setFavoriteGenreError] = useState('');
  const [specialWishError, setSpecialWishError] = useState('');
  
  const handleSave = async () => {
    if (validateFields()) {
      const token = await AsyncStorage.getItem('token');
      const plusInformation = {  // Cambiar a `plusInformation` para que coincida con el backend
        option,
        alternativeOption,
        favoriteGenre,
        specialWish
      };
      axios.post('http://192.168.0.40:3000/updatePlusInformation', { token, plusInformation })
        .then((response) => {
          if (response.data.status === 'ok') {
            Alert.alert("Saved Successfully!");
            navigation.navigate('HomeNews');  // `HomeNews` es correcto si es tu pantalla principal de navegación
          } else {
            Alert.alert("Error", "Failed to save data.");
          }
        })
        .catch((error) => {
          console.error("Save Data Error:", error);
          Alert.alert("Error", "Failed to connect to the server.");
        });
      Alert.alert("Saved Successfully");
    } else {
      Alert.alert("Incomplete Data...");
    }
  };

  const validateFields = () => {
    let valid = true;
  
    // Validación de la option
    if (!option) {
      setOptionError('You must select an option');
      valid = false;
    } else {
      setOptionError('');
    }
  
    // Validación de la alternativeOption
    if (!alternativeOption) {
      setAlternativeOptionError('You must select an option');
      valid = false;
    } else {
      setAlternativeOptionError('');
    }
  
    // Validación de la favoriteGenre
    if (!favoriteGenre) {
      setFavoriteGenreError('You must select an option');
      valid = false;
    } else {
      setFavoriteGenreError('');
    }
  
    // Validación de la specialWish
    if (!specialWish || specialWish.length > 150) {
      setSpecialWishError('complete field & Max 150 characters');
      valid = false;
    } else {
      setSpecialWishError('');
    }
  
    return valid;
  };

  return (
    <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === "ios" ? "padding" : "height"
        }>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <BigHeader />
            <Text style={styles.title}>Preferences</Text>

            {/* L A S   3   P R I N C I P A L E S   B E B I D A S*/}
            <View style={styles.dropdownContainer}>
                <Text style={styles.label}>Elija una...</Text>
                <Picker
                  selectedValue={option}
                  style={styles.picker}
                  onValueChange={(itemValue) => {
                    setOption(itemValue);
                    setOptionError('');
                  }}>
                  <Picker.Item label="Seleccione una opción" value=""/>                    
                  <Picker.Item label="Ferne" value="ferne" />
                  <Picker.Item label="Vodka" value="vodka" />
                  <Picker.Item label="Cerveza" value="cerveza" />
                  <Picker.Item label="No tomo Alcohol" value="No tomo" />
                </Picker>
                {!!optionError && <Text style={styles.errorText}>{optionError}</Text>}
            </View>

            {/* B E B I D A S   O P C I O N A L E S */}
            <View style={styles.dropdownContainer}>
                <Text style={styles.label}>Que otra opción eligirías?</Text>
                <Picker
                selectedValue={alternativeOption}
                style={styles.picker}
                onValueChange={(itemValue) => {
                  setAlternativeOption(itemValue);
                  setAlternativeOptionError('');
                }}>
                <Picker.Item label="Seleccione una opción" value="" />                    
                <Picker.Item label="Mojito" value="mojito" />
                <Picker.Item label="Daiquiri" value="Daiquiri" />
                <Picker.Item label="Caipirinha" value="Caipirinha" />
                <Picker.Item label="Caipiroska" value="Caipiroska" />
                <Picker.Item label="Cuba Libre" value="cubalibre" />
                <Picker.Item label="Tequila" value="tequila" />
                <Picker.Item label="Gin Tonic" value="gintonic" />
                <Picker.Item label="Ron" value="ron" />
                <Picker.Item label="Vino + Manaos" value="vinomanaos" />
                <Picker.Item label="No tomo Alcohol" value="No tomo" />
                </Picker>
                {!!alternativeOptionError && <Text style={styles.errorText}>{alternativeOptionError}</Text>}
            </View>

            {/* G E N E R O   D E   M U S I C A*/}
            <View style={styles.dropdownContainer}>
                <Text style={styles.label}>Elige tu género favorito:</Text>
                <Picker
                selectedValue={favoriteGenre}
                style={styles.picker}
                onValueChange={(itemValue) => {
                  setFavoriteGenre(itemValue);
                  setFavoriteGenreError('');
                }}>
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
                {!!favoriteGenreError && <Text style={styles.errorText}>{favoriteGenreError}</Text>}
            </View>
            
            {/* D E S E O */}
            <Text style={styles.label}>Que siempre quisiste o deseaste que haya en una fiesta, pero nunca hubo...</Text>
            <TextInput
                style={[styles.input, { borderColor: specialWishError? '#ff0000' : '#C21807' }]}
                onChangeText={(text) => {
                  setSpecialWish(text);
                  setSpecialWishError('');
              }}
                value={specialWish}
                placeholder="Usa tu imaginación...[MAX:150]"
                placeholderTextColor="#7B7B7B"
                multiline={true}
                maxLength={150}
            />
            <Text style={styles.errorText}>{specialWishError}</Text>

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
    padding: 20,
    
  },
  scrollViewContainer:{
    padding: 20,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 24,
    fontFamily: 'RobotoMono-Medium',
    color: '#fff',
    marginBottom: 10,
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
  saveButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#5C0B03',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 15,
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

export default PlusInformation;
