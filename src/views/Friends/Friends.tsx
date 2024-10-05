import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Alert} from "react-native";
import { Button, Icon, Input } from "@rneui/themed";

import Headers from '../../components/Header/Header'
import Users from "../../components/Header/FriendsComponents/Users";
import AddFriendLocal from "../../components/Header/FriendsComponents/AddFriendLocal";
import useFriendLocalStorage from "../../hooks/useFriendLocalStorage";


const Friends = () => {
    const [visible, setIsVisible] = useState<boolean>(false); //cons de estado reactiva, conforme le des click
    const {onGetUser} = useFriendLocalStorage()

    const handleModalClose = async (shouldUpdate?: boolean) => { //save and close exitoso del modal y reseteo
        if (shouldUpdate){
            Alert.alert('Comida guardada exitosamente')//si actualizamos, mostramos una alerta
            try {
                const userResponse = await onGetUser() //trae todo lo guardado en el asyncStorage
                console.log(userResponse)
            } catch (error) {
                console.error(error)
            }
        }
        setIsVisible(false);
    };

    return(
        <ScrollView> 
            <View style={styles.container}>
                {/* COMPONENTE HEADER  */}
                <Headers/>

                {/* COMPONENTE LISTA DE INVITADOS  */}
                <View style={styles.listContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.listLegend}>Lista de invitados</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.counterNum}>15</Text>
                    </View>
                </View>

                {/* COMPONENTE BUSCADOR */}
                <View style={styles.searchContainer}>
                    <View style={styles.InputContainer}>
                        <Input 
                            placeholder="buscar..."
                            leftIcon={{ type: 'add', name: 'search'}}
                        />
                    </View>
                </View>

                {/* COMPONENTE LOCAL PARA AGREGAR USUARIOS */}
                <View style={styles.addFriendContainer}>
                    <View style={styles.leftAddContainer}>
                        <Text style={styles.listLegend}>Agregar Invitados</Text>
                    </View>
                    <View>
                        <Button
                            icon={<Icon name="add" color="#000" />}
                            radius="lg"
                            color="#ffff"
                            onPress={() => setIsVisible(true)}
                        />
                    </View>
                </View>

                <AddFriendLocal visible={visible} onClose={handleModalClose}/>
                
                {/* COMPONENTE USUARIOS */}
                <Users/>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    },
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

    // add friends
    addFriendContainer:{
        alignItems: "center",
        flexDirection: "row",
        marginVertical:15,
    },
    leftAddContainer:{
        flex:1,
    },
    
})

export default Friends