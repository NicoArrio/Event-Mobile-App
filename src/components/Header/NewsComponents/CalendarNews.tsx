import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const CalendarNews = () => {
    return(
        <View>
            <View style={styles.newsTextContainer}>
                <Text style={styles.newsText}>Novedades</Text>
            </View>

            <ScrollView 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                    style={styles.bubbleContainer}
                    >
                    <View style={styles.BubbleContainerImage}>
                        <View style={styles.bubble}>
                            <Image 
                            source={require('../../images/tequila.jpeg')} 
                            style={styles.bubbleImage}/>
                            <Text style={styles.bubbleText}>Tequila</Text>
                        </View>
                    </View>
                    
                    <View style={styles.BubbleContainerImage}>
                        <View style={styles.bubble}>
                            <Image 
                            source={require('../../images/dj.png')} 
                            style={styles.bubbleImage}/>
                            <Text style={styles.bubbleText}>Habra DJ!!</Text>
                        </View>
                    </View>

                    <View style={styles.BubbleContainerImage}>
                        <View style={styles.bubble}>
                            <Image 
                            source={require('../../images/pizarron.jpg')} 
                            style={styles.bubbleImage}/>
                            <Text style={styles.bubbleText}>Pizarron para firmas</Text>
                        </View>
                    </View>
                    
                    <View style={styles.BubbleContainerImage}>
                        <View style={styles.bubble}>
                            <Image 
                            source={require('../../images/pizzaCortada.jpg')} 
                            style={styles.bubbleImage}/>
                            <Text style={styles.bubbleText}>Pizza para el bajon</Text>
                        </View>
                    </View>
                    
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    newsTextContainer:{
        marginTop: 20, // Espacio superior para separar de la descripción
        alignItems: 'flex-end',
    },
    newsText:{
        fontSize: 32, // Tamaño de fuente grande para destacar
        color: '#fff', // Color blanco
        fontFamily: 'RobotoMono-Medium',
        textShadowColor: '#9E9E9E', // Efecto de sombra
        textShadowOffset: { width: -3, height: 3 }, // Desplazamiento de la sombra
        textShadowRadius: 2, // Difusión de la sombra
    },
    bubbleContainer: {
        marginTop: 20, //espacio entre novedades y las burbujas
        flexDirection: 'row',
    },
    BubbleContainerImage:{
        width: 120, // distancia entre las burbujas
        height: 200, //espacio entre burbujas y calendar
    },
    bubble: {
        width: 90, // Ajusta el tamaño del círculo
        height: 90,
        borderRadius: 50, // Hace la imagen circular
        backgroundColor: '#fff', // Fondo blanco para que se vea como un círculo
        //justifyContent: 'center',
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
        color: '#ffff',
        textAlign: 'center',
    },
})
export default CalendarNews 