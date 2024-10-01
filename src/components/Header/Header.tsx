import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style = {styles.rightContainer}>
            <Image 
                source={require('../../images/logoEvent.png')}
                style={styles.ImageContainer}/>
        </View>
    )
}

const styles = StyleSheet.create({
    rightContainer:{
        flex:1,
        alignItems:'flex-start',
        marginLeft: -10,
    },
    ImageContainer:{
        width: 80,
        height: 80,
    },
})

export default Header