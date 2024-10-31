import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style= {styles.container}>
            <View style = {styles.rightContainer}>
                <Image 
                    source={require('../../images/logoEvent.png')}
                    style={styles.ImageContainer}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    rightContainer:{
        flex:1,
        flexDirection: 'row',
        alignItems:'flex-start',
        marginLeft: -10,
    },
    ImageContainer:{
        width: 80,
        height: 80,
    },
})

export default Header