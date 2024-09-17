import React from "react";
import { View,Text,StyleSheet,Image} from "react-native";

const News = () => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.subtitle}>eVent</Text>
            </View>
            <View>
                <Image source={require('../../images/CalendarioFecha.png')} style={styles.ImageContainer}/>
            </View>
            <View>
                <Text></Text>
            </View>
            <View>
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    subtitle: {
        padding:12,
        fontSize:20,
        color: 'rgba(193, 33, 47, 355)'
    },
    ImageContainer:{
        width: 320,
        height: 320,
    }
})

export default News