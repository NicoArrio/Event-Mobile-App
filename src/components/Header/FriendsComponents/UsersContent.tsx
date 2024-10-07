import React, { FC } from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import FlipCard from 'react-native-flip-card';

import { Guest } from "../../../types";

const UsersContent: FC<Guest> = ({name,age,description, signo, imageUri}) => {
    return(
        <View style={styles.UserContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <FlipCard
                flipHorizontal={false}
                flipVertical={true}
                friction={6}
                perspective={1000}
            >
                {/* Cara frontal del FlipCard */}
                <View style={styles.cardContainer}>
                    {imageUri ? (
                        <Image source={{ uri: imageUri }} style={styles.image} />
                    ) : (
                        // Mostrar una imagen predeterminada o mantener el área vacía
                        <View style={styles.placeholderImage}></View>
                    )}
                    {/* <Image
                        source={require('../../../images/gaston.jpeg')}
                        style={styles.image}
                    /> */}
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{name}, {age}</Text> 
                    </View>
                </View>

                {/* Cara trasera del FlipCard */}
                <View style={[styles.cardContainer, styles.cardBack]}>
                    <Text style={styles.descriptionText}>
                        {description}-{signo}
                    </Text>
                </View>
            </FlipCard>
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    UserContainer:{
        marginTop: 20, // Espacio superior para separar de la descripción
        
    },
    //user
    cardContainer: {
        width: 186, // Ancho de la tarjeta
        height: 205, // Altura de la tarjeta
        borderRadius: 30, // Bordes redondeados
        overflow: 'hidden', // Oculta lo que se salga del borde redondeado
        borderColor: '#141414', // Color del borde
        borderWidth: 3, // Grosor del borde
        backgroundColor: '#ADD8E6', // Color de fondo por si la imagen no carga
        alignItems: 'center', // Centra horizontalmente el texto
        justifyContent: 'flex-end', // Alinea el texto al fondo
    },
    image: {
        width: '100%', // Asegura que la imagen cubra el ancho completo
        height: '105%', // Asegura que la imagen cubra el alto completo
        position: 'absolute', // Posicionamiento absoluto para que el texto pueda colocarse encima
    },
    textContainer: {
        backgroundColor: '#141414', // Fondo semitransparente para el texto
        width: '100%', // Ancho completo para centrar el texto fácilmente
        borderRadius: 30, // Bordes redondeados
        paddingVertical: 15, // Padding vertical para el texto
    },
    text: {
        color: 'white', // Color del texto
        fontSize: 16, // Tamaño del texto
        fontFamily: 'RobotoMono-Medium',
        textAlign: 'center', // Alineación del texto
    },
    cardBack: {
        backgroundColor: '#f8f8f8', // Cambia el color de fondo para la cara trasera
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionText: {
        color: '#333',
        fontSize: 14,
        fontFamily: 'RobotoMono-Regular',
        textAlign: 'center',
        padding: 10,
    },
    placeholderImage: {
        width: '100%', // Ancho completo de la tarjeta
        height: '100%', // Altura completa de la tarjeta
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
        backgroundColor: '#ADD8E6', // Color de fondo para el placeholder
    }
})

export default UsersContent