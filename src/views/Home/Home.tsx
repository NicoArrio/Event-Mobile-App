import React from "react";
import { View, StyleSheet, Text } from 'react-native';

import News from "../News";
const Home = () => {
    return (
        <View>
            <News/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        fontSize: 20,
    }
})
export default Home;