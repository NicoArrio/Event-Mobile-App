import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../types";

import Login from "../views/Login";
import Register from "../views/Register/Register";

const Stack = createNativeStackNavigator<RootStackParamList>()

//mejorar y cambiar de app a routes
const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"> {/* pantalla inicial */}
            <Stack.Screen name='Login' component={Login}/>  {/* ruta de la cual nos vamos a estar moviendo */} 
            <Stack.Screen name='Register' component={Register}/> {/* ruta de la cual nos vamos a estar moviendo */}
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;