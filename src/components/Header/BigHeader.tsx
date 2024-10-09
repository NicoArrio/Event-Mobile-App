import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

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
        marginBottom: 30,
    },
    logo: {
        width: 200,
        height: 200, // Ajusta las dimensiones según el logo que uses
    },
})

export default BigHeader