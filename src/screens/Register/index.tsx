import React from 'react';
import {Text} from 'react-native';

import {
    Container,
    Background
} from './styles';

import imageLogin from '@assets/login.jpg';

import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';

export function Register(){

    const navigation = useNavigation();
    const { COLORS, FONTS } = useTheme();
    
    return (
        <Container>

            <Background source={imageLogin}
            resizeMode='cover'
            style={{flex: 1,}}
            >
                <Text>Agora vamos lá</Text>

                <ButtonIcon
                icon='arrow-back'
                color={COLORS.RED}
                onPress={() => navigation.goBack()}
                />
            </Background>

        </Container>
    );
}