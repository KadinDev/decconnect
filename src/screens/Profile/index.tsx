import React from 'react';
import {Text} from 'react-native';

import {
    Container
} from './styles';

export function Profile(){
    return (
        <Container>
            <Text style={{color: 'white', fontSize: 30}}>PROFILE</Text>
        </Container>
    );
}