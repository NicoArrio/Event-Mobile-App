import React from "react";
import { View,Text,StyleSheet,Image,ScrollView} from "react-native";

import CalendarioFechasRestantes from "../../components/Header/Calendar"
import CalendarNews from "../../components/Header/CalendarNews";
import Header from "../../components/Header/Header";


const News = () => {
    return(
        <ScrollView> 
            <View style={styles.container}>

                {/* COMPONENTE HEADER  */}
                <Header/>

                {/* COMPONENTE IMAGEN  */}
                <View style={styles.ImageContainer}>
                    <Image 
                    source={require('../../images/calenFechaCalidad.png')} 
                    style={styles.ImageCalendar}/>
                </View>

                {/* COMPONENTE TEXTO  */}
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
                    <Text>se realizara el evento, la dirección es </Text>
                    <Text style={styles.highlighted}>Seguí 1414.</Text>
                    </Text>
                </View>
                
                {/* COMPONENTE NOVEDADES  */}
                <View>
                    <CalendarNews/>
                </View>
                
                {/* COMPONENTE CALENDARIO  */}
                <View>
                    <CalendarioFechasRestantes/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        flex:1,
    },
    paragraph: {
        fontFamily: 'RobotoMono-Regular', // Asegúrate de usar el nombre exacto del archivo de fuente
        fontSize: 16, // Ajusta según la necesidad
    },
    ImageContainer:{
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

export default News