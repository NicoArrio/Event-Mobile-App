import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";

const Users = () => {
    return(
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false} 
                style={styles.UserContainer}
            >
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../../../images/gaston.jpeg')}
                        //source={{ uri: 'https://your-image-url.com/image.jpg' }} // Reemplaza con tu URL de imagen
                        style={styles.image}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Gaston, 24</Text>
                    </View>
                </View>
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
        backgroundColor: 'lightblue', // Color de fondo por si la imagen no carga
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
})

export default Users