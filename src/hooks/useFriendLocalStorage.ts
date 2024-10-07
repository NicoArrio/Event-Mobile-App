import AsyncStorage from "@react-native-async-storage/async-storage"

import { Guest } from "../types"
import { MY_USER_LOCAL_KEY } from "../constants";


const useFriendLocalStorage = () => {
    
    //crear/guardar informacion de usuario 
    const handleSaveUser = async({name, age, description,signo, imageUri}:Guest) => {
        try {
            // Recuperar los datos existentes desde AsyncStorage
            const currentSavedUser = await AsyncStorage.getItem(MY_USER_LOCAL_KEY);
            let currentSavedUserParsed;

            // Intentar parsear los datos recuperados, y manejar cualquier error en el parseo
            try {
                currentSavedUserParsed = currentSavedUser ? JSON.parse(currentSavedUser) : [];
            } catch (error) {
                console.error("Error parsing data from AsyncStorage:", error);
                // Inicializar como un arreglo vacío si el parseo falla
                currentSavedUserParsed = [];
            }

            // Asegurar que el valor parseado es un arreglo
            if (!Array.isArray(currentSavedUserParsed)) {
                console.error("Expected an array from AsyncStorage, but received:", currentSavedUserParsed);
                currentSavedUserParsed = []; // Reiniciar a un arreglo vacío si no es un arreglo
            }

            // Agregar el nuevo usuario al arreglo parseado
            currentSavedUserParsed.push({ name, age, description, signo, imageUri });

            // Guardar el arreglo actualizado de vuelta en AsyncStorage
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
    const handleGetUser = async() => {
        try {
            const user = await AsyncStorage.getItem(MY_USER_LOCAL_KEY);
            if (user!==null) {
                //regresame la info parceada
                const parsedUser = JSON.parse(user);
                return Promise.resolve(parsedUser);
            }
        } catch (error) {
            return Promise.reject(error)
        }
    }

    //metodo para borrar usuarios
    const handleDeleteUser = async (nameToDelete: string): Promise<void> => {
        try {
            const currentSavedUsers = await AsyncStorage.getItem(MY_USER_LOCAL_KEY);
            let usersArray: Guest[] = currentSavedUsers ? JSON.parse(currentSavedUsers) : [];
    
            // Filtrar el array para eliminar el usuario
            usersArray = usersArray.filter(user => user.name !== nameToDelete);
    
            // Guardar el nuevo array en AsyncStorage
            await AsyncStorage.setItem(MY_USER_LOCAL_KEY, JSON.stringify(usersArray));
    
            return Promise.resolve();
        } catch (error) {
            console.error('Error al eliminar el usuario', error);
            return Promise.reject(error);
        }
    };

    return{
        onSaveUser: handleSaveUser,
        onGetUser: handleGetUser,
        onDeleteUser: handleDeleteUser, // Asegúrate de exponer la función
    }
}

export default useFriendLocalStorage
