import React from "react";
import { StyleSheet, Text, View, ScrollView, } from "react-native";
import { Button, Icon } from "@rneui/themed";

import Headers from '../../components/Header/Header'
import { Image } from "react-native-elements";

const Friends = () => {
    return(
        <ScrollView> 
            <View style={styles.container}>
                <Headers/>

                <View style={styles.listContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.listLegend}>Lista de invitados</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.counterNum}>15</Text>
                    </View>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.listLegend}>buscador...</Text>
                    </View>
                    <View>
                        <Text style={styles.listLegend}>Icono</Text>
                    </View>
                </View>

                {/* METODO LOCAL PARA AGREGAR USUARIOS */}

                <View style={styles.addFriendContainer}>
                    <View style={styles.leftAddContainer}>
                        <Text style={styles.listLegend}>Agregar Invitados</Text>
                    </View>
                    <View style={styles.rightAddContainer}>
                        <Button
                            
                        />
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
    listContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:15,
    },
    leftContainer:{
        flex:1,
        justifyContent:'center',

    },
    listLegend:{
        color:'#ffff',
        fontSize:16,
        fontFamily:'RobotoMono-Regular',
    },
    rightContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#ffff', // Fondo rojo para el círculo
        width: 30,
        height: 30, 
        borderRadius: 15,
    },
    counterNum:{
        color:'#C21807',
        fontFamily:'RobotoMono-Medium',
        fontSize:16,
    },
    addFriendContainer:{
        alignItems: "center",
        flexDirection: "row",
        marginVertical:15,
    },
    leftAddContainer:{
        flex:1,
    },
    rightAddContainer:{},
    
})

export default Friends