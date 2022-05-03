import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UserRoutes } from "./user.stack.routes";
import { AuthRoutes } from "./auth.routes";

import {View} from "react-native";

export function Routes(){
    const [user, setUser] = useState(false);

    return (
        <NavigationContainer>
            { user ? <UserRoutes/> : <AuthRoutes/> }
        </NavigationContainer>
    )
}