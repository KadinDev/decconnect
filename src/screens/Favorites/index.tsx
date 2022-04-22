import React from 'react';
import {Text} from 'react-native';
import {
    Container
} from './styles';

export function Favorites(){
    return (
        <Container>
            <Text style={{color: '#FFF', fontSize: 30}}> FAVORITOS </Text>
        </Container>
    );
}