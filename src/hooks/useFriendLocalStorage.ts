import AsyncStorage from "@react-native-async-storage/async-storage"

import { Guest } from "../types"

const useFriendLocalStorage = () => {

    const MY_USER_LOCAL_KEY = "@MyUser:Key"//mi key

    //crear/guardar informacion de usuario 
    const handleSaveUser = async({name, age, description}:Guest) => {
        try {
            const currentSavedUser = await AsyncStorage.getItem(MY_USER_LOCAL_KEY) //trae la key de AsyncStorage
            let currentSavedUserParsed;
    
            if (currentSavedUser !== null) {
                // Si hay datos, los parseamos a forma de arreglo de JSON
                currentSavedUserParsed = JSON.parse(currentSavedUser);
            } else {
                // Si no hay datos, inicializamos un arreglo vacío, primer ciclo
                currentSavedUserParsed = [];
            }
    
            // Añadimos el nuevo usuario al arreglo
            currentSavedUserParsed.push({ name, age, description });
    
            // Guardamos el arreglo actualizado en AsyncStorage
            await AsyncStorage.setItem(
                MY_USER_LOCAL_KEY, 
                JSON.stringify(currentSavedUserParsed)
            );
            return Promise.resolve('User guardado Exitosamente');
        } catch (error) {
            return Promise.reject(error);
        }
    }

    //metodo para obtener info de usuarios
    const handleGetUsers = async() => {
        try {
            const users = await AsyncStorage.getItem(MY_USER_LOCAL_KEY);

            if (users!==null) {
                //regresame la info parceada
                const parsedUsers = JSON.parse(users);
                return Promise.resolve(parsedUsers);
            }
        } catch (error) {
            return Promise.reject(error)
        }
    }

    return{
        onSaveUser: handleSaveUser,
        onGetUser: handleGetUsers,
    }
}




export default useFriendLocalStorage
