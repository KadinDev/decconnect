import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UserRoutes } from "./user.stack.routes";
import {View} from "react-native";

export function Routes(){
    const [user, setUser] = useState(true);

    return (
        <NavigationContainer>
            { user ? <UserRoutes/> : <View style={{width: 20, height: 20,
            backgroundColor: 'blue'}}></View> }
        </NavigationContainer>
    )
}