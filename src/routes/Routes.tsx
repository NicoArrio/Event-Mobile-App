import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../views/Home'
import Login from "../views/Login";
import Register from "../views/Register/Register";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()

const Routes = () => {
    
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                
            </Stack.Navigator>
        <NavigationContainer/>
    );
};

export default Routes;