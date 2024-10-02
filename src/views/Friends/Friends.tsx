import React from "react";
import { StyleSheet, Text, View, ScrollView, } from "react-native";
import { Button, Icon, Input } from "@rneui/themed";

import Headers from '../../components/Header/Header'

const Friends = () => {
    return(
        <ScrollView> 
            <View style={styles.container}>
                <View>
                    <Headers/>
                </View>
                <View style={styles.searchContainer}>
                    <View style={styles.inputContainer}>

                    </View>
                    <View>
                        <Text style={styles.searchBtContainer}>buscador</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    },
    searchContainer: {
        alignItems: "center",
        flexDirection: "row",
      },
      inputContainer: {
        flex: 1,
        marginLeft: -12,
      },
      searchBtContainer: {
        color: "#ffff",
        fontSize: 14,
      },
      content:{
        flex:1,
        marginTop: 16,
      },
})

export default Friends