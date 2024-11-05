import React from "react";
import { View,Text, StyleSheet } from "react-native";

const InfoEvent = () => {
    return (
        <View>
            <View style={styles.TitleTextContainer}>
                <Text style={styles.TitleText}>Cumple Nico </Text>
            </View>
            <View>
                <Text style={styles.Text}>
                <Text>
                    Me complace invitarlos a celebrar como me hago cada vez más viejo! 
                    Todos los años siempre me peleaba con el excel para administrar y 
                    organizar este evento, por eso este año decidí crear una </Text>
                <Text style={styles.highlighted}>app que se encargará de todo.</Text>
                {"\n\n"}
                <Text>
                    Para que todos podamos disfrutar al máximo, nuestro anfitrión se 
                    encargará de adquirir todas las bebidas necesarias para la ocasión, 
                    así que ustedes solo tendrán que </Text>
                    <Text style={styles.highlighted}>contribuir con el monto especificado 
                    </Text>
                    <Text> previamente para cubrir los gastos.</Text>
                {"\n\n"}
                <Text>
                    Confirmen su asistencia lo antes posible para que podamos organizar 
                    todo de la mejor manera.</Text>
                <Text style={styles.highlighted}>El sábado 21 de diciembre </Text>
                <Text>se realizara el evento. </Text>
                {/* <Text style={styles.highlighted}>Seguí 1414.</Text> */}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TitleTextContainer:{
        alignItems: 'flex-start',
        marginTop: 20, // Espacio superior para separar de la descripción
    },
    TitleText:{
        fontSize: 28, 
        fontFamily: 'RobotoMono-Regular',
        color: '#fff',
        marginBottom: 8, // Espacio debajo del título
    },
    Text:{
        fontSize: 16, 
        fontFamily: 'RobotoMono-Regular',
        color: '#fff',
        lineHeight: 24, // Mejorar legibilidad
    },
    highlighted: {
      fontFamily: 'RobotoMono-Regular',
      color: '#ff0000', // Rojo para destacar
      textShadowColor: 'rgba(255, 0, 0, 0.5)', // Sombra roja
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 1,
    }
})

export default InfoEvent;