import React, { useEffect } from "react";
import { View,Text,StyleSheet,Image,ScrollView} from "react-native";
import axios from "axios";

import {useNavigation} from '@react-navigation/native';

import CalendarioFechasRestantes from "../../components/Header/NewsComponents/Calendar";
import CalendarNews from "../../components/Header/NewsComponents/CalendarNews";
import InfoEvent from "../../components/Header/NewsComponents/InfoEvent";

import Header from "../../components/Header/Header";
//import { API_BASE_URL } from '@env';

function News() {
    const navigation = useNavigation();

    // async function getData(){
    //     const token = await AsyncStorage.getItem('token');
    //     console.log(token);
    //     axios
    //         .post(`${API_BASE_URL}/userdata`,{token:token})
    //         .then(res => console.log(res.data));
    // }
    // useEffect(() => {
    //     getData()
    // },[]);

    return(
        <ScrollView style={styles.container}> 

                {/* COMPONENTE HEADER  */}
                <Header/>

                {/* COMPONENTE NOVEDADES  */}
                <View>
                    <CalendarNews/>
                </View>

                {/* COMPONENTE IMAGEN  */}
                <View style={styles.ImageContainer}>
                    <Image 
                    source={require('../../images/calenFechaCalidad.png')} 
                    style={styles.ImageCalendar}/>
                </View>

                {/* COMPONENTE TEXTO  */}
                <View>
                    <InfoEvent/>
                </View>
                
                
                {/* COMPONENTE CALENDARIO  */}
                <View>
                    <CalendarioFechasRestantes/>
                </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        flex:1,
        backgroundColor: '#141414',
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

export default News;