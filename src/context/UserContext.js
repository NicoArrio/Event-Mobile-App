import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const UserContext = createContext();

// Proveedor para envolver la aplicación
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    // Función para limpiar los datos del usuario
    const clearUserData = () => setUserData(null);

    return (
        <UserContext.Provider value={{ userData, setUserData, clearUserData }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para usar el contexto en componentes
export const useUser = () => useContext(UserContext);
