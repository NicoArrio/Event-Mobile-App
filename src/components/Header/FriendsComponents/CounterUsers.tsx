import React from "react";
import { StyleSheet, View,Text} from "react-native";

const CounterUser = () => {
    return (
        <View>
            <View style={styles.listContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.listLegend}>Lista de invitados</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.counterNum}>15</Text>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // lista invitados
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
})

export default CounterUser