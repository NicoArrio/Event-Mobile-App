import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Alert} from "react-native";
import { Button, Icon, Input } from "@rneui/themed";

import Headers from '../../components/Header/Header';
import UsersContent from "../../components/Header/FriendsComponents/UsersContent";
import useUserCount from '../../hooks/useUserCount'; 
import axios from "axios";

import { Guest } from "../../types";

const Friends = () => {
    //informacion guardada en estados
    const [user, setUser] = useState<Guest[]>([]) //arreglo de usuarios, primer ciclo: vacio
    const [search, setSearch] = useState<string>('')
    const userCount = useUserCount(); // Usar el hook para obtener el conteo actual

    //cargar usuarios desde el backend
    const loadUser = async () => {
        try {
            const response = await axios.get('http://192.168.0.40:3000/api/users');
            setUser(response.data); // Guardamos la respuesta en el estado
        } catch (error) {
            console.error("Failed to load users:", error);
            Alert.alert("Error", "Failed to load users.");
        }
    };
    
    useEffect(() => {
        loadUser();
    }, []); 

    //fetch de los datos de los usuarios 
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://192.168.0.40:3000/api/users');
                setUser(response.data); // Asumiendo que `setUser` actualiza el estado con los datos de los usuarios
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
    
        fetchUsers();
    }, []);
    
    

    //buscar por nombre
    const handSearchPress = async () => {
        if (!search.trim()) {
            loadUser(); // Cargar todos los usuarios si el campo de búsqueda está vacío
            return;
        }
        try {
            const url = `http://192.168.0.101:3000/api/users/search?name=${encodeURIComponent(search)}`;
            console.log("Requesting:", url);  // Esto te ayudará a ver qué URL se está llamando
            const response = await axios.get(url);
            setUser(response.data); // Actualiza el estado con los resultados de la búsqueda
        } catch (error) {
            console.error("Error searching users:", error);
            Alert.alert("Error", "Failed to search users.");
        }
    };


    return(
        <ScrollView style={styles.scrollContainer}> 
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
                            //leftIcon={{ type: 'add', name: 'search'}}
                            value={search}
                            onChangeText={(text: string) => setSearch(text)}
                        />
                    </View>
                    <Button
                        icon={<Icon name="search" color="#fff" />}
                        radius="lg"
                        color="#141414"
                        onPress={handSearchPress}
                    />
                </View>

                {/* COMPONENTE USUARIOS */}
                <View style={styles.contentUsers}>
                    {user?.map(guest => (<UsersContent key={`my-user-content-${guest.name}`}{...guest}/>))}
                </View>

            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#141414',
    },
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#141414' //333333
    },
    // lista invitados
    listContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:15,
    },
    leftContainer:{
        flex:1,
        
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
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap', // Añade esta propiedad para permitir el acomodo tipo matriz
        justifyContent: 'space-between', // Esto ayuda a mantener el espacio uniforme entre los elementos
    },
    
})

export default Friends