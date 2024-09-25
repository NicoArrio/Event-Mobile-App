import React from "react";
import { View,Text,StyleSheet,Image,ScrollView} from "react-native";

const News = () => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.subtitle}>eVent</Text>
            </View>
            <View style={styles.ImageContainer}>
                <Image source={require('../../images/calenFechaCalidad.png')} style={styles.ImageCalendar}/>
            </View>
            <View style={styles.TitleTextContainer}>
                <Text style={styles.TitleText}>Cumple Nico </Text>
            </View>
            <View>
                <Text style={styles.Text}>La joda sera el sabado 21 de diciembre en segui 1414. El anfitrion se encarga de comprar las bebidas. Ustedes solo tienen que pasar el monto especificado</Text>
            </View>
            <View style={styles.newsTextContainer}>
                <Text style={styles.newsText}>Novedades</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.bubbleContainer}>
                <View style={styles.BubbleContainerImage}>
                    <View style={styles.bubble}>
                        <Image source={require('../../images/tequila.jpeg')} style={styles.bubbleImage}/>
                        <Text style={styles.bubbleText}>Habra Tequila!!</Text>
                    </View>
                </View>
                <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>Habra Tequila!!</Text>
                </View>
                <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>Habra Tequila!!</Text>
                </View>
                <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>Habra Tequila!!</Text>
                </View>
                <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>Habra Tequila!!</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 22,
    },
    subtitle: {
        fontSize: 36, 
        color: '#C1212F', 
        fontWeight: 'bold',
        fontStyle: 'italic', // Estilo en cursiva
        textDecorationLine: 'underline', // Subrayado
        alignSelf: 'flex-start', // Alineado a la izquierda
        marginBottom: 16, // Espacio debajo del título
    },ImageContainer:{
        alignItems: 'center',
    },
    ImageCalendar:{
        width: 260,
        height: 240,
        //marginBottom: 16, // Agregar un margen debajo de la imagen
    },
    TitleTextContainer:{
        alignItems: 'flex-start',
    },
    TitleText:{
        fontSize: 28, 
        color: '#fff', 
        fontWeight: 'bold',
        marginBottom: 8, // Espacio debajo del título
    },
    TextContainer:{
        alignItems: 'flex-start',
    },
    Text:{
        fontSize: 16, 
        color: '#fff',
        lineHeight: 24, // Mejorar legibilidad
    },
    newsTextContainer:{
        marginTop: 20, // Espacio superior para separar de la descripción
        alignItems: 'flex-end',
    },
    newsText:{
        fontSize: 28, // Tamaño de fuente grande para destacar
        color: '#fff', // Color blanco
        fontWeight: 'bold', // Negrita
        textShadowColor: '#9E9E9E', // Efecto de sombra
        textShadowOffset: { width: -3, height: 3 }, // Desplazamiento de la sombra
        textShadowRadius: 2, // Difusión de la sombra
    },
    bubbleContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    BubbleContainerImage:{
        width: 120, // Ajusta el tamaño del círculo
        height: 200,
    },
    bubble: {
        width: 100, // Ajusta el tamaño del círculo
        height: 100,
        borderRadius: 50, // Hace la imagen circular
        backgroundColor: '#fff', // Fondo blanco para que se vea como un círculo
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16, // Espacio entre burbujas
    },
    bubbleImage: {
        width: 90, // Ajusta el tamaño de la imagen dentro de la burbuja
        height: 90,
        borderRadius: 50, // Hace la imagen circular
    },
    bubbleText: {
        marginTop: 8,
        fontSize: 12,
        color: '#C1212F',
        textAlign: 'center',
    },
})

export default News