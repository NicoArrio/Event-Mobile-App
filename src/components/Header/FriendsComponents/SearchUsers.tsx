import React from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "@rneui/themed";

const SearchUser = () => {
    return (
        <View>
            <View style={styles.searchContainer}>
                    <View style={styles.InputContainer}>
                        <Input 
                            placeholder="buscar..."
                            leftIcon={{ type: 'add', name: 'search'}}
                        />
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    //buscador
    searchContainer:{
        flexDirection:'row',
        backgroundColor: '#141414',
        alignItems: 'center', // Alinea verticalmente los elementos internos
    },
    InputContainer:{
        flex:1,
        marginRight: -12, // Ajusta extendiendo la linea a la der
        marginLeft:-12, // Ajusta extendiendo la linea a la izq
    },
})

export default SearchUser
