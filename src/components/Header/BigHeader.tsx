import React from "react";
import { View, Image, StyleSheet } from "react-native";

const BigHeader = () => {
    return (
        <View style={styles.logoContainer}>
            <Image
            source={require('../../images/logoEvent.png')}
            style={styles.logo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        //marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 260,
        height: 260, // Ajusta las dimensiones según el logo que uses
        marginTop: 30,
    },
})

export default BigHeader