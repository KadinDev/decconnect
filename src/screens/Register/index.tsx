import React from 'react';
import {Text} from 'react-native';

import {
    Container,
    Background
} from './styles';

import imageLogin from '@assets/login.jpg';

export function Register(){
    return (
        <Container>

            <Background source={imageLogin}
            resizeMode='cover'
            style={{flex: 1,}}
            >
                <Text>Agora vamos lá</Text>
            </Background>

        </Container>
    );
}