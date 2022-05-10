import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UserRoutes } from "./user.stack.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from '@hooks/auth';

export function Routes(){
    const { user } = useAuth();

    return (
        <NavigationContainer>
            { user ? <UserRoutes/> : <AuthRoutes/> }
        </NavigationContainer>
    );
};