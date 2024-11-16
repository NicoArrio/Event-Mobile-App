import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Headers from '../../components/Header/Header';

const Statistics = () => {
    return(
        <ScrollView style={styles.container}>
            <Headers />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#141414',
    },

})

export default Statistics