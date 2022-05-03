import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn';
import { Register } from '@screens/Register';

const Stack = createNativeStackNavigator();

export function AuthRoutes(){
    return (

        <Stack.Navigator>

            <Stack.Screen
            name="Login"
            component={SignIn}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
            />

        </Stack.Navigator>

    );
}