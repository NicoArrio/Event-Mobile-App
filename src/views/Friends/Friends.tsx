import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Alert} from "react-native";
import { Button, Icon, Input } from "@rneui/themed";

import Headers from '../../components/Header/Header'
import UsersContent from "../../components/Header/FriendsComponents/UsersContent";
import AddFriendLocal from "../../components/Header/FriendsComponents/AddFriendLocal";
import useFriendLocalStorage from "../../hooks/useFriendLocalStorage";
import useUserCount from '../../hooks/useUserCount'; // Asegúrate de tener la ruta correcta

import { Guest } from "../../types";

const { onDeleteUser } = useFriendLocalStorage();


const Friends = () => {
    //informacion guardada en estados
    const [visible, setIsVisible] = useState<boolean>(false); //cons de estado reactiva, conforme le des click
    const [user, setUser] = useState<Guest[]>([]) //arreglo de usuarios, primer ciclo: vacio
    const {onGetUser} = useFriendLocalStorage()
    const userCount = useUserCount(); // Usar el hook para obtener el conteo actual

    //mostrar los usuarios cuando este componente de monte
    const loadUser = async () => {
        try {
            const userResponse = await onGetUser(); //trae todo lo guardado en el asyncStorage
            setUser(userResponse); //guardamos respuesta en setUser
        } catch (error) {
            console.error(error)
        }
    }
    //mostrar componente cuando cargue
    useEffect(()=>{
        loadUser().catch(null)
    },[]) 

    
    //save and close exitoso del modal y reseteo
    const handleModalClose = async (shouldUpdate?: boolean) => {
        if (shouldUpdate){
            Alert.alert('User guardado Exitosamente')//si actualizamos, mostramos una alerta
            loadUser()
        }
        setIsVisible(false);
    };


    // //borrar usuario
    const deleteUserByName = async (name: string): Promise<void>  => {
        try {
            await onDeleteUser(name);
            console.log('Usuario eliminado');
            // Luego de eliminar, actualiza la lista de usuarios
            loadUser(); // Asumiendo que esta función recarga los usuarios desde AsyncStorage
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };
    //deleteUserByName('margarita'); //DESCOMENTAR Y COMENTAR RAPIDAMENTE
    return(
        <ScrollView> 
            <View style={styles.container}>
                {/* COMPONENTE HEADER  */}
                <Headers/>

                {/* COMPONENTE LISTA DE INVITADOS  */}
                <View style={styles.listContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.listLegend}>Total de invitados</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.counterNum}>{userCount}</Text>
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
                <View style={styles.contentUsers}>
                    {user?.map(guest => (<UsersContent key={`my-user-content-${guest.name}`}{...guest}/>))}
                </View>
                {/* <UsersContent name={""} age={""} description={""}/> */}
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
    //contenido de user
    contentUsers:{
        flexDirection: 'row',
        flexWrap: 'wrap', // Añade esta propiedad para permitir el acomodo tipo matriz
        justifyContent: 'space-between', // Esto ayuda a mantener el espacio uniforme entre los elementos
    },
    
})

export default Friends