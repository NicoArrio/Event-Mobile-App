import React from "react";
import { StyleSheet, Text, View, ScrollView, Image} from "react-native";

import Headers from '../../components/Header/Header'

const Friends = () => {
    return(
        <ScrollView> 
            <View style={styles.container}>
                <View>
                    <Headers/>
                </View>

                <View style={styles.searchContainer}>
                    <Text style={styles.searchInput}>buscar...</Text>
                    <Image 
                        source={require('../../images/dj.png')} 
                        style={styles.ImageCalendar}
                        />
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22,
    },
    searchContainer:{
        
    },
    searchInput:{
        fontSize: 16, 
        fontFamily: 'RobotoMono-Regular',
        color: '#fff',
        lineHeight: 24, // Mejorar legibilidad
    },
    ImageCalendar:{
        width: 30,
        height: 30,
    },
})

export default Friends